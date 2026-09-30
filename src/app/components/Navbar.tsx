"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from "react"
import Link from 'next/link'
import { useWorkout } from '../context/PlanContext'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { plan, saved } = useWorkout()
    const pathname = usePathname()
    return (

        <header className=' border-b border-(--border) bg-(--primary)'>
            <nav className='container mx-auto relative flex max-w-7xl items-center justify-between px-2 py-4 sm:px-6 lg:px-8'>
                <Link href="page.tsx" className='flex items-center gap-2'>
                    <Image src="/logo.png" alt='Fit Log' width={20}
                        height={20}
                        className='h-6 w-6'
                    />
                    <span className='text-xl text-(--primary-dark) font-medium'>FITLOG</span>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 items-center hidden gap-2 lg:flex">

                    <Link href="/" className={`rounded-full px-4 py-1 text-[15px] font-medium ${pathname === "/" ? "bg-(--page-btn) text-(--primary-dark)" : "text-(--primary-dark)"}`} >Workouts</Link>
                    <Link href="/plan" className={`rounded-full px-4 py-1 text-[15px] font-medium ${pathname === "/plan" ? "bg-(--page-btn) text-(--primary-dark)" : "text-(--primary-dark)"}`} >My plan</Link>

                </div>


                <div>

                </div>
                <div className="hidden items-center lg:flex gap-2">
                    <Link href="/plan" className='flex items-center gap-1 text-[15px] text-(--purple)'>Plan <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-(--page-btn) px-1.5 text-[12px] font-semibold text-(--primary-dark)'>{plan.length}</span></Link>
                    <Link href="/plan" className='flex items-center gap-1.5 text-[15px] text-(--purple)'>Saved <span className='flex h-5 min-w-5 items-center justify-center rounded-full border border-(--primary-dark) px-1.5 text-[12px] font-semibold text-(--purple)'>{saved.length}</span></Link>
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)} className='flex h-9 w-9 items-center justify-center rounded-md border border-[#272b33] text-white lg:hidden cursor-pointer'
                    aria-label='Toggle menu'
                    aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button>
            </nav>
            {
                menuOpen && (
                    <div className='border-t border-[#272b33] px-4 py-4 lg:hidden'>
                        <div className="mx-auto flex max-w-7xl flex-col gap-2">
                            <Link href="/"
                                onClick={() => setMenuOpen(false)} className={`rounded-full px-4 py-1 text-[15px] font-medium ${pathname === "/" ? "bg-(--page-btn) text-(--primary-dark)" : "text-(--primary-dark)"}`}>Workouts</Link>

                            <Link href="/plan"
                                onClick={() => setMenuOpen(false)}
                                className={`rounded-full px-4 py-1 text-[15px] font-medium ${pathname === "/plan" ? "bg-(--page-btn) text-(--primary-dark)" : "text-(--primary-dark)"}`}>My Plan
                            </Link>
                            <Link
                                href="/plan"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2 text-[15px] text-(--purple)"
                            >
                                Plan
                                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-(--page-btn) px-1.5 text-[12px] font-semibold text-(--primary-dark)">
                                    {plan.length}
                                </span>
                            </Link>

                            <Link
                                href="/plan"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-1 text-[15px] text-(--purple)"
                            >
                                Saved
                                <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-(--primary-dark) px-1.5 text-[12px] font-semibold text-(--purple)">
                                    {saved.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                )

            }
        </header >

    )
}

export default Navbar