import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" 
                alt="Fitness expert consulting" 
                className="w-full aspect-square object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-4">
                 <div className="flex-1 bg-brand-accent p-8 flex flex-col justify-end text-brand-bg">
                   <p className="text-5xl font-serif leading-none mb-1">20+</p>
                   <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">Years Depth</p>
                 </div>
                 <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop" 
                  alt="Modern gym space" 
                  className="w-full aspect-[4/3] object-cover grayscale brightness-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="label-caps mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl mb-8 italic-serif text-white">Experience you can trust.</h2>
            <div className="space-y-6 text-sm text-brand-text/60 leading-relaxed font-light">
              <p>Be Equipped was founded on a simple realization: the best gyms aren't the biggest, they're the smartest.</p>
              <p>With over two decades in the fitness industry, we've seen every trend, every gimmick, and every oversized machine collect dust. We decided to offer a different path.</p>
              <p>We are independent and brand-free. We don't have a catalog of equipment we need to sell you. We only recommend what honestly works for your space and your people.</p>
              <p>Better fitness spaces are built through smarter choices, not more machines.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
