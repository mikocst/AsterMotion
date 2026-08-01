import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DocsMarkdownProps {
  source: string;
}

const components: Components = {
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
};

const DocsMarkdown = ({ source }: DocsMarkdownProps) => (
  <div
    className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-primary
    prose-p:text-gray-500 prose-li:text-gray-500 prose-strong:text-gray-700
    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
    prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-gray-700
    prose-code:before:content-none prose-code:after:content-none
    prose-table:text-sm prose-thead:border-gray-200 prose-th:text-gray-700 prose-td:text-gray-500
    prose-tr:border-gray-100"
  >
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {source}
    </ReactMarkdown>
  </div>
);

export default DocsMarkdown;
