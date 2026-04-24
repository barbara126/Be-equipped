import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-24 bg-brand-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-8">
              <span className="label-caps mb-1">The Dilemma</span>
              <h2 className="text-4xl md:text-5xl leading-tight">Most gyms are built to impress, <span className="italic-serif">not to be used.</span></h2>
            </div>
            <div className="space-y-6 text-sm text-brand-text/60 leading-relaxed font-light">
              <p>People often fall into the trap of complexity. Most gyms are overcrowded, overbuilt, and chronically underused.</p>
              <p>Too many repetitive machines waste valuable square footage and thousands of dollars, creating an intimidating and cluttered environment that people eventually avoid.</p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <div className="flex flex-col mb-8">
              <span className="label-caps mb-1 text-brand-accent">Our Response</span>
              <h2 className="text-4xl md:text-5xl leading-tight">A leaner approach to <span className="italic-serif">total wellness.</span></h2>
            </div>
            <div className="space-y-6 text-sm text-brand-text/60 leading-relaxed font-light">
              <p>Be Equipped creates lean, intelligent, customized gym setups based on your specific space, target users, budget, and purpose.</p>
              <p>We believe in quality over quantity. By selecting the right multi-functional equipment and prioritizing layout, we create spaces that feel open, inviting, and efficient.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
