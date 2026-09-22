import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData.js';

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = portfolioData.terminalCommands[activeTab].output;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d0e12] border border-zinc-800 shadow-2xl overflow-hidden font-mono">
      <div className="bg-[#14151b] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-zinc-400 ml-2 font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            kaleem@mern-workstation:~
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-zinc-400 hover:text-cyan-400 text-xs flex items-center gap-1 p-1 rounded hover:bg-zinc-800 transition-colors"
          title="Copy output"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="flex border-b border-zinc-800/80 bg-[#101117] text-xs">
        {portfolioData.terminalCommands.map((cmd, idx) => (
          <button
            key={cmd.command}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 border-r border-zinc-800 transition-colors ${
              activeTab === idx
                ? 'bg-[#0d0e12] text-cyan-400 border-b-2 border-b-cyan-400 font-semibold'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            $ {cmd.command.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed min-h-[160px] bg-[#0d0e12]">
        <div className="flex items-center gap-2 text-cyan-400 mb-2">
          <span className="text-zinc-500">guest@portfolio:~$</span>
          <span>{portfolioData.terminalCommands[activeTab].command}</span>
        </div>
        <pre className="text-zinc-300 whitespace-pre-wrap font-mono mt-2 bg-zinc-950/60 p-3 rounded-xl border border-zinc-900 text-xs sm:text-[13px] overflow-x-auto text-emerald-400/90">
          {portfolioData.terminalCommands[activeTab].output}
        </pre>
      </div>
    </div>
  );
}
