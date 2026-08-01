import { docsRegistry } from 'src/lib/docsRegistry';
import { guidesRegistry } from 'src/lib/guidesRegistry';
import CodeBlock from '@components/Library/CodeBlock';
import DocsSidebar from './DocsSidebar';

interface DocsPageProps {
  slug: string;
}

const DocsPage = ({ slug }: DocsPageProps) => {
  const componentEntry = docsRegistry.find((item) => item.slug === slug);
  const guideEntry = guidesRegistry.find((item) => item.slug === slug);

  if (!componentEntry && !guideEntry) {
    return (
      <div className="px-4 py-16 sm:px-8">
        <p className="text-gray-500">Page not found.</p>
      </div>
    );
  }

  if (guideEntry) {
    const Content = guideEntry.Content;

    return (
      <div className="flex flex-col w-full max-w-6xl gap-8 px-4 py-10 mx-auto sm:px-8 lg:flex-row lg:gap-12">
        <DocsSidebar activeSlug={guideEntry.slug} />
        <div className="flex flex-col flex-1 min-w-0 gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-primary">{guideEntry.name}</h1>
            <p className="max-w-[65ch] mt-2 text-gray-500">{guideEntry.description}</p>
          </div>

          <Content />
        </div>
      </div>
    );
  }

  const entry = componentEntry!;
  const Demo = entry.Demo;

  return (
    <div className="flex flex-col w-full max-w-6xl gap-8 px-4 py-10 mx-auto sm:px-8 lg:flex-row lg:gap-12">
      <DocsSidebar activeSlug={entry.slug} />
      <div className="flex flex-col flex-1 min-w-0 gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-primary">{entry.name}</h1>
          <p className="max-w-[65ch] mt-2 text-gray-500">{entry.description}</p>
        </div>

        <div className="flex items-center justify-center w-full p-8 overflow-x-auto border border-gray-200 rounded-lg bg-gray-50/50">
          <Demo />
        </div>

        <CodeBlock files={entry.code} />
      </div>
    </div>
  );
};

export default DocsPage;
