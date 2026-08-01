const footerLinks = [
    { label: 'Components', href: '/docs/accordion' },
    { label: 'Installation', href: '/docs/installation' },
    { label: 'Change Log', href: '/changelog' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative w-full overflow-hidden bg-primary text-white">
            <div className="flex flex-col w-full gap-10 px-4 pt-10 sm:gap-16 sm:px-8 sm:pt-16">
                <div className="flex flex-col items-start justify-between w-full gap-6 sm:flex-row sm:items-start">
                    <p className="text-sm text-white/70">© {year} Aster.Motion</p>
                    <ul className="flex flex-col items-start gap-2 sm:items-end">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm text-white/70 transition-colors duration-150 ease-out hover:text-white"
                                >
                                    [ {link.label} ]
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-start w-full gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <p
                        aria-hidden="true"
                        className="-mb-2 select-none pointer-events-none whitespace-nowrap font-extrabold leading-[0.8] tracking-tight text-white/20 text-5xl sm:-mb-8 sm:text-8xl md:-mb-12 md:text-9xl lg:text-[10rem]"
                    >
                        ASTER<span>*</span>
                    </p>
                    <p className="self-end pb-2 text-xs text-white/70 sm:flex-shrink-0 sm:pb-4 sm:text-sm">
                        Design and Coded by{' '}
                        <a
                            href="https://mikocst.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-colors duration-150 ease-out hover:text-white"
                        >
                            Miko.cst
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
