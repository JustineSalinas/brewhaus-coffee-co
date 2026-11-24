import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, Mail, X as XIcon, ArrowUp, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: XIcon, label: "X (Twitter)" },
  { icon: FacebookIcon, label: "Facebook" },
];

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribed(true);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-card/40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap bg-gradient-to-t from-foreground/[0.05] to-transparent bg-clip-text text-center text-[12rem] font-black leading-none tracking-tighter text-transparent sm:text-[16rem]"
      >
        BREWHAUS
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="group flex items-center gap-2 font-semibold tracking-tight">
              <Coffee
                className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12"
                strokeWidth={1.75}
              />
              Brewhaus Coffee Co.
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Small-batch roasted, ethically sourced coffee delivered to your
              door.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link to="/shop" className="transition-colors hover:text-primary">Shop</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Visit Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                123 Roastery Lane, Portland, OR 97201
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                (503) 555-0192
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                hello@brewhauscoffee.example
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Stay Caffeinated</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              One email a month. New roasts, brewing tips, zero spam.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary">
                You're on the list — welcome aboard!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  aria-label="Email for newsletter"
                  className="h-10"
                />
                <Button type="submit" size="icon" className="group h-10 w-10 shrink-0" aria-label="Subscribe">
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Brewhaus Coffee Co. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Brewed with <span className="text-primary">♥</span> in Portland, OR
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Back to top{" "}
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
