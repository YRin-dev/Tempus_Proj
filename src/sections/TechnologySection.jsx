import React from 'react';
import { Box } from '@mui/material';
import StickySection from '../components/patterns/pageTransition/StickySection';

/**
 * TechnologySection 컴포넌트
 *
 * 기술 소개 섹션입니다.
 * - StickySection으로 이미지 고정 + 텍스트 스크롤 구조
 * - fabImg.png 배경 이미지가 스크롤하면서 서서히 축소되고 흐려지는 효과
 * - Technology 관련 3개의 카드가 가로로 나열
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TechnologySection />
 */
function TechnologySection() {
  return (
    <StickySection
      targetScale={0.7}
      image="/src/assets/photo/fabImg.png"
      useFadeEffect={true}
      targetOpacity={0.3}
    >
      {/* TODO: Technology 섹션 내용 구현 */}
      <Box>TechnologySection - 기술 소개</Box>
    </StickySection>
  );
}

export default TechnologySection;
