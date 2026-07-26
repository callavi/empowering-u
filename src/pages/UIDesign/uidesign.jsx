import { Button } from "../../shared/components/Button/Button";
import { PathwayCard } from "../../shared/components/Cards/PathwayCard/PathwayCard";
import Container from "../../shared/components/Container/Container";
import { pathway } from "../../shared/data/pathway";

export default function UIDesign() {
  return (
    <main className="py-16">
      <Container>

        <h1 className="mb-12 text-4xl font-bold">
          Design System
        </h1>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Typography</h2>

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">
            Color Palette
          </h2>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text">Text</Button>

            <Button variant="primary" disabled>
              Disabled
            </Button>

            <Button variant="primary" size="small">
              Small
            </Button>

            <Button variant="primary" size="medium">
              Medium
            </Button>

            <Button variant="primary" size="large">
              Large
            </Button>

            <Button variant="icon">🔍</Button>

            <Button variant="icon" size="small">
              🔍
            </Button>

            <Button variant="icon" size="medium">
              🔍
            </Button>

            <Button variant="icon" size="large">
              🔍
            </Button>
          </div>

          <div className="mt-8 max-w-sm">
            <Button variant="primary" fullWidth>
              Full Width Button
            </Button>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">
            Cards
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {pathway.map((item) => (
              <PathwayCard
                key={item.path}
                pathway={item}
              />
            ))}
          </div>
        </section>

      </Container>
    </main>
  );
}