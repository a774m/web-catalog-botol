'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Load from '@/assets/load.png'

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setLoading(false)
    }, 800) // durasi loading (ms)

    return () => clearTimeout(timeout)
  }, [children, pathname])

  return (
    <div>
    {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <Image
            src={Load}
            alt="Loading..."
            className="w-72 h-72 animate-spin-custom"
        />
        </div>
        ) : (
    children
    )}
    </div>
  )
}
