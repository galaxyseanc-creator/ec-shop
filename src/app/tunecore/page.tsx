import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

export default function TuneCorePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-lime-200/80">Music</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-normal sm:text-7xl">
          Tune Core
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
          TuneCore and streaming links will be collected here.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="border border-white/35 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
          >
            Back to Start
          </Link>
          <Link
            href="/sns"
            className="bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-lime-200"
          >
            SNS
          </Link>
        </div>
      </section>
    </main>
  )
}
