// import React, { useState, useEffect } from 'react';
// import { Box, Stack } from '@mui/material';
// import { Canvas } from '@react-three/fiber';
// import { EffectComposer, N8AO } from '@react-three/postprocessing';
// import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
// import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
// import BubbleEffect from '../components/patterns/visualHook/BubbleEffect';
// import useIsInView from '../hooks/useIsInView';
// import {
//   path_T,
//   path_e,
//   path_m,
//   path_p,
//   path_u,
//   path_s,
// } from '../data/logoTypePathData';
// import { heroContent } from '../data/contentData';

// /**
//  * AnimationLogoSection 컴포넌트
//  *
//  * 회사 소개 섹션으로 애니메이션 로고, 버블 효과, 타이핑 효과를 포함합니다.
//  * 성능 최적화: 뷰포트에 보일 때만 Canvas 렌더링
//  *
//  * Props:
//  * (현재 props 없음)
//  *
//  * Example usage:
//  * <AnimationLogoSection />
//  */
// function AnimationLogoSection() {
//   // 페이지 reload 시 TypingEffect를 재시작하기 위한 key
//   const [typingKey, setTypingKey] = useState(0);

//   // 성능 최적화: 뷰포트에 보일 때만 Canvas 렌더링
//   const [sectionRef, isInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   // 컴포넌트 마운트 시 key 초기화
//   useEffect(() => {
//     setTypingKey((prev) => prev + 1);
//   }, []);

//   // TEMPUS 로고 컴포넌트
//   const TempusLogo = ({ size = 2 }) => {
//     // 로고 전체 스케일 (0.5, 0.7, 1.2 이런 식으로 마음대로)
//     const logoScale = size;

//     const letterProps = {
//       color: '#1E40AF',
//       duration: 500,
//       scale: 1, // ✅ 개별 글자 scale은 1로 고정
//       triggerMode: 'viewport',
//       isTrigger: true,
//     };

//     return (
//       <Box
//         sx={{
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           // ✅ 이 값 하나로 로고 전체 크기를 조절
//           transform: `scale(${logoScale})`,
//           transformOrigin: 'center bottom', // 밑변 기준으로 커졌다 작아졌다 하게
//         }}
//       >
//         <Stack
//           direction="row"
//           spacing={1}
//           sx={{
//             display: 'flex',
//             alignItems: 'flex-end',
//             justifyContent: 'center',
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'flex-end',
//               transform: 'translate(13px, -1px)',
//             }}
//           >
//             <AnimatedPath
//               data={path_T}
//               width={145}
//               height={237}
//               strokeWidth={36}
//               {...letterProps}
//               startDelay={0}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'flex-end',
//               transform: 'translateY(1px)',
//             }}
//           >
//             <AnimatedPath
//               data={path_e}
//               width={141}
//               height={171}
//               strokeWidth={32}
//               {...letterProps}
//               startDelay={100}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//             <AnimatedPath
//               data={path_m}
//               width={196}
//               height={161}
//               strokeWidth={32}
//               {...letterProps}
//               startDelay={200}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'flex-start',
//               transform: 'translateY(69px)',
//             }}
//           >
//             <AnimatedPath
//               data={path_p}
//               width={160}
//               height={237}
//               strokeWidth={32}
//               {...letterProps}
//               startDelay={300}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//             <AnimatedPath
//               data={path_u}
//               width={129}
//               height={161}
//               strokeWidth={32}
//               {...letterProps}
//               startDelay={400}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//             <AnimatedPath
//               data={path_s}
//               width={114}
//               height={161}
//               strokeWidth={32}
//               {...letterProps}
//               startDelay={500}
//             />
//           </Box>
//         </Stack>
//       </Box>
//     );
//   };

//   return (
//     <Box
//       ref={sectionRef}
//       sx={{
//         minHeight: '120vh',
//         height: '120vh',
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#FAFAF7',
//         padding: { xs: '20px', md: '40px' },
//         paddingBottom: { xs: '20vh', md: '25vh' },
//         // paddingBottom: { xs: '10vh', md: '5vh' },
//         overflow: 'hidden',
//         position: 'relative',
//       }}
//     >
//       {/* 하단 경계선 블러 효과 - TransitionSection으로 자연스럽게 전환 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '150px',
//           background:
//             'linear-gradient(to bottom, transparent, rgba(250, 250, 247, 0.8), rgba(250, 250, 247, 1))',
//           backdropFilter: 'blur(10px)',
//           zIndex: 2,
//           pointerEvents: 'none',
//         }}
//       />
//       {/* 버블 효과 배경 Canvas - 성능 최적화: 뷰포트에 보일 때만 렌더링 */}
//       {isInView && (
//         <Canvas
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             zIndex: 0,
//           }}
//           shadows={false}
//           dpr={[1, 1.5]}
//           gl={{
//             antialias: true,
//             powerPreference: 'high-performance',
//             alpha: false,
//             stencil: false,
//           }}
//           camera={{ fov: 60, position: [0, 0, 20], near: 0.1, far: 100 }}
//         >
//           <color attach="background" args={['#FAFAF7']} />
//           <directionalLight
//             position={[0, 30, 10]}
//             intensity={1.5}
//             color="#ffffff"
//             castShadow={false}
//           />
//           <BubbleEffect bubbleCount={50} />
//           <EffectComposer disableNormalPass>
//             <N8AO
//               aoRadius={4}
//               intensity={1.5}
//               distanceFalloff={1}
//               color="#030f24"
//             />
//           </EffectComposer>
//         </Canvas>
//       )}

//       {/* 기존 콘텐츠 - 버블 위에 표시 */}
//       <Box
//         sx={{
//           position: 'relative',
//           zIndex: 1,
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         {/* 여기 size 값만 바꿔서 전체 로고 크기 조절 */}
//         <TempusLogo size={0.7} /> {/* 0.5 ~ 1.3 사이 아무 값이나 써도 됨 */}
//         <Box
//           sx={{
//             mt: 8,
//             width: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <TypingEffect
//             key={typingKey} // 페이지 reload 시 강제로 재마운트하여 애니메이션 재시작
//             texts={[heroContent.mainText]}
//             typingSpeed={heroContent.typingSpeed}
//             deleteSpeed={heroContent.deleteSpeed}
//             startDelay={heroContent.startDelay}
//             cursorType={heroContent.cursorType}
//             fontSize="5.4rem"
//             cursorColor="#1E40AF"
//             textAlign="center"
//             sx={{ py: 0 }} // TypingEffect의 기본 패딩 제거하여 정렬 정확도 향상
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default AnimationLogoSection;

import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
import useIsInView from '../hooks/useIsInView';
import {
  path_T,
  path_e,
  path_m,
  path_p,
  path_u,
  path_s,
} from '../data/logoTypePathData';
import { heroContent } from '../data/contentData';

function AnimationLogoSection() {
  const [typingKey, setTypingKey] = useState(0);

  const [sectionRef, isInView] = useIsInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    setTypingKey((prev) => prev + 1);
  }, []);

  const TempusLogo = ({ size = 2 }) => {
    const logoScale = size;

    const letterProps = {
      color: '#1E40AF',
      duration: 500,
      scale: 1,
      triggerMode: 'viewport',
      isTrigger: true,
    };

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          transform: `scale(${logoScale})`,
          transformOrigin: 'center bottom',
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

  // ✅ 웨이브 마스크(SVG) — 상단 큰 웨이브
  const waveMaskTop = `url("data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600' preserveAspectRatio='none'>
      <path fill='white' d='M0,0 H1200 V330
        C980,250 820,420 620,360
        C420,300 320,470 130,410
        C70,390 30,370 0,350
        Z'/>
    </svg>
  `)}")`;

  // ✅ 웨이브 마스크 — 우측 큰 웨이브(겹치는 느낌)
  // const waveMaskRight = `url("data:image/svg+xml,${encodeURIComponent(`
  //   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600' preserveAspectRatio='none'>
  //     <path fill='white' d='M0,0 H1200 V600 H0 Z'/>
  //     <path fill='black' d='M0,0 H1200 V290
  //       C980,360 830,250 660,320
  //       C520,380 420,520 230,460
  //       C120,420 70,390 0,360
  //       Z'/>
  //   </svg>
  // `)}")`;

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: '120vh',
        height: '120vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        // ✅ brix 느낌 베이스(거의 화이트 + 라벤더 톤)
        backgroundColor: '#FBFAFF',

        padding: { xs: '20px', md: '40px' },
        paddingBottom: { xs: '20vh', md: '25vh' },
        overflow: 'hidden',
        position: 'relative',

        // ✅ 웨이브 레이어 1 (상단 큰 퍼플 웨이브)
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '-30%',
          zIndex: 0,
          pointerEvents: 'none',

          // 웨이브 안쪽 색(스크린샷처럼 퍼플-블루)
          background: `
            radial-gradient(900px 500px at 25% 20%, rgba(124, 92, 255, 0.55), transparent 70%),
            radial-gradient(1000px 560px at 70% 30%, rgba(160, 140, 255, 0.55), transparent 72%),
            radial-gradient(900px 520px at 85% 55%, rgba(120, 140, 255, 0.35), transparent 75%)
          `,
          filter: 'blur(60px)',
          opacity: 0.95,

          // ✅ 웨이브 모양으로 잘라내기(마스크)
          WebkitMaskImage: waveMaskTop,
          maskImage: waveMaskTop,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center top',
          maskPosition: 'center top',

          // 살짝 떠다니게
          transform: 'translate3d(0,0,0)',
          animation: isInView
            ? 'waveDrift1 16s ease-in-out infinite alternate'
            : 'none',
          willChange: 'transform',
        },

        // ✅ 웨이브 레이어 2 (오른쪽에서 한번 더 감싸는 느낌)
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: '-35%',
          zIndex: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(980px 560px at 78% 18%, rgba(140, 120, 255, 0.45), transparent 72%),
            radial-gradient(1100px 640px at 88% 45%, rgba(190, 160, 255, 0.35), transparent 75%),
            radial-gradient(900px 540px at 70% 70%, rgba(150, 200, 255, 0.22), transparent 78%)
          `,
          filter: 'blur(70px)',
          opacity: 0.9,

          WebkitMaskImage: waveMaskTop,
          maskImage: waveMaskTop,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center top',
          maskPosition: 'center top',

          transform: 'translate3d(0,0,0)',
          animation: isInView
            ? 'waveDrift2 22s ease-in-out infinite alternate'
            : 'none',
          willChange: 'transform',
        },

        '@keyframes waveDrift1': {
          '0%': { transform: 'translate3d(-2%, -1%, 0) scale(1.02)' },
          '50%': { transform: 'translate3d(1%, 0.5%, 0) scale(1.03)' },
          '100%': { transform: 'translate3d(3%, -0.5%, 0) scale(1.02)' },
        },
        '@keyframes waveDrift2': {
          '0%': { transform: 'translate3d(2%, 0.5%, 0) scale(1.02)' },
          '50%': { transform: 'translate3d(-1%, -0.2%, 0) scale(1.03)' },
          '100%': { transform: 'translate3d(-3%, 0.8%, 0) scale(1.02)' },
        },

        '@media (prefers-reduced-motion: reduce)': {
          '&::before': { animation: 'none' },
          '&::after': { animation: 'none' },
        },
      }}
    >
      {/* 하단 경계선 블러 효과 - TransitionSection으로 자연스럽게 전환 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background:
            'linear-gradient(to bottom, transparent, rgba(251, 250, 255, 0.8), rgba(251, 250, 255, 1))',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* 콘텐츠 */}
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
        <TempusLogo size={0.7} />

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
            key={typingKey}
            texts={[heroContent.mainText]}
            typingSpeed={heroContent.typingSpeed}
            deleteSpeed={heroContent.deleteSpeed}
            startDelay={heroContent.startDelay}
            cursorType={heroContent.cursorType}
            fontSize="5.4rem"
            cursorColor="#1E40AF"
            textAlign="center"
            sx={{ py: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AnimationLogoSection;
