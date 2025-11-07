import React, { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200">
      <div className="w-full bg-black text-white text-xs sm:text-sm py-1 text-center tracking-wide">
        30 DAYS EASY RETURN
      </div>

      {/* Main header */}
      <div className="w-full">
        <div className="hidden md:flex items-center justify-between gap-4 px-4 lg:px-8 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center gap-2" aria-label="Home">
              <img src="/src/assets/cheese.png" alt="logo" className="w-10 h-10" />
            </a>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex items-center justify-center ml-[10%]">
            <ul className="flex items-center gap-8 text-sm font-sm">
              <li><a className="hover:opacity-70 transition-opacity" href="#">SHOES</a></li>
              <li><a className="hover:opacity-70 transition-opacity" href="#">MEN</a></li>
              <li><a className="hover:opacity-70 transition-opacity" href="#">WOMEN</a></li>
              <li><a className="hover:opacity-70 transition-opacity" href="#">KID</a></li>
            </ul>
          </nav>

          {/* Auxiliary menu */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="hidden lg:flex items-center border border-gray-300 rounded-full px-1 py-1 mr-5 min-w-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full outline-none text-sm placeholder:text-gray-400"
                aria-label="Search"
              />
            </div>

            {/* Profile */}
            <button aria-label="Profile" className="p-1 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
                <path fillRule="evenodd" d="M.458 20.042A11.945 11.945 0 0112 18c4.69 0 8.79 2.694 10.542 6.042a.75.75 0 01-1.3.716A10.445 10.445 0 0012 19.5c-4.086 0-7.65 2.237-9.242 5.258a.75.75 0 11-1.3-.716z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Hearts */}
            <button aria-label="Wishlist" className="p-1 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.645 20.91l-.007-.003-.022-.012a25.18 25.18 0 01-1.162-.658 35.255 35.255 0 01-5.21-3.69C2.223 14.438 1 12.388 1 10.133 1 7.837 2.79 6 5.056 6c1.263 0 2.415.495 3.29 1.377L12 11.07l3.654-3.694A4.625 4.625 0 0120.944 6C23.21 6 25 7.837 25 10.133c0 2.255-1.223 4.305-4.244 6.414a35.255 35.255 0 01-5.21 3.69 25.18 25.18 0 01-1.162.658l-.022.012-.007.003a.75.75 0 01-.644 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button aria-label="Cart" className="p-1 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .32.114.36.279l2.38 9.53a2.25 2.25 0 002.19 1.691h8.164a2.25 2.25 0 002.19-1.691l1.347-5.39a.75.75 0 00-.727-.93H6.768l-.498-1.996A1.86 1.86 0 004.636 2.25H2.25z" />
                <path d="M8.25 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile / medium-small screens */}
        <div className="md:hidden px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              aria-label="Open menu"
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
            <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a25.18 25.18 0 01-1.162-.658 35.255 35.255 0 01-5.21-3.69C2.223 14.438 1 12.388 1 10.133 1 7.837 2.79 6 5.056 6c1.263 0 2.415.495 3.29 1.377L12 11.07l3.654-3.694A4.625 4.625 0 0120.944 6C23.21 6 25 7.837 25 10.133c0 2.255-1.223 4.305-4.244 6.414a35.255 35.255 0 01-5.21 3.69 25.18 25.18 0 01-1.162.658l-.022.012-.007.003a.75.75 0 01-.644 0z" />
              </svg>
            </button>
          </div>

          {/* Center: logo */}
          <a href="/" className="inline-flex items-center" aria-label="Home">
            <img src="/src/assets/cheese.png" alt="logo" className="w-10 h-10" />
          </a>

          {/* Right: profile, search, cart */}
          <div className="flex items-center gap-2">
            <button aria-label="Profile" className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
                <path fillRule="evenodd" d="M.458 20.042A11.945 11.945 0 0112 18c4.69 0 8.79 2.694 10.542 6.042a.75.75 0 01-1.3.716A10.445 10.445 0 0012 19.5c-4.086 0-7.65 2.237-9.242 5.258a.75.75 0 11-1.3-.716z" clipRule="evenodd" />
              </svg>
            </button>
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
              </svg>
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .32.114.36.279l2.38 9.53a2.25 2.25 0 002.19 1.691h8.164a2.25 2.25 0 002.19-1.691l1.347-5.39a.75.75 0 00-.727-.93H6.768l-.498-1.996A1.86 1.86 0 004.636 2.25H2.25z" />
                <path d="M8.25 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (slide down) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 px-4 pb-4">
            <nav className="pt-2">
              <ul className="flex flex-col text-sm font-medium">
                <li>
                  <a className="block px-2 py-3 hover:bg-gray-50 rounded" href="#" onClick={() => setMobileMenuOpen(false)}>SHOES</a>
                </li>
                <li>
                  <a className="block px-2 py-3 hover:bg-gray-50 rounded" href="#" onClick={() => setMobileMenuOpen(false)}>MEN</a>
                </li>
                <li>
                  <a className="block px-2 py-3 hover:bg-gray-50 rounded" href="#" onClick={() => setMobileMenuOpen(false)}>WOMEN</a>
                </li>
                <li>
                  <a className="block px-2 py-3 hover:bg-gray-50 rounded" href="#" onClick={() => setMobileMenuOpen(false)}>KID</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
