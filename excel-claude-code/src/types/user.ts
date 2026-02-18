export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: string;
  lastLoginAt: string;
  settings: UserSettings;
  stats: UserStats;
}

export interface UserSettings {
  dailyGoalHours: number;
  language: 'ko' | 'en';
}

export interface UserStats {
  currentStreak: number;
  longestStreak: number;
  totalHoursLogged: number;
  completedDays: number;
  startDate: string | null;
}
