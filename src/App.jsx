import React, { useMemo, useState } from "react";

/** ⚙️ Configuration rapide — adapte si besoin */
const CONFIG = {
  siteName: "Parrainage Fortuneo",
  bankName: "Fortuneo",
  referralCode: "12550423",
  filleulBonus: 130, // prime de bienvenue indicative
  parrainBonus: 110, // gain par parrainage indicatif
  totalOffer: 130, // mise en avant globale indicative
  deadline: "31 décembre 2026",
  contactEmail: "stanislas.aumont@gmail.com",
  legalEntity: "Stanislas Aumont",

  // Lien officiel Fortuneo + tracking UTM
  ctaUrl:
    "https://www.fortuneo.fr/parrainage?utm_source=parrainage-stanislas&utm_medium=siteperso&utm_campaign=parrainage130",
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

const PrimaryButton = ({ href, onClick, children }) => {
  const isExternal = href && !href.startsWith("#");

  return href ? (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
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
  );
};

/* ----------------------- HERO ----------------------- */
function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert(`Code parrain : ${CONFIG.referralCode}`);
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
      <Container className="relative z-10 py-16 sm:py-20">
        <nav className="mb-10 flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
              🏦
            </span>
            <span>{CONFIG.siteName}</span>
          </div>

          <div className="hidden gap-6 sm:flex">
            <a href="#about" className="hover:text-white">
              La banque
            </a>
            <a href="#comment" className="hover:text-white">
              Fonctionnement
            </a>
            <a href="#offres" className="hover:text-white">
              Offres
            </a>
            <a href="#calcul" className="hover:text-white">
              Calculateur
            </a>
            <a href="#guide" className="hover:text-white">
              Guide
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <Badge>Code parrainage {CONFIG.bankName}</Badge>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Code parrainage {CONFIG.bankName} 2026 : jusqu’à{" "}
              <span className="underline decoration-white/60 decoration-4 underline-offset-4">
                {CONFIG.totalOffer}€
              </span>{" "}
              offerts
            </h1>

            <p className="mt-4 text-white/90">
              Ouvrez votre compte {CONFIG.bankName}, saisissez le code parrain{" "}
              <strong>{CONFIG.referralCode}</strong> lors de l’inscription et profitez de
              l’offre de parrainage en cours, selon les conditions officielles Fortuneo.
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
              Site personnel d’information non affilié à Fortuneo. Les montants et
              conditions peuvent évoluer : vérifiez toujours l’offre officielle avant de
              souscrire.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/95 p-6 text-gray-800 shadow-xl sm:ml-auto">
            <h2 className="text-lg font-semibold">Comment profiter de l’offre</h2>

            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  1
                </span>
                Demande d’ouverture en ligne
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  2
                </span>
                Saisir le code parrain <b>{CONFIG.referralCode}</b>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  3
                </span>
                Activer le compte et réaliser la première opération si requis
              </li>

              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  4
                </span>
                Versement de la prime après validation
              </li>
            </ol>

            <a
              href="#comment"
              className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline"
            >
              En savoir plus
            </a>
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

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            {CONFIG.bankName} est une banque en ligne française proposant un compte
            courant, des cartes bancaires, de l’épargne, de l’assurance-vie et des
            services d’investissement. Le parrainage permet, sous conditions, de
            bénéficier d’une prime lors de l’ouverture d’un compte.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Banque en ligne</h3>
            <p className="mt-2 text-gray-600">
              Gestion du compte, virements, cartes et suivi des opérations depuis l’espace
              client et l’application mobile.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Services complets</h3>
            <p className="mt-2 text-gray-600">
              Compte courant, cartes bancaires, épargne, assurance-vie, bourse et crédit,
              selon les produits disponibles.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Carte bancaire</h3>
            <p className="mt-2 text-gray-600">
              Fortuneo propose plusieurs cartes bancaires, avec des conditions d’accès et
              d’utilisation à vérifier au moment de la souscription.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Code parrainage</h3>
            <p className="mt-2 text-gray-600">
              Le code parrain <strong>{CONFIG.referralCode}</strong> doit être saisi lors
              de l’ouverture du compte, dans l’espace prévu à cet effet.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Offre soumise à conditions</h3>
            <p className="mt-2 text-gray-600">
              Les montants, délais et critères d’éligibilité peuvent évoluer selon l’offre
              officielle Fortuneo en cours.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">Souscription en ligne</h3>
            <p className="mt-2 text-gray-600">
              L’ouverture du compte se fait en ligne avec les justificatifs demandés par
              Fortuneo.
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
    {
      t: "Demande d’ouverture",
      d: "Rendez-vous sur le site Fortuneo et commencez votre demande d’ouverture de compte.",
    },
    {
      t: "Code parrain",
      d: `Entrez le code parrainage ${CONFIG.referralCode} dans la case dédiée lors de l’inscription.`,
    },
    {
      t: "Activation du compte",
      d: "Complétez votre dossier, transmettez les justificatifs demandés et activez le compte selon les conditions.",
    },
    {
      t: "Versement de la prime",
      d: "La prime est versée après validation du dossier et respect des conditions de l’offre en cours.",
    },
  ];

  return (
    <section id="comment" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Mode d’emploi</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comment utiliser le code parrainage Fortuneo ?
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Le parrainage Fortuneo se fait directement lors de l’ouverture du compte. Il
            suffit d’indiquer le code parrain au bon moment, puis de respecter les étapes
            demandées par Fortuneo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Card key={i}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                {i + 1}
              </div>

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
    {
      title: "Prime filleul",
      amount: CONFIG.filleulBonus,
      desc: "Prime de bienvenue indicative, soumise aux conditions de l’offre Fortuneo en cours.",
    },
    {
      title: "Prime parrain",
      amount: CONFIG.parrainBonus,
      desc: "Gain indicatif par filleul validé, selon les limites et conditions de parrainage.",
    },
  ];

  return (
    <section id="offres" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Offres</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parrainage Fortuneo : quelles primes possibles ?
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Les montants ci-dessous sont donnés à titre indicatif. Avant toute ouverture
            de compte, vérifiez toujours les conditions et montants affichés sur le site
            officiel Fortuneo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {offers.map((o, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{o.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{o.desc}</p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  +{o.amount}€
                </div>
              </div>

              <div className="mt-5">
                <PrimaryButton href="#calcul">Simuler mes gains</PrimaryButton>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- CALCULATOR ----------------------- */
function Calculator() {
  const [filleuls, setFilleuls] = useState(1);
  const [inclureBienvenue, setInclureBienvenue] = useState(true);

  const gainParrain = useMemo(
    () => Math.max(0, Number(filleuls) || 0) * CONFIG.parrainBonus,
    [filleuls]
  );

  const bonusBienvenue = inclureBienvenue ? CONFIG.filleulBonus : 0;
  const total = gainParrain + bonusBienvenue;

  return (
    <section id="calcul" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Simulateur</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculez vos gains de parrainage Fortuneo
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Cette simulation est indicative et ne remplace pas les conditions officielles
            de Fortuneo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <label className="block text-sm font-medium text-gray-700">
              Nombre de filleuls
            </label>

            <input
              type="number"
              min={0}
              value={filleuls}
              onChange={(e) => setFilleuls(e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
            />

            <div className="mt-4 flex items-center gap-3">
              <input
                id="b"
                type="checkbox"
                checked={inclureBienvenue}
                onChange={(e) => setInclureBienvenue(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />

              <label htmlFor="b" className="text-gray-700">
                Inclure ma prime de bienvenue (+{CONFIG.filleulBonus}€)
              </label>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <dt className="text-sm text-gray-500">Gains parrain</dt>
                <dd className="text-2xl font-semibold text-gray-900">
                  {gainParrain.toLocaleString("fr-FR")} €
                </dd>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <dt className="text-sm text-gray-500">Prime bienvenue</dt>
                <dd className="text-2xl font-semibold text-gray-900">
                  {bonusBienvenue.toLocaleString("fr-FR")} €
                </dd>
              </div>

              <div className="col-span-2 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <dt className="text-sm text-emerald-700">Estimation totale</dt>
                <dd className="mt-1 text-3xl font-bold text-emerald-800">
                  {total.toLocaleString("fr-FR")} €
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-sm text-gray-500">
              Simulation indicative, non contractuelle. Les montants peuvent changer.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900">
              Conseils pour utiliser le parrainage
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>
                Copiez le code parrainage Fortuneo{" "}
                <strong>{CONFIG.referralCode}</strong>.
              </li>
              <li>
                Cliquez sur le bouton “Ouvrir un compte” pour accéder à la page Fortuneo.
              </li>
              <li>
                Saisissez le code parrain dans le formulaire d’ouverture de compte.
              </li>
              <li>
                Vérifiez les conditions de l’offre avant de finaliser votre inscription.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href={CONFIG.ctaUrl}>🚀 Ouvrir un compte</PrimaryButton>

              <button
                onClick={() => navigator.clipboard.writeText(CONFIG.referralCode)}
                className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-emerald-700 hover:bg-emerald-100"
              >
                Copier le code {CONFIG.referralCode}
              </button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- SEO CONTENT ----------------------- */
function SeoContent() {
  return (
    <section id="guide" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Badge>Guide parrainage Fortuneo</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Code parrainage Fortuneo 2026 : comment bénéficier de la prime ?
          </h2>

          <div className="mt-6 space-y-5 text-gray-700">
            <p>
              Le parrainage Fortuneo permet à un nouveau client, appelé filleul,
              d’ouvrir un compte en utilisant un code parrain. En renseignant le code{" "}
              <strong>{CONFIG.referralCode}</strong> lors de l’inscription, le filleul
              peut bénéficier de l’offre de parrainage en cours, sous réserve de respecter
              les conditions fixées par Fortuneo.
            </p>

            <p>
              Pour utiliser le code parrainage Fortuneo, commencez une demande
              d’ouverture de compte en ligne, puis saisissez le code parrain dans le champ
              prévu à cet effet. Le code à utiliser est :{" "}
              <strong>{CONFIG.referralCode}</strong>.
            </p>

            <p>
              Les montants affichés sur ce site, notamment la prime filleul de{" "}
              <strong>{CONFIG.filleulBonus}€</strong> et la prime parrain de{" "}
              <strong>{CONFIG.parrainBonus}€</strong>, sont donnés à titre indicatif. Les
              offres bancaires peuvent évoluer dans le temps. Il est donc important de
              vérifier les conditions officielles Fortuneo avant toute souscription.
            </p>

            <p>
              Ce site a pour objectif d’expliquer simplement le fonctionnement du
              parrainage Fortuneo, de faciliter l’accès au code parrain et d’aider les
              internautes à comprendre les étapes d’ouverture de compte.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <h3 className="text-xl font-semibold text-emerald-900">
              Code parrain Fortuneo à copier
            </h3>

            <p className="mt-2 text-emerald-800">
              Utilisez le code suivant lors de votre inscription Fortuneo :
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-xl bg-white px-5 py-3 font-mono text-lg font-semibold text-emerald-700 ring-1 ring-emerald-200">
                {CONFIG.referralCode}
              </span>

              <PrimaryButton href={CONFIG.ctaUrl}>🚀 Ouvrir un compte</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
/* ----------------------- ARTICLES SEO ----------------------- */
function Articles() {
  const articles = [
    {
      title: "Parrainage Fortuneo 2026 : comment obtenir la prime ?",
      intro:
        "Le parrainage Fortuneo permet à un nouveau client d’utiliser un code parrain lors de son ouverture de compte afin de bénéficier de l’offre en cours.",
      content: (
        <>
          <p>
            Pour obtenir la prime de parrainage Fortuneo, le filleul doit commencer son
            inscription en ligne, renseigner le code parrain{" "}
            <strong>{CONFIG.referralCode}</strong>, puis respecter les conditions de
            l’offre en vigueur.
          </p>
          <p>
            La prime est généralement liée à l’ouverture effective du compte, à la
            validation du dossier et aux éventuelles opérations demandées par Fortuneo.
            Les montants peuvent évoluer : il est donc important de vérifier l’offre
            officielle avant de finaliser l’inscription.
          </p>
        </>
      ),
    },
    {
      title: "Fortuneo ou Boursobank : quelle banque choisir ?",
      intro:
        "Fortuneo et Boursobank sont deux banques en ligne connues en France. Le bon choix dépend surtout de votre profil et de vos besoins.",
      content: (
        <>
          <p>
            Fortuneo peut être intéressante pour les personnes qui recherchent une banque
            en ligne complète avec compte courant, cartes bancaires, assurance-vie, bourse
            et produits d’épargne. Le parrainage peut aussi permettre de profiter d’une
            prime lors de l’ouverture du compte.
          </p>
          <p>
            Boursobank est également très connue et propose une offre bancaire large.
            Pour choisir, il faut comparer les cartes proposées, les conditions de revenus,
            les frais éventuels, l’application mobile, les plafonds et les offres de
            bienvenue disponibles au moment de la souscription.
          </p>
        </>
      ),
    },
    {
      title: "Où mettre le code parrain Fortuneo lors de l’inscription ?",
      intro:
        "Le code parrain Fortuneo doit être renseigné pendant le parcours d’ouverture de compte, dans le champ dédié au parrainage.",
      content: (
        <>
          <p>
            Lors de votre inscription Fortuneo, recherchez le champ lié au parrainage ou
            au code parrain. C’est à cet endroit qu’il faut saisir le code{" "}
            <strong>{CONFIG.referralCode}</strong>.
          </p>
          <p>
            Il est important de le saisir pendant l’ouverture du compte, car il peut être
            difficile, voire impossible, de l’ajouter après coup si le dossier a déjà été
            validé. Avant de confirmer votre demande, vérifiez donc que le code parrain a
            bien été pris en compte.
          </p>
        </>
      ),
    },
    {
      title: "Avis Fortuneo : avantages et inconvénients",
      intro:
        "Fortuneo est une banque en ligne qui peut convenir à de nombreux profils, mais il est important de regarder les avantages comme les limites.",
      content: (
        <>
          <p>
            Parmi les avantages souvent recherchés chez Fortuneo, on retrouve la gestion
            en ligne du compte, les cartes bancaires, l’épargne, l’assurance-vie, la bourse
            et les frais potentiellement réduits selon les conditions d’utilisation.
          </p>
          <p>
            Les limites à vérifier concernent surtout les conditions d’éligibilité, les
            conditions de gratuité des cartes, les justificatifs demandés, les plafonds et
            les frais en cas de non-respect des conditions. Le parrainage peut être un
            bonus intéressant, mais il ne doit pas être le seul critère de choix.
          </p>
        </>
      ),
    },
    {
      title: "Carte Gold Fortuneo : conditions, frais et parrainage",
      intro:
        "La carte Gold Fortuneo peut intéresser les personnes qui cherchent une carte bancaire complète, mais elle reste soumise à conditions.",
      content: (
        <>
          <p>
            La carte Gold Fortuneo est une carte bancaire haut de gamme proposée sous
            conditions. Avant de la choisir, il faut vérifier les revenus demandés, les
            conditions d’utilisation, les frais éventuels et les garanties associées.
          </p>
          <p>
            Le parrainage Fortuneo peut accompagner une ouverture de compte, mais les
            conditions de la carte et les conditions de la prime doivent être vérifiées
            séparément. Le code parrain à utiliser lors de l’inscription est{" "}
            <strong>{CONFIG.referralCode}</strong>.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="articles" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>Articles Fortuneo</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Guides utiles autour du parrainage Fortuneo
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Retrouvez des articles simples pour comprendre le parrainage Fortuneo,
            l’utilisation du code parrain, les primes possibles et les points à vérifier
            avant d’ouvrir un compte.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-gray-900">
                {article.title}
              </h3>

              <p className="mt-2 text-gray-600">{article.intro}</p>

              <details className="mt-4 rounded-xl bg-gray-50 p-4">
                <summary className="cursor-pointer font-medium text-emerald-700">
                  Lire l’article
                </summary>

                <div className="mt-4 space-y-3 text-gray-700">
                  {article.content}
                </div>
              </details>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
          <h3 className="text-xl font-semibold text-emerald-900">
            Code parrainage Fortuneo à utiliser
          </h3>

          <p className="mt-2 text-emerald-800">
            Pour ouvrir un compte Fortuneo avec un code parrain, vous pouvez utiliser le
            code suivant :
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-xl bg-white px-5 py-3 font-mono text-lg font-semibold text-emerald-700 ring-1 ring-emerald-200">
              {CONFIG.referralCode}
            </span>

            <PrimaryButton href={CONFIG.ctaUrl}>🚀 Ouvrir un compte</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
/* ----------------------- FAQ ----------------------- */
function FAQ() {
  const faqs = [
    {
      q: "Quel est le code parrainage Fortuneo à utiliser ?",
      a: `Le code parrainage Fortuneo à utiliser est ${CONFIG.referralCode}. Il doit être renseigné lors de l’ouverture du compte, dans le champ prévu pour le parrainage.`,
    },
    {
      q: "Où mettre le code parrain Fortuneo ?",
      a: "Le code parrain Fortuneo doit être saisi pendant le parcours d’ouverture de compte, lorsque Fortuneo propose le champ dédié au parrainage.",
    },
    {
      q: "Comment profiter de l’offre de parrainage Fortuneo ?",
      a: `Pour profiter de l’offre, cliquez sur “Ouvrir un compte”, commencez votre inscription sur Fortuneo, puis saisissez le code parrain ${CONFIG.referralCode} au moment demandé.`,
    },
    {
      q: "Combien peut-on recevoir avec le parrainage Fortuneo ?",
      a: `La prime filleul peut aller jusqu’à ${CONFIG.filleulBonus}€ selon l’offre en cours. Les montants peuvent évoluer, il faut donc toujours vérifier les conditions officielles Fortuneo avant de souscrire.`,
    },
    {
      q: "Combien reçoit le parrain ?",
      a: `Le parrain peut recevoir une prime indicative de ${CONFIG.parrainBonus}€ par filleul validé, selon les conditions de l’offre de parrainage Fortuneo en vigueur.`,
    },
    {
      q: "Quand la prime Fortuneo est-elle versée ?",
      a: "La prime est généralement versée après l’ouverture effective du compte, la validation du dossier et le respect des éventuelles conditions demandées par Fortuneo.",
    },
    {
      q: "Le parrainage Fortuneo est-il cumulable avec une offre de bienvenue ?",
      a: "Les règles de cumul peuvent changer selon les périodes. Il est nécessaire de consulter les conditions officielles Fortuneo avant de finaliser l’ouverture du compte.",
    },
    {
      q: "Peut-on utiliser le code parrainage Fortuneo plusieurs fois ?",
      a: "Un filleul ne peut généralement utiliser qu’un seul code parrain lors de son inscription. Le parrain peut, lui, parrainer plusieurs personnes dans la limite fixée par Fortuneo.",
    },
    {
      q: "Ce site est-il le site officiel Fortuneo ?",
      a: "Non. Ce site est un site personnel d’information sur le parrainage Fortuneo. Il n’est pas affilié officiellement à Fortuneo.",
    },
    {
      q: "Pourquoi utiliser ce code parrainage Fortuneo ?",
      a: `Le code ${CONFIG.referralCode} permet d’indiquer un parrain lors de l’ouverture du compte Fortuneo et de bénéficier de l’offre de parrainage en cours, sous réserve d’éligibilité.`,
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <Badge>FAQ</Badge>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes sur le code parrainage Fortuneo
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Retrouvez les réponses aux questions les plus courantes sur le parrainage
            Fortuneo, le code parrain, la prime filleul et les conditions de l’offre.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-gray-200 bg-white p-5">
              <summary className="flex cursor-pointer select-none list-none items-center justify-between font-medium text-gray-900">
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
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
              🏦
            </span>
            <span className="font-semibold">{CONFIG.siteName}</span>
          </div>

          <p className="mt-3 max-w-xs text-gray-600">
            Site personnel d’information sur le parrainage Fortuneo. Les montants,
            conditions et délais sont indicatifs et peuvent changer.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Contact</h3>

          <ul className="mt-3 space-y-1 text-gray-700">
            <li>
              Email :{" "}
              <a
                className="text-emerald-700 hover:underline"
                href={`mailto:${CONFIG.contactEmail}`}
              >
                {CONFIG.contactEmail}
              </a>
            </li>
            <li>Éditeur : {CONFIG.legalEntity}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Liens utiles</h3>

          <ul className="mt-3 space-y-1 text-gray-700">
            <li>
              <a className="text-emerald-700 hover:underline" href="#about">
                À propos de Fortuneo
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="#comment">
                Comment utiliser le code
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="#offres">
                Offres et montants
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="#guide">
                Guide parrainage Fortuneo
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="#faq">
                FAQ parrainage Fortuneo
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <p className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} {CONFIG.siteName}. Tous droits réservés.
        </p>
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
      <SeoContent />
      <FAQ />
      <Footer />
    </main>
  );
}
