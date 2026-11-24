import { Card, CardContent } from "@/components/ui/card";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { usePageTitle } from "@/hooks/usePageTitle";

const team = [
  {
    name: "Adrian Salinas",
    role: "Co-Founder & Head Roaster",
    image: "/team/adrian-salinas.jpg",
  },
  {
    name: "Lienrev Visitacion",
    role: "Co-Founder & Operations Lead",
    image: "/team/lienrev-visitacion.jpg",
  },
];

function About() {
  usePageTitle("About");

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Story
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The people and the passion behind every bag.
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-2xl">
        <span
          aria-hidden="true"
          className="absolute -top-6 -left-4 text-6xl font-serif text-primary/20 select-none"
        >
          "
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Brewhaus Coffee Co. started as a weekend hobby in a cramped
          apartment kitchen, where a secondhand roaster and a shared
          obsession with chasing the perfect cup turned into something
          bigger. After years of bringing home-roasted bags to friends and
          family, and running out faster than we could roast, we realized
          people weren't just being polite. They genuinely craved coffee that
          tasted alive: traceable to a farm, roasted in small batches, and
          never left to go stale on a shelf. That idea became our mission. We
          founded Brewhaus to close the gap between farmer and cup, working
          directly with growers we trust, roasting in batches small enough to
          taste the difference, and shipping every order within 48 hours of
          roasting so you get coffee at its peak, not its memory.
        </p>
      </div>

      <h2 className="mt-20 text-center text-2xl font-semibold tracking-tight">
        Meet the Team
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:justify-center">
        {team.map((member) => (
          <Card key={member.name} className="overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <ImagePlaceholder
              src={member.image}
              label={member.name}
              className="aspect-[4/3] w-full"
              imgClassName="object-top"
              iconClassName="h-10 w-10"
            />
            <CardContent className="p-5 text-center">
              <h3 className="font-medium">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default About;
