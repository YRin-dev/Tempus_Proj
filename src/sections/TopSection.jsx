import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import FreeHorizontalScrollSection from '../components/commons/container/FreeHorizontalScrollSection';
import AnimationLogoSection from './AnimationLogoSection';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';

/**
 * TopSection 컴포넌트
 *
 * 메인 랜딩 페이지의 최상단 섹션으로 가로 스크롤 3단계를 제공합니다.
 * - FreeHorizontalScrollSection: 가로 스크롤 컨테이너
 * - AnimationLogoSection: 첫 번째 화면 (로고 애니메이션)
 * - HeroSection: 두 번째 화면 (타이핑 효과)
 * - MissionSection: 세 번째 화면 (미션 메시지)
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <TopSection ref={topSectionRef} />
 */
const TopSection = forwardRef((props, ref) => {
  return (
    <Box ref={ref}>
      <FreeHorizontalScrollSection height="100vh">
        <AnimationLogoSection />
        <HeroSection />

        <MissionSection />
      </FreeHorizontalScrollSection>
    </Box>
  );
});

TopSection.displayName = 'TopSection';

export default TopSection;
