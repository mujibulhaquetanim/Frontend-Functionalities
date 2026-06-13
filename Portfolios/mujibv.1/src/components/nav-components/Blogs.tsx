import { useState } from "react";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import { FaClock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { POSTS } from "../../assets/BlogData";
import { StatusBadge, TagChip } from "../wrapper/SubComponent";

const ALL_TAGS = [...new Set(POSTS.flatMap((p) => p.tags))];
const MAX_READ_TIME = Math.max(...POSTS.map((p) => p.readTime));

export default function Blogs() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const featuredPost = POSTS.find((p) => p.featured)!;
  const listPosts = POSTS.filter((p) => !p.featured);
  const filteredList = activeTag
    ? listPosts.filter((p) => p.tags.includes(activeTag))
    : listPosts;

  const toggleTag = (tag: string) =>
    setActiveTag((prev) => (prev === tag ? null : tag));

  return (
    <>
      <Helmet>
        <title>Blogs — Mujibul Haque Tanim</title>
        <meta
          name="description"
          content="Engineering deep-dives on TypeScript, NestJS, AI pipelines, and system design."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-700 w-full overflow-x-hidden">
        <section
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
            gap-2 lg:gap-2 xl:gap-3
            max-w-[90rem] mx-auto
            py-2 px-3 sm:px-4
            h-auto
            lg:h-[calc(100dvh-3.5rem)]
            auto-rows-auto
            lg:grid-rows-[auto_3fr_1.4fr]
            justify-items-stretch
          "
        >
          {/* ── Row 1: Title + tag filter ── */}
          <AnimatedWrapper
            delay={200}
            className="col-span-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-1 py-1"
          >
            {/* Left: title + count */}
            <div className="flex items-baseline gap-3 shrink-0">
              <h1 className="text-2xl lg:text-2xl xl:text-3xl text-white font-bold tracking-tight">
                Blogs
              </h1>
              <span className="text-slate-400 text-xs font-medium">
                {POSTS.length} articles in the pipeline
              </span>
            </div>

            {/* Right: filter pills */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                  activeTag === null
                    ? "bg-white text-slate-800 border-white"
                    : "bg-transparent text-slate-300 border-slate-500 hover:border-white hover:text-white"
                }`}
              >
                All
              </button>
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-white text-slate-800 border-white"
                      : "bg-transparent text-slate-300 border-slate-500 hover:border-white hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </AnimatedWrapper>

          {/* ── Row 2a: Featured post ── */}
          <AnimatedWrapper
            delay={500}
            className="col-span-full md:col-span-2 lg:col-span-7 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full group relative overflow-hidden"
          >
            <NavLink
              to={`/blogs/${featuredPost.slug}`}
              className="flex flex-col h-full p-4 lg:p-4 xl:p-6 gap-2 lg:gap-2 xl:gap-3"
            >
              {/* Top badges */}
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-white/15 rounded-full text-[10px] text-white font-semibold tracking-wider uppercase border border-white/20">
                  Featured
                </span>
                <StatusBadge status={featuredPost.status} />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold leading-snug group-hover:underline group-hover:underline-offset-4 transition-all">
                {featuredPost.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-300 text-sm lg:text-xs xl:text-sm leading-relaxed flex-1">
                {featuredPost.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {featuredPost.tags.map((tag) => (
                  <TagChip key={tag} label={tag} />
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <FaClock size={10} />
                  {featuredPost.readTime} min read
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-xs group-hover:text-white group-hover:gap-2 transition-all duration-200">
                  Read article
                  <HiArrowRight size={13} />
                </span>
              </div>
            </NavLink>
            // Featured post read-time bar
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 rounded-b-xl overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-slate-300/40 to-white/60 rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-50"
                style={{
                  width: `${(featuredPost.readTime / MAX_READ_TIME) * 100}%`,
                }}
              />
            </div>
          </AnimatedWrapper>

          {/* ── Row 2b: Post list stack ── */}
          <AnimatedWrapper
            delay={700}
            className="col-span-full md:col-span-2 lg:col-span-5 flex flex-col gap-2 w-full h-full"
          >
            {filteredList.length > 0 ? (
              filteredList.map((post, i) => (
                <AnimatedWrapper
                  key={post.id}
                  delay={800 + i * 120}
                  className="flex-1 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 group relative overflow-hidden"
                >
                  <NavLink
                    to={`/blogs/${post.slug}`}
                    className="flex flex-col h-full p-3 lg:p-2.5 xl:p-3.5 gap-1.5"
                  >
                    {/* Meta row */}
                    <div className="flex items-center justify-between gap-2">
                      <StatusBadge status={post.status} />
                      <span className="flex items-center gap-1 text-slate-400 text-[10px] shrink-0">
                        <FaClock size={8} />
                        {post.readTime} min
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm lg:text-[11px] xl:text-sm text-white font-semibold leading-snug group-hover:underline group-hover:underline-offset-2 flex-1">
                      {post.title}
                    </h3>

                    {/* Excerpt — only visible at xl+ to save vertical space on laptops */}
                    <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-1 hidden xl:block">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <TagChip key={tag} label={tag} />
                      ))}
                    </div>
                  </NavLink>

                  {/* Per-card read-time bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 rounded-b-xl overflow-hidden">
                    <div
                      className="h-full bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        width: `${(post.readTime / MAX_READ_TIME) * 100}%`,
                      }}
                    />
                  </div>
                </AnimatedWrapper>
              ))
            ) : (
              <div className="flex-1 bg-slate-600/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-slate-400 text-sm">
                No posts match this filter.
              </div>
            )}
          </AnimatedWrapper>

          {/* ── Row 3a: Post count stat ── */}
          <AnimatedWrapper
            delay={1100}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-3 gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-3xl xl:text-5xl text-white font-bold">
                  {POSTS.length}
                </span>
                <span className="text-xs text-slate-400 font-medium ml-1">
                  articles
                </span>
              </div>
              <span className="text-[11px] lg:text-[10px] xl:text-xs text-slate-300 font-medium text-center">
                In the pipeline ✍️
              </span>
            </div>
          </AnimatedWrapper>

          {/* ── Row 3b: Topics stat ── */}
          <AnimatedWrapper
            delay={1250}
            className="col-span-full md:col-span-1 lg:col-span-3 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-3 gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-3xl xl:text-5xl text-white font-bold">
                  {ALL_TAGS.length}
                </span>
                <span className="text-xs text-slate-400 font-medium ml-1">
                  topics
                </span>
              </div>
              <span className="text-[11px] lg:text-[10px] xl:text-xs text-slate-300 font-medium text-center">
                Across all posts 🏷️
              </span>
            </div>
          </AnimatedWrapper>

          {/* ── Row 3c: Newsletter / notify CTA ── */}
          <AnimatedWrapper
            delay={1400}
            className="col-span-full md:col-span-2 lg:col-span-6 bg-slate-600/80 backdrop-blur-xl rounded-xl hover:bg-slate-600 transition-colors duration-300 w-full h-full"
          >
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between h-full gap-3 p-4 lg:p-3 xl:p-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-bold text-sm xl:text-base">
                  Articles dropping soon
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                  Deep-dives on AI engineering, TypeScript architecture, and
                  backend patterns — straight from production.
                </p>
              </div>
              <NavLink
                to="mailto:info@mujibulhaquetanim.dev?subject=Blog%20Updates"
                target="_blank"
                className="shrink-0 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white text-xs font-semibold hover:bg-white/20 hover:scale-95 transition-all duration-300 shadow-[-4px_4px_0px_#334155] hover:shadow-[4px_4px_0px_#334155] whitespace-nowrap"
              >
                Notify me →
              </NavLink>
            </div>
          </AnimatedWrapper>
        </section>
      </div>
    </>
  );
}
