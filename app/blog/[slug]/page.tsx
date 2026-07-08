import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Layerbox Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | Layerbox Blog`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main
      className="min-h-screen"
      style={{ background: "#0E0F11", color: "#F2F2F0" }}
    >
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="text-sm inline-flex items-center gap-1.5 mb-8 transition-opacity hover:opacity-70"
          style={{ color: "#8B8D93" }}
        >
          &larr; Back to guides
        </Link>

        <header className="mb-12">
          <div
            className="flex items-center gap-3 text-xs mb-4"
            style={{ color: "#5A5C62" }}
          >
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-4"
            style={{ color: "#F2F2F0" }}
          >
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#8B8D93" }}>
            {post.description}
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {post.content.map(([heading, body], i) => (
            <section key={i}>
              <h2
                className="text-xl font-semibold mb-3"
                style={{ color: "#F2F2F0" }}
              >
                {heading}
              </h2>
              <div
                className="text-base leading-relaxed space-y-4"
                style={{ color: "#C8CAC8" }}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </section>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-6 text-center"
          style={{
            background: "#17181B",
            border: "1px solid #2A2C30",
          }}
        >
          <p className="text-sm mb-4" style={{ color: "#8B8D93" }}>
            Build this shadow visually in Layerbox
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.97]"
            style={{ background: "#E8664D", color: "#0E0F11" }}
          >
            Open Layerbox Editor
          </a>
        </div>
      </article>
    </main>
  );
}
