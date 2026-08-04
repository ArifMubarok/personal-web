import { basicInfo } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <p className="mx-auto max-w-5xl px-6 text-center text-sm text-black/40 dark:text-white/40">
        © {new Date().getFullYear()} {basicInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
