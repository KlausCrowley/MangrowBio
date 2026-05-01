import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Blog CMS | Mangrow Bio Admin",
};

export const dynamic = "force-dynamic";

export default async function BlogCMS() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { created_at: "desc" },
  });

  async function addBlogPost(formData: FormData) {
    "use server";
    
    let slug = formData.get("slug") as string;
    if (!slug) {
      slug = (formData.get("title") as string).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    await prisma.blogPost.create({
      data: {
        title: formData.get("title") as string,
        slug: slug,
        category: formData.get("category") as string,
        author: formData.get("author") as string,
        content: formData.get("content") as string,
        featured_image: (formData.get("featured_image") as string) || null,
      },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/insights");
  }

  async function deleteBlogPost(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.blogPost.delete({ where: { id } });
    revalidatePath("/admin/blog");
    revalidatePath("/insights");
  }

  async function updateBlogPost(formData: FormData) {
    "use server";
    const id = String(formData.get("id") || "");
    if (!id) return;
    let slug = String(formData.get("slug") || "");
    if (!slug) {
      slug = String(formData.get("title") || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
    await prisma.blogPost.update({
      where: { id },
      data: {
        title: String(formData.get("title") || ""),
        slug,
        category: String(formData.get("category") || ""),
        author: String(formData.get("author") || ""),
        content: String(formData.get("content") || ""),
        featured_image: String(formData.get("featured_image") || "") || null,
      },
    });
    revalidatePath("/admin/blog");
    revalidatePath("/insights");
  }

  return (
    <div>
      <h1 className="text-3xl font-serif text-white mb-2">Insights &amp; Blog</h1>
      <p className="text-slate-400 mb-8">Manage articles and thought leadership content.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Title</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Category</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Date</th>
                  <th className="p-4 text-sm font-medium text-slate-300 border-b border-slate-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 text-slate-200 font-medium">{post.title}</td>
                    <td className="p-4"><span className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-mono">{post.category}</span></td>
                    <td className="p-4 text-slate-400 text-sm">{new Date(post.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <details>
                          <summary className="cursor-pointer text-sm text-teal-400">Edit</summary>
                          <form action={updateBlogPost} className="mt-3 space-y-2 w-80">
                            <input type="hidden" name="id" value={post.id} />
                            <input name="title" defaultValue={post.title} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="slug" defaultValue={post.slug} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="category" defaultValue={post.category} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="author" defaultValue={post.author} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <input name="featured_image" defaultValue={post.featured_image ?? ""} className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <textarea name="content" rows={4} defaultValue={post.content} required className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-sm text-white" />
                            <button type="submit" className="text-xs text-teal-300 hover:text-teal-200">Save Changes</button>
                          </form>
                        </details>
                        <form action={deleteBlogPost}>
                          <input type="hidden" name="id" value={post.id} />
                          <button type="submit" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">Delete</button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
                {posts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">No blog posts found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg sticky top-8">
            <h2 className="text-xl font-serif text-white mb-4">Draft New Article</h2>
            <form action={addBlogPost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
                <input type="text" name="title" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Slug (optional)</label>
                <input type="text" name="slug" placeholder="auto-generated-if-empty" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Category</label>
                  <input type="text" name="category" required placeholder="Regulatory, CMC..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Author</label>
                  <input type="text" name="author" required placeholder="Dr. Jane Smith" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Content (HTML allowed)</label>
                <textarea name="content" required rows={10} placeholder="<p>Write your insights here...</p>" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500 font-mono text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Featured Image URL (optional)</label>
                <input type="url" name="featured_image" placeholder="https://..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal-500" />
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg px-4 py-2 transition-colors">
                Publish Article
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
