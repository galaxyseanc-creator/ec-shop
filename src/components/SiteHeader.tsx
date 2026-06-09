import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/world', label: 'WORLD' },
  { href: '/online-store', label: 'ONLINE STORE' },
  { href: '/tunecore', label: 'TUNE CORE' },
  { href: '/sns', label: 'SNS' },
  { href: '/about', label: 'ABOUT US' },
]

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SkyFisH"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-[0.28em] text-white">SkyFisH</span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium tracking-[0.18em] text-white/72 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/online-store"
          className="border border-white/35 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          STORE
        </Link>
      </div>
    </header>
  )
}
