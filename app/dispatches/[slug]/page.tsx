import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/content";
import SectionReveal from "@/components/SectionReveal";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Simple markdown-like rendering: handle ## headers, *italics*, and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      // H2 headers
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-serif text-2xl text-bone-200 font-light mt-12 mb-6"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }

      // Regular paragraphs with italic support
      const parts = block.split(/(\*[^*]+\*)/g);
      return (
        <p
          key={i}
          className="text-sm text-bone-300/55 font-light leading-[1.9] mb-6"
        >
          {parts.map((part, j) => {
            if (part.startsWith("*") && part.endsWith("*")) {
              return (
                <em key={j} className="text-bone-300/70 font-serif text-base">
                  {part.slice(1, -1)}
                </em>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>
            <Link
              href="/dispatches"
              className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/30 hover:text-gold transition-colors mb-8 inline-block"
            >
              &larr; Dispatches
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50">
                {post.category}
              </span>
              <span className="text-[10px] text-bone-300/20">&mdash;</span>
              <span className="text-[10px] font-sans font-light tracking-widest text-bone-300/30">
                {post.date}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-bone-200 font-light leading-[1.2] mb-4">
              {post.title}
            </h1>

            <p className="text-xs text-bone-300/30 font-light">
              {siteConfig.name}
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-2xl mx-auto" />

      <article className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>{renderContent(post.content)}</SectionReveal>

          <SectionReveal delay={100}>
            <div className="gold-rule mt-12 mb-8" />
            <p className="text-xs text-bone-300/25 font-light italic">
              Contempt is a civic noir novel set in Baltimore. Follow the work at{" "}
              <Link
                href="/"
                className="text-gold/50 hover:text-gold transition-colors"
              >
                lerenyaewatkins.com
              </Link>
              .
            </p>
          </SectionReveal>
        </div>
      </article>
    </>
  );
}
