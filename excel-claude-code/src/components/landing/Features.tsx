'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const FEATURES = [
  {
    emoji: '🎯',
    title: '실전 중심 120+ 과제',
    description:
      '이론만 배우는 강의가 아닙니다. 매일 실습 과제를 수행하며 실전 개발 감각을 키웁니다.',
  },
  {
    emoji: '🚀',
    title: 'Zero to Hero 로드맵',
    description:
      '완전 초보자부터 시작해 Agent SDK까지. 단계별로 쌓아가는 체계적 커리큘럼입니다.',
  },
  {
    emoji: '📚',
    title: '공식 문서 + 영상 연동',
    description:
      'Anthropic 공식 문서, 추천 영상, 실습을 유기적으로 연결해 깊이 있는 학습을 제공합니다.',
  },
  {
    emoji: '📊',
    title: '진도 추적 시스템',
    description:
      '매일의 학습 진도를 시각적으로 추적하고, 주차별 목표 달성률을 확인할 수 있습니다.',
  },
  {
    emoji: '⚡',
    title: '최신 2026 기술 스택',
    description:
      'MCP, Hooks, Agent SDK 등 2026년 최신 Claude Code 기능을 모두 다룹니다.',
  },
  {
    emoji: '🏆',
    title: '캡스톤 프로젝트',
    description:
      '30일차에 SaaS 대시보드를 처음부터 끝까지 완성합니다. 실전 포트폴리오로 활용 가능합니다.',
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} id="features" className="py-24 px-6 bg-deep">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-purple mb-4 text-center uppercase"
        >
          Why This Curriculum
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16"
        >
          <span className="gradient-text-warm">다른 강의와는 다릅니다</span>
        </motion.h2>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className={cn(
                'group p-8 rounded-2xl bg-surface border border-white/5',
                'hover:border-cc-purple/30 hover:bg-cc-purple/5',
                'transition-all duration-300'
              )}
            >
              <div className="text-4xl mb-5">{feature.emoji}</div>
              <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-cc-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
