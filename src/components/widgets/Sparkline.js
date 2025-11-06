import { jsx as _jsx } from "react/jsx-runtime";
export function Sparkline({ points, className }) {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const norm = points.map(p => (p - min) / (max - min || 1));
    const d = norm.map((n, i) => `${(i / (points.length - 1)) * 100},${100 - n * 100}`).join(' ');
    return (_jsx("svg", { className: `sparkline ${className !== null && className !== void 0 ? className : ''}`, viewBox: "0 0 100 100", preserveAspectRatio: "none", "aria-hidden": true, children: _jsx("polyline", { fill: "none", strokeWidth: "6", stroke: "currentColor", points: d }) }));
}
