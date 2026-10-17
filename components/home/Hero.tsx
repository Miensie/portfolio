import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SpectrumLine } from "./SpectrumLine";

export function Hero({ hasCv }: { hasCv: boolean }) {
  return (
    <section aria-labelledby="hero-titre" className="bg-night text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 pb-8 pt-14 sm:pt-20 md:flex-row md:gap-16">
          <div className="min-w-0 flex-[1.6]">
            <p className="font-mono text-[13px] tracking-[0.08em] text-electric-soft">
              CHIMIE ANALYTIQUE · CHIMIOMÉTRIE · LOGICIEL
            </p>
            <h1 id="hero-titre" className="mt-5 max-w-[15ch] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Je construis les outils qui fiabilisent les mesures.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg text-mist-light">
              Élève-ingénieur en chimie analytique, matériaux et polymères à l&apos;INP-HB. Je pars d&apos;un problème de
              laboratoire ou de production — calibrer, valider, contrôler — et je conçois l&apos;outil qui le résout : Excel
              VBA, compléments Excel web, Python.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projets/">
                Découvrir mes projets <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              {hasCv && (
                <ButtonLink href={site.cvPath} variant="outline-dark" download>
                  <Download aria-hidden="true" size={18} /> Télécharger mon CV
                </ButtonLink>
              )}
            </div>
          </div>
          <figure className="relative w-full max-w-[220px] flex-1 sm:max-w-[300px] md:max-w-[340px]">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait de ${site.name}`}
              width={481}
              height={512}
              priority
              className="h-auto w-full rounded-xl bg-[#c9c9c5]"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-md border border-night-line bg-night px-2.5 py-1.5 font-mono text-xs text-mist-light">
              INP-HB · option CAMP
            </figcaption>
          </figure>
        </div>
        <div className="pb-8">
          <SpectrumLine />
          <div className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-xs text-mist">
            <span>{site.location}</span>
            <span>Soutenance d&apos;ingénieur · décembre 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
