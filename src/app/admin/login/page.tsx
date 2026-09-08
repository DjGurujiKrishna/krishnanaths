import { loginAdmin } from "@/actions/content";
import SubmitButton from "@/components/admin/SubmitButton";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form action={loginAdmin} className="glass-card w-full max-w-md p-10 space-y-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
            Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-black font-outfit tracking-tighter">
            Admin login
          </h1>
        </div>
        {error ? (
          <p className="text-sm text-red-400">Invalid password. Try again.</p>
        ) : null}
        <label className="block">
          <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Password
          </span>
          <input
            name="password"
            type="password"
            required
            className="admin-input"
          />
        </label>
        <SubmitButton idle="Enter" pending="Signing in..." className="btn-modern w-full" />
      </form>
    </div>
  );
}
