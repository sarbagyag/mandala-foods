"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { IdentityRecord } from "@/lib/pocketbase";

interface DigitalIDCardProps {
  identity: IdentityRecord;
  profileImageUrl: string | null;
  themeColor: string;
}

export default function DigitalIDCard({
  identity,
  profileImageUrl,
  themeColor,
}: DigitalIDCardProps) {
  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0.8cm;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100vh !important;
            overflow: hidden !important;
          }

          body > *:not(.id-card-wrapper) {
            display: none !important;
          }

          .no-print {
            display: none !important;
            visibility: hidden !important;
          }

          .id-card-wrapper {
            position: static !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: 100vh !important;
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
          }

          .id-card {
            position: relative !important;
            width: 100% !important;
            max-width: 25cm !important;
            min-height: auto !important;
            height: auto !important;
            margin: 0 auto !important;
            box-shadow: none !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            border-radius: 12px !important;
            overflow: hidden !important;
          }

          /* Ensure all internal elements are visible */
          .id-card * {
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Background Wrapper */}
      <div className="id-card-wrapper relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
        {/* ID Card - Responsive for mobile portrait */}
        <div
          className="id-card relative mb-6 w-full overflow-hidden rounded-2xl bg-white shadow-2xl md:mb-8"
          style={{
            maxWidth: "850px",
            minHeight: "540px",
          }}
        >
          {/* Card Header with Logo */}
          <div className="relative bg-white px-4 py-6 md:px-8 md:py-8">
            <div className="flex items-center justify-center">
              <div className="relative h-20 w-full max-w-sm md:h-24 md:max-w-md">
                <Image
                  src="/images/logo-mandala-foods.png"
                  alt="Mandala Foods - Reimagining Nutrition"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Accent Color Bar */}
          <div
            className="h-2 w-full md:h-3"
            style={{
              background: `linear-gradient(90deg, ${themeColor} 0%, #00a54f 50%, #e5790e 100%)`,
            }}
          ></div>

          {/* Card Body - Responsive Grid */}
          <div className="flex flex-col gap-6 p-4 md:grid md:grid-cols-3 md:gap-8 md:p-8">
            {/* Left Column - Photo & QR Code */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              {/* Profile Photo */}
              <div
                className="relative overflow-hidden rounded-xl shadow-lg"
                style={{
                  width: "180px",
                  height: "220px",
                  border: `4px solid ${themeColor}`,
                }}
              >
                {profileImageUrl ? (
                  <Image
                    src={profileImageUrl}
                    alt={identity.full_name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${themeColor}20 0%, ${themeColor}10 100%)`,
                    }}
                  >
                    <span
                      className="text-6xl font-black"
                      style={{
                        fontFamily: "Gilroy, sans-serif",
                        color: themeColor,
                      }}
                    >
                      {identity.full_name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* QR Code - Always visible below photo */}
              <div className="flex flex-col items-center">
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Scan to Connect
                </p>
                <div
                  className="rounded-xl bg-white p-4 shadow-lg"
                  style={{
                    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 3px ${themeColor}20`,
                  }}
                >
                  <QRCodeSVG
                    value={identity.qr_link}
                    size={120}
                    level="H"
                    fgColor="#000000"
                    bgColor="#ffffff"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="col-span-2 flex flex-col justify-start space-y-4">
              {/* Name */}
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Full Name
                </p>
                <h1
                  className="text-2xl font-black text-gray-900 md:text-3xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {identity.full_name}
                </h1>
              </div>

              {/* Position */}
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  Position
                </p>
                <p
                  className="text-lg font-bold md:text-xl"
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    color: themeColor,
                  }}
                >
                  {identity.position}
                </p>
              </div>

              {/* Department & Employee ID Row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {identity.department && (
                  <div>
                    <p
                      className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Department
                    </p>
                    <p
                      className="text-sm font-semibold text-gray-800 md:text-base"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {identity.department}
                    </p>
                  </div>
                )}
                {identity.employee_id && (
                  <div>
                    <p
                      className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      Employee ID
                    </p>
                    <p
                      className="text-sm font-bold text-gray-800 md:text-base"
                      style={{ fontFamily: "Gilroy, sans-serif" }}
                    >
                      {identity.employee_id}
                    </p>
                  </div>
                )}
              </div>

              {/* Bio */}
              {identity.bio && (
                <div>
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    About
                  </p>
                  <p
                    className="text-sm leading-relaxed text-gray-700"
                    style={{ fontFamily: "Gilroy, sans-serif" }}
                  >
                    {identity.bio}
                  </p>
                </div>
              )}

              {/* Website */}
              <div className="pt-2">
                <p
                  className="text-xs font-medium text-gray-600"
                  style={{ fontFamily: "Gilroy, sans-serif" }}
                >
                  www.mandalafoods.co
                </p>
              </div>
            </div>
          </div>

          {/* Card Footer Stripe */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2 md:h-3"
            style={{
              background: `linear-gradient(90deg, ${themeColor} 0%, #00a54f 50%, #e5790e 100%)`,
            }}
          ></div>
        </div>

        {/* Print Button - Below card, subtle */}
        {/* <button
          onClick={() => window.print()}
          className="no-print group flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-[#00a54f] hover:bg-[#00a54f] hover:text-white hover:shadow-md"
          style={{ fontFamily: "Gilroy, sans-serif" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print ID Card
        </button> */}
      </div>
    </>
  );
}
