import { useState } from "react";
import { calculateHexaflex } from "../utils/hexaflexLogic";
import { useRouter } from "next/router";

export default function QuizPage() {
  const [responses, setResponses] = useState<number[]>(Array(6).fill(50));
  const router = useRouter();

  const handleChange = (index: number, value: number) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    const result = calculateHexaflex(responses);
    localStorage.setItem("hexaflexResults", JSON.stringify(result));
    router.push("/results");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ACT Self-Assessment</h1>
      {["Acceptance", "Defusion", "Presence", "Self-as-Context", "Values", "Committed Action"].map((label, i) => (
        <div key={i} className="mb-4">
          <label className="block text-sm font-semibold mb-1">{label}</label>
          <input
            type="range"
            min={0}
            max={100}
            value={responses[i]}
            onChange={(e) => handleChange(i, +e.target.value)}
            className="w-full"
          />
          <span>{responses[i]}</span>
        </div>
      ))}
      <button onClick={handleSubmit} className="mt-6 bg-green-600 text-white px-4 py-2 rounded">
        View My Results
      </button>
    </div>
  );
}
