"use client";
import Chatbot from "@/components/ChatBot";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getdata", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Store the fetched data in state
      } catch (error: any) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4">
        Welcome to Our Service
      </h1>

      {/* Render the fetched data in the JSX */}
      {data && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold">Fetched Data:</h2>
          <pre className="mt-2">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* Add Chatbot component if needed */}
      {/* <Chatbot /> */}
    </div>
  );
}