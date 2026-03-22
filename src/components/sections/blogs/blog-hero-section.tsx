import { Container } from "@/components/atoms/common/container";

export function BlogHeroSection() {
  return (
    <section className="section-dark grid-pattern pt-32 pb-16 md:pt-40 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-white/60">Insights • Reflection • Healing</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
            Blog Hub
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Thoughtful writing on therapy, relationships, stress, emotional
            patterns, and everyday healing.
          </p>
        </div>
      </Container>
    </section>
  );
}