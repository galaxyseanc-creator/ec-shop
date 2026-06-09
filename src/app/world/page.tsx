import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

export default function WorldPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200/80">SkyFisH</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-normal sm:text-7xl">
          World
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
          The World layer is reserved for upcoming stories, visual archives, releases, and experiments.
        </p>
        <Link
          href="/"
          className="mt-10 w-fit border border-white/35 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
        >
          Back to Start
        </Link>
      </section>
    </main>
  )
}
