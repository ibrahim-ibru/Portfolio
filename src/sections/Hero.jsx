import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/data/site";

const { profile } = site;

const script = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat role.txt", out: profile.designation },
  { cmd: "ls ./stack", out: "react  nextjs  typescript  tailwind  node  mongodb" },
  { cmd: "echo $LOCATION", out: profile.location },
];

function Terminal() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= script.length) return;
    const t = setTimeout(() => setStep(step + 1), step === 0 ? 500 : 750);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card font-mono text-sm shadow-xl shadow-primary/5" role="img" aria-label={`Terminal introduction: ${profile.name}, ${profile.role}`}>
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 text-xs text-muted-foreground">portfolio: zsh</span>
      </div>
      <div className="min-h-[260px] space-y-3 p-5">
        {script.slice(0, step).map((l) => (
          <div key={l.cmd}>
            <p><span className="text-primary">$</span> {l.cmd}</p>
            <p className="text-muted-foreground">{l.out}</p>
          </div>
        ))}
        <p>
          <span className="text-primary">$</span>{" "}
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pb-12 pt-14 sm:pt-20">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-primary">Hello, I'm</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-xl text-muted-foreground sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-md text-muted-foreground">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects"><ArrowDown className="h-4 w-4" />View projects</a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact"><Mail className="h-4 w-4" />Get in touch</a></Button>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
