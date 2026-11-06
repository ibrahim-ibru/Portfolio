import Reveal from "./Reveal";

export default function Section({ id, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {description && <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
