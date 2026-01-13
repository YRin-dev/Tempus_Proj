import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';
import MaskingText from '../components/patterns/typoraphy/MaskingText';

import { heroContent2 } from '../data/contentData';
// import circuitImg3 from '../assets/photo/curcuitbg.jpg';
// import circuitImg4 from '../assets/photo/circuitimg3.png';
import circuitImg5 from '../assets/photo/circuitimg4.png';

function HeroSection() {
  const [ref, isInView] = useIsInView({
    threshold: 0.1, // 10% 이상 보일 때 트리거 (300vw 요소라서 낮춤)
    triggerOnce: false, // 진출입 시마다 트리거
  });
  const { updateBackgroundMode, updateHeroSectionInView } = useBackground();

  useEffect(() => {
    if (isInView) {
      updateBackgroundMode('dark');
    }
  }, [isInView, updateBackgroundMode]);

  // HeroSection 보임 상태를 BackgroundContext에 업데이트
  useEffect(() => {
    updateHeroSectionInView(isInView);
  }, [isInView, updateHeroSectionInView]);

  return (
    <Box
      ref={ref}
      sx={{
        width: '230vw', // 300vw에서 200vw로 변경
        height: '100vh',

        // 🎯 Container Query 설정 - fit typography의 핵심!
        containerType: 'inline-size',
        containerName: 'hero-section',

        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ORDINARY 텍스트 마스킹 - 텍스트 레이아웃 유지, 배경만 조정 */}
      <MaskingText
        text={heroContent2.text}
        backgroundImage={circuitImg5}
        fontSize="calc(300vw / 8)" // 300vw 기준으로 유지 (200vw 컨테이너에서도 동일한 크기)
        letterSpacing="-1cqw" // 글자 간격도 고정
        sx={{
          // 성능 최적화
          willChange: 'font-size',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* 추가 배경 효과나 콘텐츠를 여기에 추가할 수 있음 */}
    </Box>
  );
}

export default HeroSection;
