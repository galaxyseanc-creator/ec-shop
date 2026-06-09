import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/kirakira_skyfish/' },
]

export default function SnsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-fuchsia-200/80">Official Channels</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-normal sm:text-7xl">
          SNS
        </h1>
        <div className="mt-10 grid max-w-2xl grid-cols-1 border-y border-white/10">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-white/10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors last:border-b-0 hover:bg-white hover:px-4 hover:text-black"
            >
              {item.label}
              <span aria-hidden="true">OPEN</span>
            </a>
          ))}
        </div>
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
