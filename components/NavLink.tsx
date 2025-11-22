'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';

export default function NavLink({ href, children, className = '', onClick }:{
  href: string; children: ReactNode; className?: string; onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + '/');
  return (
    <Link href={href} aria-current={active ? 'page' : undefined}
      className={`${className} ${active ? 'font-semibold underline underline-offset-4' : ''}`}
      onClick={onClick}>
      {children}
    </Link>
  );
}
