'use client'
import React from 'react';
import { layananList } from '@/shared/models/static/layanan';
import Image from 'next/image';

export default function Layanan() {
  return (
    <div className=' p-10 items-center text-center space-y-5'>
        <h1 className='text-kbli-primary text-3xl'>Layanan Yang Tersedia</h1>
        <h2 className='text-xl text-kbli-fourth'>Berbagai informasi dan bantuan yang dapat Anda akses melalui asisten virtual</h2>
        <section className='flex gap-6 justify-between p-10'>
            {layananList.map((item, index) => (
                <div key={index} className={`p-5 text-center space-y-5 border-opacity-80 border-2 rounded-lg bg-white w-full`}>
                    <Image
                    src={item.Icon}
                    alt={item.Title}
                    className='rounded-full bg-kbli-primary mx-auto p-3'
                    width={60}
                    />
                    <h1 className='text-kbli-primary text-xl '>{item.Title}</h1>
                    <p>{item.Desc}</p>
                </div>
            ))}
        </section>
    </div>
  )
}
