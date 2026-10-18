'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f3f0] px-5 py-10 text-[#111111]">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-12 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-black/50 hover:text-[#ee3124]"><ArrowLeft data-icon="inline-start" /> Back home</Link>
        <div className="mb-10 flex items-center gap-3"><span className="flex size-10 items-center justify-center bg-[#ee3124] text-sm font-black italic text-white">RF</span><span className="text-xs font-bold uppercase tracking-[0.2em]">Red Flag<br />Running Club</span></div>
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#ee3124]">New member</p>
        <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em]">Join the<br /><span className="text-[#ee3124]">pack.</span></h1>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-12 flex flex-col gap-4">
          <input required placeholder="Your name" className="h-14 border border-black/15 bg-white px-4 text-sm outline-none placeholder:text-black/40 focus:border-[#ee3124]" />
          <input required type="email" placeholder="Email address" className="h-14 border border-black/15 bg-white px-4 text-sm outline-none placeholder:text-black/40 focus:border-[#ee3124]" />
          <input required type="password" placeholder="Create password" className="h-14 border border-black/15 bg-white px-4 text-sm outline-none placeholder:text-black/40 focus:border-[#ee3124]" />
          <button className="flex h-14 items-center justify-center gap-2 bg-[#ee3124] text-xs font-black uppercase tracking-[0.16em] text-white hover:bg-black">{submitted ? 'Application sent' : 'Create account'} <ArrowRight data-icon="inline-end" /></button>
        </form>
        <p className="mt-8 text-center text-sm text-black/55">Already a member? <Link href="/login" className="font-bold text-black underline underline-offset-4">Log in</Link></p>
      </div>
    </main>
  )
}
