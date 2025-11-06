import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function MarketStrip() {
  // Static mock values
  const markets = [
    { name: 'NIFTY 50', value: 25553.1, change: -0.17 },
    { name: 'NIFTY BANK', value: 57658.7, change: -0.29 }
  ];

  return (
    <div className="flex items-center gap-4 text-xs">
      {markets.map(m => (
        <div key={m.name} className="flex items-center gap-2">
          <span className="muted">{m.name}</span>
          <span>{m.value.toLocaleString()}</span>
          <span className={m.change >= 0 ? 'text-kite-green' : 'text-kite-red'}>
            {m.change >= 0 ? <ArrowUpRight size={14} className="inline" /> : <ArrowDownRight size={14} className="inline" />}
            {Math.abs(m.change).toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
}


