import ReactMarkdown from "react-markdown";

export default function GitTimeline({
  markdownText,
}: {
  markdownText: string;
}) {
  return <ReactMarkdown className="grid place-items-center place-content-center drop-shadow-2xl">{markdownText}</ReactMarkdown>;
}