import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hexaflexResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  if (!results) return <div className="p-6">No results available.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Your Hexaflex Profile</h1>
      <ul className="list-disc list-inside">
        {Object.entries(results).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
