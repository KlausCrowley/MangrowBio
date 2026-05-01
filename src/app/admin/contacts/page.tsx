import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Leads & Contacts | Mangrow Bio Admin",
};

export const dynamic = "force-dynamic";

export default async function Contacts() {
  async function updateStatus(formData: FormData) {
    "use server";
    const id = String(formData.get("id") || "");
    const status = String(formData.get("status") || "pending");
    if (!id) return;
    await prisma.contact.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/contacts");
    revalidatePath("/admin/dashboard");
  }

  const contacts = await prisma.contact.findMany({
    orderBy: { created_at: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-serif text-white mb-2">Leads &amp; Contacts</h1>
      <p className="text-slate-400 mb-8">View all enquiries submitted through the contact form.</p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Contact</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Service Required</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Message</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Status</th>
              <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium text-slate-200">{contact.name}</div>
                  <div className="text-sm text-slate-400">{contact.email}</div>
                  <div className="text-xs text-slate-500 mt-1">{contact.company}</div>
                </td>
                <td className="p-4 align-top">
                  <span className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap">
                    {contact.service_required || "Not Specified"}
                  </span>
                </td>
                <td className="p-4 align-top">
                  <div className="text-slate-300 text-sm max-w-md line-clamp-3" title={contact.message}>{contact.message}</div>
                </td>
                <td className="p-4 align-top">
                  <form action={updateStatus} className="flex gap-2 items-center">
                    <input type="hidden" name="id" value={contact.id} />
                    <select
                      name="status"
                      defaultValue={contact.status}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                    </select>
                    <button type="submit" className="text-xs text-teal-400 hover:text-teal-300">
                      Save
                    </button>
                  </form>
                </td>
                <td className="p-4 align-top text-slate-400 text-sm whitespace-nowrap">
                  {new Date(contact.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">No contacts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
