import ThemeSwitcher from "@/components/ThemeSwitcher"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full p-2 sm:p-4 transition-all pt-10 sm:pt-12 bg-slate-100 dark:bg-slate-950">
      {/* Bismillah */}
      <div className="flex flex-col gap-8 rounded-md p-4 w-full max-w-2xl mx-auto">
        <section className="flex justify-between gap-3" id="navbar">
          <p className="text-xl font-semibold">Dev Profile Finder</p>
          <ThemeSwitcher />
        </section>
      </div>
    </main>
  )
}