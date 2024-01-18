import { useState } from "react";
import Button from "../components/Button";
import TopicsList from "./TopicsList";

const TypescriptConcepts = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center rounded-md">
      <div className="">
        <h1 className="text-white text-5xl font-bold underline p-3">
          Typescript Topics:
        </h1>
        <div className="items-center justify-center flex space-x-3 m-3">
          <Button
            onClick={() => setCount((prev) => prev + 1)}
            text={`You've Clicked ${count} Times`}
          />
          <Button onClick={() => setCount(0)} text="Reset"></Button>
        </div>
        <TopicsList/>
      </div>
    </div>
  );
};

export default TypescriptConcepts;
