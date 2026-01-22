import { Link } from "react-router-dom"

const Access = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white px-6 py-10">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          PetHood
        </h1>

        <p className="mt-3 text-gray-600">
          Tutto ciò che serve per il benessere del tuo animale
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <Link
          to="/login"
          className="block w-full text-center bg-black text-white py-3 rounded-xl font-medium"
        >
          Accedi
        </Link>

        <Link
          to="/register"
          className="block w-full text-center border border-gray-300 py-3 rounded-xl font-medium"
        >
          Registrati
        </Link>
      </div>
    </main>
  )
}

export default Access
