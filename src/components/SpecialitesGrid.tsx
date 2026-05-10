import { SPECIALITES } from "@/lib/constants";

export default function SpecialitesGrid() {
  return (
    <section className="py-20 md:py-28 bg-gris">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Domaines d&apos;expertise
          </p>
          <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold mb-4">
            Mes spécialités
          </h2>
          <p className="text-texte/60 max-w-xl mx-auto text-lg">
            Chaque situation est unique. J&apos;adapte mon accompagnement à vos besoins
            spécifiques, quels que soient votre âge ou votre profil de santé.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALITES.map((item) => (
            <article
              key={item.titre}
              className="bg-fond rounded-2xl p-7 border border-gris hover:border-sage/30 hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="text-3xl mb-4"
                role="img"
                aria-label={item.titre}
              >
                {item.emoji}
              </div>
              <h3 className="font-title text-xl font-semibold text-texte mb-3 group-hover:text-sage transition-colors">
                {item.titre}
              </h3>
              <p className="text-texte/65 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
