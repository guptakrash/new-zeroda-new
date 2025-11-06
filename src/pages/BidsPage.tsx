import { useState } from 'react'

type IPO = { name: string; priceFrom: number; priceTo: number; dates: string; state: 'Apply' | 'Pre-apply' | 'Closed' }

const ipos: IPO[] = [
  { name: 'GROWW', priceFrom: 95, priceTo: 100, dates: '4th - 7th Nov', state: 'Apply' },
  { name: 'SHETHJI', priceFrom: 120, priceTo: 125, dates: '4th - 7th Nov', state: 'Apply' },
  { name: 'FINBUD', priceFrom: 140, priceTo: 142, dates: '6th - 10th Nov', state: 'Apply' },
  { name: 'PINELABS', priceFrom: 210, priceTo: 221, dates: '7th - 11th Nov', state: 'Pre-apply' },
  { name: 'ORKLAINDIA', priceFrom: 695, priceTo: 730, dates: '29th - 31st Oct', state: 'Closed' },
]

export function BidsPage() {
  const [selected, setSelected] = useState<IPO | null>(null)
  return (
    <div className="page bids-page">
      <div className="tabs small">
        <button className="active">IPO</button>
        <button disabled>Govt. securities</button>
        <button disabled>Auctions</button>
      </div>
      <ul className="list">
        {ipos.map(i => (
          <li key={i.name} className="row" onClick={() => setSelected(i)}>
            <div className="title">
              <div className="name">{i.name}</div>
              <div className="sub">₹{i.priceFrom} – ₹{i.priceTo}</div>
            </div>
            <div className="badge right">{i.state}</div>
          </li>
        ))}
      </ul>

      {selected && (
        <div className="sheet" role="dialog" aria-modal>
          <div className="sheet-card">
            <div className="sheet-header">
              <div>
                <div className="name">{selected.name}</div>
                <div className="sub muted">Min qty 150 • Price ₹{selected.priceFrom} – ₹{selected.priceTo}</div>
              </div>
              <button className="btn icon" onClick={() => setSelected(null)}>✕</button>
            </div>
            <button className="btn primary w-full">Apply</button>
            <div className="sheet-meta">
              <div><span className="muted">Dates</span><div>{selected.dates}, 2025</div></div>
              <div><span className="muted">Lot size</span><div>150</div></div>
              <div><span className="muted">Issue size</span><div>₹6632Cr</div></div>
            </div>
          </div>
          <div className="sheet-backdrop" onClick={() => setSelected(null)} />
        </div>
      )}
    </div>
  )
}


