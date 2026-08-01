import { useEffect, useState } from 'react';
import logo from '@assets/AsterMotionLogo.svg'
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import SearchPalette from './Library/SearchPalette';

const navLinks = [
    { label: 'Components', href: '/docs/accordion' },
    { label: 'Installation', href: '/docs/installation' },
    { label: 'Change Log', href: '/changelog' },
    { label: 'GitHub', href: 'https://github.com/mikocst/AsterMotion', external: true },
];

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
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMobileMenu();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

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
                            {link.external ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a href={link.href}>{link.label}</a>
                            )}
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
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed inset-0 z-50 bg-black/40 md:hidden"
                        onClick={closeMobileMenu}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 overflow-y-auto bg-white py-4 shadow-xl md:hidden"
                    >
                        <div className="flex flex-row items-center justify-between px-4">
                            <p className="text-sm font-medium text-gray-700">Menu</p>
                            <button
                                onClick={closeMobileMenu}
                                aria-label="Close navigation menu"
                                className="p-2 text-gray-500 rounded-md cursor-pointer hover:bg-gray-50"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-1 px-2">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        onClick={closeMobileMenu}
                                        className="block px-3 py-2 text-gray-600 rounded-md hover:bg-gray-50 hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

        <SearchPalette isOpen={isSearchOpen} onClose={closeSearch} />
    </nav>
  )
}

export default NavBar
