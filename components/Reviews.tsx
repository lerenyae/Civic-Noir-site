import { reviews } from "@/lib/content";

export default function Reviews() {
  return (
    <section className="py-20 px-6 border-t border-b border-bone-300/5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {reviews.map((r, i) => (
          <figure key={i} className="text-center">
            <p className="text-gold/70 text-xs tracking-[0.3em] mb-4" aria-label={`${r.rating} out of 5 stars`}>
              {"★".repeat(r.rating)}
              
            </p>
            <blockquote className="font-serif text-lg md:text-xl text-bone-300/75 font-light italic leading-relaxed mb-5">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="text-[10px] font-sans font-light tracking-ultra uppercase text-bone-300/40">
              {r.author} &mdash; <span className="text-gold/40">{r.source}</span>
            </figcaption>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 hover:text-gold/90 transition-colors duration-300"
            >
              See full review &rarr;
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
