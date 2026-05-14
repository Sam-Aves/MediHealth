import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { allBlogs, categories } from "../data/blogsData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Blog() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const blogs =
    activeCategory === "all"
      ? Object.values(allBlogs).flat()
      : allBlogs[activeCategory];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const activeBlog = blogs[activeIndex];

  useEffect(() => {
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeIndex, activeCategory]);

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto space-y-24">

      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          {activeCategory === "all"
            ? "Medical Insights & Research Articles"
            : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Articles`}
        </h1>

        <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />

        <p className="text-lg text-base-content/70 max-w-3xl">
          Evidence-based medical articles authored by licensed professionals and researchers,
          curated to support informed health decisions.
        </p>
      </motion.header>

      {/* ================= ACTIVE ARTICLE ================= */}
      <AnimatePresence mode="wait">
        <motion.article
          key={activeBlog.id}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.96 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] bg-base-100 dark:bg-base-900 border border-base-300/20"
        >
          {/* Reading Progress */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-20"
            initial={{ width: "20%" }}
            animate={{ width: expanded ? "100%" : "35%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Background Image */}
          <motion.img
            src={activeBlog.img}
            alt={activeBlog.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 max-w-3xl text-white space-y-6">
            <span className="uppercase text-xs tracking-widest opacity-80">
              Featured Article
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight drop-shadow">
              {activeBlog.title}
            </h2>

            {/* Meta Pills */}
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20">
                {activeBlog.author}
              </span>
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20">
                {activeBlog.role}
              </span>
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20">
                {activeBlog.readTime}
              </span>
            </div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-base leading-relaxed text-white/90"
            >
              <p className={`${expanded ? "" : "line-clamp-5"}`}>
                {activeBlog.content}
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
              >
                {expanded ? "Show less" : "Read full article"}
                <span>→</span>
              </button>
            </motion.div>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* ================= ARTICLE GRID ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
              }}
              onClick={() => setActiveIndex(index)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-base-100 dark:bg-base-900 border transition-all duration-300 ${
                index === activeIndex
                  ? "ring-2 ring-primary"
                  : "border-base-300/30"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-base-content/60">
                  {blog.author} · {blog.readTime}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ================= CATEGORY SWITCH ================= */}
      <footer className="pt-20">
        <h4 className="text-xs uppercase tracking-widest text-base-content/40 mb-6">
          Browse Topics
        </h4>
        <div className="flex gap-4 flex-wrap">
          {[...categories, "all"].map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <motion.a
                key={cat}
                href={`/blog?category=${cat}`}
                whileHover={{ y: -2, scale: 1.05 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-content shadow-lg"
                    : "border border-base-300 text-base-content/70 hover:bg-base-200 dark:hover:bg-base-800"
                }`}
              >
                {cat === "all"
                  ? "All Articles"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.a>
            );
          })}
        </div>
      </footer>

    </section>
  );
}
