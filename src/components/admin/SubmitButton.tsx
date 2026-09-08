"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  idle,
  pending = "Submitting...",
  className = "btn-modern",
}: {
  idle: string;
  pending?: string;
  className?: string;
}) {
  const { pending: isPending } = useFormStatus();

  return (
    <button className={className} type="submit" disabled={isPending}>
      {isPending ? pending : idle}
    </button>
  );
}
