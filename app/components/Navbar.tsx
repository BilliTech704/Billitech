'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            BilliTech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block text-slate-300 hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-slate-300 hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-slate-300 hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
