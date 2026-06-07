'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/prolog.png'

const tabs = ['About Us', 'Catalog']

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null)

  const renderContent = (tabType: string | null) => {
    switch (tabType) {
      case 'About Us':
        return (
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">
              Spesial buat kamu yang suka tampil beda
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lahir dari keinginan untuk menghadirkan tumbler yang bukan hanya fungsional, tapi juga punya cerita.
            </p>
            <Link 
              href="/aboutus" 
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition gap-1 group"
            >
              Lihat Tentang Kami <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )
      case 'Catalog':
        return (
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 md:text-xl">
              Dapatkan Tumblermu
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Tumbler stainless ini bukan cuma kuat dan tahan lama, tapi juga bisa kamu desain sendiri. Pilih motif favoritmu.
            </p>
            <Link
              href="/catalog"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full md:w-auto text-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition shadow-sm shadow-blue-200"
            >
              Lihat Katalog Lengkap
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              className="rounded-xl shadow-sm"
              src={Logo}
              alt="tumbler logo"
              width={42}
              height={42}
              priority
            />
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Prolog
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav 
            className="hidden md:flex items-center gap-1 relative h-full"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {tabs.map((tab) => (
              <div key={tab} className="relative flex items-center h-full">
                <button
                  onMouseEnter={() => setHoveredTab(tab)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors relative z-10 ${
                    hoveredTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
                
                {/* Background pill effect on hover */}
                {hoveredTab === tab && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-50 rounded-xl -z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}

            {/* Mega Dropdown Desktop */}
            <AnimatePresence>
              {hoveredTab && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute top-[85%] right-0 w-[400px] bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 z-[999] overflow-hidden"
                >
                  {renderContent(hoveredTab)}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/catalog"
              className="bg-gray-950 text-white px-5 py-2.5 text-sm font-medium rounded-xl hover:bg-gray-800 transition active:scale-95 shadow-sm"
            >
              Get Product
            </Link>
          </div>

          {/* Hamburger Button Mobile */}
          <button 
            onClick={() => { setMenuOpen(!menuOpen); setActiveMobileTab(null); }} 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden z-40"
          >
            <div className="px-5 pt-4 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {!activeMobileTab ? (
                  <motion.div
                    key="mobile-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveMobileTab(tab)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition active:bg-gray-200"
                      >
                        {tab}
                        <span className="text-gray-400">→</span>
                      </button>
                    ))}
                    <Link
                      href="/catalog"
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-center bg-gray-950 text-white py-3 font-medium rounded-xl hover:bg-gray-800 transition shadow-sm"
                    >
                      Get Product
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => setActiveMobileTab(null)}
                      className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg mb-4 flex items-center gap-1 hover:bg-blue-100 transition"
                    >
                      ← Kembali
                    </button>
                    <div className="p-2">
                      {renderContent(activeMobileTab)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
