import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/world', label: 'W0rID' },
  { href: '/online-store', label: 'Onlin3 St0rE' },
  { href: '/tunecore', label: 'Tun3 CorE' },
  { href: '/about', label: 'AbouT us' },
]

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#252525] p-4 text-black sm:p-8">
      <section className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1500px] items-center justify-center overflow-hidden border border-black/20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] sm:min-h-[calc(100vh-4rem)]">
        <Image
          src="/home/pc-background.jpg"
          alt="SkyFisH home background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="relative z-10 flex min-h-[760px] w-full max-w-3xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[820px]">
          <h1 className="mb-12 font-serif text-6xl font-black italic leading-none tracking-normal text-black sm:text-8xl">
            SkyFisH
          </h1>

          <nav className="flex flex-col items-center gap-9 font-serif text-[34px] font-semibold leading-none tracking-normal text-black sm:text-[42px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-black/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-16 flex items-center justify-center gap-8 text-4xl font-black text-black">
            <Link
              href="/sns"
              aria-label="SNS X"
              className="font-sans transition-all duration-300 hover:scale-110 hover:text-black/50"
            >
              X
            </Link>
            <Link
              href="/sns"
              aria-label="SNS Instagram"
              className="transition-all duration-300 hover:scale-110 hover:text-black/50"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
