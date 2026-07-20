import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from 'src/lib/utils';

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock = ({ code, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
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
      <pre className="p-4 overflow-x-auto text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
