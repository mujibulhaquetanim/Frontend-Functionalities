"use client";
import { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query) return;

    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch('/api/embedding', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json();

      if (res.ok) {
        setResponse(data.answer);
      } else {
        setError(data.error || "An unknown error occurred.");
      }
    } catch (err) {
      setError("Failed to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-black">
      <h2 className="text-xl font-bold mb-4">Ask me anything!</h2>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your question here..."
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-black py-2 rounded"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
      {response && (
        <div className="mt-4 p-2 border rounded">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div className="mt-4 p-2 border rounded  text-red-700">
          <strong>Error:</strong>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
