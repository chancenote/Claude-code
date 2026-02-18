'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const BEFORE_ITEMS = [
  'Claude Code 설치했는데 뭘 해야 할지 모름',
  '프롬프트를 써도 원하는 결과가 안 나옴',
  'AI 비용만 나가고 실력은 제자리',
  '프로젝트를 처음부터 끝까지 완성 못 함',
  '팀에서 AI를 활용하는 방법을 모름',
];

const AFTER_ITEMS = [
  '자연어로 풀스택 앱을 설계하고 구현',
  'MCP, Hooks, Agent SDK까지 완벽 활용',
  '개발 속도 10배, 비용 효율 극대화',
  '캡스톤 프로젝트로 포트폴리오 완성',
  '팀 워크플로우 최적화 및 리더십 발휘',
];

export function Transformation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-green mb-4 text-center uppercase"
        >
          The Transformation
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16"
        >
          <span className="gradient-text">30일이면 충분합니다</span>
        </motion.h2>

        {/* Before / After comparison */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch mb-20"
        >
          {/* Before */}
          <div
            className={cn(
              'p-8 rounded-2xl border',
              'bg-cc-red/5 border-cc-red/20'
            )}
          >
            <h3 className="text-xl font-bold text-cc-red mb-6 flex items-center gap-2">
              <span className="text-2xl">Before</span>
            </h3>
            <ul className="space-y-4">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted">
                  <span className="shrink-0 mt-0.5">🔴</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <span className="text-4xl text-text-dim lg:rotate-0 rotate-90">→</span>
          </div>

          {/* After */}
          <div
            className={cn(
              'p-8 rounded-2xl border',
              'bg-cc-green/5 border-cc-green/20'
            )}
          >
            <h3 className="text-xl font-bold text-cc-green mb-6 flex items-center gap-2">
              <span className="text-2xl">After</span>
            </h3>
            <ul className="space-y-4">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted">
                  <span className="shrink-0 mt-0.5">🟢</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          className={cn(
            'max-w-3xl mx-auto text-center p-8 rounded-2xl',
            'bg-surface/50 border border-white/5'
          )}
        >
          <p className="text-lg sm:text-xl text-text-muted italic leading-relaxed mb-4">
            &ldquo;AI를 잘 쓰는 개발자와 못 쓰는 개발자의 생산성 차이는{' '}
            <span className="text-cc-cyan font-semibold not-italic">
              10배가 아니라 100배
            </span>
            가 될 것이다.&rdquo;
          </p>
          <footer className="text-sm text-text-dim">
            — The Age of AI-Augmented Development
          </footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
