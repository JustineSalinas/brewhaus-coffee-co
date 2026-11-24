import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const details = [
  { icon: MapPin, lines: ["123 Roastery Lane", "Portland, OR 97201"] },
  { icon: Phone, lines: ["(503) 555-0192"] },
  { icon: Mail, lines: ["hello@brewhauscoffee.example"] },
  { icon: Clock, lines: ["Mon–Sat, 8am–6pm"] },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          We'd love to hear from you.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold">Get in Touch</h2>
          <Separator className="my-4" />
          <ul className="space-y-4">
            {details.map(({ icon: Icon, lines }, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                </span>
                <span>
                  {lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          {submitted ? (
            <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <p>Thanks for reaching out! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="How can we help?" required />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
