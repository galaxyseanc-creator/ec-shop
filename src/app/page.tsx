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

const mobileButtons = [
  {
    href: '/world',
    label: 'World',
    className: 'top-[29.3%] left-[40.5%] h-[6%] w-[19%]',
    normal: '/home/mb-world-a.png',
    hover: '/home/mb-world-b.png',
    sizes: '19vw',
  },
  {
    href: '/online-store',
    label: 'Online Store',
    className: 'top-[36.1%] left-[35.5%] h-[6%] w-[30%]',
    normal: '/home/mb-online-store-a.png',
    hover: '/home/mb-online-store-b.png',
    sizes: '30vw',
  },
  {
    href: '/tunecore',
    label: 'Tune Core',
    className: 'top-[43.3%] left-[37.3%] h-[6%] w-[26%]',
    normal: '/home/mb-tune-core-a.png',
    hover: '/home/mb-tune-core-b.png',
    sizes: '26vw',
  },
  {
    href: '/about',
    label: 'About us',
    className: 'top-[50.2%] left-[38.6%] h-[6%] w-[23%]',
    normal: '/home/mb-about-us-a.png',
    hover: '/home/mb-about-us-b.png',
    sizes: '23vw',
  },
  {
    href: '/sns',
    label: 'X',
    className: 'top-[60.7%] left-[44.2%] h-[4%] w-[6%]',
    normal: '/home/mb-x-a.png',
    hover: '/home/mb-x-b.png',
    sizes: '6vw',
  },
  {
    href: '/sns',
    label: 'Instagram',
    className: 'top-[60.6%] left-[51.7%] h-[4%] w-[6%]',
    normal: '/home/mb-instagram-a.png',
    hover: '/home/mb-instagram-b.png',
    sizes: '6vw',
  },
]

export default function StartPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#252525] text-black">
      <section className="relative h-full w-full overflow-hidden">
        <Image
          src="/home/pc-background.jpg"
          alt="SkyFisH home"
          fill
          sizes="100vw"
          className="hidden object-cover md:block"
          priority
        />
        <Image
          src="/home/mb-home-background.jpg"
          alt="SkyFisH home"
          fill
          sizes="100vw"
          className="object-cover md:hidden"
          priority
        />

        <Link
          href={worldButton.href}
          aria-label={worldButton.label}
          className={`group absolute z-20 hidden md:block ${worldButton.className}`}
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
          className={`group absolute z-20 hidden md:block ${xButton.className}`}
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
            className={`group absolute z-20 hidden md:block ${item.className}`}
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
          className={`group absolute z-20 hidden md:block ${instagramButton.className}`}
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

        {mobileButtons.map((item) => (
          <Link
            key={`mobile-${item.label}`}
            href={item.href}
            aria-label={item.label}
            className={`group absolute z-20 block md:hidden ${item.className}`}
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
      </section>
    </main>
  )
}
