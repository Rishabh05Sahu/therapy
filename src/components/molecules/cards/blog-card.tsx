import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  date: string;
  image: string;
  slug: string;
  dark?: boolean;
};

export function BlogCard({
  title,
  date,
  image,
  slug,
  dark = true,
}: BlogCardProps) {
  return (
    <article
      className={`overflow-hidden border ${
        dark
          ? "border-white/10 bg-[#1a1c30]"
          : "border-[var(--text-dark)]/15 bg-white/70"
      }`}
    >
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <p className={dark ? "text-sm text-white/60" : "text-sm text-[var(--text-dark)]/55"}>
          {date}
        </p>
        <h3
          className={
            dark
              ? "mt-3 text-xl font-medium text-white"
              : "mt-3 text-xl font-medium text-[var(--text-dark)]"
          }
        >
          {title}
        </h3>

        <Link
          href={`/blogs/${slug}`}
          className="mt-5 inline-flex text-sm font-medium text-[var(--yellow)] transition hover:opacity-80"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}