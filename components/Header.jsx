import React, { useState } from 'react';

import { PiFinnTheHumanFill } from "react-icons/pi";
import { GiMineralHeart } from "react-icons/gi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top announcement bar */}
      <div className="w-full bg-black text-white py-2 text-center tracking-wide text-xs md:text-xs lg:text-md">
        11.11 SALE IS LIVE! UP TO 50% OFF SITEWIDE. SHOP NOW!  
        <span className="hidden md:inline-block">&nbsp;md</span>
      </div>

      {/* Main header */}
      <div className="w-full">
        <div className="hidden md:flex items-center justify-between gap-4 px-4 lg:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center gap-2" aria-label="Home">
              <img src="/src/assets/cheese.png" alt="logo" className="w-10 h-10" />
            </a>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex items-center justify-center ml-[20%] md:ml-[15%]">
            <ul className="flex items-center gap-8 text-sm font-sm">
              <li><a className="hover:border-b-2 border-black py-2 transition-opacity font-semibold" href="#">SHOES</a></li>
              <li><a className="hover:border-b-2 border-black py-2 transition-opacity font-semibold" href="#">MEN</a></li>
              <li><a className="hover:border-b-2 border-black py-2 transition-opacity font-semibold" href="#">WOMEN</a></li>
              <li><a className="hover:border-b-2 border-black py-2 transition-opacity font-semibold" href="#">KID</a></li>
            </ul>
          </nav>

          {/* Auxiliary menu */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="hidden lg:flex items-center border border-gray-300 rounded-full px-1 py-1 mr-5 min-w-[20px] hover:outline-1 ">
              <CiSearch strokeWidth={1} className="w-6 h-6 ml-1 text-gray-500 rounded-full hover:text-black"/>
              <input
                type="text"
                placeholder="Search"
                className="ml-2 py-1 w-full outline-none text-sm placeholder:text-gray-400"
                aria-label="Search"
              />
            </div>

            {/* Profile */}
            <button aria-label="Profile" className="p-2 hover:bg-gray-200 rounded-full">
              <PiFinnTheHumanFill className="w-7 h-7 md:w-6 md:h-6"/>
            </button>

            {/* Hearts */}
            <button aria-label="Wishlist" className="p-2 hover:bg-gray-200 rounded-full">
              <GiMineralHeart className="w-7 h-7 md:w-6 md:h-6"/>
            </button>
              
            {/* Cart */}
            <button aria-label="Cart" className="p-2 hover:bg-gray-200 rounded-full">
              <TbShoppingCartPlus className="w-7 h-7 md:w-6 md:h-6"/>
            </button>
        
          </div>
        </div>

        {/* Mobile screen */}
        <div className="md:hidden px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Burger menu */}
            <button
              aria-label="Open menu"
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
           <button aria-label="Wishlist" className="p-2 hover:bg-gray-200 rounded-full">
              <GiMineralHeart className="w-6 h-6"/>
            </button>
          </div>

          {/* Center: logo */}
          <a href="/" className="inline-flex items-center" aria-label="Home">
            <img src="/src/assets/cheese.png" alt="logo" className="w-10 h-10" />
          </a>

          {/* Right: profile, search, cart */}
          <div className="flex items-center gap-2">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
              </svg>
            </button>
            <button aria-label="Profile" className="p-2 hover:bg-gray-200 rounded-full">
              <PiFinnTheHumanFill className="w-6 h-6"/>
            </button>
            <button aria-label="Cart" className="p-2 hover:bg-gray-200 rounded-full">
              <TbShoppingCartPlus className="w-6 h-6"/>
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
