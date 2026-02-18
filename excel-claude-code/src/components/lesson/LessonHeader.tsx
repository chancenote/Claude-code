'use client';

import type { CurriculumDay } from '@/types/curriculum';
import { WEEK_COLORS } from '@/types/curriculum';
import { Clock, Star, BookOpen } from 'lucide-react';

interface LessonHeaderProps {
  lesson: CurriculumDay;
}

export function LessonHeader({ lesson }: LessonHeaderProps) {
  const weekColor = WEEK_COLORS[lesson.week];

  return (
    <div className="mb-8">
      {/* Day badge */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="rounded-lg px-3 py-1 font-mono text-sm font-bold"
          style={{ backgroundColor: `${weekColor}20`, color: weekColor }}
        >
          Day {lesson.day}
        </span>
        <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-semibold text-text-dim">
          {lesson.category}
        </span>
        <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-text-dim">
          {lesson.phase}
        </span>
      </div>

      <h1 className="text-3xl font-bold leading-tight">{lesson.title}</h1>
      <p className="mt-3 text-lg text-text-muted">{lesson.objective}</p>

      {/* Meta info */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-dim">
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{lesson.hours}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4" />
          <span>난이도 {'★'.repeat(lesson.difficulty)}{'☆'.repeat(5 - lesson.difficulty)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" />
          <span>{lesson.topics.length}개 토픽</span>
        </div>
      </div>

      {/* Week color bar */}
      <div
        className="mt-6 h-1 w-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${weekColor}, ${weekColor}80)` }}
      />
    </div>
  );
}
