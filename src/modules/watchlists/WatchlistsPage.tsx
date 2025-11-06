import { Search } from 'lucide-react';
import { useState } from 'react';

const mockStocks = [
  { symbol: 'HDFCBANK', ex: 'BSE', price: 985.35, change: 0.02 },
  { symbol: 'INFY', ex: 'NSE', price: 1472.4, change: 0.3 },
  { symbol: 'TCS', ex: 'BSE', price: 3015.15, change: 0.84 },
  { symbol: 'ONGC', ex: 'NSE', price: 252.05, change: -0.11 },
  { symbol: 'HINDUNILVR', ex: 'BSE', price: 2439.2, change: -0.28 },
  { symbol: 'GOLDBEES', ex: 'NSE', price: 100.05, change: 0.25 }
];

export function WatchlistsPage() {
  const [query, setQuery] = useState('');
  const items = mockStocks.filter(s => s.symbol.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="grid gap-4">
      {/* Search */}
      <div className="panel px-3 py-2 flex items-center gap-2">
        <Search size={16} className="muted" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search & add"
          className="bg-transparent outline-none flex-1"
        />
        <div className="muted text-xs">{items.length}/100</div>
      </div>

      {/* Grid: left list + right charts area */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="panel divide-y divide-kite-border">
          {items.map(s => (
            <div key={s.symbol} className="flex items-center gap-3 px-3 py-3">
              <div>
                <div className="font-medium">{s.symbol}</div>
                <div className="muted text-xs">{s.ex}</div>
              </div>
              <div className="ml-auto text-right">
                <div className={s.change >= 0 ? 'text-kite-green' : 'text-kite-red'}>
                  {s.price.toLocaleString()} 
                </div>
                <div className="muted text-xs">{s.change > 0 ? '+' : ''}{s.change}%</div>
              </div>
            </div>
          ))}
        </div>
        <div className="panel p-4 min-h-[420px]">
          <div className="muted text-sm mb-2">Charts</div>
          <div className="h-[360px] grid grid-cols-2 gap-3">
            <div className="bg-black/20 rounded-lg" />
            <div className="bg-black/20 rounded-lg" />
            <div className="bg-black/20 rounded-lg" />
            <div className="bg-black/20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}


