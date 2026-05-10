"use client";

import { useState } from "react";

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  motif: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const MOTIFS = [
  "Perte de poids",
  "Troubles digestifs",
  "Nutrition sportive",
  "Grossesse & allaitement",
  "Diabète & maladies métaboliques",
  "Troubles du comportement alimentaire",
  "Autre",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    motif: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setStatus("success");
      setForm({ nom: "", email: "", telephone: "", motif: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-sage-light border border-sage/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-title text-2xl text-texte font-semibold mb-3">
          Message envoyé !
        </h3>
        <p className="text-texte/65">
          Merci pour votre message. Je vous répondrai dans les plus brefs
          délais, généralement sous 48h.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sage font-medium hover:text-sage-dark transition-colors text-sm"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gris bg-fond focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-texte placeholder:text-texte/30 text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-texte mb-1.5"
          >
            Nom complet <span className="text-terra">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            value={form.nom}
            onChange={handleChange}
            placeholder="Marie Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-texte mb-1.5"
          >
            Email <span className="text-terra">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="marie@exemple.fr"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-texte mb-1.5"
        >
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          value={form.telephone}
          onChange={handleChange}
          placeholder="06 12 34 56 78"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="motif"
          className="block text-sm font-medium text-texte mb-1.5"
        >
          Motif de consultation <span className="text-terra">*</span>
        </label>
        <select
          id="motif"
          name="motif"
          required
          value={form.motif}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Sélectionnez un motif…
          </option>
          {MOTIFS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-texte mb-1.5"
        >
          Message <span className="text-terra">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Présentez-vous brièvement et expliquez votre demande…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
          Une erreur est survenue. Veuillez réessayer ou nous contacter
          directement par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-xs text-texte/40 text-center">
        Vos données personnelles ne sont utilisées qu&apos;à des fins de réponse à
        votre demande.
      </p>
    </form>
  );
}
