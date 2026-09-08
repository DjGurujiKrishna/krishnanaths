import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE = "kn_admin";

function expectedToken() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  return createHmac("sha256", secret).update("krishnanath-admin").digest("hex");
}

export async function isAdmin() {
  try {
    const token = expectedToken();
    const cookieStore = await cookies();
    const value = cookieStore.get(COOKIE)?.value;
    if (!value) return false;
    const left = Buffer.from(value);
    const right = Buffer.from(token);
    return left.length === right.length && timingSafeEqual(left, right);
  } catch {
    return false;
  }
}

export async function requireAdmin() {
  const ok = await isAdmin();
  if (!ok) {
    redirect("/admin/login");
  }
}

export function createAdminCookie() {
  return {
    name: COOKIE,
    value: expectedToken(),
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    },
  };
}

export function clearAdminCookie() {
  return {
    name: COOKIE,
    options: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    },
  };
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const left = Buffer.from(password);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}
