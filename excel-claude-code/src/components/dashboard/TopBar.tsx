'use client';

import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuth } from '@/contexts/AuthContext';
import { useProgressStore } from '@/stores/progressStore';

export function TopBar() {
  const { user } = useAuth();
  const { getCurrentStreak, getNextIncompleteDay, loading } = useProgressStore();

  const streak = getCurrentStreak();
  const nextDay = getNextIncompleteDay();
  const displayName = user?.displayName ?? 'User';

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-navy border-b border-white/5 px-6 py-3">
      {/* Left: Greeting */}
      <div>
        <h1 className="text-lg font-semibold text-text-primary">
          안녕하세요, {displayName}님!
        </h1>
      </div>

      {/* Center: Streak */}
      <div className="hidden md:flex items-center gap-2">
        <Flame
          size={20}
          className={cn(
            'transition-colors',
            streak > 0 ? 'text-cc-orange' : 'text-text-dim'
          )}
        />
        <span
          className={cn(
            'text-sm font-medium',
            streak > 0 ? 'text-cc-orange' : 'text-text-muted'
          )}
        >
          {streak > 0
            ? `${streak}일 연속 학습 중`
            : '학습을 시작해보세요!'}
        </span>
      </div>

      {/* Right: Continue Button */}
      {!loading && (
        <Link
          href={`/lesson/${nextDay}`}
          className="flex items-center gap-2 rounded-lg bg-cc-blue/15 px-4 py-2 text-sm font-medium text-cc-blue border border-cc-blue/25 hover:bg-cc-blue/25 transition-all duration-200"
        >
          Day {nextDay} 이어하기
          <ArrowRight size={16} />
        </Link>
      )}
    </header>
  );
}
