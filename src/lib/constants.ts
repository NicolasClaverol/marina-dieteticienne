export const CLIENT = {
  nom: "Marina Reidt Lebleu",
  titre: "Diététicienne Nutritionniste",
  adresse: "2 chemin Virenque, Parc National des Cévennes",
  codePostal: "30120",
  ville: "Le Vigan",
  telephone: "06 61 30 90 37",
  telephoneRaw: "0661309037",
  email: "contact@marina-dieteticienne.fr", // à compléter
  adeli: "[ADELI]", // à compléter
  doctolib: "#", // à remplacer par le vrai lien Doctolib
  departement: "Gard (30)",
  region: "Occitanie",
} as const;

export const SITE = {
  url: "https://marina-dieteticienne.fr",
  nom: `${CLIENT.nom} — ${CLIENT.titre}`,
  description:
    "Diététicienne nutritionniste au cabinet du Vigan et en téléconsultation. Accompagnement personnalisé et bienveillant au cœur des Cévennes, Gard (30).",
} as const;

export const SPECIALITES = [
  {
    titre: "Perte de poids",
    description:
      "Un accompagnement durable, sans régimes restrictifs ni culpabilité, pour retrouver un poids de forme et une relation sereine avec la nourriture.",
    emoji: "⚖️",
  },
  {
    titre: "Troubles digestifs",
    description:
      "Syndrome de l'intestin irritable, ballonnements, constipation, MICI : une approche nutritionnelle adaptée pour retrouver confort et bien-être digestif.",
    emoji: "🌿",
  },
  {
    titre: "Nutrition sportive",
    description:
      "Optimisation des performances, récupération musculaire et gestion de l'énergie pour les sportifs amateurs et confirmés.",
    emoji: "🏃",
  },
  {
    titre: "Grossesse & allaitement",
    description:
      "Conseils nutritionnels adaptés à chaque étape de la maternité pour préserver la santé de la maman et favoriser le développement du bébé.",
    emoji: "🤱",
  },
  {
    titre: "Diabète & maladies métaboliques",
    description:
      "Éducation nutritionnelle et suivi personnalisé pour les personnes diabétiques, en surcharge pondérale ou présentant un syndrome métabolique.",
    emoji: "🫀",
  },
  {
    titre: "Troubles du comportement alimentaire",
    description:
      "Accompagnement bienveillant et sans jugement pour les personnes souffrant d'anorexie, boulimie, hyperphagie ou d'une relation difficile à l'alimentation.",
    emoji: "💚",
  },
] as const;

export const TARIFS = [
  {
    type: "Bilan initial",
    duree: "1h",
    prix: 55,
    description:
      "Premier rendez-vous : anamnèse complète, analyse de vos habitudes alimentaires, définition des objectifs et remise d'un bilan nutritionnel personnalisé.",
  },
  {
    type: "Consultation de suivi",
    duree: "45 min",
    prix: 45,
    description:
      "Faire le point sur votre évolution, ajuster le programme alimentaire et répondre à toutes vos questions.",
  },
  {
    type: "Téléconsultation",
    duree: "45 min",
    prix: 45,
    description:
      "Même accompagnement qu'en cabinet, accessible depuis toute la France via un outil de visioconférence sécurisé.",
  },
  {
    type: "Enfant & adolescent",
    duree: "45 min",
    prix: 45,
    description:
      "Suivi adapté aux besoins spécifiques des enfants et adolescents, en impliquant la famille dans la démarche.",
  },
] as const;

export const TEMOIGNAGES = [
  {
    prenom: "Sophie",
    localisation: "Le Vigan",
    texte:
      "Après des années de régimes inefficaces, Marina m'a aidée à changer durablement mon rapport à l'alimentation. Son approche bienveillante, sans interdits, m'a permis de retrouver un poids de forme et surtout de ne plus le reprendre. Je recommande vivement !",
    note: 5,
  },
  {
    prenom: "Thomas",
    localisation: "Montpellier",
    texte:
      "Je souffre du syndrome de l'intestin irritable depuis des années. Grâce aux conseils de Marina en téléconsultation, j'ai enfin identifié mes aliments déclencheurs et mon quotidien s'est transformé. Professionnelle, à l'écoute et très compétente.",
    note: 5,
  },
  {
    prenom: "Camille",
    localisation: "Ganges",
    texte:
      "Suivi pendant ma grossesse puis l'allaitement. Marina a su m'accompagner avec douceur et précision, en tenant compte de mes goûts et de mes contraintes. Je me suis sentie entre de bonnes mains du début à la fin. Merci beaucoup !",
    note: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Les consultations sont-elles remboursées par la mutuelle ?",
    reponse:
      "Les consultations chez un diététicien libéral ne sont pas remboursées par l'Assurance Maladie. Cependant, de nombreuses mutuelles proposent un remboursement partiel ou total pour les consultations en nutrition et diététique. Je vous invite à vérifier les conditions de prise en charge auprès de votre complémentaire santé. Une facture vous est systématiquement remise pour faciliter vos démarches.",
  },
  {
    question: "Combien de temps dure une consultation ?",
    reponse:
      "Le bilan initial dure environ 1 heure, ce qui me permet de bien vous connaître, d'analyser en profondeur vos habitudes alimentaires, votre mode de vie et vos objectifs. Les consultations de suivi durent 45 minutes. Ces durées sont pensées pour vous offrir un accompagnement de qualité, vraiment adapté à votre situation.",
  },
  {
    question: "Est-il possible de consulter à distance ?",
    reponse:
      "Oui, tout à fait ! Je propose des téléconsultations accessibles depuis toute la France, via un outil de visioconférence sécurisé. Vous bénéficiez du même accompagnement qu'en cabinet, depuis le confort de votre domicile. Le tarif est identique à une consultation en présentiel.",
  },
  {
    question: "Est-ce que vous imposez un régime strict ?",
    reponse:
      "Non, absolument pas. Mon approche est à l'opposé des régimes restrictifs et culpabilisants. Nous construisons ensemble une façon de manger qui vous convienne vraiment — en respectant vos goûts, votre culture alimentaire et vos contraintes du quotidien — pour que les changements soient durables et sans frustration.",
  },
  {
    question: "Combien de temps dure un suivi nutritionnel ?",
    reponse:
      "La durée du suivi varie selon vos objectifs. En général, je recommande un accompagnement sur 3 à 6 mois pour ancrer durablement de nouvelles habitudes. La fréquence des rendez-vous est adaptée à votre rythme, toutes les 2 à 4 semaines au début, puis plus espacés. Certains patients optent pour un suivi ponctuel, d'autres préfèrent un accompagnement sur le long terme — nous en discutons ensemble lors du premier rendez-vous.",
  },
] as const;
