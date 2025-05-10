import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="header">Om Nagare Blog's</Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/addblog" className="btn-outline">Create Blog</Link>
          <Link to="/login" className="btn-outline">Login</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <svg className="menu-icon" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/blog" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="btn-outline block" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="btn-primary block" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  )
}