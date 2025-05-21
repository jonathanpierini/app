import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const RadarChart = dynamic(() => import("../components/RadarChart"), { ssr: false });

export default function ResultsPage() {
  const [results, setResults] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("hexaflexResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("hexaflexResults");
    router.push("/quiz");
  };

  if (!results) return <div className="p-6">No results available.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Your Hexaflex Profile</h1>
      <RadarChart data={results} />
      <ul className="list-disc list-inside mt-6">
        {Object.entries(results as Record<string, number>).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button
        onClick={handleReset}
        className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Come ti senti oggi?
      </button>
    </div>
  );
}