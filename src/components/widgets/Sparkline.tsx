type Props = { points: number[]; className?: string }

export function Sparkline({ points, className }: Props) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const norm = points.map(p => (p - min) / (max - min || 1))
  const d = norm.map((n, i) => `${(i / (points.length - 1)) * 100},${100 - n * 100}`).join(' ')

  return (
    <svg className={`sparkline ${className ?? ''}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <polyline fill="none" strokeWidth="6" stroke="currentColor" points={d} />
    </svg>
  )
}


