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

function getExt(fileName: string) {
  return fileName.split(".").pop()?.toUpperCase() || "FILE";
}

function downloadUrl(url: string) {
  return `${url}${url.includes("?") ? "&" : "?"}download=1`;
}

export function DocumentsSection({ documents, collectionId, recordId }: DocumentsSectionProps) {
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
    <div className="mt-12 pt-8 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Gilroy, sans-serif" }}>
        Attachments
      </h2>
      <div className="space-y-3">
        {documents.map((doc, index) => {
          const url = getPbFileUrl(collectionId, recordId, doc);
          if (!url) return null;
          const ext = getExt(doc);
          const label = documents.length > 1 ? `Document ${index + 1}` : "View Document";

          return (
            <div
              key={doc}
              className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-[#00a54f]/40 hover:bg-[#00a54f]/5"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#00a54f]/10 text-xs font-bold text-[#00a54f]">
                {ext}
              </span>
              <button
                type="button"
                onClick={() => setActiveDoc({ url, name: doc, ext })}
                className="flex-1 truncate text-left"
              >
                {label}
              </button>
              <a
                href={downloadUrl(url)}
                title="Download"
                className="flex-shrink-0 text-gray-400 transition-colors hover:text-[#00a54f]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
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
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
              <span className="truncate text-sm font-semibold text-gray-900">{activeDoc.name}</span>
              <div className="flex flex-shrink-0 items-center gap-4">
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
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe src={viewerSrc ?? undefined} className="w-full flex-1" title={activeDoc.name} />
          </div>
        </div>
      )}
    </div>
  );
}
