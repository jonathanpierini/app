import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Mental Wealth</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Discover your psychological flexibility with ACT. Start your journey of awareness, presence, and meaningful action.
      </p>
      <Link href="/quiz">
        <span className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 cursor-pointer">
          Begin Your Quiz
        </span>
      </Link>
    </div>
  );
}