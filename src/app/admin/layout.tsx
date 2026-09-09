import './admin.css';
import AdminSidebar from './AdminSidebar';

export const metadata = {
  title: 'Admin — Marrakech Car Rental',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-root">
      <AdminSidebar />
      <div className="admin-main">{children}</div>
    </div>
  );
}
