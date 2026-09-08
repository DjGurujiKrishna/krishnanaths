import { prisma } from "@/lib/prisma";

export async function getProfile() {
  return prisma.profile.findFirst();
}

export async function getLatestJob() {
  return prisma.job.findFirst({
    orderBy: { createdAt: "desc" },
  });
}

export async function getHomeContent() {
  const [profile, latestJob] = await Promise.all([
    getProfile(),
    getLatestJob(),
  ]);
  return { profile, latestJob };
}

export async function getJobs() {
  return prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getEducation() {
  return prisma.education.findMany({
    orderBy: [{ order: "asc" }, { heading: "asc" }],
  });
}

export async function getCertifications() {
  return prisma.certification.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getSkills() {
  return prisma.skillCategory.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getServices() {
  return prisma.service.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getProjects() {
  return prisma.project.findMany({
    orderBy: { order: "asc" },
  });
}

export async function getResume() {
  return prisma.resume.findFirst();
}

export async function getAboutContent() {
  const [jobs, certifications, education] = await Promise.all([
    getJobs(),
    getCertifications(),
    getEducation(),
  ]);
  return { jobs, certifications, education };
}
