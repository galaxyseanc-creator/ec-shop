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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,0,0,0.11),rgba(255,255,255,0)_18%),radial-gradient(circle_at_20%_22%,rgba(0,0,0,0.06),rgba(255,255,255,0)_22%),radial-gradient(circle_at_82%_70%,rgba(0,0,0,0.05),rgba(255,255,255,0)_24%),repeating-radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.045)_0_1px,rgba(255,255,255,0)_2px_18px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0_30%,rgba(0,0,0,0.035)_32%,rgba(255,255,255,0)_38%_100%),linear-gradient(72deg,rgba(0,0,0,0.025)_0_1px,rgba(255,255,255,0)_1px_18px)] opacity-80" />
        <div className="absolute inset-0 opacity-[0.23] [background-image:radial-gradient(ellipse_at_center,transparent_0_30%,rgba(0,0,0,0.18)_31%,transparent_32%),radial-gradient(ellipse_at_30%_65%,transparent_0_22%,rgba(0,0,0,0.12)_23%,transparent_24%),radial-gradient(ellipse_at_75%_28%,transparent_0_18%,rgba(0,0,0,0.1)_19%,transparent_20%)]" />

        <Image
          src="/logo.png"
          alt=""
          width={760}
          height={560}
          className="pointer-events-none absolute bottom-4 left-1/2 w-[70vw] max-w-[720px] -translate-x-1/2 select-none opacity-[0.09] blur-[2px] grayscale"
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
