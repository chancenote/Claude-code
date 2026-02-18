'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      id="cta"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.08) 0%, transparent 60%)',
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-cyan mb-4 uppercase"
        >
          Start Your Journey
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
        >
          <span className="gradient-text">
            지금 시작하면, 30일 후가 기대됩니다.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg text-text-muted mb-12 leading-relaxed max-w-xl mx-auto"
        >
          더 이상 미루지 마세요. 설치 한 줄이면 시작할 수 있습니다.
          30일 후, 당신은 AI와 함께 코딩하는 새로운 개발자가 됩니다.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold',
              'bg-gradient-to-r from-cc-cyan to-cc-blue text-white',
              'shadow-lg shadow-cc-blue/25 hover:shadow-cc-blue/40',
              'hover:scale-105 transition-all duration-300'
            )}
          >
            <span>🚀</span>
            Claude Code 시작하기
          </a>

          {/* Secondary CTA */}
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold',
              'bg-surface border border-white/10 text-text-primary',
              'hover:border-cc-cyan/30 hover:bg-cc-cyan/5',
              'hover:scale-105 transition-all duration-300'
            )}
          >
            <span>🖥</span>
            GitHub 바로가기
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
