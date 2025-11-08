import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
}

function cx(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function Button({ variant='default', className, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm px-4 py-2 transition';
  const styles = {
    default: 'bg-cyan-400 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:opacity-90',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-900 hover:opacity-80'
  }[variant];
  return <button className={cx(base, styles, className)} {...props} />;
}
