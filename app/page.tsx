'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Clock3,
  Heart,
  MapPin,
  Menu,
  Play,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const sessions = [
  { day: 'THU', date: '24', month: 'OCT', title: 'Red Flag Tempo', place: 'Central Park', meta: '6–8 km · 5:30–6:00 /km', tag: 'Open for all', tone: 'red' },
  { day: 'SUN', date: '27', month: 'OCT', title: 'Sunday Long Run', place: 'Panfilov Park', meta: '12 km · easy pace', tag: '38 spots left', tone: 'dark' },
  { day: 'TUE', date: '29', month: 'OCT', title: 'Night Shift', place: 'Arbat Square', meta: '5 km · social run', tag: 'New route', tone: 'light' },
]

const flags = [
  'Says it is a recovery run. Runs a personal best.',
  'Buys new shoes to avoid running in the old ones.',
  'Says “one more kilometer” for 20 minutes.',
]

const products = [
  { name: 'Red Flag Club Tee', price: '14 900 ₸', type: 'Heavyweight cotton', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85' },
  { name: 'No Pace Cap', price: '9 900 ₸', type: '6-panel performance', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=700&q=85' },
  { name: 'Run Toxic Socks', price: '5 900 ₸', type: 'Technical knit', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=700&q=85' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (index: number) => setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f3f0] text-[#111111]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
          <a href="#top" className="flex items-center gap-3" aria-label="Red Flag Running Club home">
            <span className="flex size-9 items-center justify-center bg-[#ee3124] text-[13px] font-black italic">RF</span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.24em] sm:block">Red Flag<br />Running Club</span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.18em] lg:flex" aria-label="Main navigation">
            <a className="transition-opacity hover:opacity-60" href="#runs">Runs</a>
            <a className="transition-opacity hover:opacity-60" href="#events">Events</a>
            <a className="transition-opacity hover:opacity-60" href="#club">The club</a>
            <a className="transition-opacity hover:opacity-60" href="#shop">Shop</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/signup" className="hidden h-9 items-center rounded-none bg-white px-4 text-[10px] font-black uppercase tracking-[0.16em] text-black hover:bg-[#ee3124] hover:text-white sm:flex">Join the club <ArrowRight data-icon="inline-end" /></Link>
            <button className="flex size-9 items-center justify-center border border-white/40 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/20 bg-black/90 px-5 py-6 text-xs font-bold uppercase tracking-[0.18em] lg:hidden"><a href="#runs">Runs</a><a href="#events">Events</a><a href="#club">The club</a><a href="#shop">Shop</a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end bg-[#161616] text-white md:min-h-[840px]">
        <img src="/red-flag-hero.png" alt="Runners crossing a city street together" className="absolute inset-0 size-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20 lg:px-14">
          <div className="mb-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70"><span className="size-2 bg-[#ee3124]" /> Almaty · Since 2021</div>
          <h1 className="max-w-5xl text-[clamp(4rem,12vw,11.5rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">Run<br /><span className="text-[#ee3124]">toxic.</span><br />Run together.</h1>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xs text-sm leading-relaxed text-white/75">A running club for people who take their miles seriously — but not themselves.</p>
            <div className="flex flex-wrap gap-3"><Link href="/signup" className="flex h-12 items-center rounded-none bg-[#ee3124] px-6 text-xs font-black uppercase tracking-[0.14em] hover:bg-white hover:text-black">Find your pace <ArrowRight data-icon="inline-end" /></Link><button className="flex h-12 items-center rounded-none border border-white/50 bg-transparent px-6 text-xs font-black uppercase tracking-[0.14em] text-white hover:bg-white hover:text-black"><Play data-icon="inline-start" /> Watch film</button></div>
          </div>
        </div>
        <div className="absolute bottom-8 right-5 hidden text-[10px] font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl] md:right-10 md:block lg:right-14">Scroll to explore ↓</div>
      </section>

      <section className="border-b border-black/10 bg-[#ee3124] text-white"><div className="flex min-w-max animate-[marquee_22s_linear_infinite] gap-10 py-4 text-xs font-black uppercase tracking-[0.2em]"><span>Green flag? Never heard of it.</span><span>•</span><span>No pace, no problem.</span><span>•</span><span>We run, we judge, we repeat.</span><span>•</span><span>Green flag? Never heard of it.</span></div></section>

      <section id="runs" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">01 / Move with us</p><h2 className="max-w-xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl">Pick your<br /><span className="text-[#ee3124]">red flag.</span></h2></div><a href="#events" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] underline underline-offset-4">See all runs <ArrowRight data-icon="inline-end" /></a></div>
        <div className="grid gap-3 md:grid-cols-3">{sessions.map((session) => <article key={session.title} className={`group flex min-h-[330px] flex-col justify-between p-6 transition-transform hover:-translate-y-1 ${session.tone === 'red' ? 'bg-[#ee3124] text-white' : session.tone === 'dark' ? 'bg-[#171717] text-white' : 'border border-black/15 bg-white'}`}><div className="flex justify-between"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] opacity-60">{session.day}</p><p className="text-7xl font-black leading-none tracking-[-0.08em]">{session.date}</p><p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-60">{session.month}</p></div><CalendarDays /></div><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] opacity-60">{session.tag}</p><h3 className="text-2xl font-black uppercase tracking-[-0.04em]">{session.title}</h3><div className="mt-3 flex flex-col gap-1 text-xs opacity-75"><span className="flex items-center gap-2"><MapPin /> {session.place}</span><span className="flex items-center gap-2"><Clock3 /> {session.meta}</span></div></div></article>)}</div>
      </section>

      <section id="club" className="bg-[#171717] text-white"><div className="mx-auto grid max-w-[1440px] md:grid-cols-2"><div className="flex flex-col justify-between p-5 py-20 md:p-10 md:py-28 lg:p-14"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">02 / The club</p><h2 className="max-w-lg text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] md:text-7xl">Not a<br /><span className="text-[#ee3124]">solo sport.</span></h2><p className="mt-8 max-w-md text-base leading-relaxed text-white/65">We meet before sunrise, after work, and whenever someone says “easy five.” No matter your pace, there is a place in the pack.</p></div><div className="mt-16 flex gap-10 border-t border-white/15 pt-6"><div><p className="text-4xl font-black">1.2k</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Members</p></div><div><p className="text-4xl font-black">284</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Runs logged</p></div><div><p className="text-4xl font-black">04</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Cities</p></div></div></div><div className="relative min-h-[430px] overflow-hidden bg-[#ee3124]"><img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85" alt="Runner in a red shirt training on a city street" className="size-full object-cover mix-blend-multiply grayscale" /><div className="absolute inset-0 flex items-center justify-center"><div className="flex size-36 rotate-[-12deg] items-center justify-center rounded-full border-2 border-white text-center text-xs font-black uppercase tracking-[0.15em]">Run<br />together<br />★</div></div></div></div></section>

      <section id="events" className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-14"><div className="mb-10 flex items-end justify-between"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">03 / Inside jokes</p><h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl">Red flags<br /><span className="text-[#ee3124]">of the week.</span></h2></div><Sparkles className="hidden size-10 text-[#ee3124] md:block" /></div><div className="grid gap-3 md:grid-cols-3">{flags.map((flag, index) => <article key={flag} className="relative flex min-h-[250px] flex-col justify-between border border-black/15 bg-white p-6"><div className="flex justify-between"><span className="text-4xl font-black text-[#ee3124]">0{index + 1}</span><button onClick={() => toggleLike(index)} aria-label={`Like red flag ${index + 1}`} className="transition-colors hover:text-[#ee3124]"><Heart className={liked.includes(index) ? 'fill-[#ee3124] text-[#ee3124]' : ''} /></button></div><p className="max-w-xs text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em]">{flag}</p><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">Community submission · 24 likes</p></article>)}</div></section>

      <section id="shop" className="border-t border-black/10 bg-[#e5e3de] px-5 py-20 md:px-10 md:py-28 lg:px-14"><div className="mx-auto max-w-[1440px]"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">04 / Club uniform</p><h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl">Wear your<br /><span className="text-[#ee3124]">red flag.</span></h2></div><Button variant="outline" className="w-fit rounded-none border-black bg-transparent text-xs font-black uppercase tracking-[0.15em] hover:bg-black hover:text-white">Visit the shop <ShoppingBag data-icon="inline-end" /></Button></div><div className="grid gap-3 md:grid-cols-3">{products.map((product) => <article key={product.name} className="group"><div className="relative aspect-[4/5] overflow-hidden bg-white"><img src={product.image} alt={product.name} className="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><button aria-label={`Add ${product.name} to favorites`} className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white"><Heart /></button></div><div className="flex items-start justify-between pt-4"><div><h3 className="text-sm font-black uppercase tracking-[-0.02em]">{product.name}</h3><p className="mt-1 text-xs text-black/50">{product.type}</p></div><p className="text-sm font-bold">{product.price}</p></div></article>)}</div></div></section>

      <footer className="bg-[#ee3124] px-5 py-12 text-white md:px-10 lg:px-14"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-10 border-b border-white/30 pb-12 md:flex-row"><div><div className="mb-5 flex items-center gap-3"><span className="flex size-9 items-center justify-center bg-white text-[13px] font-black italic text-[#ee3124]">RF</span><span className="text-[11px] font-bold uppercase tracking-[0.24em]">Red Flag<br />Running Club</span></div><p className="max-w-xs text-sm text-white/75">Your pace. Your people. Your red flags.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[10px] font-black uppercase tracking-[0.16em] md:grid-cols-3"><a href="#runs">Runs</a><a href="#events">Events</a><a href="#shop">Shop</a><Link href="/club">My club</Link><Link href="/admin">Admin</Link><Link href="/login">Log in</Link></div></div><div className="flex flex-col justify-between gap-5 pt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 md:flex-row"><p>© 2024 Red Flag Running Club</p><div className="flex items-center gap-4"><span>Almaty / KZ</span><Camera /><span>Instagram</span></div></div></div></footer>
    </main>
  )
}
