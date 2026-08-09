"use client";

import { useEffect, useState } from "react";
import { getPbFileUrl } from "@/lib/pocketbase";

interface DocumentsSectionProps {
  documents: string[];
  collectionId: string;
  recordId: string;
}

interface ViewerDoc {
  url: string;
  name: string;
  ext: string;
}

const OFFICE_EXTS = ["DOC", "DOCX", "PPT", "PPTX", "XLS", "XLSX"];

const EXT_META: Record<string, { label: string; badge: string }> = {
  PDF: { label: "PDF Document", badge: "bg-red-50 text-red-600" },
  DOC: { label: "Word Document", badge: "bg-blue-50 text-blue-600" },
  DOCX: { label: "Word Document", badge: "bg-blue-50 text-blue-600" },
  PPT: { label: "Presentation", badge: "bg-orange-50 text-orange-600" },
  PPTX: { label: "Presentation", badge: "bg-orange-50 text-orange-600" },
  XLS: { label: "Spreadsheet", badge: "bg-emerald-50 text-emerald-600" },
  XLSX: { label: "Spreadsheet", badge: "bg-emerald-50 text-emerald-600" },
};

function getExt(fileName: string) {
  return fileName.split(".").pop()?.toUpperCase() || "FILE";
}

// PocketBase suffixes uploads with a random id (e.g. "annual-report_a1B2c3D4e5.pdf")
// — strip it so we can show a readable name instead of the raw filename.
function getDisplayName(fileName: string) {
  const dot = fileName.lastIndexOf(".");
  const base = dot > -1 ? fileName.slice(0, dot) : fileName;
  const cleaned = base
    .replace(/_[a-zA-Z0-9]{10}$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
  return cleaned ? cleaned.replace(/\b\w/g, (c) => c.toUpperCase()) : fileName;
}

function downloadUrl(url: string) {
  return `${url}${url.includes("?") ? "&" : "?"}download=1`;
}

export function DocumentsSection({
  documents,
  collectionId,
  recordId,
}: DocumentsSectionProps) {
  const [activeDoc, setActiveDoc] = useState<ViewerDoc | null>(null);

  // Close on Escape, lock background scroll while the viewer is open
  useEffect(() => {
    if (!activeDoc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDoc(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeDoc]);

  if (!documents || documents.length === 0) return null;

  // PDFs render natively in an iframe; office formats are rendered via Google's viewer
  const viewerSrc = activeDoc
    ? OFFICE_EXTS.includes(activeDoc.ext)
      ? `https://docs.google.com/viewer?url=${encodeURIComponent(activeDoc.url)}&embedded=true`
      : activeDoc.url
    : null;

  return (
    <div className="mt-14 pt-10 border-t border-gray-200">
      <div className="mb-5 flex items-center gap-2">
        <svg
          className="h-4 w-4 text-[#00a54f]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span
          className="text-xs font-semibold uppercase tracking-widest text-gray-500"
          style={{ fontFamily: "Gilroy, sans-serif" }}
        >
          Attachments
        </span>
      </div>

      <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white px-5 shadow-sm">
        {documents.map((doc) => {
          const url = getPbFileUrl(collectionId, recordId, doc);
          if (!url) return null;
          const ext = getExt(doc);
          const meta = EXT_META[ext] ?? {
            label: `${ext} File`,
            badge: "bg-gray-100 text-gray-600",
          };
          const displayName = getDisplayName(doc);

          return (
            <div
              key={doc}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-xs font-bold tracking-wide ${meta.badge}`}
              >
                {ext}
              </span>

              <div className="min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => setActiveDoc({ url, name: displayName, ext })}
                  className="block w-full truncate text-left text-sm font-semibold text-gray-900 transition-colors hover:text-[#00a54f]"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  {displayName}
                </button>
                <p className="mt-0.5 text-xs text-gray-500">{meta.label}</p>
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveDoc({ url, name: displayName, ext })}
                  className="rounded-md border border-gray-200 px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:border-[#00a54f] hover:text-[#00a54f]"
                >
                  View
                </button>
                <a
                  href={downloadUrl(url)}
                  title="Download"
                  className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {activeDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveDoc(null)}
        >
          <div
            className="flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-3">
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-gray-900">
                {activeDoc.name}
              </span>
              <div className="flex shrink-0 items-center gap-4">
                <a
                  href={downloadUrl(activeDoc.url)}
                  className="text-sm font-medium text-[#00a54f] hover:underline"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={viewerSrc ?? undefined}
              className="w-full flex-1"
              title={activeDoc.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
