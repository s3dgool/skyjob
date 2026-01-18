"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { LiveStats } from "@/components/home/LiveStats";
import { LatestSubscribers } from "@/components/home/LatestSubscribers";

export default function Home() {
  const { dict } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 bg-gray-50 dark:bg-gray-900 items-center flex justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              {/* Branding Section */}
              <div className="flex flex-col items-center mb-6 animate-in fade-in zoom-in duration-500">
                <div className="relative w-40 h-40 mb-6 -mt-12 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 flex items-center justify-center transform transition-transform hover:scale-105">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo.png"
                      alt="SkyJob Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  SkyJob
                </h2>
                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-2">
                  {dict.common.languageName === "العربية" ? "بوابتك نحو المستقبل" : "Your Gateway to the Future"}
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {dict.home.heroTitle}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {dict.home.heroSubtitle}
                </p>
              </div>
              <div className="grid gap-4 sm:flex sm:flex-row justify-center">
                <Link href="/register">
                  <Button size="lg">{dict.home.createProfile}</Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg">
                    {dict.home.goToDashboard}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Analytics Section */}
        <LiveStats />

        {/* Latest Subscribers Section */}
        <LatestSubscribers />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 flex justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 lg:gap-24">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  {dict.home.whySkyJob}
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {dict.home.whyTitle}
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="/wizard"
                >
                  {dict.home.tryWizard}
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  {dict.home.features}
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  {dict.home.featuresDesc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {dict.home.footerRights}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {dict.home.terms}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {dict.home.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
