const Register = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Registrati
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-medium"
        >
          Crea account
        </button>
      </form>
    </main>
  )
}

export default Register
