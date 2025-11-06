type Holding = { symbol: string; qty: number; avg: number; ltp: number }

const holdings: Holding[] = [
  { symbol: 'INFY', qty: 2, avg: 1450, ltp: 1472.4 },
  { symbol: 'TCS', qty: 1, avg: 2980, ltp: 3015.15 },
  { symbol: 'ONGC', qty: 10, avg: 250, ltp: 252.05 },
]

export function PortfolioPage() {
  const invested = holdings.reduce((s, h) => s + h.avg * h.qty, 0)
  const current = holdings.reduce((s, h) => s + h.ltp * h.qty, 0)
  const pnl = current - invested

  return (
    <div className="page portfolio-page">
      <div className="cards-grid">
        <div className="card">
          <div className="card-title">Invested</div>
          <div className="card-value">₹{invested.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
        </div>
        <div className="card">
          <div className="card-title">Current</div>
          <div className="card-value">₹{current.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
        </div>
        <div className="card">
          <div className="card-title">P&L</div>
          <div className={`card-value ${pnl >= 0 ? 'pos' : 'neg'}`}>₹{pnl.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Holdings</div>
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th><th>Qty</th><th>Avg</th><th>LTP</th><th>P/L</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map(h => {
              const hpnl = (h.ltp - h.avg) * h.qty
              return (
                <tr key={h.symbol}>
                  <td>{h.symbol}</td>
                  <td>{h.qty}</td>
                  <td>{h.avg}</td>
                  <td>{h.ltp}</td>
                  <td className={hpnl >= 0 ? 'pos' : 'neg'}>{hpnl.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}


