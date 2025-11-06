import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Modal({ open, onClose, children, title }) {
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-end md:items-center md:justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-black/60", onClick: onClose }), _jsxs("div", { className: "relative w-full md:w-[720px] panel p-0 overflow-hidden rounded-t-2xl md:rounded-2xl", children: [title && _jsx("div", { className: "px-4 py-3 border-b border-kite-border font-medium", children: title }), _jsx("div", { className: "p-4", children: children })] })] }));
}
