'use client'
import React from 'react';
import { fiturUnggulanList } from '@/shared/models/static/fiturUnggulan';
import Image from 'next/image';

export default function FiturUnggulan() {
  return (
    <div className='bg-gray-100 p-10 items-center text-center space-y-5'>
        <h1 className='text-kbli-primary text-3xl'>Fitur Unggulan</h1>
        <h2 className='text-xl '>Asisten virtual kami menyediakan berbagai layanan untuk memudahkan akses informasi dan proses perizinan investasi</h2>
        <section className='flex gap-6 justify-between p-10'>
            {fiturUnggulanList.map((item, index) => (
                <div key={index} className={`p-5 border-t-8 text-start space-y-5 ${item.accents} space-y-3 rounded-lg bg-white w-full`}>
                    <Image
                    src={item.Icon}
                    alt={item.Title}
                    className='rounded-lg bg-gray-200 p-1'
                    width={50}
                    />
                    <h1 className='text-kbli-primary text-lg font-semibold'>{item.Title}</h1>
                    <p>{item.Desc}</p>
                </div>
            ))}
        </section>
    </div>
  )
}
