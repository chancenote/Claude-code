"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "협업 브랜드", target: 50, suffix: "+" },
  { label: "제작 아이템", target: 200, suffix: "+" },
  { label: "고객 만족도", target: 98, suffix: "%" },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, target, duration]);

  return { count, start: () => setStarted(true) };
}

function StatItem({
  label,
  target,
  suffix,
  onVisible,
}: {
  label: string;
  target: number;
  suffix: string;
  onVisible: boolean;
}) {
  const { count, start } = useCountUp(target);

  useEffect(() => {
    if (onVisible) start();
  }, [onVisible, start]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-gold">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-brand-gray text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-gap bg-brand-beige/40">
      <div className="container-site">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              onVisible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
