import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { applicationFields } from "@/content/vision";
import { explorationAreas } from "@/content/skills";

export const metadata: Metadata = {
  title: "Vision : le Projet Nexus",
  description:
    "Ma vision d'ingénieur : partir de la chimie et du génie des procédés, élargir vers la physique, la simulation, l'électronique et l'IA, pour concevoir des technologies utiles en énergie, matériaux, environnement et durabilité.",
  alternates: { canonical: "/vision/" },
};

const path = [
  { title: "Théorie", text: "Comprendre les lois qui gouvernent le phénomène." },
  { title: "Modélisation", text: "Les traduire en équations, puis en calcul." },
  { title: "Expérimentation", text: "Confronter le modèle à la mesure, et corriger." },
  { title: "Prototype", text: "Construire quelque chose qui fonctionne en vrai." },
];

export default function VisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vision · Projet Nexus"
        title="Relier les disciplines pour concevoir des technologies utiles"
        intro="Ma formation me donne un socle. Ce que je veux construire au-dessus dépasse une seule spécialité."
      />

      <Section labelledBy="identite-titre">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="Mon identité d'ingénieur" id="identite-titre" title="Une base en chimie, une ambition plus large" />
          <Reveal className="space-y-5 text-lg text-ink-2">
            <p>
              Je me forme en chimie et génie des procédés, avec une orientation en chimie analytique, matériaux et
              polymères. C&apos;est une base solide, et je compte bien m&apos;en servir. Mais mon ambition ne s&apos;arrête
              pas à une spécialité chimique.
            </p>
            <p>
              Je veux construire une vraie culture d&apos;ingénieur généraliste : être capable de comprendre, de modéliser
              et de résoudre des problèmes qui se trouvent à la frontière de plusieurs disciplines. Dans la réalité, les
              problèmes intéressants sont rarement rangés dans une seule case.
            </p>
            <p>
              Le logiciel et l&apos;intelligence artificielle ne sont pas une fin pour moi. Ce sont des outils qui
              traversent toutes les disciplines : ils servent à analyser des données, à simuler des phénomènes, à
              optimiser des systèmes et à concevoir des solutions techniques.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" labelledBy="nexus-titre">
        <SectionHeader
          eyebrow="Le Projet Nexus"
          id="nexus-titre"
          title="Acquérir une culture assez large pour relier les disciplines"
          intro="C'est le nom que je donne à ma vision à long terme : contribuer à concevoir des technologies qui répondent à des problèmes concrets. Le projet se construit en trois couches."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="rounded-xl bg-night p-7 text-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-electric-soft">1 · Le socle</p>
            <h3 className="mt-3 text-xl font-semibold">Chimie et génie des procédés</h3>
            <p className="mt-3 text-mist-light">
              Ce que ma formation m&apos;apporte déjà : la chimie, les matériaux, la mesure, la logique des procédés. C&apos;est
              là que se trouvent mes réalisations actuelles.
            </p>
          </Reveal>
          <Reveal delay={140} className="rounded-xl border border-line bg-paper p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-electric-ink">2 · L&apos;élargissement</p>
            <h3 className="mt-3 text-xl font-semibold">Les disciplines voisines</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {explorationAreas.map((a) => (
                <li key={a.title} className="rounded-full border border-line-strong bg-white px-3 py-1 text-sm text-ink-2">
                  {a.title}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={280} className="rounded-xl border border-electric/40 bg-blue-50 p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-electric-ink">3 · La finalité</p>
            <h3 className="mt-3 text-xl font-semibold">Des technologies qui servent</h3>
            <p className="mt-3 text-ink-2">
              Relier ces connaissances pour concevoir des solutions techniques à des problèmes réels, en énergie, en
              matériaux, en environnement et en durabilité.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" labelledBy="chemin-titre">
        <SectionHeader
          dark
          eyebrow="Comment j'avance"
          id="chemin-titre"
          title="De la compréhension théorique au prototype"
          intro="Je veux être capable de faire tout le chemin, et pas seulement une étape."
        />
        <div className="reveal relative">
          <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-[22px] hidden h-px md:block">
            <div className="draw-x h-full w-full bg-electric-soft/60" />
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {path.map((step, i) => (
              <li key={step.title} className="reveal" style={{ ["--delay" as string]: `${200 + i * 160}ms` }}>
                <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-electric-soft bg-night font-mono text-sm text-electric-soft">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-[15px] text-mist-light">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="domaines-titre">
        <SectionHeader
          eyebrow="Domaines d'application"
          id="domaines-titre"
          title="Là où je veux contribuer"
          intro="Ce sont des orientations, pas des réalisations. Quand un de mes projets touche déjà un domaine, je le dis."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {applicationFields.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 140} className="lift rounded-xl border border-line bg-white p-7">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-ink-2">{f.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-xl border border-line bg-white p-8">
          <p className="max-w-2xl text-lg">
            Une vision ne remplace pas des preuves. Ce que je sais déjà faire se trouve dans mes projets.
          </p>
          <ButtonLink href="/projets/">
            Voir les projets <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
