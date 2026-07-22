import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { cn } from 'src/lib/utils';

interface CodeBlockProps {
  files: Record<string, string>;
  className?: string;
}

const COLLAPSED_HEIGHT = 240;

const CodeBlock = ({ files, className }: CodeBlockProps) => {
  const fileNames = Object.keys(files);
  const [activeFile, setActiveFile] = useState(fileNames[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeCode = files[activeFile] ?? '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn('overflow-hidden rounded-lg border border-gray-800 bg-[#0d1117]', className)}>
      <div className="flex flex-row items-center justify-between px-4 py-2 border-b border-gray-800">
        <p className="text-xs text-gray-400">Code</p>
        <button
          onClick={handleCopy}
          className="flex flex-row items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-300 cursor-pointer hover:bg-gray-800"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {fileNames.length > 1 && (
        <div className="flex flex-row flex-wrap items-center gap-1 px-2 pt-2 border-b border-gray-800">
          {fileNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveFile(name)}
              className={cn(
                'rounded-t-md px-3 py-1.5 text-xs cursor-pointer transition-colors',
                name === activeFile
                  ? 'bg-gray-900 text-gray-100 border border-b-0 border-gray-800'
                  : 'text-gray-500 hover:text-gray-300'
              )}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <div
        className="relative overflow-hidden"
        style={{ maxHeight: isExpanded ? undefined : COLLAPSED_HEIGHT }}
      >
        <pre className="p-4 overflow-x-auto text-sm text-gray-100">
          <code>{activeCode}</code>
        </pre>
        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-t from-[#0d1117] to-transparent" />
        )}
      </div>

      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex flex-row items-center justify-center w-full gap-1.5 py-2 text-xs text-gray-400 border-t border-gray-800 cursor-pointer hover:bg-gray-900/50 hover:text-gray-200"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-3.5 h-3.5" />
            Show less
          </>
        ) : (
          <>
            <ChevronDown className="w-3.5 h-3.5" />
            Show more
          </>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
