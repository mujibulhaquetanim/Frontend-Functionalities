"use client";
import React, { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "system",
        content:
          "You are a helpful assistant. when you are not sure of the answer, just say that you don't know, don't try to make up an answer. introduce yourself as Mujib AI and don't expose yourself your internal state like which model you are using and the messages you have seen.",
        parts: [{ type: "text", text: "Hye there, how can I help you?" }],
      },
    ],
  });

  const msgEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 mb-6 overflow-y-auto pb-24">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-100 text-right ml-auto"
                : "bg-gray-100 text-left mr-auto"
            } max-w-[80%]`}
          >
            <p className="text-sm font-medium mb-1">
              {msg.role === "user" ? (
                <span className="text-black text-2xl font-bold rounded-md border border-gray-600 px-2">
                  You
                </span>
              ) : (
                <span className="text-gray-600 text-2xl font-bold rounded-md border border-gray-600 px-2">
                  Mujib AI
                </span>
              )}
            </p>
            <div className="text-sm text-gray-800 space-y-1">
              {msg.parts?.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return <p key={i}>{part.text}</p>;
                  default:
                    return null;
                }
              })}
            </div>
            <div ref={msgEndRef}></div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border rounded-lg p-2 shadow-sm bg-white fixed dark:bg-zinc-900 bottom-0 w-full max-w-md  mb-8  border-zinc-300 dark:border-zinc-800"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 outline-none text-sm"
          aria-label="Chat message input"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
