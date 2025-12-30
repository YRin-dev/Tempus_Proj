// import React from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import { transitionContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import buildingImg from '../assets/photo/buildingImg.jpeg';

// /**
//  * TransitionSection 컴포넌트
//  *
//  * 회사 소개 섹션 - 현대적이고 감각적인 디자인
//  * - 왼쪽: 회사 소개 텍스트 (ABOUT 타이틀)
//  * - 오른쪽: 회사 건물 이미지
//  * - Split layout with parallax effect
//  * - useIsInView로 애니메이션 효과
//  *
//  * Props:
//  * (현재 props 없음)
//  *
//  * Example usage:
//  * <TransitionSection />
//  */
// function TransitionSection() {
//   const [contentRef, isContentInView] = useIsInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   const [statsRef, isStatsInView] = useIsInView({
//     threshold: 0.4,
//     triggerOnce: true,
//   });

//   const stats = [
//     { year: '2012', label: 'Founded' },
//     { value: '33+', label: 'Patents' },
//     { value: '31+', label: 'Projects' },
//   ];

//   return (
//     <Box
//       //ref={ref}
//       sx={{
//         width: '100vw',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//         backgroundColor: '#F8F9FA',
//         overflow: 'hidden',
//       }}
//     >
//       {/* 1. 왼쪽에서 길게 늘어지는 메인 반원 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '45%',
//           left: '0', // 왼쪽 끝에서 시작
//           width: '65%',
//           height: '60%',
//           transform: 'translateY(-50%)',
//           borderRadius: '0 250px 250px 0',
//           background:
//             'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
//           backgroundColor: '#C0D5F0',
//           backdropFilter: 'blur(40px)', // 은은한 블러 효과
//           opacity: isContentInView ? 1 : 0,
//           transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
//         }}
//       />

//       {/* 3. 보조 포인트 컬러 (블루 글로우) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '10%',
//           right: '5%',
//           width: '500px',
//           height: '500px',
//           background:
//             'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
//           filter: 'blur(100px)',
//           zIndex: 0,
//         }}
//       />

//       {/* 배경 장식 (이미지와 같은 모양) */}
//       {/*아래 도형 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 1,
//           bottom: 0,
//           left: '0',
//           width: '80%',
//           height: '25%',
//           backgroundColor: '#f4f5f7',
//           borderRadius: '0 250px 250px 0',
//           overflow: 'hidden',
//           opacity: isContentInView ? 1 : 0,
//           transform: isContentInView
//             ? 'translateX(0) scaleX(1)'
//             : 'translateX(-30px) scaleX(0.8)',
//           transformOrigin: 'left bottom',
//           transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//         }}
//       />

//       {/* 위 도형 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 2,
//           top: '-10%',
//           right: '0',
//           width: '100%',
//           height: '25%',
//           backgroundColor: '#f4f5f7',
//           borderRadius: '200px 0 0 250px',
//           overflow: 'hidden',
//           opacity: isContentInView ? 1 : 0,
//           transform: isContentInView
//             ? 'translateX(0) scaleX(1)'
//             : 'translateX(-30px) scaleX(0.8)',
//           transformOrigin: 'left bottom',
//           transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//         }}
//       />

//       {/* 1. 위의 아래 파란색*/}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 1,
//           top: '70px',
//           left: '0', // 왼쪽 끝에서 시작
//           width: '50%',
//           height: '150px',
//           transform: 'translateY(-50%)',
//           borderRadius: ' 0 250px 250px 0',
//           background:
//             'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
//           backgroundColor: '#C0D5F0',
//           backdropFilter: 'blur(40px)',
//           opacity: isContentInView ? 1 : 0,
//           transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
//         }}
//       />

//       {/* 메인 컨테이너 */}
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '1600px',
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           position: 'relative',
//           padding: { xs: '80px 20px 40px', md: '80px 60px 60px' },
//           gap: { xs: 4, md: 0 },
//           zIndex: 2,
//         }}
//       >
//         {/* 왼쪽: 텍스트 섹션 */}
//         <Box
//           ref={contentRef}
//           sx={{
//             flex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             paddingLeft: { xs: 0, md: '80px' },
//             zIndex: 2,
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '0.875rem',
//               fontWeight: 800,
//               color: '#1E40AF',
//               letterSpacing: '0.3em',
//               mb: 2,
//               opacity: isContentInView ? 1 : 0,
//               transition: '0.8s ease 0.2s',
//             }}
//           >
//             DISCOVER OUR STORY
//           </Typography>

//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
//               fontWeight: 800,
//               color: '#1a1a1a',
//               lineHeight: 1.1,
//               mb: 4,
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
//               transition: 'all 0.8s ease 0.3s',
//             }}
//           >
//             {transitionContent.text === 'ABOUT'
//               ? '혁신을 넘어\n미래를 설계합니다'
//               : transitionContent.text}
//           </Typography>

//           <Box sx={{ mb: 5 }}>
//             {transitionContent.description.map((text, index) => (
//               <Typography
//                 key={index}
//                 sx={{
//                   fontSize: '1.125rem',
//                   lineHeight: 1.8,
//                   color: '#555',
//                   mb: 1,
//                   opacity: isContentInView ? 1 : 0,
//                   transform: isContentInView
//                     ? 'translateY(0)'
//                     : 'translateY(20px)',
//                   transition: `all 0.8s ease ${0.5 + index * 0.1}s`,
//                 }}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//           {/* CTA 링크 */}
//           <Box
//             sx={{
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
//               transition: 'all 0.8s ease-out 0.8s',
//               paddingTop: { xs: '10px', md: '20px' },
//             }}
//           >
//             <Box
//               component="a"
//               href="#"
//               sx={{
//                 position: 'relative',
//                 display: 'inline-block',
//                 fontSize: { xs: '0.95rem', md: '1.05rem' },
//                 fontWeight: 600,
//                 color: '#666',
//                 textDecoration: 'none',
//                 cursor: 'pointer',
//                 transition: 'color 0.3s ease',
//                 paddingBottom: '4px',

//                 // 회색 밑줄 (기본)
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '2px',
//                   backgroundColor: '#999',
//                   transition: 'opacity 0.3s ease',
//                 },

//                 // 파란색 밑줄 (hover)
//                 '&::after': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '2px',
//                   backgroundColor: '#1E40AF',
//                   transform: 'scaleX(0)',
//                   transformOrigin: 'left',
//                   transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                 },

//                 '&:hover': {
//                   color: '#1E40AF',
//                   '&::before': {
//                     opacity: 0,
//                   },
//                   '&::after': {
//                     transform: 'scaleX(1)',
//                   },
//                 },
//               }}
//             >
//               더 알아보기 →
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* 이미지 섹션 - 절대 위치로 화면 오른쪽 끝에 배치 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '45%',
//           right: 0,
//           transform: 'translateY(-50%)',
//           width: { xs: '50%', md: '40%', lg: '40%' },
//           height: { xs: '350px', md: '550px' },
//           zIndex: 1,
//         }}
//       >
//         {/* 메인 이미지 (왼쪽만 라운드 처리) */}
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             borderRadius: '250px 0 0 250px',
//             overflow: 'hidden',
//             boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
//             opacity: isContentInView ? 1 : 0,
//             transform: isContentInView ? 'translateX(0)' : 'translateX(50px)',
//             transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s',
//           }}
//         >
//           <Box
//             component="img"
//             src={buildingImg}
//             alt="회사 건물"
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//             }}
//           />
//         </Box>

//         {/* 통계 오버레이 카드 (Glassmorphism 적용) */}
//         <Box
//           ref={statsRef}
//           sx={{
//             position: 'absolute',
//             bottom: { xs: '3px', md: '-60px' },
//             right: { xs: '200px', md: '400px' },

//             transform: {
//               xs: isStatsInView
//                 ? 'translateX(-50%)'
//                 : 'translateX(-50%) translateY(40px)',
//               md: isStatsInView ? 'none' : 'translateY(40px)',
//             },
//             width: { xs: '90%', md: 'auto' },
//             backgroundColor: 'rgba(255, 255, 255, 0.85)',
//             backdropFilter: 'blur(16px)',
//             border: '1px solid rgba(255, 255, 255, 0.4)',
//             borderRadius: '24px',
//             padding: { xs: '24px', md: '32px 48px' },
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
//             display: 'flex',
//             gap: { xs: 4, md: 6 },
//             zIndex: 10,
//             opacity: isStatsInView ? 1 : 0,
//             transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
//           }}
//         >
//           {stats.map((stat, index) => (
//             <Box key={index} sx={{ textAlign: 'center' }}>
//               <Typography
//                 sx={{
//                   fontSize: { xs: '1.75rem', md: '2.25rem' },
//                   fontWeight: 800,
//                   color: '#111827',
//                   lineHeight: 1,
//                 }}
//               >
//                 {stat.value || stat.year}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: '0.75rem',
//                   fontWeight: 600,
//                   color: '#6B7280',
//                   textTransform: 'uppercase',
//                   mt: 1,
//                   letterSpacing: '0.1em',
//                 }}
//               >
//                 {stat.label}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default TransitionSection;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { transitionContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import buildingImg from '../assets/photo/buildingImg.jpeg';

// /**
//  * TransitionSection 컴포넌트
//  *
//  * 회사 소개 섹션 - 현대적이고 감각적인 디자인
//  * - 왼쪽: 회사 소개 텍스트
//  * - 오른쪽: 회사 건물 이미지
//  * - 배경 반원들이 순차적으로 나타나는 애니메이션
//  * - 스크롤에 따라 동적으로 나타나는 콘텐츠
//  */
// function TransitionSection() {
//   // 배경 요소들 개별 트리거
//   const [bgRef, isBgInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const [contentRef, isContentInView] = useIsInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   const [imageRef, isImageInView] = useIsInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   const [statsRef, isStatsInView] = useIsInView({
//     threshold: 0.4,
//     triggerOnce: true,
//   });

//   const stats = [
//     { year: '2012', label: 'Founded' },
//     { value: '33+', label: 'Patents' },
//     { value: '31+', label: 'Projects' },
//   ];

//   return (
//     <Box
//       ref={bgRef}
//       sx={{
//         width: '100vw',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//         backgroundColor: '#F8F9FA',
//         overflow: 'hidden',
//       }}
//     >
//       {/* 배경 반원 1 - 왼쪽 메인 반원 (가장 먼저) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '45%',
//           left: '0',
//           width: '65%',
//           height: '60%',

//           borderRadius: '0 250px 250px 0',
//           background:
//             'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
//           backgroundColor: '#C0D5F0',
//           backdropFilter: 'blur(40px)',
//           opacity: isBgInView ? 1 : 0,
//           transform: isBgInView
//             ? 'translateY(-50%) translateX(0) scaleX(1)'
//             : 'translateY(-50%) translateX(-100px) scaleX(0.8)',
//           transformOrigin: 'left center',
//           transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
//           zIndex: 0,
//         }}
//       />

//       {/* 배경 반원 2 - 상단 작은 파란색 (두 번째) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 1,
//           top: '70px',
//           left: '0',
//           width: '50%',
//           height: '150px',

//           borderRadius: '0 250px 250px 0',
//           background:
//             'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
//           backgroundColor: '#C0D5F0',
//           backdropFilter: 'blur(40px)',
//           opacity: isBgInView ? 1 : 0,
//           transform: isBgInView
//             ? 'translateY(-50%) translateX(0) scaleX(1)'
//             : 'translateY(-50%) translateX(-100px) scaleX(0.8)',
//           transformOrigin: 'left center',
//           transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0s',
//         }}
//       />

//       {/* 배경 반원 3 - 하단 회색 (세 번째) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 1,
//           bottom: 0,
//           left: '0',
//           width: '80%',
//           height: '25%',
//           backgroundColor: '#f4f5f7',
//           borderRadius: '0 250px 250px 0',
//           overflow: 'hidden',
//           opacity: isBgInView ? 1 : 0,
//           transform: isBgInView
//             ? 'translateX(0) scaleX(1)'
//             : 'translateX(-100px) scaleX(0.8)',
//           transformOrigin: 'left bottom',
//           transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
//         }}
//       />

//       {/* 배경 반원 4 - 상단 회색 (네 번째) */}
//       <Box
//         sx={{
//           position: 'absolute',
//           zIndex: 2,
//           top: '-10%',
//           right: '0',
//           width: '100%',
//           height: '25%',
//           backgroundColor: '#f4f5f7',
//           borderRadius: '200px 0 0 250px',
//           overflow: 'hidden',
//           opacity: isBgInView ? 1 : 0,
//           transform: isBgInView
//             ? 'translateX(0) scaleX(1)'
//             : 'translateX(100px) scaleX(0.8)',
//           transformOrigin: 'right top',
//           transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
//         }}
//       />

//       {/* 배경 글로우 효과 */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '10%',
//           right: '5%',
//           width: '500px',
//           height: '500px',
//           background:
//             'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
//           filter: 'blur(100px)',
//           zIndex: 0,
//           opacity: isBgInView ? 1 : 0,
//           transition: 'opacity 2s ease-out 0.8s',
//         }}
//       />

//       {/* 메인 컨테이너 */}
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '1600px',
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           position: 'relative',
//           padding: { xs: '80px 20px 40px', md: '80px 60px 60px' },
//           gap: { xs: 4, md: 0 },
//           zIndex: 2,
//         }}
//       >
//         {/* 왼쪽: 텍스트 섹션 */}
//         <Box
//           ref={contentRef}
//           sx={{
//             flex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             paddingLeft: { xs: 0, md: '80px' },
//             zIndex: 2,
//           }}
//         >
//           {/* 라벨 */}
//           <Typography
//             sx={{
//               fontSize: '0.875rem',
//               fontWeight: 800,
//               color: '#1E40AF',
//               letterSpacing: '0.3em',
//               marginBottom: 2,
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView
//                 ? 'translate3d(0, 0, 0)'
//                 : 'translate3d(-20px, 10px, 0)',
//               filter: isContentInView ? 'blur(0px)' : 'blur(4px)',
//               transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s',
//             }}
//           >
//             DISCOVER OUR STORY
//           </Typography>

//           {/* 메인 제목 */}
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
//               fontWeight: 800,
//               color: '#1a1a1a',
//               lineHeight: 1.1,
//               marginBottom: 4,
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView
//                 ? 'translate3d(0, 0, 0)'
//                 : 'translate3d(-30px, 20px, 0)',
//               filter: isContentInView ? 'blur(0px)' : 'blur(6px)',
//               transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.1s',
//             }}
//           >
//             {transitionContent.text === 'ABOUT'
//               ? '혁신을 넘어\n미래를 설계합니다'
//               : transitionContent.text}
//           </Typography>

//           {/* 설명 텍스트 */}
//           <Box sx={{ marginBottom: 5 }}>
//             {transitionContent.description.map((text, index) => (
//               <Typography
//                 key={index}
//                 sx={{
//                   fontSize: '1.125rem',
//                   lineHeight: 1.8,
//                   color: '#555',
//                   marginBottom: 1,
//                   opacity: isContentInView ? 1 : 0,
//                   transform: isContentInView
//                     ? 'translate3d(0, 0, 0)'
//                     : 'translate3d(-20px, 15px, 0)',
//                   filter: isContentInView ? 'blur(0px)' : 'blur(3px)',
//                   transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${
//                     1.2 + index * 0.1
//                   }s`,
//                 }}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//           {/* CTA 링크 */}
//           <Box
//             sx={{
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView
//                 ? 'translate3d(0, 0, 0)'
//                 : 'translate3d(-20px, 15px, 0)',
//               filter: isContentInView ? 'blur(0px)' : 'blur(3px)',
//               transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s',
//               paddingTop: { xs: '10px', md: '20px' },
//             }}
//           >
//             <Box
//               component="a"
//               href="#"
//               sx={{
//                 position: 'relative',
//                 display: 'inline-block',
//                 fontSize: { xs: '0.95rem', md: '1.05rem' },
//                 fontWeight: 600,
//                 color: '#666',
//                 textDecoration: 'none',
//                 cursor: 'pointer',
//                 transition: 'color 0.3s ease',
//                 paddingBottom: '4px',

//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '2px',
//                   backgroundColor: '#999',
//                   transition: 'opacity 0.3s ease',
//                 },

//                 '&::after': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '2px',
//                   backgroundColor: '#1E40AF',
//                   transform: 'scaleX(0)',
//                   transformOrigin: 'left',
//                   transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                 },

//                 '&:hover': {
//                   color: '#1E40AF',
//                   '&::before': {
//                     opacity: 0,
//                   },
//                   '&::after': {
//                     transform: 'scaleX(1)',
//                   },
//                 },
//               }}
//             >
//               더 알아보기 →
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* 이미지 섹션 */}
//       <Box
//         ref={imageRef}
//         sx={{
//           position: 'absolute',
//           top: '45%',
//           right: 0,
//           transform: 'translateY(-50%)',
//           width: { xs: '50%', md: '40%', lg: '40%' },
//           height: { xs: '350px', md: '550px' },
//           zIndex: 1,
//         }}
//       >
//         {/* 메인 이미지 */}
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             borderRadius: '250px 0 0 250px',
//             overflow: 'hidden',
//             boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
//             opacity: isImageInView ? 1 : 0,
//             transform: isImageInView
//               ? 'translateX(0) scale(1)'
//               : 'translateX(100px) scale(0.95)',
//             filter: isImageInView ? 'blur(0px)' : 'blur(8px)',
//             transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
//           }}
//         >
//           <Box
//             component="img"
//             src={buildingImg}
//             alt="회사 건물"
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           />
//         </Box>

//         {/* 통계 카드 */}
//         <Box
//           ref={statsRef}
//           sx={{
//             position: 'absolute',
//             bottom: { xs: '3px', md: '-60px' },
//             right: { xs: '200px', md: '400px' },
//             width: { xs: '90%', md: 'auto' },
//             backgroundColor: 'rgba(255, 255, 255, 0.9)',
//             backdropFilter: 'blur(20px)',
//             border: '1px solid rgba(255, 255, 255, 0.5)',
//             borderRadius: '24px',
//             padding: { xs: '24px', md: '32px 48px' },
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
//             display: 'flex',
//             gap: { xs: 4, md: 6 },
//             zIndex: 10,
//             opacity: isStatsInView ? 1 : 0,
//             transform: isStatsInView
//               ? 'translate3d(0, 0, 0) scale(1)'
//               : 'translate3d(0, 40px, 0) scale(0.9)',
//             filter: isStatsInView ? 'blur(0px)' : 'blur(6px)',
//             transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.5s',
//           }}
//         >
//           {stats.map((stat, index) => (
//             <Box
//               key={index}
//               sx={{
//                 textAlign: 'center',
//                 opacity: isStatsInView ? 1 : 0,
//                 transform: isStatsInView ? 'translateY(0)' : 'translateY(10px)',
//                 transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
//                   1.6 + index * 0.1
//                 }s`,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: { xs: '1.75rem', md: '2.25rem' },
//                   fontWeight: 800,
//                   color: '#111827',
//                   lineHeight: 1,
//                 }}
//               >
//                 {stat.value || stat.year}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: '0.75rem',
//                   fontWeight: 600,
//                   color: '#6B7280',
//                   textTransform: 'uppercase',
//                   marginTop: 1,
//                   letterSpacing: '0.1em',
//                 }}
//               >
//                 {stat.label}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default TransitionSection;

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { transitionContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import buildingImg from '../assets/photo/buildingImg.jpeg';

function TransitionSection() {
  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [statsRef, isStatsInView] = useIsInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const stats = [
    { year: '2012', label: 'Founded' },
    { value: '33+', label: 'Patents' },
    { value: '31+', label: 'Projects' },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#F8F9FA',
        overflow: 'hidden',
      }}
    >
      {/* --- BACKGROUND ANIMATION SEQUENCE (챠라락 효과) --- */}

      {/* 1. 왼쪽 메인 반원 (가장 먼저 등장) */}
      <Box
        sx={{
          position: 'absolute',
          top: '46%',
          left: '0',
          width: '65%',
          height: '62%',
          transform: isContentInView
            ? 'translateY(-50%) translateX(0)'
            : 'translateY(-50%) translateX(-100%)',
          borderRadius: '0 250px 250px 0',
          background:
            'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
          backgroundColor: '#C2CEF5',
          backdropFilter: 'blur(40px)',
          opacity: isContentInView ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.1s', // 첫 번째
          zIndex: 0,
        }}
      />

      {/* 2. 상단 오른쪽 도형 (두 번째) 회색 */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          top: '0',
          right: '0',
          width: '100%',
          height: '140px',
          backgroundColor: '#ECF4F9',
          borderRadius: '250px 0 0 250px',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateX(0)' : 'translateX(100px)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.3s', // 두 번째
        }}
      />

      {/* 3. 상단 왼쪽 파란색 작은 반원 (세 번째) */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: '65px',
          left: '0',
          width: '50%',
          height: '130px',
          borderRadius: ' 0 250px 250px 0',
          background:
            'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(162, 172, 184, 0.03) 100%)',
          backgroundColor: '#18338C',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.5s', // 세 번째
        }}
      />

      {/* 4. 하단 배경 장식 (네 번째) 회색 */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
          left: '0',
          width: '80%',
          height: '23%',
          backgroundColor: '#ECF4F9',
          borderRadius: '0 250px 250px 0',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.7s', // 네 번째
        }}
      />

      {/* 5. 보조 블루 글로우 (배경 레이어 마무리) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
          opacity: isContentInView ? 1 : 0,
          transition: 'opacity 2s ease 1s',
        }}
      />

      {/* --- CONTENT LAYER --- */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1600px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          padding: { xs: '80px 20px 40px', md: '80px 60px 60px' },
          zIndex: 2,
        }}
      >
        {/* 왼쪽: 텍스트 섹션 */}
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { xs: 0, md: '80px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#1E40AF',
              letterSpacing: '0.3em',
              mb: 2,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 1.2s', // 배경이 나온 뒤 등장
            }}
          >
            DISCOVER OUR STORY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.1,
              mb: 4,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 1.4s',
            }}
          >
            {transitionContent.text === 'ABOUT'
              ? '혁신을 넘어\n미래를 설계합니다'
              : transitionContent.text}
          </Typography>

          <Box sx={{ mb: 5 }}>
            {transitionContent.description.map((text, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 1,
                  opacity: isContentInView ? 1 : 0,
                  transform: isContentInView
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                  transition: `all 0.8s ease ${1.6 + index * 0.1}s`,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 2s',
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                position: 'relative',
                display: 'inline-block',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#666',
                textDecoration: 'none',
                paddingBottom: '4px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#1E40AF',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                },
                '&:hover': {
                  color: '#1E40AF',
                  '&::after': { transform: 'scaleX(1)' },
                },
              }}
            >
              더 알아보기 →
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 이미지 섹션 */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          right: 0,
          transform: 'translateY(-50%)',
          width: { xs: '50%', md: '40%', lg: '40%' },
          height: { xs: '350px', md: '555px' },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '250px 0 0 250px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
            opacity: isContentInView ? 1 : 0,
            transform: isContentInView ? 'translateX(0)' : 'translateX(100px)',
            transition: 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s', // 배경 작업 중반부에 등장
          }}
        >
          <Box
            component="img"
            src={buildingImg}
            alt="회사 건물"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* 통계 카드 (가장 마지막에 등장하여 정점) */}
        <Box
          ref={statsRef}
          sx={{
            position: 'absolute',
            bottom: { xs: '3px', md: '-60px' },
            right: { xs: '200px', md: '400px' },
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: { xs: '24px', md: '32px 48px' },
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: { xs: 4, md: 6 },
            zIndex: 10,
            opacity: isStatsInView ? 1 : 0,
            transform: isStatsInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 2.2s', // 모든 요소 중 가장 늦게 등장
          }}
        >
          {stats.map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 800,
                }}
              >
                {stat.value || stat.year}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TransitionSection;
