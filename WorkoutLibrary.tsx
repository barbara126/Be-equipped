import { motion } from 'motion/react';
import { PlayCircle, Smartphone, Dumbbell, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WorkoutLibrary() {
  return (
    <section id="library" className="py-24 bg-brand-surface text-brand-text relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-l-2 border-brand-accent pl-8">
              <span className="label-caps mb-4 block text-brand-accent">Beyond Architecture</span>
              <h2 className="text-4xl md:text-6xl mb-8 italic-serif">How far can two dumbbells go?</h2>
              <p className="text-lg opacity-60 leading-relaxed font-light mb-12 max-w-md">
                Our exercise library teaches you how to maximize limited equipment. Included with every setup or available separately.
              </p>
              
              <Link to="/library" className="inline-block text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 hover:border-brand-accent transition-colors">
                Access Library →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative aspect-[9/16] w-full max-w-sm bg-[#111] border border-white/10 shadow-2xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1548691905-57c36cc8d93f?q=80&w=1469&auto=format&fit=crop" 
                 alt="Phone UI Workout app" 
                 className="w-full h-full object-cover opacity-40 grayscale"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent flex flex-col justify-end p-8">
                 <div className="p-6 border-l border-brand-accent bg-brand-bg/60 backdrop-blur-sm mb-4">
                    <span className="label-caps mb-2 block">Dumbbell Series</span>
                    <h4 className="text-xl italic font-serif">Mastering the Press</h4>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
