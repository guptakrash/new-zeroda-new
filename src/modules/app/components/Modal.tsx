import { PropsWithChildren } from 'react';

export function Modal({ open, onClose, children, title }: PropsWithChildren<{ open: boolean; onClose: () => void; title?: string }>) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full md:w-[720px] panel p-0 overflow-hidden rounded-t-2xl md:rounded-2xl">
        {title && <div className="px-4 py-3 border-b border-kite-border font-medium">{title}</div>}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}


