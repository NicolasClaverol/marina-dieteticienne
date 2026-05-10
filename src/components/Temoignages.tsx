import { TEMOIGNAGES } from "@/lib/constants";

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${note} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < note ? "text-terra" : "text-gris"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Temoignages() {
  return (
    <section className="py-20 md:py-28 bg-sage-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Témoignages
          </p>
          <h2 className="font-title text-4xl md:text-5xl text-texte font-semibold mb-4">
            Ce qu&apos;ils disent
          </h2>
          <p className="text-texte/60 max-w-md mx-auto">
            Des retours authentiques de patients qui ont fait confiance à mon
            accompagnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEMOIGNAGES.map((t) => (
            <blockquote
              key={t.prenom}
              className="bg-fond rounded-2xl p-8 shadow-sm border border-white flex flex-col"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-sage/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-texte/75 text-sm leading-relaxed flex-1 mb-6">
                {t.texte}
              </p>
              <footer>
                <StarRating note={t.note} />
                <p className="mt-2 font-medium text-texte text-sm">
                  {t.prenom}
                </p>
                <p className="text-texte/40 text-xs">{t.localisation}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-texte/30 italic">
          * Prénoms modifiés, témoignages à remplacer par des avis réels
        </p>
      </div>
    </section>
  );
}
