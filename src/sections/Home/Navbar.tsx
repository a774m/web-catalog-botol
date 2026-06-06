'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/prolog.png'
import MenuIcon from '@/assets/menu.svg'
import gambar from '@/assets/metal.png'

const tabs = ['About Us', 'Catalog']

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null)

  const renderContent = () => {
    const tab = hoveredTab || activeMobileTab

    switch (tab) {
      case 'About Us':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Spesial buat kamu yang suka tampil beda</h2>
            <p className="text-gray-600">
              lahir dari keinginan untuk menghadirkan tumbler yang bukan hanya fungsional, tapi juga punya cerita.
            </p>
            <Link href="/aboutus" className="text-blue-600 underline">
              ➤ Lihat Tentang kami
            </Link>
          </div>
        )
      case 'Catalog':
        return (
          <div className="space-y-3">
            <p className="text-xl font-semibold text-black">Dapatkan Tumblermu</p>
            <p className="text-gray-600">Tumbler stainless ini bukan cuma kuat dan tahan lama, tapi juga bisa kamu desain sendiri. Pilih motif favoritmu</p>
            <Link
              href="/catalog"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ➤ Lihat Katalog Lengkap
            </Link>
          </div>
        )
      default:
        return null
        
    }
  }

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
              className="rounded"
              src={Logo}
              alt="tumbler logo"
              width={40}
              height={40}
            />
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
            {/* Desktop Menu */}
            <div
              className="hidden md:flex gap-6 text-black/60 items-center relative"
              onMouseLeave={() => setHoveredTab(null)}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onMouseEnter={() => setHoveredTab(tab)}
                  className="relative px-4 py-2 font-medium text-gray-600 hover:text-blue-600 transition"
                >
                  {tab}
                  {hoveredTab === tab && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600"
                    />
                  )}
                </button>
              ))}
              <AnimatePresence>
                {hoveredTab && (
                  <motion.div
                    key={hoveredTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full bg-white border-2 border-black drop-shadow-xl rounded-lg p-6 z-[9999]"
                  >
                    {renderContent()}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className='mb-2'>
              <Link
                href="/catalog"
                    className="mt-4 block text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border border-black transition"
                >
                    Get Product
              </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence mode='wait'>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 m-auto w-full h-52 md:hidden  bg-white rounded-xl shadow-lg p-4 space-y-4 z-[9999]"
              >
                {!activeMobileTab ? (
                  tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveMobileTab(tab)}
                      className="block w-full text-left text-gray-700 hover:text-blue-600"
                    >
                      {tab}
                    </button>
                  ))
                ) : (
                   <motion.div
                    key="menu-content"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    <button
                      onClick={() => setActiveMobileTab(null)}
                      className="text-sm text-blue-600 mb-3 flex items-center gap-1"
                    >
                      ← Kembali
                    </button>
                    {renderContent()}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
