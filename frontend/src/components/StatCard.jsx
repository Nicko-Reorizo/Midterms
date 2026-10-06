export default function StatCard({ label, value, helper, icon: Icon }) {
  return (
    <article className="panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
        </div>
        {Icon ? (
          <span className="rounded-md bg-emerald-50 p-2 text-emerald-700">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      {helper ? <p className="mt-4 text-sm text-slate-500">{helper}</p> : null}
    </article>
  );
}
