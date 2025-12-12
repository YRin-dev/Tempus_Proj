import React from 'react';
import TopSection from '../sections/TopSection';
import TechnologySection from '../sections/TechnologySection';
import ProductsSection from '../sections/ProductsSection';
import ContactSection from '../sections/ContactSection';

/**
 * LandingPage 컴포넌트
 *
 * 메인 랜딩 페이지로 모든 섹션을 포함합니다.
 * - TopSection: HeroSection, TransitionSection, MissionSection
 * - TechnologySection: 기술 소개
 * - ProductsSection: 제품 소개
 * - ContactSection: 연락처 정보
 *
 * Example usage:
 * <LandingPage />
 */
function LandingPage() {
  return (
    <>
      <TopSection />
      <TechnologySection />
      <ProductsSection />
      <ContactSection />
    </>
  );
}

export default LandingPage;
