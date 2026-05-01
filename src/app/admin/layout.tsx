"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  const isActive = (path: string) => pathname === path ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800";
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="text-xl font-serif text-white tracking-wide">Mangrow Bio <span className="text-teal-500 text-sm font-mono tracking-widest uppercase ml-1 block mt-1">Admin</span></Link>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin/dashboard" className={`px-4 py-3 rounded-lg transition-colors ${isActive("/admin/dashboard")}`}>
            Dashboard
          </Link>
          <Link href="/admin/contacts" className={`px-4 py-3 rounded-lg transition-colors ${isActive("/admin/contacts")}`}>
            Leads & Contacts
          </Link>
          <Link href="/admin/cases" className={`px-4 py-3 rounded-lg transition-colors ${isActive("/admin/cases")}`}>
            Case Studies
          </Link>
          <Link href="/admin/blog" className={`px-4 py-3 rounded-lg transition-colors ${isActive("/admin/blog")}`}>
            Insights (Blog)
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex flex-col gap-3">
            <button onClick={handleLogout} className="text-sm text-left text-red-400 hover:text-red-300">
              Sign out
            </button>
            <Link href="/" className="text-sm text-slate-400 hover:text-white">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-slate-950 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
