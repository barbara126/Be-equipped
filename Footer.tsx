export function Footer() {
  return (
    <footer className="py-12 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col">
          <span className="label-caps mb-1 italic">Design & Strategy</span>
          <div className="text-2xl font-serif font-light italic tracking-tighter">
            Be Equipped
          </div>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Cookies</a>
        </div>

        <p className="text-[10px] opacity-20 uppercase tracking-[0.2em] font-bold">
          &copy; {new Date().getFullYear()} Be Equipped.
        </p>
      </div>
    </footer>
  );
}
