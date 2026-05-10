import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { CLIENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Prise de rendez-vous",
  description: `Contactez ${CLIENT.nom}, diététicienne nutritionniste à Le Vigan (30120), Cévennes. Prise de rendez-vous en cabinet ou en téléconsultation. Formulaire de contact, téléphone et adresse.`,
};

const horaires = [
  { jour: "Lundi", heures: "[à compléter]" },
  { jour: "Mardi", heures: "[à compléter]" },
  { jour: "Mercredi", heures: "[à compléter]" },
  { jour: "Jeudi", heures: "[à compléter]" },
  { jour: "Vendredi", heures: "[à compléter]" },
  { jour: "Samedi", heures: "Fermé" },
  { jour: "Dimanche", heures: "Fermé" },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-fond">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h1 className="font-title text-5xl md:text-6xl text-texte font-semibold mb-6">
            Prendre rendez-vous
          </h1>
          <p className="text-texte/60 text-lg max-w-xl mx-auto mb-8">
            Prêt(e) à commencer ? Prenez rendez-vous directement en ligne ou
            contactez-moi par téléphone ou via le formulaire ci-dessous.
          </p>
          <Link
            href={CLIENT.doctolib}
            className="inline-flex items-center justify-center px-10 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-colors shadow-lg text-lg"
          >
            Réserver sur Doctolib
          </Link>
          <p className="mt-3 text-xs text-texte/30">
            Disponible 24h/24 · Confirmation immédiate
          </p>
        </div>
      </section>

      {/* Infos + Formulaire */}
      <section className="pb-20 md:pb-28 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Coordonnées */}
            <div>
              <h2 className="font-title text-3xl md:text-4xl text-texte font-semibold mb-8">
                Informations pratiques
              </h2>

              {/* Adresse */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-texte mb-1">Cabinet</p>
                  <address className="not-italic text-texte/60 text-sm leading-relaxed">
                    <p>{CLIENT.adresse}</p>
                    <p>
                      {CLIENT.codePostal} {CLIENT.ville}
                    </p>
                    <p className="mt-1">
                      Parc National des Cévennes, {CLIENT.departement}
                    </p>
                  </address>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-texte mb-1">Téléphone</p>
                  <a
                    href={`tel:${CLIENT.telephoneRaw}`}
                    className="text-sage hover:text-sage-dark transition-colors font-medium"
                  >
                    {CLIENT.telephone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-texte mb-1">Email</p>
                  <a
                    href={`mailto:${CLIENT.email}`}
                    className="text-sage hover:text-sage-dark transition-colors text-sm break-all"
                  >
                    {CLIENT.email}
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gris rounded-2xl p-6 mb-8">
                <h3 className="font-title text-xl font-semibold text-texte mb-4">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2">
                  {horaires.map((h) => (
                    <div
                      key={h.jour}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-texte/70">{h.jour}</span>
                      <span
                        className={`font-medium ${
                          h.heures === "Fermé"
                            ? "text-texte/30"
                            : "text-texte"
                        }`}
                      >
                        {h.heures}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-texte/40 italic">
                  Horaires à personnaliser
                </p>
              </div>

              {/* Téléconsultation */}
              <div className="bg-sage/10 border border-sage/20 rounded-2xl p-5">
                <p className="text-sage font-semibold text-sm mb-1">
                  Téléconsultation disponible
                </p>
                <p className="text-texte/65 text-sm">
                  Consultations à distance disponibles dans toute la France,
                  via visioconférence sécurisée. Même accompagnement, même
                  tarif qu&apos;en présentiel.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="font-title text-3xl md:text-4xl text-texte font-semibold mb-8">
                Envoyer un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section className="pb-20 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gris h-80 md:h-96">
            <iframe
              title="Localisation du cabinet de Marina Reidt Lebleu, diététicienne au Vigan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.123!2d3.6065!3d43.9935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4a32b6f0a0001%3A0x1!2s2+chemin+Virenque%2C+30120+Le+Vigan%2C+France!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-texte/40 mt-3">
            2 chemin Virenque, 30120 Le Vigan — Parc National des Cévennes
          </p>
        </div>
      </section>
    </>
  );
}
