import { supabase } from './client';
import { curriculum } from '@/data/curriculum';
import type { DayProgress } from '@/types/progress';
import type { QuizResult } from '@/types/quiz';

// ===== PROFILE =====

export async function updateLastLogin(userId: string): Promise<void> {
  await supabase
    .from('profiles')
    .update({ last_login_at: new Date().toISOString() })
    .eq('id', userId);
}

// ===== PROGRESS =====

export async function initializeProgress(userId: string): Promise<void> {
  // Check if progress already exists
  const { count } = await supabase
    .from('progress')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  if (count && count > 0) return;

  const rows = curriculum.map((lesson, i) => ({
    user_id: userId,
    day_id: `day-${String(i + 1).padStart(2, '0')}`,
    day: i + 1,
    week: lesson.week,
    status: 'not_started',
    completed_topics: [],
    total_topics: lesson.topics.length,
    hours_spent: 0,
    notes: '',
    video_watched: false,
  }));

  await supabase.from('progress').insert(rows);
}

export async function getAllProgress(userId: string): Promise<DayProgress[]> {
  const { data } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId)
    .order('day');

  return (data ?? []).map(rowToProgress);
}

export async function getDayProgress(
  userId: string,
  dayId: string
): Promise<DayProgress | null> {
  const { data } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId)
    .eq('day_id', dayId)
    .single();

  return data ? rowToProgress(data) : null;
}

export async function updateDayProgress(
  userId: string,
  dayId: string,
  updates: Partial<DayProgress>
): Promise<void> {
  const dbUpdates: Record<string, unknown> = {};

  if (updates.status !== undefined) dbUpdates.status = updates.status;
  if (updates.completedTopics !== undefined) dbUpdates.completed_topics = updates.completedTopics;
  if (updates.hoursSpent !== undefined) dbUpdates.hours_spent = updates.hoursSpent;
  if (updates.selfRating !== undefined) dbUpdates.self_rating = updates.selfRating;
  if (updates.notes !== undefined) dbUpdates.notes = updates.notes;
  if (updates.videoWatched !== undefined) dbUpdates.video_watched = updates.videoWatched;
  if (updates.startedAt !== undefined) dbUpdates.started_at = updates.startedAt;
  if (updates.completedAt !== undefined) dbUpdates.completed_at = updates.completedAt;

  await supabase
    .from('progress')
    .update(dbUpdates)
    .eq('user_id', userId)
    .eq('day_id', dayId);
}

// ===== QUIZ RESULTS =====

export async function saveQuizResult(
  userId: string,
  dayId: string,
  result: QuizResult
): Promise<void> {
  await supabase.from('quiz_results').insert({
    user_id: userId,
    day_id: dayId,
    day: result.day,
    attempt_number: result.attemptNumber,
    score: result.score,
    correct_count: result.correctCount,
    total_questions: result.totalQuestions,
    answers: result.answers,
    passed: result.passed,
    completed_at: result.completedAt,
    total_time_spent: result.totalTimeSpent,
  });
}

export async function getQuizResult(
  userId: string,
  dayId: string
): Promise<QuizResult | null> {
  const { data } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', userId)
    .eq('day_id', dayId)
    .order('attempt_number', { ascending: false })
    .limit(1)
    .single();

  return data ? rowToQuizResult(data) : null;
}

export async function getAllQuizResults(userId: string): Promise<QuizResult[]> {
  const { data } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', userId)
    .order('day');

  return (data ?? []).map(rowToQuizResult);
}

// ===== Helpers =====

function rowToProgress(row: Record<string, unknown>): DayProgress {
  return {
    dayId: row.day_id as string,
    day: row.day as number,
    week: row.week as number,
    status: row.status as DayProgress['status'],
    completedTopics: (row.completed_topics as string[]) ?? [],
    totalTopics: row.total_topics as number,
    startedAt: (row.started_at as string) ?? null,
    completedAt: (row.completed_at as string) ?? null,
    hoursSpent: Number(row.hours_spent) || 0,
    selfRating: (row.self_rating as number) ?? null,
    notes: (row.notes as string) ?? '',
    videoWatched: (row.video_watched as boolean) ?? false,
  };
}

function rowToQuizResult(row: Record<string, unknown>): QuizResult {
  return {
    dayId: row.day_id as string,
    day: row.day as number,
    attemptNumber: row.attempt_number as number,
    score: Number(row.score),
    correctCount: row.correct_count as number,
    totalQuestions: row.total_questions as number,
    answers: row.answers as QuizResult['answers'],
    passed: row.passed as boolean,
    completedAt: row.completed_at as string,
    totalTimeSpent: Number(row.total_time_spent),
  };
}
