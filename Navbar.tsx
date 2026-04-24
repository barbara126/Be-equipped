import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Workout Library', href: '/library' },
  { name: 'Contact Us', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-6 md:px-12 border-b border-white/10',
        scrolled ? 'bg-brand-bg/90 backdrop-blur-md py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <div className="flex flex-col">
          <span className="label-caps mb-1">Design & Strategy</span>
          <a href="#home" className="text-2xl font-serif font-light italic tracking-tighter">
            Be Equipped
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-[11px] uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </a>
            )
          ))}
          <a
            href="/#contact"
            className="text-[11px] uppercase tracking-[0.2em] text-brand-accent border-b border-brand-accent/40 pb-1"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-paper border-t border-brand-ink/10 p-6 flex flex-col space-y-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:text-brand-sage transition-colors uppercase tracking-widest text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-ink text-brand-paper px-6 py-3 rounded-full text-center font-medium"
          >
            Plan My Gym
          </a>
        </motion.div>
      )}
    </nav>
  );
}
