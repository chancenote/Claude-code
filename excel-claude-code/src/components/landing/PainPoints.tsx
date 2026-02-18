'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const PAIN_CARDS = [
  {
    emoji: '😵',
    title: '뭘 어떻게 시켜야 하지?',
    description:
      'Claude Code를 설치했지만, 어떤 프롬프트를 써야 할지 모릅니다. 결과물은 매번 기대 이하.',
  },
  {
    emoji: '📈',
    title: '체계적인 학습 경로가 없다',
    description:
      '유튜브, 블로그, 공식 문서... 정보는 넘치지만 뭘 어떤 순서로 배워야 할지 감이 안 옵니다.',
  },
  {
    emoji: '⏳',
    title: '시간만 버리고 있는 것 같다',
    description:
      '몇 시간을 투자해도 실력이 느는 것 같지 않고, 비용만 늘어갑니다. 이게 맞는 건지 불안합니다.',
  },
];

export function PainPoints() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      id="pain"
      className="py-24 px-6 bg-deep"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-red mb-4 text-center uppercase"
        >
          The Problem
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4"
        >
          혹시 이런 상황,{' '}
          <span className="text-cc-red">익숙하신가요?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-muted text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          AI 코딩 도구는 설치했는데, 실력은 제자리인 당신에게
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PAIN_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className={cn(
                'group p-8 rounded-2xl bg-surface border border-white/5',
                'hover:border-cc-red/40 hover:bg-cc-red/5',
                'transition-all duration-300 cursor-default'
              )}
            >
              <div className="text-5xl mb-6">{card.emoji}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-cc-red transition-colors">
                {card.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
