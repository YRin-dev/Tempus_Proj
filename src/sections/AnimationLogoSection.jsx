import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Box, Stack } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';

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
 * TEMPUS 로고 컴포넌트
 * 컴포넌트 외부로 이동하여 불필요한 재렌더링 방지
 */
const TempusLogo = React.memo(({ size = 2 }) => {
  // 로고 전체 스케일 (0.5, 0.7, 1.2 이런 식으로 마음대로)
  const logoScale = size;

  const letterProps = useMemo(
    () => ({
      color: '#FFFFFF',
      duration: 500,
      scale: 1, // ✅ 개별 글자 scale은 1로 고정
      triggerMode: 'manual', // 즉시 시작하도록 변경
      isTrigger: true,
    }),
    []
  );

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
});

TempusLogo.displayName = 'TempusLogo';

/**
 * AnimationLogoSection 컴포넌트
 *
 * 회사 소개 섹션으로 애니메이션 로고, 버블 효과, 타이핑 효과를 포함합니다.
 * 그라디언트 버블 배경 애니메이션 적용
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <AnimationLogoSection />
 */
function AnimationLogoSection() {
  // 페이지 reload 시 TypingEffect를 재시작하기 위한 key
  const [typingKey, setTypingKey] = useState(0);

  // 배경 애니메이션을 위한 ref와 state
  const interactiveRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const curPosition = useRef({ x: 0, y: 0 });

  // 컴포넌트 마운트 시 key 초기화
  useEffect(() => {
    setTypingKey((prev) => prev + 1);
  }, []);

  // 마우스 위치 추적 (useCallback으로 메모이제이션하여 불필요한 리렌더링 방지)
  const handleMouseMove = useCallback((event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // 부드러운 애니메이션을 위한 requestAnimationFrame
  useEffect(() => {
    let animationId;
    const animate = () => {
      if (interactiveRef.current) {
        curPosition.current.x += (mousePosition.x - curPosition.current.x) / 20;
        curPosition.current.y += (mousePosition.y - curPosition.current.y) / 20;

        interactiveRef.current.style.transform = `translate(${Math.round(
          curPosition.current.x
        )}px, ${Math.round(curPosition.current.y)}px)`;

        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition]);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: 'linear-gradient(40deg, rgb(0, 0, 0), rgb(0, 17, 82))',
      }}
      style={{
        // CSS 변수 정의
        '--color-bg1': 'rgb(108, 0, 162)',
        '--color-bg2': 'rgb(0, 17, 82)',
        '--color1': '18, 113, 255',
        '--color2': '221, 74, 255',
        '--color3': '100, 220, 255',
        '--color4': '200, 50, 50',
        '--color5': '180, 180, 50',
        '--color-interactive': '140, 100, 255',
        '--circle-size': '80%',
        '--blending': 'hard-light',
      }}
    >
      {/* SVG 필터 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
        }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* 그라디언트 컨테이너 */}
      <Box
        sx={{
          filter: 'url(#goo) blur(40px)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        {/* g1 - 수직 이동 */}
        <Box
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(18, 113, 255, 0.8) 0, rgba(18, 113, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'center center',
            opacity: 1,
            '@keyframes moveVertical': {
              '0%': { transform: 'translateY(-50%)' },
              '50%': { transform: 'translateY(50%)' },
              '100%': { transform: 'translateY(-50%)' },
            },
            animation: 'moveVertical 30s ease infinite',
          }}
        />

        {/* g2 - 원형 이동 (역방향) */}
        <Box
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(221, 74, 255, 0.8) 0, rgba(221, 74, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'calc(50% - 400px)',
            opacity: 1,
            '@keyframes moveInCircle': {
              '0%': { transform: 'rotate(0deg)' },
              '50%': { transform: 'rotate(180deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
            animation: 'moveInCircle 20s reverse infinite',
          }}
        />

        {/* g3 - 원형 이동 */}
        <Box
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(100, 220, 255, 0.8) 0, rgba(100, 220, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40% + 200px)',
            left: 'calc(50% - 40% - 500px)',
            transformOrigin: 'calc(50% + 400px)',
            animation: 'moveInCircle 40s linear infinite',
            opacity: 1,
          }}
        />

        {/* g4 - 수평 이동 */}
        <Box
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(200, 50, 50, 0.8) 0, rgba(200, 50, 50, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            transformOrigin: 'calc(50% - 200px)',
            opacity: 0.7,
            '@keyframes moveHorizontal': {
              '0%': { transform: 'translateX(-50%) translateY(-10%)' },
              '50%': { transform: 'translateX(50%) translateY(10%)' },
              '100%': { transform: 'translateX(-50%) translateY(-10%)' },
            },
            animation: 'moveHorizontal 40s ease infinite',
          }}
        />

        {/* g5 - 큰 원형 이동 */}
        <Box
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(50, 180, 117, 0.8) 0, rgba(180, 180, 50, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '160%',
            height: '160%',
            top: 'calc(50% - 80%)',
            left: 'calc(50% - 80%)',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
            animation: 'moveInCircle 20s ease infinite',
            opacity: 1,
          }}
        />

        {/* interactive - 마우스를 따라다니는 버블 */}
        <Box
          ref={interactiveRef}
          sx={{
            position: 'absolute',
            background:
              'radial-gradient(circle at center, rgba(140, 100, 255, 0.8) 0, rgba(140, 100, 255, 0) 50%)',
            mixBlendMode: 'hard-light',
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            opacity: 0.7,
          }}
        />
      </Box>

      {/* 기존 콘텐츠 - 배경 위에 표시 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '20px', md: '40px' },
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
            texts={heroContent.mainText} // 배열로 전달하여 두 문장을 순차적으로 타이핑
            typingSpeed={
              Array.isArray(heroContent.typingSpeed)
                ? heroContent.typingSpeed[0]
                : heroContent.typingSpeed
            }
            deleteSpeed={
              Array.isArray(heroContent.deleteSpeed)
                ? heroContent.deleteSpeed[0]
                : heroContent.deleteSpeed
            }
            startDelay={
              Array.isArray(heroContent.startDelay)
                ? heroContent.startDelay[0]
                : heroContent.startDelay
            }
            cursorType={heroContent.cursorType}
            fontSize="5.4rem"
            cursorColor="#FFFFFF"
            textAlign="center"
            sx={{ py: 0, color: '#FFFFFF' }} // TypingEffect의 기본 패딩 제거하여 정렬 정확도 향상
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AnimationLogoSection;
