import { create } from 'zustand';
import {
  getAllProgress,
  updateDayProgress,
} from '@/lib/supabase/db';
import type { DayProgress, DayStatus } from '@/types/progress';

interface ProgressStore {
  progress: Record<string, DayProgress>;
  loading: boolean;

  fetchAll: (userId: string) => Promise<void>;
  toggleTopic: (userId: string, dayId: string, topic: string) => Promise<void>;
  markDayStatus: (userId: string, dayId: string, status: DayStatus) => Promise<void>;
  updateNotes: (userId: string, dayId: string, notes: string) => Promise<void>;
  updateHours: (userId: string, dayId: string, hours: number) => Promise<void>;
  markVideoWatched: (userId: string, dayId: string) => Promise<void>;

  getOverallPercent: () => number;
  getWeekPercent: (week: number) => number;
  getCompletedCount: () => number;
  getNextIncompleteDay: () => number;
  getCurrentStreak: () => number;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: {},
  loading: true,

  fetchAll: async (userId) => {
    set({ loading: true });
    const data = await getAllProgress(userId);
    const map: Record<string, DayProgress> = {};
    data.forEach((d) => {
      map[d.dayId] = d;
    });
    set({ progress: map, loading: false });
  },

  toggleTopic: async (userId, dayId, topic) => {
    const current = get().progress[dayId];
    if (!current) return;

    const topics = current.completedTopics.includes(topic)
      ? current.completedTopics.filter((t) => t !== topic)
      : [...current.completedTopics, topic];

    const allDone = topics.length === current.totalTopics;
    const status: DayStatus = allDone
      ? 'completed'
      : topics.length > 0
        ? 'in_progress'
        : 'not_started';

    const update: Partial<DayProgress> = {
      completedTopics: topics,
      status,
    };

    if (status === 'in_progress' && current.status === 'not_started') {
      update.startedAt = new Date().toISOString();
    }
    if (status === 'completed') {
      update.completedAt = new Date().toISOString();
    }

    await updateDayProgress(userId, dayId, update);
    set((state) => ({
      progress: {
        ...state.progress,
        [dayId]: { ...current, ...update, completedTopics: topics },
      },
    }));
  },

  markDayStatus: async (userId, dayId, status) => {
    const current = get().progress[dayId];
    if (!current) return;

    const update: Partial<DayProgress> = { status };
    if (status === 'completed') {
      update.completedAt = new Date().toISOString();
    }

    await updateDayProgress(userId, dayId, update);
    set((state) => ({
      progress: {
        ...state.progress,
        [dayId]: { ...current, ...update },
      },
    }));
  },

  updateNotes: async (userId, dayId, notes) => {
    const current = get().progress[dayId];
    if (!current) return;
    await updateDayProgress(userId, dayId, { notes });
    set((state) => ({
      progress: {
        ...state.progress,
        [dayId]: { ...current, notes },
      },
    }));
  },

  updateHours: async (userId, dayId, hours) => {
    const current = get().progress[dayId];
    if (!current) return;
    await updateDayProgress(userId, dayId, { hoursSpent: hours });
    set((state) => ({
      progress: {
        ...state.progress,
        [dayId]: { ...current, hoursSpent: hours },
      },
    }));
  },

  markVideoWatched: async (userId, dayId) => {
    const current = get().progress[dayId];
    if (!current) return;
    await updateDayProgress(userId, dayId, { videoWatched: true });
    set((state) => ({
      progress: {
        ...state.progress,
        [dayId]: { ...current, videoWatched: true },
      },
    }));
  },

  getOverallPercent: () => {
    const p = Object.values(get().progress);
    if (p.length === 0) return 0;
    const completed = p.filter((d) => d.status === 'completed').length;
    return Math.round((completed / 30) * 100);
  },

  getWeekPercent: (week) => {
    const p = Object.values(get().progress).filter((d) => d.week === week);
    if (p.length === 0) return 0;
    const completed = p.filter((d) => d.status === 'completed').length;
    return Math.round((completed / p.length) * 100);
  },

  getCompletedCount: () => {
    return Object.values(get().progress).filter(
      (d) => d.status === 'completed'
    ).length;
  },

  getNextIncompleteDay: () => {
    const p = get().progress;
    for (let i = 1; i <= 30; i++) {
      const dayId = `day-${String(i).padStart(2, '0')}`;
      if (!p[dayId] || p[dayId].status !== 'completed') return i;
    }
    return 30;
  },

  getCurrentStreak: () => {
    const p = get().progress;
    let streak = 0;
    for (let i = 1; i <= 30; i++) {
      const dayId = `day-${String(i).padStart(2, '0')}`;
      if (p[dayId]?.status === 'completed') {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  },
}));
