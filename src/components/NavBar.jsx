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

function NavLinks({ onNavigate, className }) {
  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive
                ? "text-primary"
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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Coffee className="h-5 w-5 text-primary" strokeWidth={1.75} />
          <span>Brewhaus Coffee Co.</span>
        </NavLink>

        <NavLinks className="hidden md:flex" />

        <NavLink to="/shop" className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}>
          Shop Now
        </NavLink>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="flex items-center gap-2 px-4 pt-4 text-left">
              <Coffee className="h-5 w-5 text-primary" strokeWidth={1.75} />
              Brewhaus
            </SheetTitle>
            <NavLinks onNavigate={() => setOpen(false)} className="mt-6 flex-col items-start px-4" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavBar;
