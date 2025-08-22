export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center px-4">
      
      {/* Titre */}
      <h1 className="text-2xl font-bold text-green-800 mb-2">
        Parrainage Fortuneo ✅
      </h1>

      {/* Offre spéciale */}
      <p className="text-lg font-semibold text-gray-800 mb-4">
        🎁 Vos 130€ offerts avant le <span className="text-red-600">31 août 2025</span>
      </p>

      {/* Code Parrain */}
      <p className="text-gray-700">
        Code Parrain : <span className="font-bold">12550423</span>
      </p>

      {/* Email */}
      <p className="text-gray-700 mb-6">
        Email : <a href="mailto:stanislas.aumont@gmail.com" className="text-green-700 underline">
          stanislas.aumont@gmail.com
        </a>
      </p>

      {/* Bouton CTA */}
      <a 
        href="https://www.fortuneo.fr/banque/offre-parrainage?utm_source=parrainage-stanislas&utm_medium=siteperso&utm_campaign=parrainage130"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-200"
      >
        🚀 Ouvrir un compte
      </a>

    </div>
  );
}
