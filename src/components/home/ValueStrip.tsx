import { Apple, HandHeart, Leaf, Wheat } from "lucide-react";
import { Container } from "@/components/ui/Container";

const values = [
  { icon: Apple, title: "Real Nepali fruit", text: "Surplus and cosmetically rejected, never wasted" },
  { icon: Wheat, title: "Reduced sugar, high fibre", text: "Whole-fruit nutrition children enjoy" },
  { icon: Leaf, title: "Minimally processed", text: "No or limited added preservatives" },
  { icon: HandHeart, title: "Direct from farmers", text: "Steady markets for rural growers" },
];

/** Product promises directly under the hero. */
export function ValueStrip() {
  return (
    <section aria-label="Our product promise" className="border-b border-line bg-white py-0 md:py-0 lg:py-0">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 py-7 sm:py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.95rem] font-bold leading-snug text-ink">{title}</p>
                <p className="mt-1 text-sm leading-snug text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
