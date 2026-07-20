import { useEffect, useState } from 'react';
import logo from '@assets/Logo.png'
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import SearchPalette from './Library/SearchPalette';

const navLinks = [
    { label: 'Components', href: '/docs/accordion' },
    { label: 'Change Log', href: '/changelog' },
];

const MotionDiv = motion.create('div');

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const closeSearch = () => setIsSearchOpen(false);

    return (
    <nav className = "sticky top-0 z-40 flex flex-col w-full bg-white border-b border-gray-100">
        <div className = "flex flex-row items-center justify-between w-full px-4 py-4 sm:px-8">
            <div className = "flex flex-row items-center min-w-0 gap-2">
                <a href="/">
                    <img src={logo.src} alt="Aster.motion Logo" className="flex-shrink-0 w-8 h-8 cursor-pointer"/>
                </a>
                <button
                    onClick={() => setIsSearchOpen(true)}
                    className = "items-center justify-between hidden gap-3 px-2 py-1 text-gray-400 border border-gray-200 rounded-lg cursor-pointer sm:flex hover:bg-gray-50"
                >
                    <p className = "text-sm">Search Docs...</p>
                    <div className = "p-1 text-gray-400 bg-gray-100 border border-gray-200 rounded-lg">
                        <p className = "text-xs">ctrl+k</p>
                    </div>
                </button>
                <button
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Search Docs"
                    className = "p-2 text-gray-400 border border-gray-200 rounded-lg cursor-pointer sm:hidden hover:bg-gray-50"
                >
                    <Search className="w-4 h-4" />
                </button>
            </div>
            <div className = "flex flex-row items-center gap-4">
                <ul className='flex-row hidden gap-4 md:flex'>
                    {navLinks.map((link) => (
                        <li key={link.label} className = "text-gray-500 cursor-pointer hover:text-primary">
                            {link.href ? <a href={link.href}>{link.label}</a> : link.label}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className = "p-2 text-gray-500 rounded-md cursor-pointer md:hidden hover:bg-gray-50"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>
        </div>

        <AnimatePresence>
            {isMobileMenuOpen && (
                <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden border-t border-gray-100 md:hidden"
                >
                    <ul className="flex flex-col gap-1 px-4 py-3">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.href ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-2 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <span className="block px-2 py-2 text-gray-400">{link.label}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </MotionDiv>
            )}
        </AnimatePresence>

        <SearchPalette isOpen={isSearchOpen} onClose={closeSearch} />
    </nav>
  )
}

export default NavBar
