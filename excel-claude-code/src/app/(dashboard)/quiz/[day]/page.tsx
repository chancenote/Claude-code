'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import { WEEK_COLORS } from '@/types/curriculum';
import type { QuizQuestion } from '@/types/quiz';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

// Sample quiz questions - in production, load from JSON files
function generateSampleQuiz(dayNum: number): QuizQuestion[] {
  const lesson = curriculum.find((d) => d.day === dayNum);
  if (!lesson) return [];

  return lesson.topics.slice(0, 5).map((topic, i) => ({
    id: `d${String(dayNum).padStart(2, '0')}-q${i + 1}`,
    type: 'multiple_choice' as const,
    question: `Day ${dayNum}: "${topic}"에 대한 설명으로 올바른 것은?`,
    options: [
      `${topic}은(는) 이 단계에서 필수적으로 학습해야 합니다.`,
      `${topic}은(는) 선택적 학습 사항입니다.`,
      `${topic}은(는) 다음 주에 학습합니다.`,
      `${topic}은(는) 사전 지식이 필요하지 않습니다.`,
    ],
    correctAnswer: 0,
    explanation: `${topic}은(는) Day ${dayNum} "${lesson.title}" 커리큘럼의 핵심 토픽입니다.`,
    difficulty: lesson.difficulty as 1 | 2 | 3,
  }));
}

export default function QuizPage() {
  const params = useParams();
  const dayNum = parseInt(params.day as string);
  const lesson = curriculum.find((d) => d.day === dayNum);
  const weekColor = lesson ? WEEK_COLORS[lesson.week] : '#4f7df5';

  const [questions] = useState(() => generateSampleQuiz(dayNum));
  const [currentIdx, setCurrentIdx] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isIntro = currentIdx === -1;
  const isFinished = showResult;
  const currentQ = questions[currentIdx];

  const startQuiz = () => {
    setCurrentIdx(0);
    setAnswers(new Array(questions.length).fill(null));
  };

  const submitAnswer = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers];
    newAnswers[currentIdx] = selectedOption;
    setAnswers(newAnswers);
    setSubmitted(true);
  };

  const nextQuestion = () => {
    setSubmitted(false);
    setSelectedOption(null);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(-1);
    setAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
    setSubmitted(false);
  };

  const correctCount = answers.filter(
    (a, i) => a === questions[i]?.correctAnswer
  ).length;
  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = score >= 70;

  if (!lesson) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-text-muted">해당 Day의 퀴즈를 찾을 수 없습니다.</p>
      </div>
    );
  }

  // Intro screen
  if (isIntro) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <div
          className="mb-4 inline-block rounded-lg px-3 py-1 font-mono text-sm font-bold"
          style={{ backgroundColor: `${weekColor}20`, color: weekColor }}
        >
          Day {dayNum} Quiz
        </div>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-text-muted">{lesson.objective}</p>

        <div className="mt-8 rounded-xl border border-white/[0.04] bg-card p-8">
          <div className="flex justify-center gap-8 text-sm text-text-dim">
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">
                {questions.length}
              </div>
              <div>문제</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">70%</div>
              <div>합격 기준</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">무제한</div>
              <div>시간</div>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cc-blue to-cc-purple px-8 py-3 font-semibold text-white transition-all hover:opacity-90"
          >
            퀴즈 시작 <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <Link
          href={`/lesson/${dayNum}`}
          className="mt-4 inline-block text-sm text-text-muted hover:text-text-primary"
        >
          ← 레슨으로 돌아가기
        </Link>
      </div>
    );
  }

  // Result screen
  if (isFinished) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <div
          className={cn(
            'mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-5xl',
            passed ? 'bg-cc-green/10' : 'bg-cc-red/10'
          )}
        >
          {passed ? (
            <CheckCircle2 className="h-12 w-12 text-cc-green" />
          ) : (
            <XCircle className="h-12 w-12 text-cc-red" />
          )}
        </div>

        <h1 className="text-3xl font-bold">
          {passed ? '합격!' : '아쉽습니다'}
        </h1>
        <p className="mt-2 text-text-muted">
          {passed
            ? '훌륭합니다! 다음 레슨으로 넘어가세요.'
            : '70% 이상이 필요합니다. 복습 후 다시 도전해보세요.'}
        </p>

        <div className="mt-6 font-mono text-5xl font-bold">
          <span className={passed ? 'text-cc-green' : 'text-cc-red'}>{score}%</span>
        </div>
        <p className="text-sm text-text-dim">
          {correctCount}/{questions.length} 정답
        </p>

        {/* Per-question review */}
        <div className="mt-8 space-y-3 text-left">
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={cn(
                  'rounded-lg border p-4',
                  isCorrect
                    ? 'border-cc-green/20 bg-cc-green/5'
                    : 'border-cc-red/20 bg-cc-red/5'
                )}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cc-green" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-cc-red" />
                  )}
                  <div>
                    <p className="text-sm font-medium">Q{i + 1}. {q.question}</p>
                    <p className="mt-1 text-xs text-text-dim">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-2.5 text-sm font-medium transition-all hover:bg-white/[0.04]"
          >
            <RotateCcw className="h-4 w-4" /> 다시 풀기
          </button>
          <Link
            href={`/lesson/${dayNum < 30 ? dayNum + 1 : dayNum}`}
            className="flex items-center gap-2 rounded-xl bg-cc-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cc-blue/80"
          >
            다음 레슨 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Question screen
  return (
    <div className="mx-auto max-w-2xl py-8">
      {/* Progress */}
      <div className="mb-6 flex items-center justify-between text-sm text-text-dim">
        <span>
          문제 {currentIdx + 1} / {questions.length}
        </span>
        <span>Day {dayNum} Quiz</span>
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
        <div
          className="h-full rounded-full bg-cc-blue transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="mb-6 text-xl font-bold">{currentQ.question}</h2>

      {currentQ.codeSnippet && (
        <pre className="mb-6 overflow-x-auto rounded-lg bg-surface p-4 font-mono text-sm">
          {currentQ.codeSnippet}
        </pre>
      )}

      {/* Options */}
      <div className="space-y-3">
        {currentQ.options?.map((option, i) => {
          const isSelected = selectedOption === i;
          const isCorrect = i === currentQ.correctAnswer;
          const showCorrect = submitted && isCorrect;
          const showWrong = submitted && isSelected && !isCorrect;

          return (
            <button
              key={i}
              onClick={() => !submitted && setSelectedOption(i)}
              disabled={submitted}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all',
                showCorrect && 'border-cc-green/50 bg-cc-green/10 text-cc-green',
                showWrong && 'border-cc-red/50 bg-cc-red/10 text-cc-red',
                !submitted && isSelected && 'border-cc-blue/50 bg-cc-blue/10',
                !submitted && !isSelected && 'border-white/[0.06] bg-card hover:border-white/10',
                submitted && !showCorrect && !showWrong && 'border-white/[0.04] bg-card opacity-50'
              )}
            >
              <div
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold',
                  showCorrect && 'border-cc-green bg-cc-green text-white',
                  showWrong && 'border-cc-red bg-cc-red text-white',
                  !submitted && isSelected && 'border-cc-blue bg-cc-blue text-white',
                  !submitted && !isSelected && 'border-white/20'
                )}
              >
                {String.fromCharCode(65 + i)}
              </div>
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {submitted && (
        <div className="mt-4 rounded-lg bg-surface p-4 text-sm text-text-muted">
          {currentQ.explanation}
        </div>
      )}

      {/* Action buttons */}
      <div className="mt-6 flex justify-end">
        {!submitted ? (
          <button
            onClick={submitAnswer}
            disabled={selectedOption === null}
            className="rounded-xl bg-cc-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cc-blue/80 disabled:opacity-40"
          >
            정답 확인
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 rounded-xl bg-cc-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cc-blue/80"
          >
            {currentIdx < questions.length - 1 ? '다음 문제' : '결과 보기'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
