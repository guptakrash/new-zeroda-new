export function FundsPage() {
  return (
    <div className="panel p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-kite-border bg-kite-panel/70">Funds</div>
      <div className="p-4 grid gap-4">
        <div>
          <div className="muted text-xs">Available margin (Cash + Collateral)</div>
          <div className="text-3xl font-semibold">₹0.00</div>
          <button className="text-blue-400 text-sm mt-1">View statement</button>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <button className="bg-green-600 text-white rounded-md py-3">+ Add funds</button>
          <button className="bg-blue-600 text-white rounded-md py-3">↻ Withdraw</button>
        </div>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-kite-border">
            {[
              'Opening balance','Payin','Payout','SPAN','Delivery margin','Exposure','Option premium','Collateral (Liquid funds)','Collateral (Equity)','Total collateral'
            ].map((row) => (
              <tr key={row}>
                <td className="px-2 py-2 muted">{row}</td>
                <td className="px-2 py-2 text-right">0.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


