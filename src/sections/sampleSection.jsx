import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';
import MaskingText from '../components/patterns/typoraphy/MaskingText';
import ordinaryP from '../assets/illust/ordinary_people.png';
import { transitionContent } from '../data/contentData';

/**
 * TransitionSection 컴포넌트ㅡ
 * "ORDINARY" 텍스트 마스킹을 통한 배경 효과와 다크 모드 전환
 * 300vw 가로 스크롤 영역에서 Container Query Units (cqw)를 활용한 완벽한 fit typography
 *
 * 계산 공식: fontSize = calc(100cqw / 8) - 컨테이너 너비를 8글자로 완벽 분할
 *
 * Example usage:
 * <TransitionSection />
 */
function SampleSection() {
  const [ref, isInView] = useIsInView({
    threshold: 0.4,
    triggerOnce: false, // 진출입 시마다 트리거
  });
  const { updateBackgroundMode } = useBackground();

  useEffect(() => {
    console.log('🔍 TransitionSection isInView changed:', isInView);
    if (isInView) {
      updateBackgroundMode('dark');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <Box
      ref={ref}
      sx={{
        width: '300vw',
        height: '100vh',

        // 🎯 Container Query 설정 - fit typography의 핵심!
        containerType: 'inline-size',
        containerName: 'transition-section',

        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ORDINARY 텍스트 마스킹 - 텍스트 레이아웃 유지, 배경만 조정 */}
      <MaskingText
        text={transitionContent.text}
        backgroundImage={ordinaryP}
        fontSize="calc(100cqw / 5)" // 텍스트 크기는 고정
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

export default SampleSection;
