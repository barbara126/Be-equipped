import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h1 className="text-6xl md:text-8xl leading-[0.95] mb-8">
            The right gym is <br />
            <span className="italic-serif">not the one</span> with the most equipment.
          </h1>
          <p className="text-lg md:text-xl opacity-80 font-light mb-12">
            Be Equipped designs smarter, brand-free gyms for homes, condos, hotels, and cruise ships — using only what you truly need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-accent text-brand-bg text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              Plan My Gym
            </button>
            <Link
              to="/library"
              className="px-8 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors text-center"
            >
              Workout Library
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative aspect-square opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
            alt="Minimalist modern gym"
            className="w-full h-full object-cover grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 border border-white/10 bg-brand-bg p-8 hidden md:block max-w-xs">
            <p className="text-xl font-serif italic mb-2 tracking-tight">"Space is the most expensive piece of equipment."</p>
            <p className="label-caps opacity-30">— Be Equipped Philosophy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
