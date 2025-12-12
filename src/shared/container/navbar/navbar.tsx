'use client'
import React from 'react'
import Logo from '@/shared/assets/image/Logo.svg'
import Image from 'next/image'

export default function navbar() {
  return (
    <div className="bg-kbli-primary flex justify-between w-full p-5 shadow-xl">
        <section className='flex gap-5 items-center'>
            <Image 
                src={Logo} 
                alt="Logo"
                width={100}
                className='bg-white p-1 rounded-lg' 
            />
            <div className='text-white'>
                <h1>Asisten Virtual BKPM</h1>
                <p>Layanan Informasi Digital</p>
            </div>
        </section>
        <section>
            <button 
                className='bg-kbli-secondary text-white font-semibold hover:opacity-90 px-4 py-2 rounded-lg'
                onClick={() => window.location.href = "/chat"}>
                Mulai Chat
            </button>
        </section>
    </div>
  )
}
