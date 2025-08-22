export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-gray-800 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center border border-green-200">
        
        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Parrainage Fortuneo ✅
        </h1>

        {/* Offre mise en avant */}
        <p className="text-lg font-semibold text-gray-900 mb-2">
          🎁 Vos <span className="text-green-600">130€ offerts</span> avant le <span className="text-red-600">31 août 2025</span>
        </p>

        {/* Code et email */}
        <p className="text-gray-600 mb-4">
          Code Parrain : <span className="font-bold">12550423</span><br/>
          Email : <a href="mailto:stanislas.aumont@gmail.com" className="text-green-600 underline">stanislas.aumont@gmail.com</a>
        </p>

        {/* Bouton CTA */}
        <a 
          href="https://www.fortuneo.fr/banque/offre-parrainage?utm_source=parrainage-stanislas&utm_medium=siteperso&utm_campaign=parrainage130"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-200"
        >
          🚀 Ouvrir un compte
        </a>

        {/* Confiance */}
        <div className="mt-6 text-sm text-gray-500">
          <p>Site informatif créé pour faciliter le parrainage Fortuneo.</p>
          <p>Offre valable pour toute première ouverture de compte Fortuneo.</p>
        </div>
      </div>
    </div>
  );
}
