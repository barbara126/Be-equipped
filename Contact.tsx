import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-brand-accent text-brand-bg py-24 flex items-center px-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-5xl md:text-7xl italic-serif !text-brand-bg leading-none mb-4">
            Ready to build a gym <br className="hidden md:block" />
            people will <span className="text-brand-bg font-serif">actually use?</span>
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-60 font-bold">
            Independence. Experience. Practicality.
          </p>
        </div>
        
        <button className="h-24 px-16 border border-brand-bg/20 flex items-center gap-6 group hover:bg-brand-bg hover:text-brand-accent transition-all duration-500">
          <span className="text-sm font-bold uppercase tracking-[0.4em]">Contact Be Equipped</span>
          <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
}
