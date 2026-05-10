import Link from "next/link";
import Image from "next/image";
import { CLIENT } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-sage overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-16 w-80 h-80 bg-white/5 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/3 rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="inline-block text-terra text-xs font-semibold tracking-widest uppercase mb-6 bg-white/10 px-4 py-2 rounded-full">
              Diététicienne Nutritionniste · Le Vigan · Cévennes (30)
            </p>
            <h1 className="font-title text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] mb-6">
              Retrouvez l&apos;équilibre qui vous ressemble
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Un accompagnement nutritionnel bienveillant et personnalisé, au
              cœur du Parc National des Cévennes. En cabinet à Le Vigan ou en
              téléconsultation partout en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={CLIENT.doctolib}
                className="inline-flex items-center justify-center px-8 py-4 bg-terra text-white font-medium rounded-full hover:bg-terra-dark transition-all shadow-lg hover:shadow-xl"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
              >
                Découvrir mon approche
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-terra"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Cabinet au Vigan (30120)
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-terra"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Téléconsultation France entière
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/420x480/3a6347/FAFAF7?text=Photo+à+remplacer"
                alt="Marina Reidt Lebleu, diététicienne nutritionniste au cabinet du Vigan dans les Cévennes"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 320px, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
