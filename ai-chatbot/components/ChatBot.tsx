'use client';
import { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState< { text: string, isUser: boolean }[] >([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    // Add user message
    setConversation(prev => [...prev, { text: message, isUser: true }]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: message })
      });
      
      const { answer } = await response.json();
      setConversation(prev => [...prev, { text: answer, isUser: false }]);
    } catch (error) {
      setConversation(prev => [...prev, { 
        text: "Sorry, I'm having trouble responding. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto border rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="font-semibold">Service Inquiry Bot</h2>
      </div>
      
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {conversation.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg ${
              msg.isUser 
                ? 'bg-blue-100 text-blue-900' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg animate-pulse">...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about my services..."
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={isLoading || !message.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}