import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez le parcours et la philosophie de ${CLIENT.nom}, diététicienne nutritionniste diplômée installée à Le Vigan dans les Cévennes (Gard). Accompagnement bienveillant en cabinet et en téléconsultation.`,
};

const formations = [
  {
    annee: "20XX",
    diplome: "DUT Génie Biologique — option Diététique",
    etablissement: "IUT [à compléter], France",
  },
  {
    annee: "20XX",
    diplome: "Licence Professionnelle Nutrition & Alimentation",
    etablissement: "[Université à compléter]",
  },
  {
    annee: "20XX",
    diplome: "Master Sciences de la Nutrition",
    etablissement: "[Université à compléter]",
  },
  {
    annee: "20XX",
    diplome: "Formation — Approche de la pleine conscience alimentaire",
    etablissement: "Formation continue",
  },
  {
    annee: "20XX",
    diplome: "Formation — Prise en charge des troubles du comportement alimentaire",
    etablissement: "Formation continue",
  },
];

const valeurs = [
  {
    titre: "Écoute active",
    description:
      "Avant tout conseil, j'écoute. Comprendre votre histoire, vos émotions autour de la nourriture et vos contraintes du quotidien est la première étape de tout accompagnement réussi.",
  },
  {
    titre: "Sans régime imposé",
    description:
      "Les régimes restrictifs ne fonctionnent pas sur le long terme. Mon rôle est de vous aider à trouver votre propre équilibre, en respectant vos goûts et votre culture alimentaire.",
  },
  {
    titre: "Plaisir alimentaire",
    description:
      "Manger doit rester un plaisir. Mon approche intègre toujours la notion de plaisir, car une alimentation durable ne peut pas être synonyme de frustration.",
  },
  {
    titre: "Approche globale",
    description:
      "L'alimentation ne peut pas être séparée du reste : sommeil, stress, activité physique, vie sociale. J'aborde la nutrition dans toute sa complexité humaine.",
  },
];

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Avatar / Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div
                  className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl bg-sage/10 flex items-center justify-center overflow-hidden shadow-lg"
                  aria-label="Photo de Marina Reidt Lebleu (à remplacer)"
                >
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-sage flex items-center justify-center mx-auto mb-4 shadow-inner">
                      <span
                        className="font-title text-5xl text-white font-semibold"
                        aria-hidden="true"
                      >
                        MRL
                      </span>
                    </div>
                    <p className="text-sage/50 text-xs">Photo à ajouter</p>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-terra text-white px-4 py-3 rounded-xl shadow-lg text-center">
                  <p className="text-xs font-medium">N° ADELI</p>
                  <p className="font-bold text-sm">{CLIENT.adeli}</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
                À propos
              </p>
              <h1 className="font-title text-4xl md:text-5xl text-texte font-semibold mb-6">
                {CLIENT.nom}
              </h1>
              <p className="text-terra font-medium mb-6">{CLIENT.titre}</p>
              <div className="space-y-4 text-texte/70 leading-relaxed">
                <p>
                  Diététicienne nutritionniste diplômée d&apos;État, je me suis
                  installée en libéral à Le Vigan, au cœur du Parc National des
                  Cévennes, attirée par la richesse de ce territoire et son
                  rapport authentique à la nature et à l&apos;alimentation.
                </p>
                <p>
                  Après plusieurs années d&apos;expérience en milieu hospitalier et
                  en structures de soins, j&apos;ai choisi la pratique libérale pour
                  offrir à chaque patient le temps et l&apos;attention qu&apos;il mérite.
                  C&apos;est ici, dans ce cadre privilégié, que je reçois en cabinet
                  — et partout en France grâce à la téléconsultation.
                </p>
                <p>
                  Ma conviction profonde : il n&apos;existe pas de régime universel.
                  Chaque personne est unique, avec son histoire, ses habitudes,
                  ses contraintes et ses plaisirs. Mon rôle est de vous
                  accompagner pour trouver{" "}
                  <strong className="text-texte font-medium">
                    votre propre équilibre alimentaire
                  </strong>
                  , celui qui sera naturel et agréable à maintenir dans la
                  durée.
                </p>
                <p>
                  Je travaille en collaboration avec les médecins généralistes,
                  endocrinologues, gastro-entérologues et autres professionnels
                  de santé du territoire cévenol pour vous offrir un
                  accompagnement intégré et coordonné.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href={CLIENT.doctolib}
                  className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-colors shadow-sm"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 md:py-24 bg-gris">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
              Parcours
            </p>
            <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold">
              Formation & diplômes
            </h2>
          </div>
          <div className="space-y-4">
            {formations.map((f, i) => (
              <div
                key={i}
                className="bg-fond rounded-2xl p-6 flex items-start gap-5 shadow-sm"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center">
                  <span className="text-sage font-semibold text-sm">
                    {f.annee}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-texte">{f.diplome}</p>
                  <p className="text-texte/50 text-sm mt-0.5">
                    {f.etablissement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-24 bg-fond">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
              Philosophie
            </p>
            <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold">
              Ce qui guide ma pratique
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-gris rounded-2xl p-7">
                <div className="w-2 h-10 bg-sage rounded-full mb-4" aria-hidden="true" />
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

      {/* Cabinet & localisation */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-title text-4xl md:text-5xl text-white font-semibold mb-6">
            Un cabinet au cœur des Cévennes
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Mon cabinet est situé au{" "}
            <strong className="text-white">2 chemin Virenque</strong>, à Le
            Vigan (30120), au sein du Parc National des Cévennes. Accessible
            depuis Le Vigan, Ganges, Saint-Hippolyte-du-Fort, Sumène, La
            Cadière-et-Cambo et les communes environnantes.
          </p>
          <p className="text-white/75 text-lg mb-10">
            Je propose également des <strong className="text-white">téléconsultations</strong> accessibles depuis toute la France,
            pour celles et ceux qui ne peuvent se déplacer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage font-medium rounded-full hover:bg-fond transition-colors shadow-lg"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
