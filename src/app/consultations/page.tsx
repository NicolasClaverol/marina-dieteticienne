import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, TARIFS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Consultations & Tarifs",
  description: `Tarifs et types de consultations diététiques avec ${CLIENT.nom} à Le Vigan (Gard). Bilan initial, suivi, téléconsultation. Remboursement possible par la mutuelle.`,
};

const moyensPaiement = [
  {
    label: "Espèces",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Chèque",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Virement bancaire",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function Consultations() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-fond">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Consultations
          </p>
          <h1 className="font-title text-5xl md:text-6xl text-texte font-semibold mb-6">
            Tarifs & modalités
          </h1>
          <p className="text-texte/60 text-lg max-w-2xl mx-auto">
            Retrouvez ci-dessous les différents types de consultations proposées,
            en cabinet à Le Vigan ou en téléconsultation depuis toute la France.
          </p>
          <p className="mt-4 text-xs text-texte/40 italic">
            Tarifs indicatifs — à personnaliser avec la praticienne
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="pb-20 md:pb-28 bg-fond">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TARIFS.map((t, i) => (
              <article
                key={t.type}
                className={`rounded-2xl p-8 border-2 flex flex-col ${
                  i === 0
                    ? "border-sage bg-sage/5"
                    : "border-gris bg-fond"
                }`}
              >
                {i === 0 && (
                  <span className="inline-block text-xs font-semibold text-sage bg-sage/10 px-3 py-1 rounded-full mb-4 w-fit">
                    Recommandé pour débuter
                  </span>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-title text-2xl font-semibold text-texte">
                      {t.type}
                    </h2>
                    <p className="text-texte/40 text-sm mt-1">{t.duree}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-title text-4xl font-semibold text-sage">
                      {t.prix}€
                    </p>
                  </div>
                </div>
                <p className="text-texte/65 text-sm leading-relaxed flex-1">
                  {t.description}
                </p>
                <Link
                  href={CLIENT.doctolib}
                  className={`mt-6 inline-flex items-center justify-center py-3 rounded-full font-medium text-sm transition-colors ${
                    i === 0
                      ? "bg-sage text-white hover:bg-sage-dark"
                      : "border border-sage text-sage hover:bg-sage hover:text-white"
                  }`}
                >
                  Réserver
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Remboursement */}
      <section className="py-16 md:py-20 bg-gris">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                Remboursement
              </p>
              <h2 className="font-title text-3xl md:text-4xl text-texte font-semibold mb-5">
                Et la mutuelle ?
              </h2>
              <div className="space-y-3 text-texte/65 text-sm leading-relaxed">
                <p>
                  Les consultations diététiques ne sont{" "}
                  <strong className="text-texte">pas remboursées</strong> par
                  l&apos;Assurance Maladie (Sécurité Sociale).
                </p>
                <p>
                  Cependant,{" "}
                  <strong className="text-texte">
                    de nombreuses mutuelles remboursent
                  </strong>{" "}
                  tout ou partie des consultations en diététique, dans le cadre
                  de leurs garanties de médecine douce ou de prévention. Les
                  conditions varient selon votre contrat.
                </p>
                <p>
                  Je vous remets systématiquement une{" "}
                  <strong className="text-texte">facture</strong> pour faciliter
                  vos demandes de remboursement auprès de votre mutuelle.
                  N&apos;hésitez pas à les contacter avant votre premier rendez-vous
                  pour connaître vos droits.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-title text-2xl font-semibold text-texte mb-5">
                Moyens de paiement
              </h3>
              <div className="space-y-3">
                {moyensPaiement.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-4 bg-fond rounded-xl p-4"
                  >
                    <div className="w-10 h-10 bg-sage/10 text-sage rounded-lg flex items-center justify-center flex-shrink-0">
                      {m.icon}
                    </div>
                    <span className="font-medium text-texte">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Téléconsultation info */}
      <section className="py-16 md:py-20 bg-fond">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage rounded-2xl p-10 md:p-14 text-center">
            <svg
              className="w-12 h-12 text-white/50 mx-auto mb-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h2 className="font-title text-3xl md:text-4xl text-white font-semibold mb-4">
              Téléconsultation disponible
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-lg mx-auto">
              Vous habitez loin du Vigan ou vous ne pouvez pas vous déplacer ?
              Je propose des consultations en visioconférence sécurisée,
              accessibles depuis toute la France. Même accompagnement, même
              tarif.
            </p>
            <Link
              href={CLIENT.doctolib}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium rounded-full hover:bg-fond transition-colors shadow-lg"
            >
              Prendre rendez-vous en téléconsultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gris text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl md:text-4xl text-texte font-semibold mb-4">
            Une question sur les tarifs ?
          </h2>
          <p className="text-texte/60 mb-8">
            N&apos;hésitez pas à me contacter directement, je vous répondrai dans les
            meilleurs délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CLIENT.doctolib}
              className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-sage font-medium rounded-full hover:bg-sage hover:text-white transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
