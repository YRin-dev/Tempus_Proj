// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import HumanIllustCarousel from '../template/HumanIllustCarousel';

// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';
// import FadeInTypography from '../components/patterns/typoraphy/FadeInTypography';
// /**
//  * MissionSection 컴포넌트
//  *
//  * 브랜드 미션 메시지를 표시하는 섹션입니다.
//  * - FullPageSection(widthType="vw")으로 전체 뷰포트 폭 차지
//  * - missionContent에서 제목과 브랜드 미션 메시지 가져오기
//  * - HumanIllustCarousel(pathType="circle", theme="dark")을 화면 중앙에 원형 배치
//  * - 텍스트는 z-index로 일러스트 위에 오버레이
//  * - useBackground('dark') 모드 전환 + useIsInView 사용 (threshold: 0.1)
//  *
//  * Props:
//  * (현재 props 없음)
//  *
//  * Example usage:
//  * <MissionSection />
//  */
// function MissionSection() {
//   const { updateBackgroundMode } = useBackground();
//   const [ref, isInView] = useIsInView({ threshold: 0.1, triggerOnce: false });

//   // 뷰포트에 10%만 보여도 dark 모드로 전환
//   React.useEffect(() => {
//     if (isInView) {
//       updateBackgroundMode('dark');
//     }
//   }, [isInView, updateBackgroundMode]);

//   return (
//     <FullPageSection widthType="vw" ref={ref}>
//       {/* FadeInTypography - 왼쪽 위 텍스트 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: { xs: '40px', md: '100px' },
//           left: { xs: '20px', md: '60px' },
//           zIndex: 3,
//           maxWidth: { xs: '80%', md: '50%' },
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: { xs: 1, md: 1.5 },
//           }}
//         >
//           <FadeInTypography
//             text="당신의 시스템에"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//           />
//           <FadeInTypography
//             text="코와 눈을"
//             variant="h3"
//             direction="up"
//             color="#87CEEB"
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//           />
//           <FadeInTypography
//             text="제공합니다"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//           />
//         </Box>
//       </Box>
//     </FullPageSection>
//   );
// }

// export default MissionSection;

// import React, { useRef, useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion, useScroll, useTransform } from 'framer-motion'; // 애니메이션 라이브러리
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';
// import FadeInTypography from '../components/patterns/typoraphy/FadeInTypography';
// import fabImg from '../assets/photo/멤스팹.png';

// /**
//  * MissionSection 컴포넌트
//  * * 주요 수정 사항:
//  * 1. fabImg를 absolute 포지션과 objectFit: 'cover'를 사용하여 섹션 전체에 꽉 차게 배치했습니다.
//  * 2. framer-motion을 통해 스크롤 시 이미지가 오른쪽에서 왼쪽으로 슬라이딩하며 등장합니다.
//  * 3. 텍스트 가독성을 위해 이미지 위에 어두운 그라데이션 레이어(Overlay)를 추가했습니다.
//  * 4. 이전의 'inViewRef is not a function' 오류를 방지하는 안전한 Ref 할당 로직을 적용했습니다.
//  */
// function MissionSection() {
//   const { updateBackgroundMode } = useBackground();

//   // 스크롤 및 뷰포트 감지를 위한 Ref
//   const sectionRef = useRef(null);
//   const [inViewRef, isInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   // 스크롤 진행률 감시 (해당 섹션 기준)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   // 스크롤에 따른 애니메이션 정의:
//   // - xTranslation: 화면 오른쪽 밖(100%)에서 제자리(0%)로 이동
//   // - opacity: 투명도 0에서 1로 변화
//   const xTranslation = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   // 다크 모드 전환 로직 유지
//   useEffect(() => {
//     if (isInView) {
//       updateBackgroundMode('dark');
//     }
//   }, [isInView, updateBackgroundMode]);

//   return (
//     <FullPageSection
//       widthType="vw"
//       ref={(el) => {
//         // 두 개의 Ref를 안전하게 병합하여 할당
//         sectionRef.current = el;
//         if (typeof inViewRef === 'function') {
//           inViewRef(el);
//         } else if (inViewRef) {
//           inViewRef.current = el;
//         }
//       }}
//       sx={{
//         position: 'relative',
//         overflow: 'hidden', // 슬라이딩하는 이미지가 섹션 밖으로 나가지 않게 설정
//       }}
//     >
//       {/* 1. 페이지를 꽉 채우는 배경 이미지 (애니메이션 적용) */}
//       <Box
//         component={motion.img}
//         src={fabImg}
//         alt="Fab Background"
//         style={{
//           x: xTranslation,
//           opacity: opacity,
//         }}
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover', // 이미지가 가로세로 비율을 유지하며 전체를 꽉 채움
//           zIndex: 1,
//         }}
//       />

//       {/* 2. 텍스트 가독성을 위한 어두운 오버레이 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           background:
//             'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 70%)',
//           zIndex: 2,
//         }}
//       />

//       {/* 3. 텍스트 콘텐츠 (이미지 및 오버레이 위에 배치) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: { xs: '40px', md: '100px' },
//           left: { xs: '20px', md: '60px' },
//           zIndex: 3,
//           maxWidth: { xs: '90%', md: '50%' },
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: { xs: 1, md: 1.5 },
//           }}
//         >
//           <FadeInTypography
//             text="당신의 시스템에"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//           />
//           <FadeInTypography
//             text="코와 눈을"
//             variant="h3"
//             direction="up"
//             color="#87CEEB" // 포인트 컬러 (SkyBlue)
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 900,
//               lineHeight: 1.2,
//             }}
//           />
//           <FadeInTypography
//             text="제공합니다"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             speed={600}
//             wordDelay={150}
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//           />
//         </Box>
//       </Box>
//     </FullPageSection>
//   );
// }

// export default MissionSection;

// import React, { useRef, useEffect } from 'react';
// import { Box } from '@mui/material';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';
// import FadeInTypography from '../components/patterns/typoraphy/FadeInTypography';
// import fabImg from '../assets/photo/멤스팹.png';

// function MissionSection() {
//   const { updateBackgroundMode } = useBackground();
//   const sectionRef = useRef(null);
//   const [inViewRef, isInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   // 1. 스크롤 진행도 감시
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   // 2. 이미지 애니메이션 (오른쪽에서 왼쪽으로 슬라이딩)
//   const xTranslation = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
//   const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   // 3. 어두워지는 효과 로직 (사용자 제공 로직 응용)
//   // 초기 어두움 40%(0.4)에서 스크롤이 진행될수록 80%(0.8)까지 진해짐
//   const initialDarkness = 0.4;
//   const finalDarkness = 0.6;
//   const darkOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.5],
//     [initialDarkness, finalDarkness]
//   );

//   useEffect(() => {
//     if (isInView) {
//       updateBackgroundMode('dark');
//     }
//   }, [isInView, updateBackgroundMode]);

//   return (
//     <FullPageSection
//       widthType="vw"
//       ref={(el) => {
//         sectionRef.current = el;
//         if (typeof inViewRef === 'function') inViewRef(el);
//         else if (inViewRef) inViewRef.current = el;
//       }}
//       sx={{ position: 'relative', overflow: 'hidden' }}
//     >
//       {/* 배경 이미지 레이어 */}
//       <Box
//         component={motion.img}
//         src={fabImg}
//         style={{
//           x: xTranslation,
//           opacity: imageOpacity,
//         }}
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: 1,
//         }}
//       />

//       {/* 검은 배경 레이어 - 스크롤에 따라 진해짐 (제공해주신 로직 적용) */}
//       <Box
//         component={motion.div}
//         style={{ opacity: darkOpacity }}
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           backgroundColor: '#000000',
//           zIndex: 2,
//         }}
//       />

//       {/* 텍스트 콘텐츠 레이어 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: { xs: '40px', md: '100px' },
//           left: { xs: '20px', md: '60px' },
//           zIndex: 3,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: { xs: 1, md: 1.5 },
//           }}
//         >
//           <FadeInTypography
//             text="당신의 시스템에"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//             }}
//           />
//           <FadeInTypography
//             text="코와 눈을"
//             variant="h3"
//             direction="up"
//             color="#87CEEB"
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 900,
//             }}
//           />
//           <FadeInTypography
//             text="제공합니다"
//             variant="h3"
//             direction="up"
//             color="#ffffff"
//             sx={{
//               fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
//               fontWeight: 800,
//             }}
//           />
//         </Box>
//       </Box>
//     </FullPageSection>
//   );
// }

// export default MissionSection;

import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import FullPageSection from '../components/commons/container/FullPageSection';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';
import FadeInTypography from '../components/patterns/typoraphy/FadeInTypography';
import { technologyContent } from '../data/contentData';
import fabImg from '../assets/photo/멤스팹.png';

function MissionSection() {
  const { updateBackgroundMode, updateMissionSectionInView } = useBackground();
  const sectionRef = useRef(null);
  const [inViewRef, isInView] = useIsInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 애니메이션 로직
  const xTranslation = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  // 스크롤에 따라 배경이 0.4(약간 어두움)에서 0.8(매우 어두움)로 변화
  const darkOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  useEffect(() => {
    if (isInView) {
      updateBackgroundMode('dark');
    }
  }, [isInView, updateBackgroundMode]);

  // MissionSection 보임 상태를 BackgroundContext에 업데이트
  useEffect(() => {
    updateMissionSectionInView(isInView);
  }, [isInView, updateMissionSectionInView]);

  return (
    <FullPageSection
      widthType="vw"
      ref={(el) => {
        sectionRef.current = el;
        if (typeof inViewRef === 'function') inViewRef(el);
        else if (inViewRef) inViewRef.current = el;
      }}
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* 1. 배경 이미지 - 페이지 꽉 차게 수정 (left: 0) */}
      <Box
        component={motion.img}
        src={fabImg}
        style={{ x: xTranslation, opacity: imageOpacity }}
        sx={{
          position: 'absolute',
          top: 0,
          left: '510px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* 2. 어두운 오버레이 - 스크롤에 따라 진해짐 */}
      <Box
        component={motion.div}
        style={{ opacity: darkOpacity }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          zIndex: 2,
        }}
      />

      {/* 3. 배경 대형 텍스트 (하단 배치) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-64px',
          left: '190px',
          right: 0,
          width: '100%',
          paddingBottom: { xs: '40px', md: '60px' },
          zIndex: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '9rem', lg: '11rem' },
            fontWeight: 900,
            lineHeight: 0.85,
            color: 'rgba(255, 255, 255, 0.15)', // 가독성을 위해 투명도 살짝 조절
            letterSpacing: '-0.03em',
            fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {technologyContent.mainTitle}
        </Typography>
      </Box>

      {/* 4. 메인 텍스트 콘텐츠 (좌측 상단/중단) */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '15%', md: '20%' }, // 위치를 약간 아래로 조정
          left: { xs: '20px', md: '55px' },
          zIndex: 4,
          maxWidth: { xs: '90%', md: '600px', lg: '800px' }, // 텍스트 블록의 최대 너비 제한
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1, md: 1.5 },
          }}
        >
          <FadeInTypography
            text="당신의 시스템에"
            variant="h3"
            direction="up"
            color="#ffffff"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem', lg: '4rem' },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          />
          <FadeInTypography
            text="코와 눈을"
            variant="h3"
            direction="up"
            color="#87CEEB" // 포인트 컬러
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem', lg: '4rem' },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          />
          <FadeInTypography
            text="제공합니다"
            variant="h3"
            direction="up"
            color="#ffffff"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem', lg: '4rem' },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          />

          {/* 개선된 서브 텍스트 영역 */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 }, // 메인 타이틀과의 간격을 넓혀 가독성 확보
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 0.8, md: 1.2 }, // 문장 사이의 간격
            }}
          >
            <FadeInTypography
              text="자체 MEMS Fab 기반 차별화된 적외선센서 기술로"
              variant="body1"
              direction="up"
              color="rgba(255, 255, 255, 0.85)"
              speed={800}
              delay={400}
              sx={{
                fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.3rem' },
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.02em', // 세련된 느낌을 위한 자간 조정
                wordBreak: 'keep-all',
              }}
            />
            <FadeInTypography
              text="Physical AI의 새로운 가능성을 열어갑니다"
              variant="body1"
              direction="up"
              color="rgba(255, 255, 255, 0.85)"
              speed={800}
              delay={600}
              sx={{
                fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.3rem' },
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '-0.02em',
                wordBreak: 'keep-all',
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* 우측 하단 장식: 스크롤 유도 레이블 */}
      <Box
        sx={{
          position: 'absolute',
          right: '5%',
          bottom: '5%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          opacity: isInView ? 0.6 : 0,
          transition: '1s ease 2s',
          zIndex: 5,
        }}
      >
        <Box sx={{ width: '1px', height: '80px', backgroundColor: '#FFF' }} />
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '0.7rem',
            fontWeight: 700,
            writingMode: 'vertical-rl',
            letterSpacing: '0.2em',
          }}
        >
          SCROLL TO EXPLORE
        </Typography>
      </Box>
    </FullPageSection>
  );
}

export default MissionSection;
