import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Case Studies CMS | Mangrow Bio Admin",
};

export const dynamic = "force-dynamic";

export default async function CasesCMS() {
  const cases = await prisma.caseStudy.findMany({
    orderBy: { created_at: "desc" },
  });

  async function addCaseStudy(formData: FormData) {
    "use server";
    
    await prisma.caseStudy.create({
      data: {
        title: formData.get("title") as string,
        industry: formData.get("industry") as string,
        challenge: formData.get("challenge") as string,
        solution: formData.get("solution") as string,
        results: formData.get("results") as string,
        metrics: formData.get("metrics") as string,
      },
    });

    revalidatePath("/admin/cases");
    revalidatePath("/cases");
  }

  async function deleteCaseStudy(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.caseStudy.delete({ where: { id } });
    revalidatePath("/admin/cases");
    revalidatePath("/cases");
  }

  async function updateCaseStudy(formData: FormData) {
    "use server";
    const id = String(formData.get("id") || "");
    if (!id) return;
    await prisma.caseStudy.update({
      where: { id },
      data: {
        title: String(formData.get("title") || ""),
        industry: String(formData.get("industry") || ""),
        challenge: String(formData.get("challenge") || ""),
        solution: String(formData.get("solution") || ""),
        results: String(formData.get("results") || ""),
        metrics: String(formData.get("metrics") || ""),
      },
    });
    revalidatePath("/admin/cases");
    revalidatePath("/cases");
  }

  return (
    <div>
      <h1 className="text-3xl font-serif text-white mb-2">Case Studies</h1>
      <p className="text-slate-400 mb-8">Manage case studies displayed on the public site.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Title</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Industry</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Date</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((cs) => (
                  <tr key={cs.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">{cs.title}</td>
                    <td className="p-4"><span className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-mono">{cs.industry}</span></td>
                    <td className="p-4 text-slate-400 text-sm">{new Date(cs.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <details>
                          <summary className="cursor-pointer text-sm text-teal-400">Edit</summary>
                          <form action={updateCaseStudy} className="mt-3 space-y-2 w-80">
                            <input type="hidden" name="id" value={cs.id} />
                            <input name="title" defaultValue={cs.title} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="industry" defaultValue={cs.industry} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <textarea name="challenge" defaultValue={cs.challenge} rows={2} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <textarea name="solution" defaultValue={cs.solution} rows={2} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <textarea name="results" defaultValue={cs.results} rows={2} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="metrics" defaultValue={cs.metrics} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <button type="submit" className="text-xs text-teal-300 hover:text-teal-200">Save Changes</button>
                          </form>
                        </details>
                        <form action={deleteCaseStudy}>
                          <input type="hidden" name="id" value={cs.id} />
                          <button type="submit" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">Delete</button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
                {cases.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">No case studies found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg sticky top-8">
            <h2 className="text-xl font-serif text-white mb-4">Add New Case Study</h2>
            <form action={addCaseStudy} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
                <input type="text" name="title" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Industry</label>
                <input type="text" name="industry" required placeholder="e.g., Biotech, CDMO" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Challenge</label>
                <textarea name="challenge" required rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Solution</label>
                <textarea name="solution" required rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Results</label>
                <textarea name="results" required rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Highlight Metric</label>
                <input type="text" name="metrics" required placeholder="e.g., 6 months to IND" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg px-4 py-2 transition-colors">
                Publish Case Study
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
