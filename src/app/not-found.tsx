"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell className="min-h-screen bg-gradient-to-b from-black to-neutral-950 flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none"></div>

      <div
        className="text-center relative z-10 glass-card p-12 max-w-lg"
        data-aos="zoom-out"
      >
        <motion.h2
          className="text-8xl font-outfit mb-8 text-gradient font-black tracking-tighter"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          404
        </motion.h2>

        <motion.h1
          className="text-3xl text-center text-white mb-4 font-outfit"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-zinc-500 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          This route does not exist in the portfolio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/" className="btn-modern inline-flex items-center">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
