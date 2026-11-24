import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Coffee, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

function NavLinks({ onNavigate, className, mobile = false }) {
  return (
    <nav aria-label="Primary" className={cn("flex items-center gap-1", className)}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "relative px-3 py-2 text-sm font-medium transition-colors",
              mobile
                ? "w-full rounded-lg hover:bg-muted"
                : "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100",
              isActive
                ? mobile
                  ? "bg-primary/10 text-primary"
                  : "text-primary after:scale-x-100"
                : "text-muted-foreground hover:text-foreground",
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-tight transition-transform hover:scale-[1.02]">
          <Coffee className="h-5 w-5 text-primary" strokeWidth={1.75} />
          <span>Brewhaus Coffee Co.</span>
        </NavLink>

        <NavLinks className="hidden md:flex" />

        <NavLink
          to="/shop"
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden transition-transform md:inline-flex hover:scale-105",
          )}
        >
          Shop Now
        </NavLink>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="flex items-center gap-2 bg-primary/10 px-4 py-4 text-left">
              <Coffee className="h-5 w-5 text-primary" strokeWidth={1.75} />
              Brewhaus
            </SheetTitle>
            <NavLinks
              mobile
              onNavigate={() => setOpen(false)}
              className="mt-2 flex-col items-stretch gap-1 px-4"
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavBar;
