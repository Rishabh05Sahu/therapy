import Image from "next/image";
import { BookSessionButton } from "@/components/atoms/buttons/book-session-button";

type TeamCardProps = {
  name: string;
  role: string;
  availability: string;
  image: string;
};

export function TeamCard({
  name,
  role,
  availability,
  image,
}: TeamCardProps) {
  return (
    <article className="overflow-hidden border border-white/10 bg-[#1a1c30]">
      <div className="relative h-72 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/70">{role}</p>
        <p className="mt-2 text-sm text-white/55">Availability: {availability}</p>

        <BookSessionButton className="mt-5 inline-flex border border-[var(--yellow)] bg-[var(--yellow)] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">
          Book a Session
        </BookSessionButton>
      </div>
    </article>
  );
}