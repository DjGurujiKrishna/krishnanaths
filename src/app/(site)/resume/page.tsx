import ResumeView from "@/components/ResumeView";
import { getResume } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ResumePage() {
  const resume = await getResume();
  return (
    <ResumeView
      pdfUrl={resume?.pdfUrl || "/Krishnanaths_Resume.pdf"}
      fileName={resume?.fileName || "Krishnanaths_Resume.pdf"}
      summary={
        resume?.summary ||
        "View or download my comprehensive resume highlighting my technical expertise, professional journey, and software engineering qualifications."
      }
    />
  );
}
