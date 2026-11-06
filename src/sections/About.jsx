import Section from "@/components/common/Section";
import site from "@/data/site";

export default function About() {
  return (
    <Section id="about" title={site.about.title}>
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
        {site.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}
