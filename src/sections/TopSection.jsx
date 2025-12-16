import React from 'react';
import SmoothScroll from '../components/patterns/scroll/SmoothScroll';
import AnimationLogoSection from './AnimationLogoSection';
//import TransitionSection from './TransitionSection';

/**
 * TopSection 컴포넌트
 *
 * 메인 랜딩 페이지의 최상단 섹션으로 SmoothScroll로 부드러운 스크롤을 제공합니다.
 * - HeroSection: AnimationLogoSection 사용
 * - TransitionSection: 회사 소개
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TopSection />
 */
function TopSection() {
  return (
    <SmoothScroll duration={1.2} smoothWheel={true}>
      <AnimationLogoSection />
      {/* <TransitionSection /> */}
    </SmoothScroll>
  );
}

export default TopSection;
