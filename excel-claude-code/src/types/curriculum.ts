export interface CurriculumDay {
  day: number;
  week: 1 | 2 | 3 | 4;
  phase: 'Foundation' | 'Core Skills' | 'Advanced' | 'Mastery';
  title: string;
  objective: string;
  category: string;
  hours: string;
  difficulty: number;
  topics: string[];
  practice: string[];
}

export interface YouTubeVideo {
  cat: string;
  title: string;
  channel: string;
  url: string;
  description: string;
  day: string;
  duration: string;
}

export type WeekNumber = 1 | 2 | 3 | 4;

export const WEEK_COLORS: Record<WeekNumber, string> = {
  1: '#4285F4',
  2: '#34A853',
  3: '#FB8C00',
  4: '#E91E63',
};

export const WEEK_LABELS: Record<WeekNumber, { en: string; ko: string }> = {
  1: { en: 'Foundation', ko: '기초 다지기' },
  2: { en: 'Core Skills', ko: '핵심 역량' },
  3: { en: 'Advanced', ko: '고급 기술' },
  4: { en: 'Mastery', ko: '마스터리' },
};
