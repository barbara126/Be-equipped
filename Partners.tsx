import { motion } from 'motion/react';
import { Home, Building2, Hotel, Ship, Store, Users } from 'lucide-react';

const partners = [
  {
    icon: <Home size={32} />,
    title: 'Private Homes',
    description: 'Bespoke fitness sanctuaries tailored to your personal goals and lifestyle.',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Condo Developers',
    description: 'High-value amenities that attract residents and optimize square footage.',
  },
  {
    icon: <Hotel size={32} />,
    title: 'Hotels',
    description: 'Premium wellness experiences that reflect your brand and delight guests.',
  },
  {
    icon: <Ship size={32} />,
    title: 'Cruise Ships',
    description: 'Efficient, durable setups designed for unique maritime constraints.',
  },
  {
    icon: <Store size={32} />,
    title: 'Boutique Residences',
    description: 'Elegant, space-saving solutions for exclusive living environments.',
  },
  {
    icon: <Users size={32} />,
    title: 'Shared Spaces',
    description: 'Durable and intuitive equipment choices for diverse community use.',
  },
];

export function Partners() {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="mb-16 border-b border-white/10 pb-12"
        >
          <span className="label-caps mb-4 block">Who We Work With</span>
          <h2 className="text-4xl md:text-6xl max-w-3xl">Versatile solutions for <span className="italic-serif text-white">every environment.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-[1px] w-full bg-white/20 mb-6 group-hover:bg-brand-accent transition-colors duration-500"></div>
              <h3 className="text-xl mb-3 font-light text-brand-text/90">{partner.title}</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
