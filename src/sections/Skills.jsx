import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import site from "@/data/site";

const groups = [
  { key: "frontend", title: "Frontend", variant: "mono" },
  { key: "backend", title: "Backend and data", variant: "mono" },
  { key: "tools", title: "Tools and libraries", variant: "mono" },
  { key: "concepts", title: "Concepts", variant: "outline" },
];

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <Reveal className="grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.key}>
            <CardHeader><h3 className="font-medium">{g.title}</h3></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {site.skills[g.key].map((s) => <Badge key={s} variant={g.variant}>{s}</Badge>)}
            </CardContent>
          </Card>
        ))}
      </Reveal>
    </Section>
  );
}
