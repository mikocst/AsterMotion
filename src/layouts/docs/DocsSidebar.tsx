import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { docsRegistry } from 'src/lib/docsRegistry';
import { guidesRegistry } from 'src/lib/guidesRegistry';
import { cn } from 'src/lib/utils';

interface DocsSidebarProps {
  activeSlug: string;
}

interface NavEntry {
  slug: string;
  name: string;
}

interface NavListProps {
  title: string;
  entries: NavEntry[];
  activeSlug: string;
  onNavigate?: () => void;
}

const NavList = ({ title, entries, activeSlug, onNavigate }: NavListProps) => (
  <div>
    <p className="px-3 mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase">{title}</p>
    <ul className="flex flex-col gap-1">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <a
            href={`/docs/${entry.slug}`}
            onClick={onNavigate}
            className={cn(
              'block rounded-md px-3 py-1.5 text-sm whitespace-nowrap',
              entry.slug === activeSlug
                ? 'bg-primary/10 font-medium text-primary'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            )}
          >
            {entry.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DocsSidebar = ({ activeSlug }: DocsSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="flex-shrink-0 hidden lg:flex lg:w-56 lg:flex-col lg:gap-6">
        <NavList title="Guides" entries={guidesRegistry} activeSlug={activeSlug} />
        <NavList title="Components" entries={docsRegistry} activeSlug={activeSlug} />
      </nav>

      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open docs menu"
        aria-expanded={isOpen}
        className="fixed z-30 rounded-full bg-primary px-4 py-3 text-sm font-medium text-white shadow-lg cursor-pointer top-20 left-5 lg:hidden"
      >
        Docs Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={close}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col gap-6 overflow-y-auto bg-white py-4 shadow-xl"
            >
              <div className="flex flex-row items-center justify-between px-4">
                <p className="text-sm font-medium text-gray-700">Docs Menu</p>
                <button
                  onClick={close}
                  aria-label="Close navigation menu"
                  className="p-2 text-gray-500 rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-2">
                <NavList title="Guides" entries={guidesRegistry} activeSlug={activeSlug} onNavigate={close} />
                <NavList title="Components" entries={docsRegistry} activeSlug={activeSlug} onNavigate={close} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DocsSidebar;
