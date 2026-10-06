import { ArrowRight, BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="grid min-h-[70vh] items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="mb-3 inline-flex rounded-md bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
          MERN Frontend Starter
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Organized frontend structure for your midterm project.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          This starter keeps pages, layouts, reusable components, services, styles, and assets separated so your team can focus on building the user interface cleanly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/dashboard" className="btn-primary gap-2">
            Open dashboard
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link to="/register" className="btn-secondary">
            Create account
          </Link>
        </div>
      </div>
      <div className="panel">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-md bg-emerald-50 p-3 text-emerald-700">
            <BookOpenCheck aria-hidden="true" className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Frontend folders</h2>
            <p className="text-sm text-slate-500">Same idea as the reference image.</p>
          </div>
        </div>
        <ul className="space-y-3 text-sm text-slate-700">
          <li><strong>components</strong> - reusable UI blocks</li>
          <li><strong>layouts</strong> - shared page frames and navigation</li>
          <li><strong>pages</strong> - route-level screens</li>
          <li><strong>services</strong> - API helpers for backend calls</li>
          <li><strong>styles</strong> - Tailwind and global CSS</li>
        </ul>
      </div>
    </section>
  );
}
