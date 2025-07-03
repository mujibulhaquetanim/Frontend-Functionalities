"use client";
import React from "react";
import { useChat } from "@ai-sdk/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      {messages.map((msg) => (
        <div key={msg.id}>
          {msg.role === "user" ? "You: " + msg.content : "AI: " + msg.content}
          {msg.parts?.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${msg.id}-${i}`}>{part.text}</div>;
              default:
                return null;
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
