'use client'
import React from 'react'
import Image from 'next/image'
import AI from '@/shared/assets/icon/AI.svg'
import { RightOutlined } from '@ant-design/icons';
import image from '@/shared/assets/image/image 3.png'

export default function Callback() {
  return (
    <div className='bg-kbli-primary flex justify-between p-10 items-center'>
        <section className='text-white space-y-6 p-3 w-1/2'>

            <h2 className='font-semibold text-xl'>
                Siap Memulai?
            </h2>

            <p>
                Mulai konsultasi dengan asisten virtual kami sekarang dan dapatkan informasi yang Anda butuhkan dengan cepat dan mudah.
            </p>

            <button className='bg-kbli-secondary p-4 hover:opacity-90 font-semibold rounded-lg'
            onClick={() => window.location.href = "/chat"}>
                Mulai Chat Sekarang <RightOutlined />
            </button>
        </section>
        <section>
            <Image 
                src={image}
                alt="Hero Image"
                width={600}
                className='rounded-lg'
            />
        </section>
    </div>
  )
}
