'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          horsepower.vip
        </Link>
        <nav className="space-x-2 hidden md:flex">
          <Link href="/garage">
            <Button variant="ghost">Garage</Button>
          </Link>
          <Link href="/cars">
            <Button variant="ghost">Cars</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
