import { ClipboardList, Users, WalletCards } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import StatCard from '../components/StatCard.jsx';

const recentActivities = [
  'Frontend folder structure created',
  'Authentication pages prepared',
  'Records page connected to API service helper',
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="A starter dashboard screen your team can connect to backend data later."
      />
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Users" value="24" helper="Sample count for UI layout" icon={Users} />
        <StatCard label="Records" value="128" helper="Ready for MongoDB data" icon={ClipboardList} />
        <StatCard label="Tasks" value="8" helper="Frontend work remaining" icon={WalletCards} />
      </section>
      <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="panel">
          <h2 className="text-lg font-semibold text-slate-950">Project Overview</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Use this area for charts, reports, or summary data once the Express API and MongoDB models are ready.
          </p>
        </div>
        <div className="panel">
          <h2 className="text-lg font-semibold text-slate-950">Recent Activity</h2>
          <ul className="mt-4 space-y-3">
            {recentActivities.map((activity) => (
              <li key={activity} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
