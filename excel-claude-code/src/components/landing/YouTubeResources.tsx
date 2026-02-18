'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { ytVideos } from '@/data/youtube-videos';

const RECOMMENDED_CHANNELS = [
  { name: 'Fireship', description: '빠르고 핵심적인 기술 설명', url: 'https://www.youtube.com/@Fireship' },
  { name: 'Traversy Media', description: '실전 크래시 코스', url: 'https://www.youtube.com/@TraversyMedia' },
  { name: 'freeCodeCamp', description: '무료 풀 코스 강의', url: 'https://www.youtube.com/@freecodecamp' },
  { name: 'TechWorld with Nana', description: 'DevOps & 인프라', url: 'https://www.youtube.com/@TechWorldwithNana' },
  { name: 'Net Ninja', description: '프론트엔드 시리즈', url: 'https://www.youtube.com/@NetNinja' },
  { name: 'Programming with Mosh', description: '체계적 프로그래밍 강의', url: 'https://www.youtube.com/@programmingwithmosh' },
];

export function YouTubeResources() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} id="youtube" className="py-24 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono font-bold tracking-widest text-cc-red mb-4 text-center uppercase"
        >
          Video Resources
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4"
        >
          엄선된{' '}
          <span className="text-cc-red">YouTube</span>{' '}
          학습 영상
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-text-muted text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          각 커리큘럼 Day에 맞춰 추천되는 무료 영상 리소스입니다.
        </motion.p>

        {/* Video cards grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20"
        >
          {ytVideos.map((video) => (
            <motion.a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className={cn(
                'group block p-5 rounded-xl bg-card border border-white/5',
                'hover:border-cc-red/30 hover:bg-cc-red/5',
                'transition-all duration-300'
              )}
            >
              {/* Play icon + category */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded-full bg-cc-red/10 text-cc-red border border-cc-red/20">
                  {video.cat}
                </span>
                <Play className="w-4 h-4 text-text-dim group-hover:text-cc-red transition-colors" />
              </div>

              {/* Title */}
              <h4 className="text-sm font-bold text-text-primary mb-2 leading-snug group-hover:text-cc-red transition-colors line-clamp-2">
                {video.title}
              </h4>

              {/* Channel & Duration */}
              <div className="flex items-center gap-2 text-xs text-text-dim mb-2">
                <span>{video.channel}</span>
                <span className="text-white/20">|</span>
                <span className="font-mono">{video.duration}</span>
              </div>

              {/* Day reference */}
              <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-surface text-text-dim mb-3">
                {video.day}
              </span>

              {/* Description */}
              <p className="text-xs text-text-dim leading-relaxed line-clamp-2">
                {video.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Recommended Channels */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            Recommended Channels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {RECOMMENDED_CHANNELS.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex flex-col items-center gap-2 p-4 rounded-xl',
                  'bg-surface border border-white/5',
                  'hover:border-cc-red/30 hover:bg-cc-red/5',
                  'transition-all duration-200 text-center'
                )}
              >
                <span className="text-sm font-bold text-text-primary group-hover:text-cc-red transition-colors">
                  {channel.name}
                </span>
                <span className="text-xs text-text-dim">{channel.description}</span>
                <ExternalLink className="w-3 h-3 text-text-dim group-hover:text-cc-red transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
