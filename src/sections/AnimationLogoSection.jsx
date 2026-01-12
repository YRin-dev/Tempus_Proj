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
//         minHeight: '100vh',
//         height: '100vh',
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#F8F9FA',

//         padding: { xs: '20px', md: '40px' },
//         paddingBottom: { xs: '20vh', md: '25vh' },
//         // paddingBottom: { xs: '10vh', md: '5vh' },
//         overflow: 'hidden',
//         position: 'relative',
//       }}
//     >
//       {/* 하단 경계선 블러 효과 - TransitionSection으로 자연스럽게 전환 */}
//       {/* <Box
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '100px',
//           background:
//             'linear-gradient(to bottom, transparent, rgba(248, 249, 250, 0.8), rgba(248, 249, 250, 1))',
//           backdropFilter: 'blur(10px)',
//           zIndex: 2,
//           pointerEvents: 'none',
//         }}
//       /> */}

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
//           <color attach="background" args={['#F8F9FA']} />
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
import { keyframes } from '@emotion/react';
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

// 선들의 은은한 움직임을 위한 키프레임
const floatingLines = keyframes`
  0% { transform: translateY(0) scaleX(1); opacity: 0.4; }
  50% { transform: translateY(-20px) scaleX(1.1); opacity: 0.7; }
  100% { transform: translateY(0) scaleX(1); opacity: 0.4; }
`;

const driftingLines = keyframes`
  0% { transform: translateX(-5%) translateY(0); }
  50% { transform: translateX(5%) translateY(15px); }
  100% { transform: translateX(-5%) translateY(0); }
`;

/**
 * AnimationLogoSection 컴포넌트
 *
 * 수정 사항:
 * 1. BubbleEffect 및 Three.js(Canvas) 제거
 * 2. 은은하게 번지는 블루/남색 가로선 배경 추가
 * 3. 선의 경계가 없고 blur 처리가 된 자연스러운 그라데이션 배경 구현
 */
function AnimationLogoSection() {
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    setTypingKey((prev) => prev + 1);
  }, []);

  // TEMPUS 로고 컴포넌트
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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F9FA', // 기본 배경색
        padding: { xs: '20px', md: '40px' },
        paddingBottom: { xs: '20vh', md: '25vh' },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* --- 커스텀 그라데이션 라인 배경 시작 --- */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* 남색(Indigo) 깊은 선 - 아주 넓게 퍼짐 */}
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '-10%',
            width: '120%',
            height: '150px',
            background:
              'radial-gradient(ellipse at center, rgba(10, 25, 96, 0.15) 0%, transparent 80%)',
            filter: 'blur(50px)',
            animation: `${driftingLines} 15s infinite ease-in-out`,
          }}
        />

        {/* 메인 파란색 선 - 중간 두께, 중간 Blur */}
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '-5%',
            width: '110%',
            height: '80px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(30, 64, 175, 0.3) 50%, transparent 100%)',
            filter: 'blur(35px)',
            animation: `${floatingLines} 10s infinite ease-in-out`,
          }}
        />

        {/* 얇고 밝은 파란색 포인트 선 - 선의 느낌을 살려줌 */}
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            left: '0',
            width: '100%',
            height: '40px',
            background:
              'radial-gradient(ellipse at center, rgba(30, 64, 175, 0.25) 0%, transparent 70%)',
            filter: 'blur(20px)',
            animation: `${driftingLines} 12s infinite ease-in-out reverse`,
          }}
        />

        {/* 하단부 은은한 남색 선 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '-5%',
            width: '110%',
            height: '100px',
            background:
              'radial-gradient(ellipse at center, rgba(10, 25, 96, 0.1) 0%, transparent 75%)',
            filter: 'blur(45px)',
            animation: `${floatingLines} 18s infinite ease-in-out`,
          }}
        />
      </Box>
      {/* --- 커스텀 그라데이션 라인 배경 끝 --- */}

      {/* 기존 콘텐츠 */}
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
