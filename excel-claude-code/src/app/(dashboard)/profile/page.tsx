'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  LogOut,
  CheckCircle2,
  Clock,
  Flame,
  Trophy,
  Settings,
  Globe,
  Target,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuth } from '@/contexts/AuthContext';
import { useProgressStore } from '@/stores/progressStore';

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const {
    progress,
    loading,
    fetchAll,
    getCompletedCount,
    getCurrentStreak,
  } = useProgressStore();

  const [dailyGoal, setDailyGoal] = useState(5);
  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    if (user?.id) {
      fetchAll(user.id);
    }
  }, [user?.id, fetchAll]);

  const completedCount = getCompletedCount();
  const streak = getCurrentStreak();
  const totalHours = Object.values(progress).reduce(
    (sum, d) => sum + (d.hoursSpent ?? 0),
    0
  );

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-cc-blue transition-colors"
      >
        <ArrowLeft size={16} />
        돌아가기
      </Link>

      {/* ── User Info ─────────────────────────────────────────── */}
      <section className="rounded-xl bg-card border border-white/5 p-6">
        <div className="flex items-center gap-5">
          {user?.photoURL ? (
            <Image
              src={user.photoURL}
              alt={user.displayName ?? 'User'}
              width={72}
              height={72}
              className="rounded-full ring-2 ring-cc-blue/30"
            />
          ) : (
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-cc-blue/20 text-cc-blue text-2xl font-bold">
              {(user?.displayName ?? user?.email ?? 'U')
                .charAt(0)
                .toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-text-primary truncate">
              {user?.displayName ?? 'User'}
            </h1>
            <p className="text-sm text-text-muted truncate">{user?.email}</p>
          </div>
        </div>
      </section>

      {/* ── Stats Summary ────────────────────────────────────── */}
      <section>
        <h2 className="text-lg font-semibold text-text-primary mb-3">
          학습 통계
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<CheckCircle2 size={18} className="text-cc-green" />}
            label="완료한 Day"
            value={`${completedCount} / 30`}
          />
          <StatCard
            icon={<Clock size={18} className="text-cc-cyan" />}
            label="총 학습 시간"
            value={`${totalHours.toFixed(1)}h`}
          />
          <StatCard
            icon={<Flame size={18} className="text-cc-orange" />}
            label="연속 학습"
            value={`${streak}일`}
          />
          <StatCard
            icon={<Trophy size={18} className="text-cc-purple" />}
            label="퀴즈 합격률"
            value="0%"
          />
        </div>
      </section>

      {/* ── Settings ─────────────────────────────────────────── */}
      <section className="rounded-xl bg-card border border-white/5 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Settings size={18} className="text-text-muted" />
          <h2 className="text-lg font-semibold text-text-primary">설정</h2>
        </div>

        <div className="space-y-5">
          {/* Daily goal */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-muted mb-2">
              <Target size={15} />
              일일 목표 시간
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                max={24}
                value={dailyGoal}
                onChange={(e) =>
                  setDailyGoal(Math.max(1, Math.min(24, Number(e.target.value))))
                }
                className="w-24 rounded-lg border border-white/10 bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-cc-blue/50 focus:ring-1 focus:ring-cc-blue/30 transition-colors"
              />
              <span className="text-sm text-text-dim">시간 / 일</span>
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-muted mb-2">
              <Globe size={15} />
              언어
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-40 rounded-lg border border-white/10 bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-cc-blue/50 focus:ring-1 focus:ring-cc-blue/30 transition-colors appearance-none cursor-pointer"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </section>

      {/* ── Sign Out ─────────────────────────────────────────── */}
      <section>
        <button
          onClick={signOut}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-cc-red/20 bg-cc-red/10 px-4 py-3 text-sm font-medium text-cc-red hover:bg-cc-red/20 transition-colors"
        >
          <LogOut size={18} />
          로그아웃
        </button>
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-surface border border-white/5 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs text-text-dim">{label}</span>
      </div>
      <p className="text-xl font-bold text-text-primary">{value}</p>
    </div>
  );
}
