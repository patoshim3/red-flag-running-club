'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#171717] px-5 py-10 text-white">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60 hover:text-white"><ArrowLeft data-icon="inline-start" /> Back home</Link>
        <div className="mb-10 flex items-center gap-3"><span className="flex size-10 items-center justify-center bg-[#ee3124] text-sm font-black italic">RF</span><span className="text-xs font-bold uppercase tracking-[0.2em]">Red Flag<br />Running Club</span></div>
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">Member access</p>
        <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em]">Welcome<br /><span className="text-[#ee3124]">back.</span></h1>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-12 flex flex-col gap-4">
          <input required type="email" placeholder="Email address" className="h-14 border border-white/20 bg-white/5 px-4 text-sm outline-none placeholder:text-white/40 focus:border-[#ee3124]" />
          <input required type="password" placeholder="Password" className="h-14 border border-white/20 bg-white/5 px-4 text-sm outline-none placeholder:text-white/40 focus:border-[#ee3124]" />
          <button className="flex h-14 items-center justify-center gap-2 bg-[#ee3124] text-xs font-black uppercase tracking-[0.16em] hover:bg-white hover:text-black">{submitted ? 'You are in' : 'Log in'} <ArrowRight data-icon="inline-end" /></button>
        </form>
        <p className="mt-8 text-center text-sm text-white/55">Not a member? <Link href="/signup" className="font-bold text-white underline underline-offset-4">Join the club</Link></p>
      </div>
    </main>
  )
}
