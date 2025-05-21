export default function ChatBubble({ role, text }: { role: string; text: string }) {
  const isUser = role === "user";
  return (
    <div className={`my-2 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`px-4 py-2 rounded-xl text-sm max-w-xs ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
        {text}
      </div>
    </div>
  );
}
