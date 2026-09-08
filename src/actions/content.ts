"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
  clearAdminCookie,
  createAdminCookie,
  requireAdmin,
  verifyAdminPassword,
} from "@/lib/auth";

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function intValue(formData: FormData, key: string, fallback = 0) {
  const raw = text(formData, key);
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function refresh() {
  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
}

export async function loginAdmin(formData: FormData) {
  const password = text(formData, "password");
  if (!verifyAdminPassword(password)) {
    redirect("/admin/login?error=1");
  }
  const cookie = createAdminCookie();
  const store = await cookies();
  store.set(cookie.name, cookie.value, cookie.options);
  redirect("/admin");
}

export async function logoutAdmin() {
  const cookie = clearAdminCookie();
  const store = await cookies();
  store.set(cookie.name, "", cookie.options);
  redirect("/admin/login");
}

export async function saveProfile(formData: FormData) {
  await requireAdmin();
  const data = {
    nameLine1: text(formData, "nameLine1") || "KRISHNA",
    nameLine2: text(formData, "nameLine2") || "NATH S",
    availability: text(formData, "availability"),
    bio: text(formData, "bio"),
    location: text(formData, "location"),
    stackLabel: text(formData, "stackLabel"),
    portraitUrl: text(formData, "portraitUrl") || "/krishna.jpg",
    marquee: text(formData, "marquee"),
    badgeLabel: text(formData, "badgeLabel") || "Lead Engineer",
  };
  const existing = await prisma.profile.findFirst();
  if (existing) {
    await prisma.profile.update({ where: { id: existing.id }, data });
  } else {
    await prisma.profile.create({ data });
  }
  refresh();
}

export async function createJob(formData: FormData) {
  await requireAdmin();
  await prisma.job.create({
    data: {
      title: text(formData, "title"),
      company: text(formData, "company"),
      location: text(formData, "location"),
      locationType: text(formData, "locationType"),
      startDate: text(formData, "startDate"),
      endDate: text(formData, "endDate"),
      description: text(formData, "description"),
    },
  });
  refresh();
}

export async function updateJob(formData: FormData) {
  await requireAdmin();
  await prisma.job.update({
    where: { id: text(formData, "id") },
    data: {
      title: text(formData, "title"),
      company: text(formData, "company"),
      location: text(formData, "location"),
      locationType: text(formData, "locationType"),
      startDate: text(formData, "startDate"),
      endDate: text(formData, "endDate"),
      description: text(formData, "description"),
    },
  });
  refresh();
}

export async function deleteJob(formData: FormData) {
  await requireAdmin();
  await prisma.job.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function createEducation(formData: FormData) {
  await requireAdmin();
  await prisma.education.create({
    data: {
      heading: text(formData, "heading"),
      title: text(formData, "title"),
      value: text(formData, "value"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function updateEducation(formData: FormData) {
  await requireAdmin();
  await prisma.education.update({
    where: { id: text(formData, "id") },
    data: {
      heading: text(formData, "heading"),
      title: text(formData, "title"),
      value: text(formData, "value"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function deleteEducation(formData: FormData) {
  await requireAdmin();
  await prisma.education.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function createCertification(formData: FormData) {
  await requireAdmin();
  await prisma.certification.create({
    data: {
      name: text(formData, "name"),
      organization: text(formData, "organization"),
      issueDate: text(formData, "issueDate"),
      credentialId: text(formData, "credentialId"),
      credentialUrl: text(formData, "credentialUrl"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function updateCertification(formData: FormData) {
  await requireAdmin();
  await prisma.certification.update({
    where: { id: text(formData, "id") },
    data: {
      name: text(formData, "name"),
      organization: text(formData, "organization"),
      issueDate: text(formData, "issueDate"),
      credentialId: text(formData, "credentialId"),
      credentialUrl: text(formData, "credentialUrl"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function deleteCertification(formData: FormData) {
  await requireAdmin();
  await prisma.certification.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function createSkill(formData: FormData) {
  await requireAdmin();
  await prisma.skillCategory.create({
    data: {
      category: text(formData, "category"),
      skills: text(formData, "skills"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function updateSkill(formData: FormData) {
  await requireAdmin();
  await prisma.skillCategory.update({
    where: { id: text(formData, "id") },
    data: {
      category: text(formData, "category"),
      skills: text(formData, "skills"),
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function deleteSkill(formData: FormData) {
  await requireAdmin();
  await prisma.skillCategory.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function createService(formData: FormData) {
  await requireAdmin();
  await prisma.service.create({
    data: {
      title: text(formData, "title"),
      description: text(formData, "description"),
      icon: text(formData, "icon") || "FaCode",
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function updateService(formData: FormData) {
  await requireAdmin();
  await prisma.service.update({
    where: { id: text(formData, "id") },
    data: {
      title: text(formData, "title"),
      description: text(formData, "description"),
      icon: text(formData, "icon") || "FaCode",
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function deleteService(formData: FormData) {
  await requireAdmin();
  await prisma.service.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function createProject(formData: FormData) {
  await requireAdmin();
  await prisma.project.create({
    data: {
      name: text(formData, "name"),
      description: text(formData, "description"),
      status: text(formData, "status") || "completed",
      githubLink: text(formData, "githubLink") || "nil",
      productionLink: text(formData, "productionLink") || "nil",
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function updateProject(formData: FormData) {
  await requireAdmin();
  await prisma.project.update({
    where: { id: text(formData, "id") },
    data: {
      name: text(formData, "name"),
      description: text(formData, "description"),
      status: text(formData, "status") || "completed",
      githubLink: text(formData, "githubLink") || "nil",
      productionLink: text(formData, "productionLink") || "nil",
      order: intValue(formData, "order"),
    },
  });
  refresh();
}

export async function deleteProject(formData: FormData) {
  await requireAdmin();
  await prisma.project.delete({ where: { id: text(formData, "id") } });
  refresh();
}

export async function saveResume(formData: FormData) {
  await requireAdmin();
  const data = {
    summary: text(formData, "summary"),
    pdfUrl: text(formData, "pdfUrl") || "/Krishnanaths_Resume.pdf",
    fileName: text(formData, "fileName") || "Krishnanaths_Resume.pdf",
  };
  const existing = await prisma.resume.findFirst();
  if (existing) {
    await prisma.resume.update({ where: { id: existing.id }, data });
  } else {
    await prisma.resume.create({ data });
  }
  refresh();
}
