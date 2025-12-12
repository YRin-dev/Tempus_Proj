import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
import BubbleEffect from '../components/patterns/visualHook/BubbleEffect';
import {
  path_T,
  path_e,
  path_m,
  path_p,
  path_u,
  path_s,
} from '../data/logoTypePathData';
import { heroContent } from '../data/contentData';

/**
 * TopSection 컴포넌트
 *
 * 회사 소개 섹션으로 애니메이션 로고, 버블 효과, 타이핑 효과를 포함합니다.
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TopSection />
 */
function AnimationLogoSection() {
  // 페이지 reload 시 TypingEffect를 재시작하기 위한 key
  const [typingKey, setTypingKey] = useState(0);

  // 컴포넌트 마운트 시 key 초기화
  useEffect(() => {
    setTypingKey((prev) => prev + 1);
  }, []);

  // TEMPUS 로고 컴포넌트
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
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAF7',
        padding: { xs: '20px', md: '40px' },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 버블 효과 배경 Canvas */}
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
          alpha: false,
          stencil: false,
        }}
        camera={{ fov: 60, position: [0, 0, 20], near: 0.1, far: 100 }}
      >
        <color attach="background" args={['#FAFAF7']} />
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
        <BubbleEffect bubbleCount={80} />
        <EffectComposer disableNormalPass>
          <N8AO
            aoRadius={4}
            intensity={2}
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

export default AnimationLogoSection;
