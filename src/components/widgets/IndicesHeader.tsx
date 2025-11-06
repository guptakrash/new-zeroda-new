import { Sparkline } from './Sparkline'

export function IndicesHeader() {
  return (
    <div className="indices-header">
      <IndexCard name="NIFTY 50" value={25553.1} change={-44.55} data={[3,5,4,6,8,7,9,8]} />
      <IndexCard name="NIFTY BANK" value={57658.7} change={-168.35} data={[5,4,6,5,7,6,7,8]} />
      <div className="header-actions">
        <button className="btn icon" title="Cart">🛒</button>
        <button className="btn icon" title="Account">👤</button>
      </div>
    </div>
  )
}

type CardProps = { name: string; value: number; change: number; data: number[] }
function IndexCard({ name, value, change, data }: CardProps) {
  const negative = change < 0
  const changePct = (change / (value - change)) * 100
  return (
    <div className="index-card">
      <div className="title">{name}</div>
      <div className="row">
        <div className="price">{value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
        <div className={"ch " + (negative ? 'neg' : 'pos')}>
          {negative ? '' : '+'}{change.toFixed(2)} ({changePct.toFixed(2)}%)
        </div>
      </div>
      <Sparkline points={data} className={negative ? 'neg' : 'pos'} />
    </div>
  )
}


