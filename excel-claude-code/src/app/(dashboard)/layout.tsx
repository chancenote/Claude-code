import { AuthProvider } from '@/contexts/AuthContext';
import { AuthGuard } from '@/components/shared/AuthGuard';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { TopBar } from '@/components/dashboard/TopBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AuthGuard>
        <div className="flex h-screen bg-navy">
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </AuthGuard>
    </AuthProvider>
  );
}
