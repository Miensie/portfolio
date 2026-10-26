import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SpectrumLine } from "./SpectrumLine";
import { SystemDiagram } from "./SystemDiagram";

const TITLE = "Comprendre un système, le modéliser, puis construire ce qui l'améliore.";

export function Hero({ hasCv }: { hasCv: boolean }) {
  return (
    <section aria-labelledby="hero-titre" className="relative isolate overflow-hidden bg-night text-paper">
      {/* Halos lumineux décoratifs qui se déplacent lentement. */}
      <div aria-hidden="true" className="anim-halo absolute -left-40 -top-40 -z-10 size-[34rem] rounded-full opacity-70" />
      <div
        aria-hidden="true"
        className="anim-halo absolute -bottom-48 right-[-8rem] -z-10 size-[32rem] rounded-full opacity-60"
        style={{ ["--delay" as string]: "-7s" }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 pb-6 pt-12 sm:pt-16 md:grid-cols-[1.25fr_1fr] md:gap-12">
          <div className="min-w-0">
            <p className="rise font-mono text-[13px] tracking-[0.08em] text-electric-soft">
              INGÉNIEUR EN FORMATION · CHIMIE ET GÉNIE DES PROCÉDÉS
            </p>
            <h1
              id="hero-titre"
              aria-label={TITLE}
              className="mt-5 max-w-[17ch] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              {/* Chaque mot apparaît à son tour ; « système » est souligné ensuite. */}
              {TITLE.split(" ").map((word, i) => (
                <span key={i} aria-hidden="true">
                  <span className="word" style={{ ["--delay" as string]: `${120 + i * 70}ms` }}>
                    {word.startsWith("système") ? (
                      <>
                        <span className="highlight">système</span>
                        {word.slice("système".length)}
                      </>
                    ) : (
                      word
                    )}
                  </span>{" "}
                </span>
              ))}
            </h1>
            <p
              className="rise mt-6 max-w-[60ch] text-lg text-mist-light"
              style={{ ["--delay" as string]: "240ms" }}
            >
              Je suis en fin de formation d&apos;ingénieur à l&apos;INP-HB, en chimie et génie des procédés. La chimie est mon
              socle, mais les problèmes qui m&apos;intéressent traversent les disciplines. J&apos;aime partir d&apos;un besoin
              concret, chercher la science qui l&apos;explique, le modéliser, puis construire l&apos;outil ou le prototype qui
              y répond.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ ["--delay" as string]: "360ms" }}>
              <ButtonLink href="/projets/">
                Découvrir mes projets <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              {hasCv && (
                <ButtonLink href={site.cvPath} variant="outline-dark" download>
                  <Download aria-hidden="true" size={18} /> Télécharger mon CV
                </ButtonLink>
              )}
            </div>
            <Link
              href="/vision/"
              className="rise mt-6 inline-flex min-h-11 items-center gap-1.5 text-[15px] text-mist hover:text-paper"
              style={{ ["--delay" as string]: "480ms" }}
            >
              Lire ma vision d&apos;ingénieur <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <div className="rise relative mx-auto aspect-square w-full max-w-[460px]" style={{ ["--delay" as string]: "200ms" }}>
            <SystemDiagram />
            <div className="float absolute inset-x-[16%] bottom-0 top-[14%]">
              <Image
                src="/images/portrait.webp"
                alt={`Portrait de ${site.name}`}
                width={695}
                height={988}
                priority
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>

        <div className="pb-8">
          <SpectrumLine />
          <div className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-xs text-mist">
            <span>{site.location}</span>
            <span>Soutenance d&apos;ingénieur en décembre 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
