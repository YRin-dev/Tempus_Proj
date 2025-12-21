// import React, { forwardRef, useEffect, useState } from 'react';
// import { Box, Typography, Stack } from '@mui/material';
// import { technologyContent } from '../data/contentData';
// import fabImg from '../assets/photo/fabImg.png';
// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';

// /**
//  * TechnologySection 컴포넌트
//  *
//  * 기술 소개 섹션입니다.
//  * - 스크롤에 따라 배경 이미지가 fade in/out
//  * - 텍스트는 섹션 위치에 고정
//  * - useIsInView를 사용한 텍스트 서서히 나타나는 효과
//  * - useBackground를 사용하여 섹션이 40%만 보여도 gray 배경색으로 전환
//  *
//  * Props:
//  * @param {React.Ref} ref - 섹션 ref [Optional]
//  *
//  * Example usage:
//  * <TechnologySection ref={technologySectionRef} />
//  */
// const TechnologySection = forwardRef((props, ref) => {

//   // mainMessage와 subMessage용 useIsInView 훅
//   const [messageRef, isMessageInView] = useIsInView({
//     threshold: 0.5,
//     rootMargin: '0px',
//     triggerOnce: false,
//   });

//   // TECHNOLOGY 텍스트용 useIsInView 훅
//   const [titleRef, isTitleInView] = useIsInView({
//     threshold: 0.3,
//     rootMargin: '0px',
//     triggerOnce: false,
//   });

//   // 스크롤에 따른 이미지 opacity 계산

//     handleScroll(); // 초기 실행
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [sectionBgRef]);

//   return (
//     <Box
//       ref={(node) => {
//         if (typeof ref === 'function') {
//           ref(node);
//         } else if (ref) {
//           ref.current = node;
//         }
//         sectionBgRef.current = node;
//       }}
//       sx={{
//         width: '100%',
//         minHeight: '100vh',
//         position: 'relative',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: { xs: '80px 20px', md: '100px 40px' },
//       }}
//     >

//       {/* 메인 콘텐츠 - 섹션에 고정 */}
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           maxWidth: '1400px',
//           zIndex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         {/* 메인 메시지 */}
//         <Stack
//           ref={messageRef}
//           width={'100%'}
//           sx={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             textShadow: '0px 2px 20px rgba(0,0,0,0.9)',
//             padding: '20px',
//             maxWidth: '80%',
//             marginBottom: { xs: 6, md: 8 },
//             opacity: isMessageInView ? 1 : 0,
//             transform: isMessageInView ? 'translateY(0)' : 'translateY(30px)',
//             transition: 'all 1s ease-out',
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//             }}
//           >
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
//                 fontWeight: 700,
//                 color: '#ffffff',
//                 marginBottom: 3,
//               }}
//             >
//               {technologyContent.mainMessage[0]}
//             </Typography>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
//                 fontWeight: 400,
//                 color: '#ffffff',
//                 opacity: 0.9,
//                 marginBottom: 1,
//               }}
//             >
//               {technologyContent.subMessage[0]}
//             </Typography>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
//                 fontWeight: 400,
//                 color: '#ffffff',
//                 opacity: 0.9,
//               }}
//             >
//               {technologyContent.subMessage[1]}
//             </Typography>
//           </Box>
//         </Stack>

//         {/* TECHNOLOGY 메인 텍스트 */}
//         <Box
//           ref={titleRef}
//           sx={{
//             position: 'relative',
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             opacity: isTitleInView ? 1 : 0,
//             transform: isTitleInView ? 'translateY(0)' : 'translateY(40px)',
//             transition: 'all 1s ease-out 0.3s',
//           }}
//         >
//           <Typography
//             variant="h1"
//             sx={{
//               fontSize: { xs: '5rem', sm: '7rem', md: '10rem', lg: '13rem' },
//               fontWeight: 900,
//               lineHeight: 0.8,
//               color: 'rgba(240, 235, 235, 0.2)',
//               letterSpacing: '-0.02em',
//               fontFamily: 'Arial, sans-serif',
//               textAlign: 'center',
//               pointerEvents: 'none',
//               userSelect: 'none',
//               marginBottom: { xs: 4, md: 6 },
//             }}
//           >
//             {technologyContent.mainTitle}
//           </Typography>

//           {/* 설명 텍스트 */}
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '900px',
//               padding: { xs: '24px', md: '40px' },
//               borderRadius: '16px',
//               backdropFilter: 'blur(10px)',
//               backgroundColor: 'rgba(255, 255, 255, 0.08)',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//             }}
//           >
//             <Stack spacing={3} alignItems="center">
//               <Typography
//                 textAlign="center"
//                 fontWeight={'500'}
//                 sx={{
//                   whiteSpace: 'pre-line',
//                   lineHeight: 1.6,
//                   fontSize: {
//                     xs: '1rem',
//                     sm: '1.2rem',
//                     md: '1.5rem',
//                     lg: '1.8rem',
//                   },
//                   color: '#ffffff',
//                 }}
//               >
//                 {technologyContent.h1Title}
//               </Typography>
//               <Typography
//                 textAlign="center"
//                 fontWeight={'600'}
//                 sx={{
//                   fontSize: {
//                     xs: '0.9rem',
//                     sm: '1rem',
//                     md: '1.15rem',
//                     lg: '1.3rem',
//                   },
//                   color: '#ffffff',
//                   opacity: 0.9,
//                 }}
//               >
//                 {technologyContent.description}
//               </Typography>
//             </Stack>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// });

// TechnologySection.displayName = 'TechnologySection';

// export default TechnologySection;
