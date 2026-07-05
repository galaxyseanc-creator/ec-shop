import Image from 'next/image'
import Link from 'next/link'

const worldButton = {
  href: '/world',
  label: 'World',
  className: 'top-[31.29%] left-[47.75%] h-[2.75%] w-[6.34%]',
}

const navItems = [
  { href: '/online-store', label: 'Online Store', className: 'top-[40%] left-[40%] h-[6%] w-[20%]' },
  { href: '/tunecore', label: 'Tune Core', className: 'top-[48.5%] left-[40.5%] h-[6%] w-[19%]' },
  { href: '/about', label: 'About us', className: 'top-[57%] left-[41%] h-[6%] w-[18%]' },
  { href: '/sns', label: 'X', className: 'top-[66.5%] left-[45%] h-[5%] w-[4%]' },
  { href: '/sns', label: 'Instagram', className: 'top-[66.5%] left-[51%] h-[5%] w-[4%]' },
]

export default function StartPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#252525] text-black">
      <section className="relative aspect-[2048/1184] w-full max-w-[2048px] overflow-hidden">
        <Image
          src="/home/reference-home.png"
          alt="SkyFisH home"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        <Link
          href={worldButton.href}
          aria-label={worldButton.label}
          className={`group absolute z-20 block ${worldButton.className}`}
        >
          <Image
            src="/home/pc-world-a.png"
            alt=""
            fill
            sizes="7vw"
            className="object-fill opacity-100 transition-opacity duration-150 group-hover:opacity-0"
          />
          <Image
            src="/home/pc-world-b.png"
            alt=""
            width={146}
            height={51}
            sizes="7vw"
            className="absolute left-1/2 top-1/2 h-[70.2%] w-[91.5%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </Link>

        {navItems.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            aria-label={item.label}
            className={`absolute z-10 block ${item.className}`}
          />
        ))}
      </section>
    </main>
  )
}
