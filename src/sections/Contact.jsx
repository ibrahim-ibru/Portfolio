import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import site from "@/data/site";

const { profile, contact } = site;

const channels = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", href: profile.socialLinks.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.socialLinks.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Opens the visitor's email app with the message pre-filled (no backend needed).
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title={contact.title} description={`${contact.description} Messages open in your email app.`}>
      <Reveal className="grid gap-10 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" required value={form.name} onChange={set("name")} /></div>
          <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required value={form.email} onChange={set("email")} /></div>
          <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" required value={form.message} onChange={set("message")} /></div>
          <Button type="submit"><Send className="h-4 w-4" />Send message</Button>
        </form>
        <ul className="space-y-3 self-start">
          {channels.map(({ icon: Icon, label, href }) => (
            <li key={href}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50">
                <Icon className="h-4 w-4 text-primary" /><span className="truncate">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
