import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  nom: string;
  email: string;
  telephone?: string;
  motif: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const { nom, email, motif, message } = body;

  if (!nom?.trim() || !email?.trim() || !motif?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Champs obligatoires manquants" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  // En développement : log dans la console
  // En production : remplacer par Resend, Nodemailer ou autre service email
  console.log("=== Nouveau message de contact ===");
  console.log("Nom :", nom);
  console.log("Email :", email);
  console.log("Téléphone :", body.telephone || "—");
  console.log("Motif :", motif);
  console.log("Message :", message);
  console.log("==================================");

  return NextResponse.json({ success: true }, { status: 200 });
}
