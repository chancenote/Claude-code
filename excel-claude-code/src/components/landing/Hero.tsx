'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const STATS = [
  { value: '30', label: 'Days' },
  { value: '160+', label: 'Hours' },
  { value: '120+', label: 'Practice Tasks' },
  { value: '4', label: 'Phases' },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Aurora background effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-30%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse, var(--color-cc-cyan), transparent 70%)',
            animation: 'aurora 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse, var(--color-cc-purple), transparent 70%)',
            animation: 'aurora 10s ease-in-out infinite reverse',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cc-green/10 border border-cc-green/30 text-sm text-cc-green font-medium">
            <span
              className="w-2 h-2 rounded-full bg-cc-green"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            2026 New Curriculum
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
        >
          <span className="gradient-text">30일 후, 당신의</span>
          <br />
          <span className="gradient-text">코딩은 달라집니다.</span>
        </motion.h1>

        {/* Subtitle line2 */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-text-muted mb-6 font-light"
        >
          Claude Code로{' '}
          <span className="text-cc-cyan font-semibold">10배 빠른 개발자</span>가 되는 완전한
          로드맵
        </motion.p>

        {/* Sub paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-base text-text-dim max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          <strong className="text-text-muted">설치부터 Agent SDK까지</strong>, 완전 초보자도
          30일 후엔 풀스택 앱을 만들 수 있습니다.{' '}
          <strong className="text-text-muted">매일 5-7시간</strong>, 체계적 커리큘럼으로
          실전 개발 역량을 완성하세요.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 p-4 rounded-xl bg-surface/50 border border-white/5"
            >
              <span className="text-3xl sm:text-4xl font-bold font-mono gradient-text">
                {stat.value}
              </span>
              <span className="text-sm text-text-dim">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <a
            href="#roadmap"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold',
              'bg-gradient-to-r from-cc-cyan to-cc-blue text-white',
              'shadow-lg shadow-cc-blue/25 hover:shadow-cc-blue/40',
              'hover:scale-105 transition-all duration-300'
            )}
          >
            커리큘럼 확인하기 ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-text-dim text-sm"
        style={{ animation: 'bounce-slow 2s ease-in-out infinite' }}
      >
        <span>Scroll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
