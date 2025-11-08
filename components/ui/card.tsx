import * as React from 'react';
import clsx from 'clsx';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('rounded-xl border border-slate-200 bg-white shadow-sm', className)}>{children}</div>
}
export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx('p-6', className)}>{children}</div>
}
