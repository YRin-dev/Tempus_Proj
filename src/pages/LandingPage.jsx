//

import React, { useState, useEffect, useCallback } from 'react';
import { Box, Stack } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
import BubbleEffect from '../components/patterns/visualHook/BubbleEffect';
import { gradientPalettes } from '../data/gradientPalettes';
import {
  path_T,
  path_e,
  path_m,
  path_p,
  path_u,
  path_s,
} from '../data/logoTypePathData';
import { heroContent } from '../data/contentData';
//import tempusLogoImage from '../assets/photo/Tempuslogo.png';
//import eyelogo from '../assets/photo/eyelogo.png';

function LandingPage() {
  // 페이지 reload 시 TypingEffect를 재시작하기 위한 key
  const [typingKey, setTypingKey] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 컴포넌트 마운트 시 key 초기화
  useEffect(() => {
    setTypingKey((prev) => prev + 1);
  }, []);

  // 스크롤 진행률 계산
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    setScrollProgress(Math.min(1, Math.max(0, progress)));
  }, []);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기값 설정
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 그라데이션 팔레트 가져오기 (기존 배경색과 유사한 밝은 톤 선택)
  const getGradientColors = () => {
    // pastelDream 또는 부드러운 밝은 색상 팔레트 사용
    const palette = gradientPalettes.find((p) => p.id === 'pastelDream');
    return palette ? palette.colors : ['#FAFAF7', '#E8E8E5'];
  };

  // 그라데이션 생성 함수 (GradientBox 로직 참고)
  const createGradient = () => {
    const colors = getGradientColors();
    const colorStops = colors
      .map((color, index) => {
        const percentage = (100 / (colors.length - 1)) * index;
        return `${color} ${percentage}%`;
      })
      .join(', ');
    return `linear-gradient(135deg, ${colorStops})`;
  };

  // TEMPUS 로고 컴포넌트
  // LandingPage.jsx 안에서
  const TempusLogo = ({ size = 2 }) => {
    // 로고 전체 스케일 (0.5, 0.7, 1.2 이런 식으로 마음대로)
    const logoScale = size;

    const letterProps = {
      color: '#1E40AF',
      duration: 500,
      scale: 1, // ✅ 개별 글자 scale은 1로 고정
      triggerMode: 'viewport',
      isTrigger: true,
    };

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          // ✅ 이 값 하나로 로고 전체 크기를 조절
          transform: `scale(${logoScale})`,
          transformOrigin: 'center bottom', // 밑변 기준으로 커졌다 작아졌다 하게
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              transform: 'translate(13px, -1px)',
            }}
          >
            <AnimatedPath
              data={path_T}
              width={145}
              height={237}
              strokeWidth={36}
              {...letterProps}
              startDelay={0}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              transform: 'translateY(1px)',
            }}
          >
            <AnimatedPath
              data={path_e}
              width={141}
              height={171}
              strokeWidth={32}
              {...letterProps}
              startDelay={100}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_m}
              width={196}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={200}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              transform: 'translateY(69px)',
            }}
          >
            <AnimatedPath
              data={path_p}
              width={160}
              height={237}
              strokeWidth={32}
              {...letterProps}
              startDelay={300}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_u}
              width={129}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={400}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_s}
              width={114}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={500}
            />
          </Box>
        </Stack>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: createGradient(),
        backgroundSize: '200% 200%',
        padding: '40px',
        overflow: 'visible',
        position: 'relative',
        // 애니메이션 그라데이션 (GradientBox 로직 참고)
        animation: 'gradientSlide 8s ease-in-out infinite',
        '@keyframes gradientSlide': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      {/* 버블 효과 배경 Canvas - BubbleBackground.jsx 설정 적용 */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true, // 그라데이션 배경이 보이도록 투명 설정 (BubbleBackground는 false지만 그라데이션을 위해 true)
          stencil: false,
        }}
        camera={{ fov: 60, position: [0, 0, 20], near: 0.1, far: 100 }}
      >
        <directionalLight
          position={[0, 30, 10]}
          intensity={1.5}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
        />
        <BubbleEffect
          scrollProgress={scrollProgress}
          bubbleCount={120}
          gradientColors={getGradientColors()}
        />
        <EffectComposer disableNormalPass>
          <N8AO
            aoRadius={4}
            intensity={3}
            distanceFalloff={1}
            color="#030f24"
          />
        </EffectComposer>
      </Canvas>

      {/* 기존 콘텐츠 - 버블 위에 표시 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 여기 size 값만 바꿔서 전체 로고 크기 조절 */}
        <TempusLogo size={0.7} /> {/* 0.5 ~ 1.3 사이 아무 값이나 써도 됨 */}
        <Box
          sx={{
            mt: 8,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TypingEffect
            key={typingKey} // 페이지 reload 시 강제로 재마운트하여 애니메이션 재시작
            texts={[heroContent.mainText]}
            typingSpeed={heroContent.typingSpeed}
            deleteSpeed={heroContent.deleteSpeed}
            startDelay={heroContent.startDelay}
            cursorType={heroContent.cursorType}
            fontSize="5.4rem"
            cursorColor="#1E40AF"
            textAlign="center"
            sx={{ py: 0 }} // TypingEffect의 기본 패딩 제거하여 정렬 정확도 향상
          />
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
