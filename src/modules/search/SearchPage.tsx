import { useState } from 'react';

const mf = [
  { name: 'Zerodha ELSS Tax Saver Nifty LargeMidcap 250 Index Fund', tags: 'Equity, ELSS, Direct plan' },
  { name: 'Zerodha Nifty LargeMidcap 250 Index Fund', tags: 'Others, Index Funds/ETFs, Direct plan' },
  { name: 'Zerodha Overnight Fund', tags: 'Debt, Overnight, Direct plan' },
  { name: 'Zerodha Gold ETF FoF', tags: 'Others, Fund of Funds, Direct plan' },
  { name: 'Zerodha Silver ETF FoF', tags: 'Others, Fund of Funds, Direct plan' }
];

type Tab = 'MF' | 'IPO' | 'Events' | 'Brands' | 'ETF' | 'G-Sec';

export function SearchPage() {
  const [tab, setTab] = useState<Tab>('MF');

  return (
    <div className="grid gap-3">
      <div className="panel p-2">
        <input placeholder="Search eg: infy bse, nifty fut" className="w-full bg-black/20 rounded px-3 py-2" />
        <div className="flex gap-6 mt-2 text-sm">
          {(['MF','IPO','Events','Brands','ETF','G-Sec'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`pb-2 -mb-2 border-b-2 ${tab===t ? 'border-white' : 'border-transparent muted'}`}>{t}</button>
          ))}
        </div>
      </div>

      {tab === 'MF' && (
        <div className="panel divide-y divide-kite-border">
          {mf.map(x => (
            <div key={x.name} className="px-3 py-3">
              <div className="font-medium">{x.name}</div>
              <div className="muted text-xs">{x.tags}</div>
            </div>
          ))}
        </div>
      )}

      {tab !== 'MF' && (
        <div className="panel py-16 text-center muted">No results</div>
      )}
    </div>
  );
}


