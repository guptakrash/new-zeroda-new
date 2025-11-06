import { useMemo, useState } from 'react'

type Item = {
  symbol: string
  exchange: 'NSE' | 'BSE'
  ltp: number
  change: number
}

const sample: Item[] = [
  { symbol: 'HDFCBANK', exchange: 'BSE', ltp: 985.35, change: 0.25 },
  { symbol: 'INFY', exchange: 'NSE', ltp: 1472.4, change: 4.5 },
  { symbol: 'TCS', exchange: 'BSE', ltp: 3015.15, change: 25.35 },
  { symbol: 'ONGC', exchange: 'NSE', ltp: 252.05, change: -0.3 },
  { symbol: 'HINDUNILVR', exchange: 'BSE', ltp: 2439.2, change: -6.85 },
  { symbol: 'GOLDBEES', exchange: 'NSE', ltp: 100.05, change: 0.25 },
]

const emptyTabs = ['Watchlist 2', 'Watchlist 3', 'Watchlist 4', 'Watchlist 5', 'Watchlist 6']

export function WatchlistPage() {
  const [tab, setTab] = useState(0)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() =>
    sample.filter(s => s.symbol.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <div className="page watchlist-page">
      <div className="tabs">
        <button className={tab === 0 ? 'active' : ''} onClick={() => setTab(0)}>Watchlist 1</button>
        {emptyTabs.map((t, i) => (
          <button key={t} className={tab === i + 1 ? 'active' : ''} onClick={() => setTab(i + 1)}>{t}</button>
        ))}
      </div>

      <div className="searchbar">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search & add" />
        <span className="counter">{(tab === 0 ? filtered.length : 0)}/100</span>
      </div>

      {tab === 0 ? (
        <ul className="list">
          {filtered.map(item => (
            <li key={item.symbol} className="row" role="button">
              <div className="title">
                <div className="name">{item.symbol}</div>
                <div className="sub">{item.exchange}</div>
              </div>
              <div className={"price "+ (item.change < 0 ? 'neg' : 'pos')}>
                <div>{item.ltp.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
                <div className="sub">{item.change > 0 ? '+' : ''}{item.change.toFixed(2)}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <div className="empty-illustration" />
          <div className="empty-title">Nothing here</div>
          <div className="empty-sub">Use the search bar to add instruments to your watchlist</div>
        </div>
      )}
    </div>
  )
}


