import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";
import site from "@/data/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Reveal>
        <ol className="space-y-8 border-l border-border pl-6">
          {site.experience.map((e) => (
            <li key={e.id} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <h3 className="font-semibold">{e.role} <span className="font-normal text-muted-foreground">at {e.company}</span></h3>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{e.startDate} – {e.endDate} · {e.employmentType} · {e.location}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground marker:text-primary">
                {e.responsibilities.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">{e.technologies.map((t) => <Badge key={t} variant="mono">{t}</Badge>)}</div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
