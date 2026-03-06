import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { posts } from "@/lib/posts";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Dispatches",
  description: `Process notes, thematic essays, and progress updates from ${siteConfig.name}.`,
};

export default function DispatchesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-4">
              Writing &amp; Process
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bone-200 font-light">
              Dispatches
            </h1>
          </SectionReveal>
        </div>
      </section>

      <div className="gold-rule max-w-3xl mx-auto" />

      {/* Posts List */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {posts.map((post, i) => (
            <SectionReveal key={post.slug} delay={i * 80}>
              <Link
                href={`/dispatches/${post.slug}`}
                className="block group mb-0"
              >
                <article className="py-10 border-b border-bone-300/5 group-hover:border-gold/20 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-bone-300/20">
                      &mdash;
                    </span>
                    <span className="text-[10px] font-sans font-light tracking-widest text-bone-300/30">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-bone-200 font-light mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-bone-300/40 font-light leading-[1.7] max-w-xl">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
