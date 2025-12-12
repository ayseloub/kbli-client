'use client'
import React from 'react'
import HeroCrausel from '../components/HeroCrausel'
import FiturUnggulan from '../components/FiturUnggulan'
import Layanan from '../components/Layanan'
import Callback from '../components/callback'

export default function HomeContainer() {
  return (
    <>
        <HeroCrausel />
        <FiturUnggulan />
        <Layanan />
        <Callback />
    </>
  )
}
