import Link from "next/link";

export default function IdentityNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1
            className="mb-4 text-8xl font-black text-gray-300"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            404
          </h1>
          <h2
            className="mb-4 text-4xl font-black text-gray-800"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            Digital ID Not Found
          </h2>
          <p
            className="mx-auto max-w-md text-lg text-gray-600"
            style={{ fontFamily: "Gilroy, sans-serif" }}
          >
            The digital identity you&apos;re looking for doesn&apos;t exist or
            has been deactivated.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block rounded-full bg-gradient-to-r from-[#1d6f8f] to-[#00a54f] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ fontFamily: "Gilroy, sans-serif" }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
