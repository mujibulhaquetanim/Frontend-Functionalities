import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedWrapper from "../wrapper/AnimatedWrapper";
import { FaClock } from "react-icons/fa";
import { ArrowUpRight, BellRing } from "lucide-react";
import { BlogPost, POSTS } from "../../assets/BlogData";
import { StatusBadge, TagChip } from "../wrapper/SubComponent";

const ALL_TAGS = [...new Set(POSTS.flatMap((p) => p.tags))];
const MAX_READ_TIME = Math.max(1, ...POSTS.map((p) => p.readTime));

const ease = [0.22, 1, 0.36, 1] as const;

// Published posts with a URL become links; everything else is a static card,
// so "coming soon" posts never lead to a 404.
function PostShell({
  post,
  className,
  children,
}: {
  post: BlogPost;
  className: string;
  children: React.ReactNode;
}) {
  if (post.status === "published" && post.url) {
    return (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer`}
      >
        {children}
      </a>
    );
  }
  return <article className={className}>{children}</article>;
}

function ReadTimeBar({ post, thick }: { post: BlogPost; thick?: boolean }) {
  return (
    <div
      aria-hidden
      className={`absolute bottom-0 left-0 right-0 ${thick ? "h-[3px]" : "h-[2px]"} bg-white/5 overflow-hidden`}
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-slate-300/40 to-white/70 rounded-full scale-x-0 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
        style={{ width: `${(post.readTime / MAX_READ_TIME) * 100}%` }}
      />
    </div>
  );
}

export default function Blogs() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const matches = (p: BlogPost) => !activeTag || p.tags.includes(activeTag);
  const visiblePosts = POSTS.filter(matches);
  // Fall back to the first matching post when none is flagged as featured.
  const featuredPost =
    visiblePosts.find((p) => p.featured) ?? visiblePosts[0] ?? null;
  const listPosts = visiblePosts.filter((p) => p !== featuredPost);

  const toggleTag = (tag: string) =>
    setActiveTag((prev) => (prev === tag ? null : tag));

  const filterOptions: { label: string; value: string | null }[] = [
    { label: "All", value: null },
    ...ALL_TAGS.map((tag) => ({ label: tag, value: tag })),
  ];

  return (
    <>
      <Helmet>
        <title>Blogs — Mujibul Haque Tanim</title>
        <meta
          name="description"
          content="Engineering articles on TypeScript, NestJS, AI pipelines, and system design."
        />
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden">
        <section
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
            gap-2 lg:gap-2 xl:gap-3
            max-w-[90rem] mx-auto
            py-2 px-3 sm:px-4
            h-auto
            lg:h-[100dvh] lg:min-h-[36rem]
            auto-rows-auto
            lg:grid-rows-[auto_3fr_1.4fr]
            justify-items-stretch
          "
        >
          {/* ── Row 1: Title + tag filter ── */}
          <AnimatedWrapper
            delay={0}
            className="col-span-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-1 py-1"
          >
            <div className="flex items-baseline gap-3 shrink-0">
              <h1 className="text-2xl lg:text-2xl xl:text-3xl text-white font-bold tracking-tight">
                Blogs
              </h1>
              <span className="text-slate-300 text-xs font-medium">
                {POSTS.length} {POSTS.length === 1 ? "article" : "articles"} in
                the pipeline
              </span>
            </div>

            {ALL_TAGS.length > 0 && (
              <div
                role="group"
                aria-label="Filter by topic"
                className="flex flex-wrap gap-1.5"
              >
                {filterOptions.map(({ label, value }) => {
                  const isActive = activeTag === value;
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        value === null ? setActiveTag(null) : toggleTag(value)
                      }
                      className={`relative px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 active:scale-95 ${
                        isActive
                          ? "text-slate-800 border-white"
                          : "text-slate-300 border-slate-500 hover:border-white hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="blog-filter"
                          className="absolute inset-0 rounded-full bg-white"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      )}
                      <span className="relative">{label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </AnimatedWrapper>

          {/* ── Row 2a: Featured post ── */}
          <AnimatedWrapper
            delay={80}
            className="col-span-full md:col-span-2 lg:col-span-7 w-full h-full min-h-[14rem]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {featuredPost ? (
                <motion.div
                  key={featuredPost.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease }}
                  className="h-full"
                >
                  <PostShell
                    post={featuredPost}
                    className="tile group flex flex-col h-full p-4 lg:p-4 xl:p-6 gap-2 lg:gap-2 xl:gap-3 overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      {featuredPost.featured && (
                        <span className="px-2 py-0.5 bg-white/15 rounded-full text-[10px] text-white font-semibold border border-white/20">
                          Featured
                        </span>
                      )}
                      <StatusBadge status={featuredPost.status} />
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold leading-snug tracking-tight text-balance">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-300 text-sm lg:text-xs xl:text-sm leading-relaxed flex-1 max-w-[65ch]">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {featuredPost.tags.map((tag) => (
                        <TagChip key={tag} label={tag} />
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-slate-300 text-xs">
                        <FaClock size={10} aria-hidden />
                        {featuredPost.readTime} min read
                      </span>
                      {featuredPost.status === "published" &&
                      featuredPost.url ? (
                        <span className="flex items-center gap-1 text-slate-200 text-xs group-hover:text-white">
                          Read article
                          <ArrowUpRight
                            aria-hidden
                            className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">
                          Not published yet
                        </span>
                      )}
                    </div>
                    <ReadTimeBar post={featuredPost} thick />
                  </PostShell>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="tile flex h-full flex-col items-center justify-center gap-3 p-6 text-center"
                >
                  <p className="text-slate-200 text-sm">
                    {activeTag
                      ? `No articles tagged ${activeTag} yet.`
                      : "No articles published yet."}
                  </p>
                  {activeTag && (
                    <button
                      type="button"
                      onClick={() => setActiveTag(null)}
                      className="btn-press px-3 py-1 text-xs"
                    >
                      Show all topics
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedWrapper>

          {/* ── Row 2b: Post list stack ── */}
          <AnimatedWrapper
            delay={160}
            className="col-span-full md:col-span-2 lg:col-span-5 w-full h-full min-h-0"
          >
            <motion.ul layout className="flex flex-col gap-2 h-full">
              <AnimatePresence mode="popLayout" initial={false}>
                {listPosts.length > 0 ? (
                  listPosts.map((post) => (
                    <motion.li
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25, ease }}
                      className="flex-1 min-h-0"
                    >
                      <PostShell
                        post={post}
                        className="tile group flex flex-col h-full p-3 lg:p-2.5 xl:p-3.5 gap-1.5 overflow-hidden"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <StatusBadge status={post.status} />
                          <span className="flex items-center gap-1 text-slate-300 text-[10px] shrink-0">
                            <FaClock size={8} aria-hidden />
                            {post.readTime} min
                          </span>
                        </div>

                        <h3 className="text-sm lg:text-xs xl:text-sm text-white font-semibold leading-snug flex-1">
                          {post.title}
                        </h3>

                        {/* Excerpt — only visible at xl+ to save vertical space on laptops */}
                        <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-1 hidden xl:block">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <TagChip key={tag} label={tag} />
                          ))}
                        </div>
                        <ReadTimeBar post={post} />
                      </PostShell>
                    </motion.li>
                  ))
                ) : (
                  <motion.li
                    key="empty-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 min-h-[6rem] rounded-2xl border border-dashed border-white/15 flex items-center justify-center p-4 text-center text-slate-300 text-sm"
                  >
                    {featuredPost
                      ? "That's the only article on this topic so far."
                      : "Nothing else in the queue."}
                  </motion.li>
                )}
              </AnimatePresence>
            </motion.ul>
          </AnimatedWrapper>

          {/* ── Row 3a: Post count stat ── */}
          <AnimatedWrapper
            delay={240}
            className="col-span-full md:col-span-1 lg:col-span-3 w-full h-full"
          >
            <div className="tile flex flex-col items-center justify-center h-full p-3 gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl lg:text-3xl xl:text-5xl text-white font-bold tabular-nums">
                  {POSTS.length}
                </span>
                <span className="text-xs text-slate-300 font-medium ml-1">
                  {POSTS.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <span className="text-[11px] lg:text-[10px] xl:text-xs text-slate-300 font-medium text-center">
                In the pipeline
              </span>
            </div>
          </AnimatedWrapper>

          {/* ── Row 3b: Topics stat ── */}
          <AnimatedWrapper
            delay={300}
            className="col-span-full md:col-span-1 lg:col-span-3 w-full h-full"
          >
            <div className="tile flex flex-col items-center justify-center h-full p-3 gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl lg:text-3xl xl:text-5xl text-white font-bold tabular-nums">
                  {ALL_TAGS.length}
                </span>
                <span className="text-xs text-slate-300 font-medium ml-1">
                  {ALL_TAGS.length === 1 ? "topic" : "topics"}
                </span>
              </div>
              <span className="text-[11px] lg:text-[10px] xl:text-xs text-slate-300 font-medium text-center">
                Across all posts
              </span>
            </div>
          </AnimatedWrapper>

          {/* ── Row 3c: Newsletter / notify CTA ── */}
          <AnimatedWrapper
            delay={360}
            className="col-span-full md:col-span-2 lg:col-span-6 w-full h-full"
          >
            <div className="tile flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between h-full gap-3 p-4 lg:p-3 xl:p-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-white font-bold text-sm xl:text-base">
                  Upcoming articles
                </h2>
                <p className="text-slate-300 text-xs leading-relaxed max-w-xs">
                  Write-ups on AI engineering, TypeScript architecture, and
                  backend patterns from production work.
                </p>
              </div>
              <a
                href="mailto:info@mujibulhaquetanim.dev?subject=Blog%20Updates"
                className="btn-press group shrink-0 px-4 py-2 text-xs whitespace-nowrap"
              >
                <BellRing
                  aria-hidden
                  className="size-3.5 origin-top group-hover:animate-wiggle"
                />
                Notify me by email
              </a>
            </div>
          </AnimatedWrapper>
        </section>
      </div>
    </>
  );
}
