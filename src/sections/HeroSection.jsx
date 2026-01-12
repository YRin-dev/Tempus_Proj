import React from 'react';
import { Box, Typography } from '@mui/material';
import FullPageSection from '../components/commons/container/FullPageSection';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
import { heroContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * HeroSection 컴포넌트
 *
 * 메인 히어로 섹션으로 타이핑 효과를 사용한 메시지를 표시합니다.
 * - FullPageSection(widthType="vw")으로 전체 뷰포트 폭 차지
 * - heroContent에서 메인 텍스트 가져오기
 * - TypingEffect를 사용한 타이핑 애니메이션
 * - useBackground('light') 모드 전환 + useIsInView 사용
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  const { updateBackgroundMode } = useBackground();
  const [ref, isInView] = useIsInView({ threshold: 0.1, triggerOnce: false });

  // 뷰포트에 10%만 보여도 light 모드로 전환
  React.useEffect(() => {
    if (isInView) {
      updateBackgroundMode('light');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <FullPageSection widthType="vw" ref={ref}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: { xs: '40px 20px', md: '80px 40px' },
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            fontWeight: 900,
            color: '#0F172A',
            lineHeight: 1.2,
            minHeight: { xs: '120px', md: '200px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TypingEffect
            text={heroContent.mainText}
            speed={heroContent.typingSpeed}
            deleteSpeed={heroContent.deleteSpeed}
            startDelay={heroContent.startDelay}
            cursorType={heroContent.cursorType}
          />
        </Typography>
      </Box>
    </FullPageSection>
  );
}

export default HeroSection;

