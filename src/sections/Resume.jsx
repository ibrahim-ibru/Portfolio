import { Download, FileText } from "lucide-react";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import site from "@/data/site";

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <Reveal>
        <Card className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium">Resume (PDF)</p>
              <p className="text-sm text-muted-foreground">Projects, skills and experience in one document.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild><a href={site.profile.resumeUrl} download><Download className="h-4 w-4" />Download resume</a></Button>
            <Button asChild variant="outline"><a href={site.profile.resumeUrl} target="_blank" rel="noreferrer">View online</a></Button>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
