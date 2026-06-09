import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const sections = [
  { href: '/world', label: 'World', copy: 'A growing archive for Skyfish stories, visuals, and future projects.' },
  { href: '/online-store', label: 'ONLINE STORE', copy: 'Wearable objects, magazines, and limited pieces from Skyfish.' },
  { href: '/tunecore', label: 'TUNE CORE', copy: 'Music distribution links and release information.' },
  { href: '/sns', label: 'SNS', copy: 'Official channels and active social links.' },
  { href: '/about', label: 'About us', copy: 'The identity, contact point, and background of Skyfish.' },
]

export default function StartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src="/made-in-heaven-full-pic.jpg"
          alt="Skyfish visual"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.78)_78%,#000_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:pb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-emerald-200/85">
            Official Web Portal
          </p>
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-none tracking-normal sm:text-8xl lg:text-9xl">
            SkyFisH
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            A doorway to our world, store, music links, social presence, and project identity.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/world"
              className="bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-emerald-200"
            >
              Enter World
            </Link>
            <Link
              href="/online-store"
              className="border border-white/45 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Online Store
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 border-y border-white/10 px-4 sm:px-6 md:grid-cols-5">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group border-b border-white/10 py-8 transition-colors hover:bg-white hover:text-black md:border-b-0 md:border-r md:border-white/10 md:px-5 last:md:border-r-0"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.22em]">{section.label}</h2>
            <p className="mt-4 text-sm leading-6 text-white/58 group-hover:text-black/68">
              {section.copy}
            </p>
          </Link>
        ))}
      </section>
    </main>
  )
}
