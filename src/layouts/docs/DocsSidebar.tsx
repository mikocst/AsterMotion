import { docsRegistry } from 'src/lib/docsRegistry';
import { cn } from 'src/lib/utils';

interface DocsSidebarProps {
  activeSlug: string;
}

const DocsSidebar = ({ activeSlug }: DocsSidebarProps) => {
  return (
    <nav className="flex-shrink-0 lg:w-56">
      <p className="px-3 mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase">Components</p>
      <ul className="flex flex-row gap-1 pb-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {docsRegistry.map((entry) => (
          <li key={entry.slug} className="flex-shrink-0">
            <a
              href={`/docs/${entry.slug}`}
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
    </nav>
  );
};

export default DocsSidebar;
