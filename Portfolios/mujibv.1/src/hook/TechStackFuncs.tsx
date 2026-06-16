import { motion } from "framer-motion";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] md:text-sm text-slate-100 backdrop-blur-sm">
      {children}
    </span>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md">
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs md:text-sm leading-6 text-slate-300">
        {label}
      </div>
    </div>
  );
}

function SkillCard({
  icon: Icon,
  title,
  short,
  items,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  short: string;
  items: string[];
  accent: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/8"
    >
      <div className="flex items-start gap-3">
        <div
          className={`rounded-2xl bg-gradient-to-br ${accent} p-3 text-slate-950 shadow-lg`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base md:text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{short}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs md:text-sm text-slate-100"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export { Pill, StatTile, SkillCard };
