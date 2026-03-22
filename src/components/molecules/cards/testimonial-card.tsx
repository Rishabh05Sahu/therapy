type TestimonialCardProps = {
  quote: string;
  author: string;
  active?: boolean;
};

export function TestimonialCard({
  quote,
  author,
  active = false,
}: TestimonialCardProps) {
  return (
    <article
      className={`flex min-h-[320px] flex-col justify-between border p-6 md:min-h-[340px] ${
        active
          ? "border-[var(--text-dark)]/20 bg-white"
          : "border-[var(--text-dark)]/12 bg-white/65"
      }`}
    >
      <p className="text-base leading-8 text-[var(--text-dark)]/80">“{quote}”</p>

      <div className="mt-8">
        <p className="text-sm font-medium text-[var(--text-dark)]">{author}</p>
      </div>
    </article>
  );
}