// import React, { forwardRef, useEffect } from 'react';
// import { Box, Typography, Button, Grid, Chip } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { technologyContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';

// import microThermopileImg from '../assets/photo/micro-thermopile.png';
// import noseImg from '../assets/photo/nose.png';
// import eyeImg from '../assets/photo/eye.png';
// /**
//  * TechnologyCardsSection 컴포넌트 (Heuristic UX 버전)
//  *
//  * 휴리스틱 원칙에 기반한 사용성 개선:
//  * 1. Visibility of System Status - 카드 상태 명확히 표시
//  * 2. Recognition Rather Than Recall - 아이콘과 라벨로 직관적 인식
//  * 3. Aesthetic and Minimalist Design - 핵심 정보 위주
//  * 4. Consistency and Standards - 일관된 패턴과 계층 구조
//  * 5. User Control and Freedom - 명확한 액션 버튼
//  * 6. Flexibility and Efficiency - 반응형 디자인
//  *
//  * Props:
//  * @param {React.Ref} ref - 섹션 ref [Optional]
//  */
// const TechnologyCardsSection = forwardRef((props, ref) => {
//   const { updateBackgroundMode } = useBackground();

//   const [sectionBgRef, isInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   const [contentRef, isContentInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (isInView) {
//       updateBackgroundMode('lightgray');
//     }
//   }, [isInView, updateBackgroundMode]);

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
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: {
//           xs: '60px 16px 40px',
//           sm: '80px 24px 60px',
//           md: '100px 40px 80px',
//         },
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* 메인 컨테이너 - 왼쪽 Description, 오른쪽 카드들 */}
//       <Box
//         ref={contentRef}
//         sx={{
//           width: '100%',
//           maxWidth: '1400px',
//           display: 'flex',
//           flexDirection: { xs: 'column', md: 'row' },
//           gap: { xs: 5, md: 6, lg: 8 },
//           alignItems: { xs: 'center', md: 'flex-start' },
//           position: 'relative',
//         }}
//       >
//         {/* 왼쪽: Description 섹션 */}
//         <Box
//           sx={{
//             flex: { xs: '1', md: '0 0 40%' },
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             paddingRight: { xs: 0, md: 4 },
//             paddingTop: { xs: '50px', md: '100px' },
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           {/* 메인 헤딩 - Clear Hierarchy */}
//           <Typography
//             variant="h1"
//             sx={{
//               fontSize: {
//                 xs: '2.5rem',
//                 sm: '3.5rem',
//                 md: '3.5rem',
//                 lg: '4rem',
//               },
//               fontWeight: 800,
//               lineHeight: 1.1,
//               color: '#1a1a1a',
//               letterSpacing: '-0.02em',
//               fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
//               marginBottom: 3,
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'all 0.7s ease-out 0.1s',
//             }}
//           >
//             Technology
//           </Typography>

//           {/* 설명 - Clear Information Architecture */}
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: { xs: '1.05rem', md: '1.1rem', lg: '1.2rem' },
//               lineHeight: 1.8,
//               color: '#4a4a4a',
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'all 0.7s ease-out 0.2s',
//             }}
//           >
//             독자적 Micro-thermopile 기반 MEMS 센서 기술 마이크로
//             전자기계시스템(MEMS) 기술을 활용한 초소형, 고성능 멀티채널센서를
//             제공합니다. 자체 개발 원천기술에 기반하여 고객 요구에 맞춤형으로
//             대응합니다.
//           </Typography>

//           {/* Footer CTA - Help and Documentation */}
//           <Box
//             sx={{
//               marginTop: { xs: 6, md: 10 },
//               textAlign: 'center',
//               opacity: isContentInView ? 1 : 0,
//               transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//               transition: 'all 0.8s ease-out 1s',

//               position: 'absolute',
//               left: '11%',
//               bottom: 0,
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{
//                 fontSize: '0.95rem',
//                 color: '#666',
//                 marginBottom: 2,
//               }}
//             >
//               더 궁금한 내용이 있으신가요?
//             </Typography>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: '#1E40AF',
//                 color: '#1E40AF',
//                 padding: '12px 32px',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 borderRadius: '10px',
//                 textTransform: 'none',
//                 borderWidth: '2px',
//                 '&:hover': {
//                   borderWidth: '2px',
//                   borderColor: '#1E40AF',
//                   backgroundColor: 'rgba(30, 64, 175, 0.04)',
//                 },
//               }}
//             >
//               전체 기술 문서 보기
//             </Button>
//           </Box>
//         </Box>

//         {/* 오른쪽: 카드 섹션 */}
//         <Box
//           sx={{
//             flex: { xs: '1', md: '0 0 60%' },
//             display: 'flex',
//             flexDirection: 'column',
//             gap: { xs: 3, md: 4 },
//             width: '100%',
//           }}
//         >
//           {technologyContent.cards.map((card, index) => (
//             <Box
//               key={card.id}
//               sx={{
//                 backgroundColor: '#ffffff',
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                 border: '1px solid rgba(0, 0, 0, 0.06)',
//                 boxShadow: '22px 22px 29px rgba(87, 78, 241, 0.06)',
//                 opacity: isContentInView ? 1 : 0,
//                 transform: isContentInView
//                   ? 'translateX(0)'
//                   : 'translateX(60px)',
//                 transitionDelay: `${0.3 + index * 0.1}s`,
//                 height: { xs: 'auto', md: '210px' },
//                 // User Control - 명확한 hover 피드백
//                 '&:hover': {
//                   transform: 'translateY(-8px)',
//                   boxShadow: '22px 22px 40px rgba(87, 78, 241, 0.2)',
//                   '& .card-image': {
//                     transform: 'scale(1.05)',
//                   },
//                   '& .card-overlay': {
//                     opacity: 0.6,
//                   },
//                   '& .card-cta': {
//                     backgroundColor: '#1E40AF',
//                     color: '#ffffff',
//                     transform: 'translateX(4px)',
//                   },
//                 },
//               }}
//             >
//               {/* 이미지 섹션 - Visual Hierarchy */}
//               <Box
//                 sx={{
//                   position: 'relative',
//                   width: { xs: '100%', md: '240px' },
//                   minHeight: { xs: '200px', md: 'auto' },
//                   flexShrink: 0,
//                   overflow: 'hidden',
//                   backgroundColor: '#f8f9fa',
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={
//                     index === 1
//                       ? noseImg
//                       : index === 2
//                       ? eyeImg
//                       : microThermopileImg
//                   }
//                   alt={card.title}
//                   className="card-image"
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//                   }}
//                 />

//                 {/* 오버레이 - Visual Feedback */}
//                 <Box
//                   className="card-overlay"
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background:
//                       'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4))',
//                     opacity: 0.4,
//                     transition: 'opacity 0.3s ease',
//                     pointerEvents: 'none',
//                   }}
//                 />
//               </Box>

//               {/* 콘텐츠 섹션 - Information Architecture */}
//               <Box
//                 sx={{
//                   padding: { xs: 3, md: 4 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   flex: 1,
//                 }}
//               >
//                 <Box>
//                   {/* 제목 - Clear Labeling */}
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       fontSize: { xs: '1.4rem', md: '1.5rem' },
//                       fontWeight: 700,
//                       color: '#1a1a1a',
//                       lineHeight: 1.3,
//                       marginBottom: 1.5,
//                     }}
//                   >
//                     {card.title}
//                   </Typography>

//                   {/* 설명 - Readability */}
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       fontSize: { xs: '0.95rem', md: '1rem' },
//                       lineHeight: 1.6,
//                       color: '#5a5a5a',
//                     }}
//                   >
//                     {card.description}
//                   </Typography>
//                 </Box>

//                 {/* CTA 버튼 - Clear Action */}
//                 <Button
//                   className="card-cta"
//                   variant="text"
//                   endIcon={
//                     <ArrowForwardIcon
//                       sx={{
//                         fontSize: '1rem',
//                         transition: 'transform 0.3s ease',
//                       }}
//                     />
//                   }
//                   sx={{
//                     padding: '12px 24px',
//                     fontSize: '0.95rem',
//                     fontWeight: 600,
//                     color: '#1E40AF',
//                     textTransform: 'none',
//                     borderRadius: '10px',
//                     justifyContent: 'flex-start',
//                     backgroundColor: 'rgba(0, 0, 0, 0.03)',
//                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                     alignSelf: 'flex-start',
//                     marginTop: 2,
//                     '&:hover': {
//                       backgroundColor: '#1E40AF',
//                     },
//                   }}
//                   // Accessibility - 명확한 aria-label
//                   aria-label={`${card.title} 자세히 보기`}
//                 >
//                   자세히 보기
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// });

// TechnologyCardsSection.displayName = 'TechnologyCardsSection';

// export default TechnologyCardsSection;

import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import useIsInView from '../hooks/useIsInView';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'; // FAB/원천기술
import AirIcon from '@mui/icons-material/Air'; // 가스센서 (코)
import VisibilityIcon from '@mui/icons-material/Visibility'; // 영상센서 (눈)
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TechnologyCardsSection() {
  const [headerRef, isHeaderInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const techData = [
    {
      id: '01',
      title: 'Micro-thermopile 원천기술',
      subtitle: 'Original Technology',
      desc: 'in-house MEMS FAB를 통한 독자적인 설계 및 공정 기술로 고성능 센서의 안정적 생산 체계를 구축했습니다.',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
      color: '#1E40AF',
    },
    {
      id: '02',
      title: '코: NDIR/TCD 가스 센서',
      subtitle: 'Robot Olfaction',
      desc: '로봇의 후각 기능을 구현하는 비접촉 가스센서로, 대기 중 미세 농도 변화를 정밀하게 감지합니다.',
      icon: <AirIcon sx={{ fontSize: 40 }} />,
      color: '#3B82F6',
    },
    {
      id: '03',
      title: '눈: SWIR/FIR 적외선영상센서',
      subtitle: 'Robot Vision',
      desc: '로봇의 시각 기능을 구현하는 수분/열영상센서로, 가시광선 너머의 정보를 시각화하여 분석합니다.',
      icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
      color: '#60A5FA',
    },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#F8F9FA',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 12, md: 15 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* --- 배경 데코레이션 (하이테크 디테일) --- */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(30, 64, 175, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* 섹션 헤더 */}
        <Box ref={headerRef} sx={{ mb: { xs: 8, md: 12 }, maxWidth: '800px' }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#1E40AF',
              letterSpacing: '0.4em',
              mb: 2,
              opacity: isHeaderInView ? 1 : 0,
              transition: 'all 0.8s ease',
            }}
          >
            CORE TECHNOLOGY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 900,
              color: '#1a1a1a',
              mb: 4,
              lineHeight: 1.2,
              opacity: isHeaderInView ? 1 : 0,
              transform: isHeaderInView ? 'none' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            독자적 Micro-thermopile 기반
            <br />
            MEMS 센서 솔루션
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: 1.8,
              wordBreak: 'keep-all',
              opacity: isHeaderInView ? 1 : 0,
              transition: 'all 0.8s ease 0.4s',
            }}
          >
            마이크로 전자기계시스템(MEMS) 기술을 활용한 초소형, 고성능
            멀티채널센서를 제공합니다. 자체 개발 원천기술에 기반하여 고객 요구에
            맞춤형으로 대응합니다.
          </Typography>
        </Box>

        {/* 기술 카드 리스트 */}
        <Grid container spacing={4} ref={contentRef}>
          {techData.map((tech, index) => (
            <Grid item xs={12} md={4} key={tech.id}>
              <Box
                sx={{
                  height: '100%',
                  padding: '50px 40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '32px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isContentInView ? 1 : 0,
                  transform: isContentInView
                    ? 'translateY(0)'
                    : 'translateY(50px)',
                  transitionDelay: `${index * 0.2}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 40px 80px rgba(30, 64, 175, 0.1)',
                    '& .icon-box': {
                      backgroundColor: tech.color,
                      color: '#fff',
                    },
                    '& .arrow-icon': { transform: 'translateX(5px)' },
                  },
                }}
              >
                {/* 아이콘 박스 */}
                <Box
                  className="icon-box"
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    color: tech.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    mb: 4,
                    transition: 'all 0.4s ease',
                  }}
                >
                  {tech.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: tech.color,
                    mb: 1,
                    letterSpacing: '0.1em',
                  }}
                >
                  {tech.subtitle}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, color: '#1a1a1a', mb: 2 }}
                >
                  {tech.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: 1.7,
                    mb: 4,
                    flexGrow: 1,
                  }}
                >
                  {tech.desc}
                </Typography>

                {/* 상세 페이지 이동 버튼 */}
                <Box
                  component="button"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#1a1a1a',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: tech.color },
                  }}
                >
                  VIEW DETAILS
                  <ArrowForwardIcon
                    className="arrow-icon"
                    sx={{ fontSize: 18, transition: 'transform 0.3s ease' }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TechnologyCardsSection;
