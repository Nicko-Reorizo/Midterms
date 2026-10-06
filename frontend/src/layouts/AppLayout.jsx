import { ClipboardList, Home, LayoutDashboard, LogIn } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Records', href: '/records', icon: ClipboardList },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <nav className="page-shell flex items-center justify-between py-4" aria-label="Main navigation">
          <NavLink to="/" className="text-lg font-bold text-emerald-700">
            Midterm MERN
          </NavLink>
          <div className="flex items-center gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition',
                    isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100',
                  ].join(' ')
                }
              >
                <item.icon aria-hidden="true" className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
            <NavLink to="/login" className="btn-secondary ml-1 gap-2">
              <LogIn aria-hidden="true" className="h-4 w-4" />
              <span>Login</span>
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}
