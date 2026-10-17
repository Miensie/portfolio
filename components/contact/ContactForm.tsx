"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type State = "idle" | "sending" | "sent" | "error";

/**
 * Formulaire relié au service Web3Forms (https://web3forms.com).
 * Il n'est rendu QUE si NEXT_PUBLIC_WEB3FORMS_KEY est définie (voir app/contact/page.tsx) :
 * jamais de formulaire qui fait semblant d'envoyer.
 */
export function ContactForm({ accessKey, fallbackEmail }: { accessKey: string; fallbackEmail: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: accessKey, subject: "Nouveau message depuis le portfolio" }),
      });
      const json: unknown = await res.json();
      const ok = res.ok && typeof json === "object" && json !== null && "success" in json && json.success === true;
      if (!ok) throw new Error("Échec de l'envoi");
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        Merci, votre message a bien été envoyé. Je vous réponds dès que possible.
      </p>
    );
  }

  const field =
    "mt-1.5 block w-full rounded-md border border-line-strong bg-white px-3.5 py-3 text-base text-ink placeholder:text-ink-3/70 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {/* Champ piège anti-robots, invisible pour les humains. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Nom
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="organisation" className="text-sm font-medium">
          Entreprise ou organisation <span className="font-normal text-ink-3">(facultatif)</span>
        </label>
        <input id="organisation" name="organisation" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className={field} />
      </div>
      {state === "error" && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-900">
          L&apos;envoi a échoué. Réessayez, ou écrivez-moi directement à{" "}
          <a href={`mailto:${fallbackEmail}`} className="underline">
            {fallbackEmail}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex min-h-12 items-center gap-2 rounded-md bg-electric px-5 font-medium text-white transition-colors hover:bg-electric-ink disabled:opacity-60"
      >
        <Send aria-hidden="true" size={18} />
        {state === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
