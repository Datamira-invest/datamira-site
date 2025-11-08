import * as React from 'react';

function cx(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx('rounded-xl border border-slate-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cx('p-6', className)}>{children}</div>;
}