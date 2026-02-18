'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

const NAV_LINKS = [
  { label: 'Why', href: '#pain' },
  { label: 'Curriculum', href: '#roadmap' },
  { label: 'Features', href: '#features' },
  { label: 'Videos', href: '#youtube' },
  { label: 'Start', href: '#cta' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-lg font-bold font-mono">
          <span className="text-text-muted">&gt;_</span>{' '}
          <span className="text-text-primary">Claude</span>
          <span className="text-cc-cyan">Code</span>
          <span className="text-text-muted">.mastery</span>
        </a>

        {/* Nav Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-cc-cyan transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            className="ml-2 px-4 py-1.5 text-sm font-medium rounded-lg bg-cc-blue/20 text-cc-blue border border-cc-blue/30 hover:bg-cc-blue/30 transition-all duration-200"
          >
            로그인
          </a>
        </div>
      </div>
    </nav>
  );
}
