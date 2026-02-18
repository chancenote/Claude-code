'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useProgressStore } from '@/stores/progressStore';
import { curriculum, getDayId } from '@/data/curriculum';
import { getVideosByDay } from '@/data/youtube-videos';
import { LessonHeader } from '@/components/lesson/LessonHeader';
import { VideoPlayer } from '@/components/lesson/VideoPlayer';
import { TopicChecklist } from '@/components/lesson/TopicChecklist';
import { PracticeTaskList } from '@/components/lesson/PracticeTaskList';
import { LessonNav } from '@/components/lesson/LessonNav';
import Link from 'next/link';

export default function LessonPage() {
  const params = useParams();
  const dayNum = parseInt(params.day as string);
  const { user } = useAuth();
  const { progress, loading, fetchAll } = useProgressStore();

  const lesson = curriculum.find((d) => d.day === dayNum);
  const relatedVideos = getVideosByDay(dayNum);
  const dayId = getDayId(dayNum);

  useEffect(() => {
    if (user && Object.keys(progress).length === 0) {
      fetchAll(user.id);
    }
  }, [user, progress, fetchAll]);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <LessonHeader lesson={lesson} />

      {/* Video Section */}
      {relatedVideos.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold">관련 영상</h2>
          <div className="grid gap-4">
            {relatedVideos.map((v) => (
              <VideoPlayer key={v.url} video={v} />
            ))}
          </div>
        </section>
      )}

      {/* Topics Checklist */}
      {!loading && (
        <TopicChecklist dayId={dayId} topics={lesson.topics} />
      )}

      {/* Practice Tasks */}
      <PracticeTaskList tasks={lesson.practice} />

      {/* Quiz Link */}
      <div className="mt-6 rounded-xl border border-cc-purple/20 bg-cc-purple/5 p-6 text-center">
        <h3 className="text-lg font-bold">Day {dayNum} 퀴즈</h3>
        <p className="mt-1 text-sm text-text-muted">
          학습을 마치면 퀴즈로 이해도를 확인해보세요.
        </p>
        <Link
          href={`/quiz/${dayNum}`}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cc-purple px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cc-purple/80"
        >
          퀴즈 시작하기
        </Link>
      </div>

      {/* Navigation */}
      <LessonNav currentDay={dayNum} />
    </div>
  );
}
