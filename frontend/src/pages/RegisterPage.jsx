import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-950">Create account</h1>
        <p className="mt-2 text-sm text-slate-600">Registration form starter for the frontend team.</p>
        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Full name</span>
            <input className="form-input" type="text" placeholder="Juan Dela Cruz" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
            <input className="form-input" type="email" placeholder="student@example.com" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Password</span>
            <input className="form-input" type="password" placeholder="Create password" />
          </label>
          <button className="btn-primary w-full" type="submit">Register</button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-600">
          Already registered? <Link className="font-semibold text-emerald-700" to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}
