'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useProgressStore } from '@/stores/progressStore';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface TopicChecklistProps {
  dayId: string;
  topics: string[];
}

export function TopicChecklist({ dayId, topics }: TopicChecklistProps) {
  const { user } = useAuth();
  const { progress, toggleTopic } = useProgressStore();
  const dayProgress = progress[dayId];
  const completedTopics = dayProgress?.completedTopics ?? [];

  const handleToggle = async (topic: string) => {
    if (!user) return;
    await toggleTopic(user.id, dayId, topic);
  };

  const completedCount = completedTopics.length;
  const percent = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <div className="rounded-xl border border-white/[0.04] bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">학습 토픽</h3>
        <span className="font-mono text-sm text-text-muted">
          {completedCount}/{topics.length} ({percent}%)
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/[0.04]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cc-blue to-cc-cyan transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ul className="space-y-2">
        {topics.map((topic) => {
          const isCompleted = completedTopics.includes(topic);
          return (
            <li key={topic}>
              <button
                onClick={() => handleToggle(topic)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all',
                  isCompleted
                    ? 'bg-cc-green/10 text-cc-green'
                    : 'bg-white/[0.02] text-text-muted hover:bg-white/[0.04]'
                )}
              >
                <div
                  className={cn(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all',
                    isCompleted
                      ? 'border-cc-green bg-cc-green text-white'
                      : 'border-white/20'
                  )}
                >
                  {isCompleted && <Check className="h-3 w-3" />}
                </div>
                <span className={isCompleted ? 'line-through opacity-70' : ''}>
                  {topic}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
