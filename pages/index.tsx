export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Mental Wealth</h1>
      <p className="text-center text-lg text-gray-600 max-w-xl">
        Discover your psychological flexibility through ACT. Start your personalized journey of awareness, presence, and meaningful action.
      </p>
      <a href="/quiz" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
        Start the Quiz
      </a>
    </div>
  );
}
