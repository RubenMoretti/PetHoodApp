import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Accedi
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition"
          >
            Accedi
          </button>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-400" />
            <span className="text-sm">Ricordami</span>
          </div>
        </form>

        <p className="text-center text-sm mt-6">
          Non hai un account?{" "}
          <Link
            to="/register"
            className="text-orange-400 font-semibold hover:underline"
          >
            Registrati
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
