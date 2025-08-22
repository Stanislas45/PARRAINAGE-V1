import React, { useMemo, useState } from "react";

/** ⚙️ Configuration rapide — adapte si besoin */
const CONFIG = {
  siteName: "Parrainage Fortuneo",
  bankName: "Fortuneo",
  referralCode: "12550423",
  filleulBonus: 80,    // prime de bienvenue (indicative)
  parrainBonus: 50,    // gain par parrainage (indicatif)
  totalOffer: 130,     // mise en avant globale
  deadline: "31 août 2025",
  contactEmail: "stanislas.aumont@gmail.com",
  legalEntity: "Stanislas Aumont",
  // Lien officiel + tracking UTM
  ctaUrl:
    "https://www.fortuneo.fr/banque/offre-parrainage?utm_source=parrainage-stanislas&utm_medium=siteperso&utm_campaign=parrainage130",
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
    {children}
  </span>
);
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>{children}</div>
);
const PrimaryButton = ({ href, onClick, children }) => (
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
    >
      {children}
    </button>
  )
);

/* ----------------------- HERO ----------------------- */
function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
      <Container className="relative z-10 py-16 sm:py-20">
        <nav className="mb-10 flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">🏦</span>
            <span>{CONFIG.siteName}</span>
          </div>
          <div className="hidden gap-6 sm:flex">
            <a href="#about" className="hover:text-white">La banque</a>
            <a href="#comment" className="hover:text-white">Fonctionnement</a>
            <a href="#offres" className="hover:text-white">Offres</a>
            <a href="#calcul" className="hover:text-white">Calculateur</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </nav>

        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <Badge>Parrainage {CONFIG.bankName}</Badge>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Parrainage {CONFIG.bankName} : vos{" "}
              <span className="underline decoration-white/60 decoration-4 underline-offset-4">
                {CONFIG.totalOffer}€
              </span>{" "}
              avant le {CONFIG.deadline}
            </h1>

            <p className="mt-4 text-white/90">
              Ouvrez votre compte {CONFIG.bankName}, indiquez le code parrain et complétez les étapes.
              Le parrain reçoit {CONFIG.parrainBonus}€ par filleul validé.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimaryButton href={CONFIG.ctaUrl}>🚀 Ouvrir un compte</PrimaryButton>

              <button
                onClick={copy}
                className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-white/90 ring-1 ring-white/25 backdrop-blur hover:bg-white/15"
              >
                <span className="font-mono">{CONFIG.referralCode}</span>
                <span className="opacity-70 group-hover:opacity-100">
                  {copied ? "(copié)" : "Copier le code"}
                </span>
              </button>
            </div>

            <p className="mt-3 text-sm text-white/80">
              Site personnel d’information. Offre officielle soumise à conditions (montants susceptibles d’évoluer).
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/95 p-6 text-gray-800 shadow-xl sm:ml-auto">
            <h2 className="text-lg font-semibold">Comment profiter de l’offre</h2>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">1</span>
                Demande d’ouverture en ligne
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">2</span>
                Saisir le code parrain <b>{CONFIG.referralCode}</b>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">3</span>
                Activer le compte + 1ère opération si requis
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">4</span>
                Versement de la prime
              </li>
            </ol>
            <a href="#comment" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline">En savoir plus</a>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ------------------- A PROPOS DE LA BANQUE ------------------- */
function AboutBank() {
  return (
    <section id="about" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8 text-center">
          <Badge>Pourquoi choisir {CONFIG.bankName} ?</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une banque en ligne fiable et complète
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            {CONFIG.bankName} est une banque 100% en ligne appartenant au Crédit Mutuel Arkéa, un grand groupe bancaire
            français. Récompensée régulièrement pour la qualité de ses services, elle accompagne déjà un large public.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Fiabilité & sécurité</h3>
            <p className="mt-2 text-gray-600">
              Établissement agréé et protégé par la garantie des dépôts (jusqu’à 100 000€).
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Services complets</h3>
            <p className="mt-2 text-gray-600">
              Compte courant, épargne, assurance-vie, bourse… tout en ligne et sans frais cachés.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Carte bancaire gratuite</h3>
            <p className="mt-2 text-gray-600">
              Cartes Mastercard (jusqu’à World Elite) sans cotisation, sous conditions d’utilisation.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Carte virtuelle</h3>
            <p className="mt-2 text-gray-600">
              Numéro à usage unique pour vos achats en ligne : simple et ultra-sécurisé.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Application mobile</h3>
            <p className="mt-2 text-gray-600">
              Pilotage de la carte, virements, notifications… l’essentiel au bout des doigts.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Frais réduits</h3>
            <p className="mt-2 text-gray-600">
              Tenue de compte, virements, carte : la plupart des services sont gratuits.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- STEPS ----------------------- */
function Steps() {
  const items = [
    { t: "Demande d’ouverture", d: "Formulaire en ligne + justificatifs." },
    { t: "Code parrain", d: `Entrez ${CONFIG.referralCode} dans la case dédiée.` },
    { t: "Activation", d: "Validation du dossier, activation, 1ère opération si demandée." },
    { t: "Prime", d: `Créditée après validation. Parrain : ${CONFIG.parrainBonus}€ par filleul.` },
  ];
  return (
    <section id="comment" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Mode d’emploi</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comment ça marche ?</h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Processus rapide et 100% en ligne. Les montants sont indicatifs : vérifiez toujours l’offre officielle.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Card key={i}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.t}</h3>
              <p className="mt-2 text-gray-600">{it.d}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- OFFERS ----------------------- */
function Offers() {
  const offers = [
    { title: "Prime de bienvenue", amount: CONFIG.filleulBonus, desc: "Offre sous conditions d’éligibilité et d’activation." },
    { title: "Parrainage", amount: CONFIG.parrainBonus, desc: "Gain par filleul validé, cumulable selon limites en vigueur." },
  ];
  return (
    <section id="offres" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Offres</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ce que vous pouvez obtenir</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {offers.map((o, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{o.title}</h3>
                  <p className="text-sm text-gray-500">{o.desc}</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-4 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-100">+{o.amount}€</div>
              </div>
              <PrimaryButton href="#calcul">Simuler mes gains</PrimaryButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- CALCULATOR ----------------------- */
function Calculator() {
  const [filleuls, setFilleuls] = useState(3);
  const [inclureBienvenue, setInclureBienvenue] = useState(true);

  const gainParrain = useMemo(() => Math.max(0, Number(filleuls) || 0) * CONFIG.parrainBonus, [filleuls]);
  const bonusBienvenue = inclureBienvenue ? CONFIG.filleulBonus : 0;
  const total = gainParrain + bonusBienvenue;

  return (
    <section id="calcul" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Simulateur</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Calculez vos gains</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <label className="block text-sm font-medium text-gray-700">Nombre de filleuls</label>
            <input
              type="number" min={0} value={filleuls}
              onChange={(e) => setFilleuls(e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
            />
            <div className="mt-4 flex items-center gap-3">
              <input id="b" type="checkbox" checked={inclureBienvenue} onChange={(e)=>setInclureBienvenue(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"/>
              <label htmlFor="b" className="text-gray-700">Inclure ma prime de bienvenue (+{CONFIG.filleulBonus}€)</label>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <dt className="text-sm text-gray-500">Gains parrain</dt>
                <dd className="text-2xl font-semibold text-gray-900">{gainParrain.toLocaleString("fr-FR")} €</dd>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <dt className="text-sm text-gray-500">Prime bienvenue (moi)</dt>
                <dd className="text-2xl font-semibold text-gray-900">{bonusBienvenue.toLocaleString("fr-FR")} €</dd>
              </div>
              <div className="col-span-2 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <dt className="text-sm text-emerald-700">Estimation totale</dt>
                <dd className="mt-1 text-3xl font-bold text-emerald-800">{total.toLocaleString("fr-FR")} €</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-gray-500">Simulation indicative, non contractuelle.</p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Conseils pour parrainer</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>Partagez votre code {CONFIG.referralCode} à vos proches.</li>
              <li>Expliquez les étapes et répondez aux questions courantes.</li>
              <li>Rappelez les avantages du compte {CONFIG.bankName}.</li>
              <li>Mettez à jour les montants si l’offre évolue.</li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- FAQ ----------------------- */
function FAQ() {
  const faqs = [
    { q: "Qui est éligible ?", a: "Les nouveaux clients répondant aux critères de l’offre officielle de la banque." },
    { q: "Quand la prime est-elle versée ?", a: "Après validation du dossier et réalisation des éventuelles opérations requises." },
    { q: "Combien de filleuls puis-je avoir ?", a: "Selon le plafond fixé par la banque (variable dans le temps)." },
    { q: "Cumuls d’offres ?", a: "Voir conditions de cumul précisées par la banque." },
  ];
  return (
    <section id="faq" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>FAQ</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Questions fréquentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-gray-200 bg-white p-5">
              <summary className="cursor-pointer select-none list-none font-medium text-gray-900 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- FOOTER ----------------------- */
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-sm">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">🏦</span>
            <span className="font-semibold">{CONFIG.siteName}</span>
          </div>
          <p className="mt-3 max-w-xs text-gray-600">
            Site d’informations non officiel. Les montants et conditions sont indicatifs et peuvent changer.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>Email : <a className="text-emerald-700 hover:underline" href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a></li>
            <li>Éditeur : {CONFIG.legalEntity}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Liens utiles</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li><a className="text-emerald-700 hover:underline" href="#about">À propos de la banque</a></li>
            <li><a className="text-emerald-700 hover:underline" href="#comment">Comment ça marche</a></li>
            <li><a className="text-emerald-700 hover:underline" href="#offres">Offres & montants</a></li>
            <li><a className="text-emerald-700 hover:underline" href="#faq">FAQ</a></li>
          </ul>
        </div>
      </Container>
      <Container>
        <p className="mt-8 text-center text-gray-500">© {new Date().getFullYear()} {CONFIG.siteName}. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}

/* ----------------------- APP ----------------------- */
export default function App() {
  return (
    <main className="font-sans antialiased">
      <Hero />
      <AboutBank />
      <Steps />
      <Offers />
      <Calculator />
      <FAQ />
      <Footer />
    </main>
  );
}
