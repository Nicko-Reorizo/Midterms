import { Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';

const records = [
  { id: 'REC-001', name: 'Sample Record One', status: 'Active', owner: 'Frontend Team' },
  { id: 'REC-002', name: 'Sample Record Two', status: 'Pending', owner: 'Backend Team' },
  { id: 'REC-003', name: 'Sample Record Three', status: 'Archived', owner: 'QA Team' },
];

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        title="Records"
        description="A clean table layout for data coming from your MERN backend."
        action={
          <button type="button" className="btn-primary gap-2">
            <Plus aria-hidden="true" className="h-4 w-4" />
            Add record
          </button>
        }
      />
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-900">{record.id}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{record.name}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{record.status}</td>
                <td className="px-4 py-3 text-sm text-slate-700">{record.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
