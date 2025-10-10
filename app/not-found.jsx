"use client";

import { motion } from "framer-motion";
import { Pill, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground">
      <div className="relative mb-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 text-primary opacity-70"
        >
          <Pill size={48} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 text-secondary opacity-70"
        >
          <Pill size={48} />
        </motion.div>

        {/* Main 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-7xl font-extrabold text-primary"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Oops! The page you’re looking for isn’t here.  
          Maybe it needs a prescription refill. 💊
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        <Link href="/">
          <Button variant="default" className="flex items-center gap-2">
            <Home size={18} /> Go Home
          </Button>
        </Link>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => window.location.reload()}
        >
          <RefreshCw size={18} /> Try Again
        </Button>
      </motion.div>

      {/* Decorative Animated Text */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-10 text-sm text-muted-foreground"
      >
        Stay healthy — and don’t get lost on the internet. 🩺
      </motion.p>
    </div>
  );
}
