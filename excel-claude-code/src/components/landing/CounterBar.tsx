'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const COUNTERS = [
  { target: 30, label: 'Day Curriculum', suffix: '' },
  { target: 160, label: 'Hours of Learning', suffix: '' },
  { target: 120, label: 'Practice Tasks', suffix: '' },
  { target: 25, label: 'Doc Resources', suffix: '' },
  { target: 14, label: 'Video Tutorials', suffix: '' },
];

function AnimatedCounter({
  target,
  label,
  suffix,
  active,
}: {
  target: number;
  label: string;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-6">
      <span className="text-3xl sm:text-4xl md:text-5xl font-black font-mono gradient-text">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-text-dim text-center">{label}</span>
    </div>
  );
}

export function CounterBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-12 px-6 bg-deep">
      <div
        className={cn(
          'max-w-5xl mx-auto',
          'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4',
          'rounded-2xl bg-surface/50 border border-white/5'
        )}
      >
        {COUNTERS.map((counter) => (
          <AnimatedCounter
            key={counter.label}
            target={counter.target}
            label={counter.label}
            suffix={counter.suffix}
            active={isInView}
          />
        ))}
      </div>
    </section>
  );
}
