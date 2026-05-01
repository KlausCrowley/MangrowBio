import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Dashboard | Mangrow Bio Admin",
};

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [contactsCount, casesCount, blogCount] = await Promise.all([
    prisma.contact.count(),
    prisma.caseStudy.count(),
    prisma.blogPost.count(),
  ]);

  const recentContacts = await prisma.contact.findMany({
    take: 5,
    orderBy: { created_at: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-serif text-white mb-2">Dashboard Overview</h1>
      <p className="text-slate-400 mb-8">Welcome to the Mangrow Bio administration panel.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <div className="text-sm font-mono text-teal-500 uppercase tracking-widest mb-2">Total Leads</div>
          <div className="text-4xl font-serif text-white">{contactsCount}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <div className="text-sm font-mono text-teal-500 uppercase tracking-widest mb-2">Case Studies</div>
          <div className="text-4xl font-serif text-white">{casesCount}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <div className="text-sm font-mono text-teal-500 uppercase tracking-widest mb-2">Blog Posts</div>
          <div className="text-4xl font-serif text-white">{blogCount}</div>
        </div>
      </div>

      <h2 className="text-xl font-serif text-white mb-4">Recent Enquiries</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Name</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Company</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Service Required</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((contact) => (
              <tr key={contact.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors">
                <td className="p-4 text-slate-200">{contact.name}</td>
                <td className="p-4 text-slate-400">{contact.company || "N/A"}</td>
                <td className="p-4"><span className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-mono">{contact.service_required || "Not Specified"}</span></td>
                <td className="p-4 text-slate-400 text-sm">{new Date(contact.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
            {recentContacts.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">No recent enquiries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
