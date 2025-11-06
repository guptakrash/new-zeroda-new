const holdings = [
  { symbol: 'INFY', qty: 10, avg: 1450, ltp: 1472.4 },
  { symbol: 'TCS', qty: 2, avg: 2950, ltp: 3015.15 },
  { symbol: 'ONGC', qty: 50, avg: 260, ltp: 252.05 }
];

export function PortfolioPage() {
  const totalInvested = holdings.reduce((a, h) => a + h.avg * h.qty, 0);
  const current = holdings.reduce((a, h) => a + h.ltp * h.qty, 0);
  const pnl = current - totalInvested;

  return (
    <div className="grid gap-4">
      <div className="grid md:grid-cols-3 gap-4">
        <Stat title="Invested" value={`₹${totalInvested.toLocaleString()}`} />
        <Stat title="Current" value={`₹${current.toLocaleString()}`} />
        <Stat title="P&L" value={`₹${pnl.toLocaleString()}`} positive={pnl >= 0} />
      </div>

      <div className="panel overflow-hidden">
        <table className="w-full text-sm">
          <thead className="muted text-xs">
            <tr className="text-left">
              <th className="px-3 py-2">Symbol</th>
              <th className="px-3 py-2">Qty</th>
              <th className="px-3 py-2">Avg</th>
              <th className="px-3 py-2">LTP</th>
              <th className="px-3 py-2">P&L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-kite-border">
            {holdings.map(h => {
              const rowPnl = (h.ltp - h.avg) * h.qty;
              return (
                <tr key={h.symbol}>
                  <td className="px-3 py-3 font-medium">{h.symbol}</td>
                  <td className="px-3 py-3">{h.qty}</td>
                  <td className="px-3 py-3">₹{h.avg}</td>
                  <td className="px-3 py-3">₹{h.ltp}</td>
                  <td className={"px-3 py-3 " + (rowPnl >= 0 ? 'text-kite-green' : 'text-kite-red')}>
                    ₹{rowPnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ title, value, positive }: { title: string; value: string; positive?: boolean }) {
  return (
    <div className="panel p-4">
      <div className="muted text-xs">{title}</div>
      <div className={`text-xl font-semibold ${positive === undefined ? '' : positive ? 'text-kite-green' : 'text-kite-red'}`}>{value}</div>
    </div>
  );
}


