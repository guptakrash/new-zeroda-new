import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal } from '../app/components/Modal';
import { Link } from 'react-router-dom';
export function ProfilePage() {
    const [appCodeOpen, setAppCodeOpen] = useState(false);
    const [logoutOpen, setLogoutOpen] = useState(false);
    const [view, setView] = useState('account');
    if (view === 'profile') {
        return _jsx(ProfileDetailView, { onBack: () => setView('account') });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "panel p-0 overflow-hidden", children: [_jsx("div", { className: "px-4 py-3 border-b border-kite-border", children: "Account" }), _jsxs("div", { className: "p-4 grid gap-2", children: [_jsx(Row, { title: "Funds", to: "/funds" }), _jsx(Row, { title: "App Code", onClick: () => setAppCodeOpen(true) }), _jsx(Row, { title: "Profile", onClick: () => setView('profile') }), _jsx(Row, { title: "Settings", to: "/settings" }), _jsx(Row, { title: "Connected apps", to: "/connected-apps" }), _jsx(Row, { title: "Logout", onClick: () => setLogoutOpen(true) })] })] }), _jsx(Modal, { open: appCodeOpen, onClose: () => setAppCodeOpen(false), title: "App Code", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "muted", children: "Enter this code to login to Kite web" }), _jsx("div", { className: "text-3xl tracking-widest my-4", children: "810 374" }), _jsx("div", { className: "muted text-sm", children: "Changes in 28s" })] }) }), _jsx(Modal, { open: logoutOpen, onClose: () => setLogoutOpen(false), children: _jsxs("div", { className: "text-center py-4", children: [_jsx("div", { className: "mb-6", children: "Do you want to logout?" }), _jsxs("div", { className: "flex justify-end gap-3", children: [_jsx("button", { onClick: () => setLogoutOpen(false), className: "text-blue-400", children: "Cancel" }), _jsx("button", { onClick: () => setLogoutOpen(false), className: "text-blue-400", children: "OK" })] })] }) })] }));
}
function ProfileDetailView({ onBack }) {
    return (_jsxs("div", { className: "panel p-0 overflow-hidden", children: [_jsxs("div", { className: "px-4 py-3 border-b border-kite-border flex items-center gap-3", children: [_jsx("button", { onClick: onBack, children: "\u2190" }), _jsx("span", { children: "Profile" }), _jsx("div", { className: "ml-auto w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white", children: "KG" })] }), _jsxs("div", { className: "p-4 grid gap-4", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium text-lg", children: "Krash Gupta" }), _jsx("div", { className: "muted text-sm", children: "FLA905" })] }), _jsxs(Section, { title: "Account Details", children: [_jsx(DetailRow, { label: "Password & Security", value: "Manage", link: true }), _jsx(DetailRow, { label: "Support code", value: "View", link: true }), _jsx(DetailRow, { label: "E-mail", value: "2310krash@gmail.com" }), _jsx(DetailRow, { label: "Phone", value: "*8674" }), _jsx(DetailRow, { label: "PAN", value: "*009C" }), _jsx(DetailRow, { label: "Demat (BO)", value: "1208160192939034" }), _jsx("div", { className: "text-blue-400 text-sm mt-2", children: "Manage account" })] }), _jsx(Section, { title: "Bank accounts", children: _jsx(DetailRow, { label: "KOTAK MAHINDRA BANK LTD", value: "*7643" }) }), _jsxs(Section, { title: "Segments", children: [_jsx(DetailRow, { label: "NSE, MF, BSE", value: "" }), _jsx(DetailRow, { label: "Demat authorisation", value: "eDIS", link: true })] }), _jsx("div", { className: "text-blue-400 text-sm", children: "View active sessions \u2193" }), _jsxs(Section, { title: "Account closure", children: [_jsxs("div", { className: "muted text-xs mb-2", children: ["Account closure is permanent and irreversible. Please read ", _jsx("span", { className: "text-blue-400", children: "this" }), " before proceeding."] }), _jsx("div", { className: "text-blue-400 text-sm", children: "Continue" })] })] })] }));
}
function Section({ title, children }) {
    return (_jsxs("div", { children: [_jsx("div", { className: "font-medium mb-2", children: title }), _jsx("div", { className: "grid gap-2", children: children })] }));
}
function DetailRow({ label, value, link }) {
    return (_jsxs("div", { className: "flex justify-between items-center py-2 border-b border-kite-border", children: [_jsx("span", { className: "text-sm", children: label }), value && _jsx("span", { className: `text-sm ${link ? 'text-blue-400' : ''}`, children: value })] }));
}
function Row({ title, to, onClick }) {
    const body = (_jsx("div", { className: "px-3 py-3 hover:bg-black/20 rounded-md cursor-pointer", children: title }));
    if (to)
        return _jsx(Link, { to: to, children: body });
    return _jsx("div", { onClick: onClick, children: body });
}
