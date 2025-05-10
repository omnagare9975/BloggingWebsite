import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../App.css'
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-zinc-900 shadow px-6 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className='header'>Om Nagare Blog's</Link>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </div>

        {/* Login/Signup */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/addblog" className="text-sm px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition">Create Blog</Link>
          <Link to="/user/login" className="text-sm px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition">Login</Link>
          <Link to="/user/signup" className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 px-6 space-y-2`}>
        <Link to="/" className="block py-2 hover:text-purple-400">Home</Link>
        <Link to="/about" className="block py-2 hover:text-purple-400">About</Link>
        <Link to="/blog" className="block py-2 hover:text-purple-400">Blog</Link>
        <Link to="/contact" className="block py-2 hover:text-purple-400">Contact</Link>
        <Link to="/login" className="block py-2 text-sm border border-purple-500 text-purple-400 rounded text-center hover:bg-purple-500 hover:text-white transition">Login</Link>
        <Link to="/signup" className="block py-2 text-sm bg-purple-600 text-white rounded text-center hover:bg-purple-700 transition">Sign Up</Link>
      </div>
    </nav>
  )
}