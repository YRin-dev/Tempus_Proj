import React from 'react';
import FreeVerticalScrollSection from '../components/patterns/scroll/FreeVerticalScrollSection';
import HeroSection from './HeroSection';
import TransitionSection from './TransitionSection';
import MissionSection from './MissionSection';

/**
 * TopSection 컴포넌트
 *
 * 메인 랜딩 페이지의 최상단 섹션으로 FreeVerticalScrollSection으로 관리됩니다.
 * - HeroSection: AnimationLogoSection 사용
 * - TransitionSection: 회사 소개
 * - MissionSection: 브랜드 미션
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TopSection />
 */
function TopSection() {
  return (
    <FreeVerticalScrollSection width="100vw">
      <HeroSection />
      <TransitionSection />
      <MissionSection />
    </FreeVerticalScrollSection>
  );
}

export default TopSection;
