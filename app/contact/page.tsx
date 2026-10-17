import type { Metadata } from "next";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/content/site";
import { cvAvailable } from "@/lib/cv";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Koffi Amani : e-mail, GitHub et CV à télécharger.",
  alternates: { canonical: "/contact/" },
};

const formKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactPage() {
  const hasCv = cvAvailable();
  const item = "flex min-h-12 items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 hover:border-electric";
  return (
    <>
      <PageHeader eyebrow="Contact" title="Travaillons ensemble" intro={site.opportunities} />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Me joindre</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <a href={`mailto:${site.email}`} className={item}>
                <Mail aria-hidden="true" size={20} className="text-electric" />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={item}>
                <Github aria-hidden="true" size={20} className="text-electric" />
                github.com/Miensie<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={item}>
                  <Linkedin aria-hidden="true" size={20} className="text-electric" />
                  LinkedIn<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            )}
            {hasCv && (
              <li>
                <a href={site.cvPath} download className={item}>
                  <Download aria-hidden="true" size={20} className="text-electric" />
                  Télécharger mon CV (PDF)
                </a>
              </li>
            )}
            <li className="flex items-center gap-3 px-4 py-3 text-ink-3">
              <MapPin aria-hidden="true" size={20} />
              {site.location}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Écrire un message</h2>
          <div className="mt-6">
            {formKey ? (
              <ContactForm accessKey={formKey} fallbackEmail={site.email} />
            ) : (
              <div className="rounded-xl border border-line bg-white p-7">
                <p className="text-ink-2">Le plus simple est de m&apos;écrire directement par e-mail.</p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Contact depuis votre portfolio")}`}
                  className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-md bg-electric px-5 font-medium text-white hover:bg-electric-ink"
                >
                  <Mail aria-hidden="true" size={18} /> Ouvrir ma messagerie
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
