export type QuestionType = 'multiple_choice' | 'true_false' | 'code_output' | 'fill_blank';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  difficulty: 1 | 2 | 3;
  codeSnippet?: string;
}

export interface QuizData {
  dayId: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit: number | null;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: string | number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  dayId: string;
  day: number;
  attemptNumber: number;
  score: number;
  correctCount: number;
  totalQuestions: number;
  answers: QuizAnswer[];
  passed: boolean;
  completedAt: string;
  totalTimeSpent: number;
}
