import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='border-b border-(--border) bg-(--primary)'>
            <div className='flex flex-col gap-3 sm:flex-row mx-auto max-w-7xl  justify-between px-8 py-10 items-center'>
                <Link href="/components" className='flex items-center gap-2'>
                    <Image src="/logo.png" alt='Fit Log' width={20}
                        height={20}
                        className='h-6 w-6'
                    />
                    <span className='text-xl text-(--primary-dark) font-medium'>FITLOG</span>
                </Link>
                <p className='text-sm text-white'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;