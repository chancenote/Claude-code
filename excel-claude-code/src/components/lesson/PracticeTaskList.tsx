'use client';

import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface PracticeTaskListProps {
  tasks: string[];
}

export function PracticeTaskList({ tasks }: PracticeTaskListProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleTask = (index: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="mt-6 rounded-xl border border-white/[0.04] bg-card p-6">
      <h3 className="mb-4 text-lg font-bold">실습 과제</h3>
      <ul className="space-y-2">
        {tasks.map((task, i) => {
          const isDone = completed.has(i);
          return (
            <li key={i}>
              <button
                onClick={() => toggleTask(i)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all',
                  isDone
                    ? 'bg-cc-purple/10 text-cc-purple'
                    : 'bg-white/[0.02] text-text-muted hover:bg-white/[0.04]'
                )}
              >
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cc-purple" />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-white/20" />
                )}
                <span className={isDone ? 'line-through opacity-70' : ''}>
                  {task}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
