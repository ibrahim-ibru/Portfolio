import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import ProjectPreview from "@/components/common/ProjectPreview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import projects, { projectGroups } from "@/data/projects";
import { cn } from "@/lib/utils";

const Bullets = ({ items }) => (
  <ul className="list-inside list-disc space-y-0.5 text-sm text-muted-foreground marker:text-primary">
    {items.map((f) => <li key={f}>{f}</li>)}
  </ul>
);

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const { title, description, longDescription, features, applications, technologies, type, category, aiAssisted, preview, image, links } = project;
  const personal = category === "Personal Project";
  const id = `details-${project.slug}`;

  return (
    <Card className="flex flex-col transition-colors hover:border-primary/50">
      <CardHeader className="pb-4"><ProjectPreview variant={preview} image={image} title={title} /></CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant={personal ? "default" : "outline"}>{personal ? "Personal · Solo work" : "Company · Team work"}</Badge>
          {aiAssisted && <Badge variant="outline">AI-assisted</Badge>}
          <Badge variant="outline">{type}</Badge>
        </div>
        <h4 className="mt-3 text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((t) => <Badge key={t} variant="mono">{t}</Badge>)}
        </div>

        <Button variant="ghost" size="sm" className="mt-4 -ml-3" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>
          {open ? "Hide details" : "Show details"}
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </Button>

        {open && (
          <div id={id} className="mt-3 space-y-4 border-t border-border pt-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{longDescription}</p>
            {features.length > 0 && <Bullets items={features} />}
            {applications?.map((a) => (
              <div key={a.name} className="space-y-2 rounded-md border border-border bg-background p-3">
                <h5 className="text-sm font-medium">{a.name}</h5>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                <Bullets items={a.features} />
                <div className="flex flex-wrap gap-1.5">{a.technologies.map((t) => <Badge key={t} variant="mono">{t}</Badge>)}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {(links?.live || links?.github) && (
        <CardFooter className="gap-2">
          {links.live && <Button asChild size="sm"><a href={links.live} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Live demo</a></Button>}
          {links.github && <Button asChild size="sm" variant="outline"><a href={links.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" />Code</a></Button>}
        </CardFooter>
      )}
    </Card>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" description="Grouped by how the work was done, so my personal work is easy to tell apart from team work.">
      <div className="space-y-14">
        {projectGroups.map((g) => (
          <div key={g.category}>
            <Reveal>
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">{g.description}</p>
            </Reveal>
            <Reveal className="mt-5 grid items-start gap-5 md:grid-cols-2">
              {projects.filter((p) => p.category === g.category).map((p) => <ProjectCard key={p.id} project={p} />)}
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
