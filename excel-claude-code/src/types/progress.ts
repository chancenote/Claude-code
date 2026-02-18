export type DayStatus = 'not_started' | 'in_progress' | 'completed';

export interface DayProgress {
  dayId: string;
  day: number;
  week: number;
  status: DayStatus;
  completedTopics: string[];
  totalTopics: number;
  startedAt: string | null;
  completedAt: string | null;
  hoursSpent: number;
  selfRating: number | null;
  notes: string;
  videoWatched: boolean;
}

export interface WeekStats {
  week: number;
  completedDays: number;
  totalDays: number;
  averageRating: number;
  totalHours: number;
  completionPercent: number;
}
