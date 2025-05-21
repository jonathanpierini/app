import { useState, useEffect } from "react";
import { getActivePoles, HexaflexProfile } from "../utils/hexaflexLogic";
import { actScripts } from "../content/actScripts";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState<HexaflexProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hexaflexResults");
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");

    // Se c'è un profilo Hexaflex caricato, seleziona un polo attivato
    if (profile) {
      const activePoles = getActivePoles(profile);
      if (activePoles.length > 0) {
        const selectedPole = activePoles[0]; // Ordine fisso: primo polo fragile
        const script = actScripts[selectedPole]?.[0] || "Parliamone insieme.";
        setMessages(prev => [...prev, { role: "assistant", text: script }]);
        return;
      }
    }

    // Altrimenti fallback alla tua API AI
    const res = await fetch("https://mentalchatnew.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages(prev => [...prev, { role: "assistant", text: data.reply }]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Mental Wealth Chat</h1>
      <div className="h-80 overflow-y-auto bg-gray-100 p-4 mb-4 rounded">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <span className="inline-block bg-white px-3 py-2 rounded shadow text-sm">
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrivi qui..."
          className="flex-grow px-4 py-2 border rounded"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Invia
        </button>
      </div>
    </div>
  );
}
