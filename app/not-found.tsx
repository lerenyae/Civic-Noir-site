import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[10px] font-sans font-light tracking-ultra uppercase text-gold/50 mb-6">
          404
        </p>
        <h1 className="font-serif text-4xl text-bone-200 font-light mb-4">
          Nothing here.
        </h1>
        <p className="text-sm text-bone-300/40 font-light mb-10">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
