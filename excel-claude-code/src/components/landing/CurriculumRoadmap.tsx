'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { curriculum, getCurriculumByWeek } from '@/data/curriculum';
import { WEEK_LABELS, type WeekNumber } from '@/types/curriculum';

const WEEKS: { week: WeekNumber; progress: number }[] = [
  { week: 1, progress: 25 },
  { week: 2, progress: 50 },
  { week: 3, progress: 75 },
  { week: 4, progress: 100 },
];

const WEEK_COLOR_CLASSES: Record<WeekNumber, { badge: string; border: string; text: string; bg: string; bar: string }> = {
  1: {
    badge: 'bg-week-1/20 text-week-1 border-week-1/30',
    border: 'border-week-1/20',
    text: 'text-week-1',
    bg: 'bg-week-1/10',
    bar: 'bg-week-1',
  },
  2: {
    badge: 'bg-week-2/20 text-week-2 border-week-2/30',
    border: 'border-week-2/20',
    text: 'text-week-2',
    bg: 'bg-week-2/10',
    bar: 'bg-week-2',
  },
  3: {
    badge: 'bg-week-3/20 text-week-3 border-week-3/30',
    border: 'border-week-3/20',
    text: 'text-week-3',
    bg: 'bg-week-3/10',
    bar: 'bg-week-3',
  },
  4: {
    badge: 'bg-week-4/20 text-week-4 border-week-4/30',
    border: 'border-week-4/20',
    text: 'text-week-4',
    bg: 'bg-week-4/10',
    bar: 'bg-week-4',
  },
};

const WEEK_DESCRIPTIONS: Record<WeekNumber, string> = {
  1: '설치, 기본 명령어, 프롬프트 기초, Git 연동까지 — Claude Code의 기초 체력을 완성합니다.',
  2: '코드 생성, 리팩토링, 테스트, 디버깅, API 개발 — 핵심 개발 역량을 탑재합니다.',
  3: '멀티파일 프로젝트, MCP, Hooks, DB, 프론트/풀스택 — 실전 프로젝트를 완성합니다.',
  4: 'Agent SDK, CI/CD, 보안, 레거시 현대화, 캡스톤 — 마스터리 레벨로 도약합니다.',
};

function DifficultyStars({ level }: { level: number }) {
  return (
    <span className="text-xs text-cc-orange">
      {'★'.repeat(level)}
      {'☆'.repeat(5 - level)}
    </span>
  );
}

function DayCard({
  day,
  week,
}: {
  day: (typeof curriculum)[number];
  week: WeekNumber;
}) {
  const [expanded, setExpanded] = useState(false);
  const colors = WEEK_COLOR_CLASSES[week];

  return (
    <div
      className={cn(
        'rounded-xl bg-card border border-white/5 overflow-hidden cursor-pointer',
        'hover:border-white/10 transition-all duration-200',
        `day-card-w${week}`,
        'relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]'
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={cn('text-xs font-mono font-bold px-2 py-0.5 rounded', colors.badge, 'border')}>
              D{day.day}
            </span>
            <span className={cn('text-xs px-2 py-0.5 rounded-full', colors.bg, colors.text)}>
              {day.category}
            </span>
          </div>
          <span className="text-xs text-text-dim font-mono">{day.hours}</span>
        </div>

        {/* Title */}
        <h4 className="text-sm font-bold text-text-primary mb-2 leading-snug">
          {day.title}
        </h4>

        {/* Objective */}
        <p className="text-xs text-text-dim leading-relaxed mb-3">
          {day.objective}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <DifficultyStars level={day.difficulty} />
          <ChevronDown
            className={cn(
              'w-4 h-4 text-text-dim transition-transform duration-200',
              expanded && 'rotate-180'
            )}
          />
        </div>
      </div>

      {/* Expandable topics */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className={cn('px-5 pb-5 pt-3 border-t border-white/5')}>
              <p className="text-xs font-semibold text-text-muted mb-2">Topics</p>
              <ul className="space-y-1.5">
                {day.topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-xs text-text-dim flex items-start gap-2"
                  >
                    <span className={cn('shrink-0 mt-0.5', colors.text)}>&#8227;</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CurriculumRoadmap() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} id="roadmap" className="py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-cyan mb-4 text-center uppercase"
        >
          The Roadmap
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12"
        >
          <span className="gradient-text">30일 완전정복 로드맵</span>
        </motion.h2>

        {/* Progress bars */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {WEEKS.map(({ week, progress }) => {
            const colors = WEEK_COLOR_CLASSES[week];
            const labels = WEEK_LABELS[week];
            return (
              <div key={week} className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className={cn('font-bold', colors.text)}>W{week}</span>
                  <span className="text-text-dim">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface overflow-hidden">
                  <motion.div
                    className={cn('h-full rounded-full', colors.bar)}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + week * 0.15, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-xs text-text-dim">
                  {labels.en} · {labels.ko}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Week sections */}
        {WEEKS.map(({ week }) => {
          const days = getCurriculumByWeek(week);
          const colors = WEEK_COLOR_CLASSES[week];
          const labels = WEEK_LABELS[week];

          return (
            <motion.div key={week} variants={fadeUp} className="mb-16 last:mb-0">
              {/* Week header */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={cn(
                    'text-sm font-mono font-black px-3 py-1 rounded-lg border',
                    colors.badge
                  )}
                >
                  W{week}
                </span>
                <div>
                  <h3 className={cn('text-xl font-bold', colors.text)}>
                    {labels.en}
                  </h3>
                  <p className="text-sm text-text-dim">{labels.ko}</p>
                </div>
              </div>

              {/* Week description */}
              <p className="text-text-muted mb-6 max-w-3xl">
                {WEEK_DESCRIPTIONS[week]}
              </p>

              {/* Day cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {days.map((day) => (
                  <DayCard key={day.day} day={day} week={week} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
