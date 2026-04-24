import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 mb-8">
          <Clock className="text-brand-accent" size={32} />
        </div>
        
        <span className="label-caps mb-4 block">The Online Repository</span>
        <h1 className="text-5xl md:text-7xl italic-serif mb-8 text-white">Refining the <br />Library Experience.</h1>
        
        <p className="text-lg opacity-60 font-light leading-relaxed mb-12 max-w-md mx-auto">
          We are currently curating our 20+ years of exercise wisdom into a digital format. 
          Soon, you will have access to our full catalog of brand-free workout routines and equipment education.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group px-8 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center gap-3"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="text-[10px] uppercase tracking-[0.4em] opacity-30">
            Arriving Summer 2026
          </div>
        </div>
      </motion.div>
      
      {/* Abstract Design Element */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="h-full w-1/3 bg-brand-accent/50"
        />
      </div>
    </div>
  );
}
