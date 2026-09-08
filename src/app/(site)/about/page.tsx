import AboutView from "@/components/AboutView";
import { getAboutContent } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const { jobs, certifications, education } = await getAboutContent();
  return (
    <AboutView
      jobs={jobs}
      certifications={certifications}
      education={education}
    />
  );
}
