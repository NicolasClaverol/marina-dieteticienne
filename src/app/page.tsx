import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SpecialitesGrid from "@/components/SpecialitesGrid";
import Temoignages from "@/components/Temoignages";
import FAQ from "@/components/FAQ";
import { CLIENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Diététicienne Nutritionniste au Vigan & Cévennes",
  description:
    "Marina Reidt Lebleu, diététicienne nutritionniste à Le Vigan (Gard). Accompagnement personnalisé en cabinet et en téléconsultation. Prise en charge perte de poids, diabète, TCA, nutrition sportive.",
};

const valeurs = [
  {
    titre: "Bienveillance",
    description:
      "Chaque parcours est accueilli sans jugement. Je crée un espace de confiance où vous pouvez parler librement de votre relation à l'alimentation et à votre corps.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    titre: "Personnalisation",
    description:
      "Pas de programme standard, pas de régime imposé. Chaque recommandation est construite en tenant compte de vos goûts, de votre mode de vie, de votre histoire et de vos objectifs.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    titre: "Durabilité",
    description:
      "Mon objectif est de vous rendre autonome. L'alimentation doit être source de plaisir, pas de contrainte. Les changements que nous construisons ensemble sont pensés pour durer toute une vie.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const etapes = [
  {
    numero: "01",
    titre: "Premier rendez-vous",
    description:
      "Lors de cette consultation d'une heure, nous faisons connaissance. J'analyse vos habitudes alimentaires, votre mode de vie, vos antécédents et vos objectifs. Vous repartez avec un premier bilan nutritionnel personnalisé.",
  },
  {
    numero: "02",
    titre: "Programme sur-mesure",
    description:
      "À partir du bilan, je construis avec vous un plan alimentaire adapté, sans interdits et sans frustration. Il respecte vos goûts, vos contraintes pratiques et votre budget.",
  },
  {
    numero: "03",
    titre: "Suivi & autonomie",
    description:
      "Des consultations de suivi régulières permettent d'ajuster le programme, célébrer les progrès et lever les obstacles. L'objectif : que vous deveniez progressivement autonome dans vos choix alimentaires.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Mon approche */}
      <section className="py-20 md:py-28 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
              Mon approche
            </p>
            <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold mb-4">
              Une nutrition humaine et durable
            </h2>
            <p className="text-texte/60 max-w-xl mx-auto text-lg">
              Installée au cœur du Parc National des Cévennes, j&apos;ai fait de
              l&apos;authenticité et du respect de la personne les piliers de ma
              pratique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v) => (
              <div
                key={v.titre}
                className="bg-gris rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-title text-2xl font-semibold text-texte mb-3">
                  {v.titre}
                </h3>
                <p className="text-texte/65 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpecialitesGrid />

      {/* Comment ça se passe */}
      <section className="py-20 md:py-28 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
              Le parcours
            </p>
            <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold">
              Comment ça se passe ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {etapes.map((e) => (
              <div key={e.numero} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage text-white font-title text-2xl font-semibold mb-5 shadow-md">
                  {e.numero}
                </div>
                <h3 className="font-title text-2xl font-semibold text-texte mb-3">
                  {e.titre}
                </h3>
                <p className="text-texte/65 text-sm leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Temoignages />
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl md:text-5xl text-white font-semibold mb-5">
            Prêt(e) à prendre soin de vous ?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Faites le premier pas vers un équilibre alimentaire qui vous
            ressemble. Je reçois en cabinet à Le Vigan et en téléconsultation
            partout en France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CLIENT.doctolib}
              className="inline-flex items-center justify-center px-8 py-4 bg-terra text-white font-medium rounded-full hover:bg-terra-dark transition-all shadow-lg hover:shadow-xl"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
