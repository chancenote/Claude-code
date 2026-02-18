'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Flame,
  Trophy,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuth } from '@/contexts/AuthContext';
import { useProgressStore } from '@/stores/progressStore';
import { curriculum, getCurriculumByWeek } from '@/data/curriculum';
import type { WeekNumber } from '@/types/curriculum';

const WEEK_META: Record<
  number,
  { phase: string; colorClass: string; barColor: string; bgColor: string }
> = {
  1: {
    phase: 'Foundation',
    colorClass: 'text-week-1',
    barColor: 'bg-week-1',
    bgColor: 'bg-week-1/15',
  },
  2: {
    phase: 'Core Skills',
    colorClass: 'text-week-2',
    barColor: 'bg-week-2',
    bgColor: 'bg-week-2/15',
  },
  3: {
    phase: 'Advanced',
    colorClass: 'text-week-3',
    barColor: 'bg-week-3',
    bgColor: 'bg-week-3/15',
  },
  4: {
    phase: 'Mastery',
    colorClass: 'text-week-4',
    barColor: 'bg-week-4',
    bgColor: 'bg-week-4/15',
  },
};

/* ------------------------------------------------------------------ */
/*  Loading skeleton                                                   */
/* ------------------------------------------------------------------ */
function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Stats skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-card/60" />
        ))}
      </div>
      {/* Week cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-card/60" />
        ))}
      </div>
      {/* Day grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="h-24 rounded-lg bg-card/60" />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main dashboard page                                                */
/* ------------------------------------------------------------------ */
export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const {
    progress,
    loading,
    fetchAll,
    getOverallPercent,
    getCompletedCount,
    getCurrentStreak,
    getWeekPercent,
  } = useProgressStore();

  useEffect(() => {
    if (user?.id) {
      fetchAll(user.id);
    }
  }, [user?.id, fetchAll]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  const completedCount = getCompletedCount();
  const overallPercent = getOverallPercent();
  const streak = getCurrentStreak();
  const totalHours = Object.values(progress).reduce(
    (sum, d) => sum + (d.hoursSpent ?? 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* ── Overall Progress ────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4">
          전체 진행률
        </h2>

        {/* Wide progress bar */}
        <div className="rounded-xl bg-card border border-white/5 p-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-text-muted">
              {completedCount} / 30 일 완료
            </span>
            <span className="text-sm font-bold text-cc-cyan">
              {overallPercent}%
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cc-cyan to-cc-blue transition-all duration-700"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Clock size={20} className="text-cc-cyan" />}
            label="총 학습 시간"
            value={`${totalHours.toFixed(1)}h`}
            accent="cc-cyan"
          />
          <StatCard
            icon={<CheckCircle2 size={20} className="text-cc-green" />}
            label="완료한 Day"
            value={`${completedCount}`}
            accent="cc-green"
          />
          <StatCard
            icon={<Flame size={20} className="text-cc-orange" />}
            label="연속 학습"
            value={`${streak}일`}
            accent="cc-orange"
          />
          <StatCard
            icon={<Trophy size={20} className="text-cc-purple" />}
            label="퀴즈 합격률"
            value="0%"
            accent="cc-purple"
          />
        </div>
      </section>

      {/* ── Weekly Progress ─────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4">
          주차별 진행률
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {([1, 2, 3, 4] as WeekNumber[]).map((week) => {
            const meta = WEEK_META[week];
            const weekDays = getCurriculumByWeek(week);
            const weekCompletedCount = Object.values(progress).filter(
              (d) => d.week === week && d.status === 'completed'
            ).length;
            const pct = getWeekPercent(week);

            return (
              <div
                key={week}
                id={`week-${week}`}
                className="rounded-xl bg-card border border-white/5 p-5 transition-colors hover:border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center h-7 w-7 rounded-md text-xs font-bold',
                      meta.bgColor,
                      meta.colorClass
                    )}
                  >
                    W{week}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-text-primary truncate">
                      Week {week}: {meta.phase}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {weekCompletedCount}/{weekDays.length} 완료
                    </p>
                  </div>
                  <span
                    className={cn('text-sm font-bold', meta.colorClass)}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-700',
                      meta.barColor
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 30-Day Grid ─────────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4">
          30일 커리큘럼
        </h2>

        {([1, 2, 3, 4] as WeekNumber[]).map((week) => {
          const meta = WEEK_META[week];
          const weekDays = getCurriculumByWeek(week);

          return (
            <div key={week} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={cn(
                    'inline-block h-2.5 w-2.5 rounded-full',
                    meta.barColor
                  )}
                />
                <h3
                  className={cn(
                    'text-sm font-semibold',
                    meta.colorClass
                  )}
                >
                  Week {week} &mdash; {meta.phase}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {weekDays.map((day) => {
                  const dayId = `day-${String(day.day).padStart(2, '0')}`;
                  const dp = progress[dayId];
                  const status = dp?.status ?? 'not_started';

                  return (
                    <button
                      key={day.day}
                      onClick={() => router.push(`/lesson/${day.day}`)}
                      className={cn(
                        'group relative flex flex-col items-start rounded-lg border p-3 text-left transition-all duration-200',
                        'bg-card border-white/5 hover:border-white/15 hover:bg-surface cursor-pointer'
                      )}
                    >
                      {/* Day number + status */}
                      <div className="flex w-full items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-text-dim">
                          Day {day.day}
                        </span>
                        <StatusDot status={status} />
                      </div>

                      {/* Title */}
                      <p className="text-xs font-medium text-text-muted line-clamp-2 leading-snug group-hover:text-text-primary transition-colors">
                        {day.title}
                      </p>

                      {/* Arrow on hover */}
                      <ChevronRight
                        size={14}
                        className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-60 text-text-dim transition-opacity"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl bg-card border border-white/5 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs text-text-dim">{label}</span>
      </div>
      <p className="text-2xl font-bold text-text-primary">{value}</p>
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  if (status === 'completed') {
    return (
      <CheckCircle2 size={14} className="text-cc-green" />
    );
  }
  if (status === 'in_progress') {
    return (
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-cc-orange animate-pulse" />
    );
  }
  return (
    <span className="inline-block h-2.5 w-2.5 rounded-full bg-text-dim/40" />
  );
}
