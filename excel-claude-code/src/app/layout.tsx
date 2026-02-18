import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Code Mastery — 30 Days to Transform Your Coding',
  description: 'AI가 코드를 대신 짜주는 시대. Claude Code로 10배 빠른 개발자가 되는 30일 완전정복 커리큘럼.',
  openGraph: {
    title: 'Claude Code Mastery — 30일 완전정복',
    description: '설치부터 Agent SDK까지. 완전 초보자도 30일 후엔 풀스택 앱을 만들 수 있습니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
