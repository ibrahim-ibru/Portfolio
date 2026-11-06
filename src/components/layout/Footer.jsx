import site from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {site.profile.name}. {site.footer.text}</p>
        <p className="font-mono text-xs">React · Vite · Tailwind CSS · shadcn/ui</p>
      </div>
    </footer>
  );
}
