'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    setTheme(storedTheme || 'light')
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, mounted])

  if (!mounted) return null // avoid SSR mismatch

  return (
    <button
      aria-label="Toggle Theme"
      className="text-black dark:text-white transition cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
