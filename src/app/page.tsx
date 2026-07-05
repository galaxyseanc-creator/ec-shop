import Image from 'next/image'
import Link from 'next/link'

const worldButton = {
  href: '/world',
  label: 'World',
  className: 'top-[29.8%] left-[45%] h-[6%] w-[12%]',
}

const instagramButton = {
  href: '/sns',
  label: 'Instagram',
  className: 'top-[66.27%] left-[52.07%] h-[2.67%] w-[1.61%]',
}

const xButton = {
  href: '/sns',
  label: 'X',
  className: 'top-[66.35%] left-[48.21%] h-[2.59%] w-[1.65%]',
}

const imageButtons = [
  {
    href: '/online-store',
    label: 'Online Store',
    className: 'top-[37.8%] left-[42.56%] h-[6%] w-[17%]',
    normal: '/home/pc-online-store-a.png',
    hover: '/home/pc-online-store-b.png',
    sizes: '11vw',
  },
  {
    href: '/tunecore',
    label: 'Tune Core',
    className: 'top-[46.8%] left-[43.72%] h-[6%] w-[15%]',
    normal: '/home/pc-tune-core-a.png',
    hover: '/home/pc-tune-core-b.png',
    sizes: '9vw',
  },
  {
    href: '/about',
    label: 'About us',
    className: 'top-[55%] left-[44.45%] h-[6%] w-[13%]',
    normal: '/home/pc-about-us-a.png',
    hover: '/home/pc-about-us-b.png',
    sizes: '6vw',
  },
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
            sizes="12vw"
            className="object-contain opacity-100 transition-opacity duration-150 group-hover:opacity-0"
          />
          <Image
            src="/home/pc-world-b.png"
            alt=""
            fill
            sizes="12vw"
            className="object-contain opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </Link>

        <Link
          href={xButton.href}
          aria-label={xButton.label}
          className={`group absolute z-20 block ${xButton.className}`}
        >
          <Image
            src="/home/pc-x-a.png"
            alt=""
            fill
            sizes="2vw"
            className="object-fill opacity-100 transition-opacity duration-150 group-hover:opacity-0"
          />
          <Image
            src="/home/pc-x-b.png"
            alt=""
            fill
            sizes="2vw"
            className="object-fill opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </Link>

        {imageButtons.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`group absolute z-20 block ${item.className}`}
          >
            <Image
              src={item.normal}
              alt=""
              fill
              sizes={item.sizes}
              className="object-contain opacity-100 transition-opacity duration-150 group-hover:opacity-0"
            />
            <Image
              src={item.hover}
              alt=""
              fill
              sizes={item.sizes}
              className="object-contain opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            />
          </Link>
        ))}

        <Link
          href={instagramButton.href}
          aria-label={instagramButton.label}
          className={`group absolute z-20 block ${instagramButton.className}`}
        >
          <Image
            src="/home/pc-instagram-a.png"
            alt=""
            fill
            sizes="2vw"
            className="object-fill opacity-100 transition-opacity duration-150 group-hover:opacity-0"
          />
          <Image
            src="/home/pc-instagram-b.png"
            alt=""
            fill
            sizes="2vw"
            className="object-fill opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          />
        </Link>

      </section>
    </main>
  )
}
