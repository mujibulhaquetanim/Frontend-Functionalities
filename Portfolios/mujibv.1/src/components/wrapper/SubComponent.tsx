import { PostStatus } from "../../assets/BlogData";
import { FaTag } from "react-icons/fa";

function StatusBadge({ status }: { status: PostStatus }) {
  if (status === "published") {
    return (
      <span className="px-2 py-0.5 bg-green-500/20 rounded-full text-[10px] text-green-300 font-medium border border-green-500/30">
        Published
      </span>
    );
  }
  return (
    <span className="px-2 py-0.5 bg-amber-500/20 rounded-full text-[10px] text-amber-300 font-medium border border-amber-500/30">
      Coming soon
    </span>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/20 border border-white/10 text-[10px] xl:text-[11px] text-slate-400">
      <FaTag size={7} />
      {label}
    </span>
  );
}

export { StatusBadge, TagChip };