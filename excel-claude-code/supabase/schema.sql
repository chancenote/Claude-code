-- =============================================
-- Claude Code LMS - Supabase Schema
-- Supabase SQL Editor에서 실행하세요
-- =============================================

-- 1. profiles 테이블
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  last_login_at TIMESTAMPTZ DEFAULT now(),
  daily_goal_hours INTEGER DEFAULT 5,
  language TEXT DEFAULT 'ko',
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  total_hours_logged NUMERIC DEFAULT 0,
  completed_days INTEGER DEFAULT 0,
  start_date TIMESTAMPTZ
);

-- 2. progress 테이블
CREATE TABLE progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  day_id TEXT NOT NULL,
  day INTEGER NOT NULL,
  week INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_started',
  completed_topics TEXT[] DEFAULT '{}',
  total_topics INTEGER NOT NULL DEFAULT 0,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  hours_spent NUMERIC DEFAULT 0,
  self_rating INTEGER,
  notes TEXT DEFAULT '',
  video_watched BOOLEAN DEFAULT false,
  UNIQUE(user_id, day_id)
);

-- 3. quiz_results 테이블
CREATE TABLE quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  day_id TEXT NOT NULL,
  day INTEGER NOT NULL,
  attempt_number INTEGER DEFAULT 1,
  score NUMERIC NOT NULL,
  correct_count INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]',
  passed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ DEFAULT now(),
  total_time_spent NUMERIC DEFAULT 0
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- profiles 정책
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- progress 정책
CREATE POLICY "Users can view own progress"
  ON progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own progress"
  ON progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress"
  ON progress FOR INSERT WITH CHECK (auth.uid() = user_id);

-- quiz_results 정책
CREATE POLICY "Users can view own quiz results"
  ON quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz results"
  ON quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own quiz results"
  ON quiz_results FOR UPDATE USING (auth.uid() = user_id);

-- =============================================
-- 신규 유저 자동 프로필 생성 트리거
-- =============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name, photo_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
