"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-3xl font-bold">Welcome to the Multi-Step Form</h1>
      <Button onClick={() => router.push("/onboarding/name")} variant={"default"} className="shadow-[-5px_5px_0px_0px_rgba(0,0,0,0.25)] hover:scale-105">
        Start the Form
      </Button>
    </div>
  );
}
