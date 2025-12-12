'use client'
import React from 'react'
import Image from 'next/image'
import AI from '@/shared/assets/icon/AI.svg'
import { RightOutlined } from '@ant-design/icons';
import Gedung from '@/shared/assets/image/GedungImage.jpg'

export default function HeroCrausel() {
  return (
    <div className='bg-kbli-primary flex justify-between p-10 items-center'>
        <section className='text-white space-y-6 p-3 w-1/2'>
            <div className='rounded-full p-3 bg-kbli-secondary w-fit flex gap-3'>
                <Image 
                    src={AI}
                    alt="Hero Image"
                    width={20}
                    height={20}
                />
                <p>Layanan AI Terbaru</p>
            </div>

            <h2 className='font-semibold text-xl'>
                Asisten Virtual Pintar untuk Layanan Izin Berusaha
            </h2>

            <p>
                Dapatkan informasi dan bantuan seputar perizinan, investasi dan layanan BPKM dengan mudah melalui asisten virtual kami yang didukung oleh teknologi AI.
            </p>

            <button className='bg-kbli-secondary p-4 hover:opacity-90 font-semibold rounded-lg'
            onClick={() => window.location.href = "/chat"}>
                Mulai Konsultasi <RightOutlined />
            </button>
        </section>
        <section>
            <Image 
                src={Gedung}
                alt="Hero Image"
                width={800}
                height={600}
                className='rounded-lg'
            />
        </section>
    </div>
  )
}
