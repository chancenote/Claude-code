import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { curriculum } from '@/data/curriculum';

interface LessonNavProps {
  currentDay: number;
}

export function LessonNav({ currentDay }: LessonNavProps) {
  const prevLesson = currentDay > 1 ? curriculum[currentDay - 2] : null;
  const nextLesson = currentDay < 30 ? curriculum[currentDay] : null;

  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      {prevLesson ? (
        <Link
          href={`/lesson/${prevLesson.day}`}
          className="flex items-center gap-2 rounded-xl border border-white/[0.04] bg-card px-4 py-3 text-sm transition-all hover:border-white/10"
        >
          <ChevronLeft className="h-4 w-4 text-text-dim" />
          <div>
            <div className="text-xs text-text-dim">이전</div>
            <div className="font-medium">
              Day {prevLesson.day}: {prevLesson.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Link
          href={`/lesson/${nextLesson.day}`}
          className="flex items-center gap-2 rounded-xl border border-white/[0.04] bg-card px-4 py-3 text-right text-sm transition-all hover:border-white/10"
        >
          <div>
            <div className="text-xs text-text-dim">다음</div>
            <div className="font-medium">
              Day {nextLesson.day}: {nextLesson.title}
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-text-dim" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
