import { useState } from 'react'

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [active, setActive] = useState('#hero')

  const handleClick = (href: string) => {
    setActive(href)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="w-full py-4 flex justify-center bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <nav className="flex gap-8">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleClick(link.href)}
            className={`relative px-2 py-1 text-gray-700 dark:text-gray-300 font-medium hover:text-purple-500 transition
              ${active === link.href ? 'after:block' : ''}
            `}
          >
            {link.name}
            {active === link.href && (
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-500 rounded-full"></span>
            )}
          </button>
        ))}
      </nav>
    </header>
  )
}