'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuth } from '@/contexts/AuthContext';

const WEEK_NAV = [
  { week: 1, label: 'Week 1: Foundation', color: 'bg-week-1' },
  { week: 2, label: 'Week 2: Core Skills', color: 'bg-week-2' },
  { week: 3, label: 'Week 3: Advanced', color: 'bg-week-3' },
  { week: 4, label: 'Week 4: Mastery', color: 'bg-week-4' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-deep border-r border-white/5 h-screen">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/5">
        <Link
          href="/"
          className="flex items-center gap-1 text-base font-bold font-mono"
        >
          <span className="text-text-muted">&gt;_</span>{' '}
          <span className="text-text-primary">Claude</span>
          <span className="text-cc-cyan">Code</span>
          <span className="text-text-muted">.mastery</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Overview Section */}
        <div>
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-dim">
            Overview
          </p>
          <Link
            href="/dashboard"
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
              isActive('/dashboard')
                ? 'text-cc-blue bg-cc-blue/10'
                : 'text-text-muted hover:text-text-primary hover:bg-white/5'
            )}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </div>

        {/* Curriculum Section */}
        <div>
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-dim">
            Curriculum
          </p>
          <div className="space-y-1">
            {WEEK_NAV.map(({ week, label, color }) => (
              <Link
                key={week}
                href={`/dashboard#week-${week}`}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                  'text-text-muted hover:text-text-primary hover:bg-white/5'
                )}
              >
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', color)}
                />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div>
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-dim">
            Account
          </p>
          <div className="space-y-1">
            <Link
              href="/profile"
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                isActive('/profile')
                  ? 'text-cc-blue bg-cc-blue/10'
                  : 'text-text-muted hover:text-text-primary hover:bg-white/5'
              )}
            >
              <User size={18} />
              Profile
            </Link>
            <button
              onClick={signOut}
              className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-cc-red hover:bg-cc-red/10 transition-colors duration-150"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* User Info at Bottom */}
      {user && (
        <div className="border-t border-white/5 px-4 py-4">
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt={user.displayName ?? 'User'}
                width={36}
                height={36}
                className="rounded-full ring-2 ring-cc-blue/30"
              />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-blue/20 text-cc-blue text-sm font-bold">
                {(user.displayName ?? user.email ?? 'U').charAt(0).toUpperCase()}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-text-primary">
                {user.displayName ?? 'User'}
              </p>
              <p className="truncate text-xs text-text-dim">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
