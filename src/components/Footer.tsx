import Link from "next/link";
import { CLIENT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-texte text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-title text-xl text-white font-semibold mb-1">
              {CLIENT.nom}
            </p>
            <p className="text-sm text-white/50 mb-4">{CLIENT.titre}</p>
            <p className="text-sm mb-1">N° ADELI : {CLIENT.adeli}</p>
            <p className="text-xs text-white/40 mt-4 max-w-xs">
              Cabinet au cœur du Parc National des Cévennes, Le Vigan (30).
              Téléconsultation disponible dans toute la France.
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-2">
              <p className="text-white/70">{CLIENT.adresse}</p>
              <p className="text-white/70">
                {CLIENT.codePostal} {CLIENT.ville}
              </p>
              <a
                href={`tel:${CLIENT.telephoneRaw}`}
                className="block text-white/70 hover:text-white transition-colors"
              >
                {CLIENT.telephone}
              </a>
              <a
                href={`mailto:${CLIENT.email}`}
                className="block text-white/70 hover:text-white transition-colors break-all"
              >
                {CLIENT.email}
              </a>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav aria-label="Navigation pied de page">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className="hover:text-white transition-colors"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultations"
                    className="hover:text-white transition-colors"
                  >
                    Consultations & tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact & RDV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentions-legales"
                    className="hover:text-white transition-colors"
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-white/30">
            © {year} {CLIENT.nom} — Tous droits réservés
          </p>
          <p className="text-xs text-white/30">
            {CLIENT.ville}, {CLIENT.departement}
          </p>
        </div>
      </div>
    </footer>
  );
}
