import Image from "next/image";
import { basicInfo, bio, socials } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 px-6 py-20 sm:flex-row sm:py-28">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-sm font-medium text-black/50 dark:text-white/50">Hi, I&apos;m</p>
        <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">{basicInfo.name}</h1>
        <p className="mt-2 text-lg text-black/60 dark:text-white/60">{basicInfo.tagline} · {basicInfo.location}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">{bio.short}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
          >
            Let&apos;s connect
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-black/5 sm:h-48 sm:w-48 dark:ring-white/10">
        <Image src={basicInfo.photo} alt={basicInfo.name} fill sizes="192px" className="object-cover" priority />
      </div>
    </section>
  );
}
