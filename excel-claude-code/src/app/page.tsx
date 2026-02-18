import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { PainPoints } from '@/components/landing/PainPoints';
import { Transformation } from '@/components/landing/Transformation';
import { CurriculumRoadmap } from '@/components/landing/CurriculumRoadmap';
import { Features } from '@/components/landing/Features';
import { YouTubeResources } from '@/components/landing/YouTubeResources';
import { CounterBar } from '@/components/landing/CounterBar';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Transformation />
      <CurriculumRoadmap />
      <Features />
      <YouTubeResources />
      <CounterBar />
      <FinalCTA />
      <Footer />
    </>
  );
}
