import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search } from 'lucide-react';
import { docsRegistry } from 'src/lib/docsRegistry';

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchPalette = ({ isOpen, onClose }: SearchPaletteProps) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return docsRegistry;
    return docsRegistry.filter(
      (entry) =>
        entry.name.toLowerCase().includes(trimmed) || entry.description.toLowerCase().includes(trimmed)
    );
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const navigateTo = (slug: string) => {
    window.location.href = `/docs/${slug}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const chosen = results[activeIndex];
      if (chosen) navigateTo(chosen.slug);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-24"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-md flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
          >
            <div className="flex flex-row items-center gap-2 px-4 py-3 border-b border-gray-100">
              <Search className="flex-shrink-0 w-4 h-4 text-gray-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search components..."
                className="w-full text-sm text-gray-700 outline-none"
              />
              <kbd className="px-1.5 py-0.5 text-xs text-gray-400 bg-gray-100 border border-gray-200 rounded-md">
                Esc
              </kbd>
            </div>
            <ul className="overflow-y-auto max-h-80">
              {results.length === 0 && (
                <li className="px-4 py-6 text-sm text-center text-gray-400">No components found.</li>
              )}
              {results.map((entry, index) => (
                <li key={entry.slug}>
                  <button
                    onClick={() => navigateTo(entry.slug)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full flex-col items-start gap-0.5 px-4 py-2 text-left cursor-pointer ${
                      index === activeIndex ? 'bg-gray-50' : ''
                    }`}
                  >
                    <p className="text-sm font-medium text-gray-700">{entry.name}</p>
                    <p className="w-full text-xs text-gray-400 truncate">{entry.description}</p>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchPalette;
