import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">
          This page could not be found.
        </p>
        <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
          Go back
        </Link>
      </div>
    </div>
  );
}
