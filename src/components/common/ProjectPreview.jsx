import { useState } from "react";
import { cn } from "@/lib/utils";

const Line = ({ w, className }) => (
  <div className={cn("h-1.5 rounded-full bg-primary/25", className)} style={{ width: w }} />
);

const bodies = {
  dashboard: (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded bg-secondary p-2"><Line w="50%" /><div className="mt-2 h-3 w-8 rounded bg-primary/60" /></div>
        ))}
      </div>
      <div className="flex h-16 items-end gap-1.5 rounded bg-secondary p-2">
        {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-primary/50" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  ),
  table: (
    <div className="space-y-1.5">
      <div className="h-4 rounded bg-primary/30" />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-2 rounded bg-secondary px-2 py-1.5">
          <div className="h-3 w-3 rounded-full bg-primary/40" /><Line w="35%" /><Line w="20%" className="ml-auto" />
        </div>
      ))}
    </div>
  ),
  chat: (
    <div className="space-y-2">
      <div className="w-3/5 rounded-lg rounded-bl-none bg-secondary p-2"><Line w="90%" /><Line w="60%" className="mt-1.5" /></div>
      <div className="ml-auto w-1/2 rounded-lg rounded-br-none bg-primary/40 p-2"><Line w="80%" className="bg-white/50" /></div>
      <div className="w-2/5 rounded-lg rounded-bl-none bg-secondary p-2"><Line w="70%" /></div>
      <div className="h-6 rounded border border-border" />
    </div>
  ),
  pos: (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-2 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-square rounded bg-secondary" />)}
      </div>
      <div className="space-y-1.5 rounded bg-secondary p-2">
        <Line w="80%" /><Line w="60%" /><Line w="70%" /><div className="mt-3 h-4 rounded bg-primary/60" />
      </div>
    </div>
  ),
  gallery: (
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={cn("aspect-[4/3] rounded bg-secondary", i % 3 === 0 && "bg-primary/25")} />
      ))}
    </div>
  ),
};

// Shows the real screenshot if the file exists in /public/projects, otherwise a labelled mockup.
export default function ProjectPreview({ variant = "dashboard", image, title }) {
  const [failed, setFailed] = useState(false);
  if (image && !failed) {
    return (
      <img src={image} alt={`${title} screenshot`} onError={() => setFailed(true)}
        className="aspect-[16/10] w-full rounded-md border border-border object-cover object-top" />
    );
  }
  return (
    <div className="overflow-hidden rounded-md border border-border bg-background" role="img" aria-label={`Illustrative preview for ${title}, not a real screenshot`}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">Illustrative preview</span>
      </div>
      <div className="aspect-[16/10] p-3">{bodies[variant]}</div>
    </div>
  );
}
