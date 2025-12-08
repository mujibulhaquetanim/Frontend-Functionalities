'use client';

import { client } from "@/lib/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>();
  const {mutate: createUser} = useMutation({
    mutationFn: async () => {
      await client.user.create.post({
        name: "Tanim",
      });
    },
  });

  const {}= useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await client.task.get();
      return setTask(JSON.stringify(res.data?.task.name));
    },
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 ">
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-7">
            <div className="space-y-2">Welcome to ElysiaJs with Next.js 16</div>
            <div>{task}</div>
            <button className="border-2 p-2 rounded-2xl cursor-pointer" onClick={() => createUser()}>Create User</button>
          </div>
        </div>
      </div>
    </main>
  );
}
