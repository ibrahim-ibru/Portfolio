import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import site from "@/data/site";

const links = ["About", "Skills", "Projects", "Experience", "Resume", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="text-primary">~/</span>{site.footer.copyrightName}
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <nav className="container flex flex-col border-t border-border pb-3 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="py-2.5 text-sm text-muted-foreground hover:text-foreground">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
