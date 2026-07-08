import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "CSS Box Shadow Blog | Layerbox",
  description:
    "Learn how to create CSS box shadows with tutorials, examples, and tips. From basic syntax to multi-layer effects, master the art of CSS shadows.",
  openGraph: {
    title: "CSS Box Shadow Blog | Layerbox",
    description:
      "Learn how to create CSS box shadows with tutorials, examples, and tips.",
  },
};

export default function BlogPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#0E0F11", color: "#F2F2F0" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm inline-flex items-center gap-1.5 mb-8 transition-opacity hover:opacity-70"
          style={{ color: "#8B8D93" }}
        >
          &larr; Back to Layerbox
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          CSS Box Shadow Guides
        </h1>
        <p className="text-lg max-w-2xl mb-12" style={{ color: "#8B8D93" }}>
          Tutorials, examples, and deep dives into creating beautiful CSS box
          shadows. All examples can be built visually in Layerbox.
        </p>

        <div className="flex flex-col gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl p-6 transition-all duration-150 hover:scale-[1.01]"
              style={{
                background: "#17181B",
                border: "1px solid #2A2C30",
              }}
            >
              <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "#5A5C62" }}>
                <span>{post.date}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "#F2F2F0" }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#8B8D93" }}>
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
