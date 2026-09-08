import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAdmin())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <AdminNav />
        <div className="flex-1 pb-16">{children}</div>
      </div>
    </div>
  );
}
