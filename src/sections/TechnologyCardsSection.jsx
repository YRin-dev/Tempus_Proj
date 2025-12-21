// // import React, { forwardRef, useEffect } from 'react';
// // import { Box, Typography, Button, Grid } from '@mui/material';
// // import { technologyContent } from '../data/contentData';
// // import useIsInView from '../hooks/useIsInView';
// // import { useBackground } from '../context/BackgroundContext';

// // /**
// //  * TechnologyCardsSection 컴포넌트
// //  *
// //  * 3개의 기술 카드를 표시하는 섹션입니다.
// //  * TechnologySection 다음에 나타나는 컴포넌트입니다.
// //  * - useBackground를 사용하여 섹션이 10%만 보여도 lightgray 배경색으로 전환
// //  *
// //  * Props:
// //  * @param {React.Ref} ref - 섹션 ref [Optional]
// //  *
// //  * Example usage:
// //  * <TechnologyCardsSection ref={technologyCardsSectionRef} />
// //  */
// // const TechnologyCardsSection = forwardRef((props, ref) => {
// //   const { updateBackgroundMode } = useBackground();

// //   // 배경색 등록용 useIsInView - 섹션이 10%만 보여도 배경색 전환
// //   const [sectionBgRef, isInView] = useIsInView({
// //     threshold: 0.4,
// //     triggerOnce: false,
// //   });
// //   useEffect(() => {
// //     console.log('🔍 TransitionSection isInView changed:', isInView);
// //     if (isInView) {
// //       updateBackgroundMode('lightgray');
// //     }
// //   }, [isInView, updateBackgroundMode]);

// //   return (
// //     <Box
// //       ref={(node) => {
// //         // forwardRef와 useIsInView ref 병합
// //         if (typeof ref === 'function') {
// //           ref(node);
// //         } else if (ref) {
// //           ref.current = node;
// //         }
// //         sectionBgRef.current = node;
// //       }}
// //       sx={{
// //         width: '100%',
// //         minHeight: '100vh',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         padding: { xs: '40px 20px', md: '80px 40px' },
// //         // backgroundColor: '#F3F4F6',
// //         position: 'relative',
// //       }}
// //     >
// //       {/* 3개의 기술 카드 */}
// //       <Grid
// //         container
// //         spacing={4}
// //         sx={{
// //           maxWidth: '1200px',
// //           margin: '0 auto',
// //           position: 'relative',
// //           zIndex: 1,
// //         }}
// //       >
// //         {technologyContent.cards.map((card) => (
// //           <Grid key={card.id} size={{ xs: 12, md: 4 }}>
// //             <Box
// //               sx={{
// //                 backgroundColor: '#ffffff',
// //                 borderRadius: 2,
// //                 padding: 4,
// //                 height: '100%',
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 gap: 2,
// //                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// //                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// //                 '&:hover': {
// //                   transform: 'translateY(-8px)',
// //                   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
// //                 },
// //               }}
// //             >
// //               {/* 이미지 */}
// //               <Box
// //                 sx={{
// //                   width: '100%',
// //                   paddingTop: '75%',
// //                   position: 'relative',
// //                   borderRadius: 1,
// //                   overflow: 'hidden',
// //                   backgroundColor: '#F3F4F6',
// //                 }}
// //               >
// //                 <Box
// //                   component="img"
// //                   src={card.photo}
// //                   alt={card.title}
// //                   sx={{
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                     width: '100%',
// //                     height: '100%',
// //                     objectFit: 'cover',
// //                   }}
// //                 />
// //               </Box>

// //               {/* 제목 */}
// //               <Typography
// //                 variant="h5"
// //                 sx={{
// //                   fontSize: { xs: '1.25rem', md: '1.5rem' },
// //                   fontWeight: 600,
// //                   color: '#111827',
// //                 }}
// //               >
// //                 {card.title}
// //               </Typography>

// //               {/* 설명 */}
// //               <Typography
// //                 variant="body2"
// //                 sx={{
// //                   fontSize: { xs: '0.875rem', md: '1rem' },
// //                   fontWeight: 400,
// //                   color: '#111827',
// //                   opacity: 0.8,
// //                   flex: 1,
// //                 }}
// //               >
// //                 {card.description}
// //               </Typography>

// //               {/* 디테일 페이지로 가는 버튼 */}
// //               <Button
// //                 variant="outlined"
// //                 sx={{
// //                   borderColor: '#111827',
// //                   color: '#111827',
// //                   padding: '10px 24px',
// //                   fontSize: '0.875rem',
// //                   fontWeight: 500,
// //                   borderRadius: 0,
// //                   textTransform: 'none',
// //                   marginTop: 'auto',
// //                   '&:hover': {
// //                     borderColor: '#111827',
// //                     backgroundColor: '#111827',
// //                     color: '#ffffff',
// //                   },
// //                 }}
// //               >
// //                 자세히 보기
// //               </Button>
// //             </Box>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // });

// // TechnologyCardsSection.displayName = 'TechnologyCardsSection';

// // export default TechnologyCardsSection;

import React, { forwardRef, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { technologyContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * TechnologyCardsSection 컴포넌트
 *
 * 3개의 기술 카드를 표시하는 섹션입니다.
 * 현대적이고 감각적인 디자인으로 회사의 핵심 기술을 소개합니다.
 * - 대형 "TECHNOLOGY" 배경 텍스트
 * - 3개의 카드를 수평 배치
 * - 각 카드에 hover 효과와 상세 페이지 이동 버튼
 * - useIsInView로 순차적인 애니메이션
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <TechnologyCardsSection ref={technologyCardsSectionRef} />
 */
const TechnologyCardsSection = forwardRef((props, ref) => {
  const { updateBackgroundMode } = useBackground();

  // 배경색 전환용
  const [sectionBgRef, isInView] = useIsInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 애니메이션용
  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isInView) {
      updateBackgroundMode('lightgray');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <Box
      ref={(node) => {
        // forwardRef와 useIsInView ref 병합
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionBgRef.current = node;
      }}
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '80px 20px 60px', md: '120px 40px 80px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 헤더 섹션 */}
      <Box
        ref={contentRef}
        sx={{
          width: '100%',
          maxWidth: '1400px',
          marginBottom: { xs: 6, md: 10 },
          position: 'relative',
        }}
      >
        {/* 배경 텍스트 - TECHNOLOGY */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '8rem', lg: '10rem' },
            fontWeight: 900,
            lineHeight: 0.9,
            color: 'rgba(0, 0, 0, 0.04)',
            letterSpacing: '-0.03em',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            marginBottom: 2,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          TECHNOLOGY
        </Typography>

        {/* 서브 헤딩 */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            marginTop: { xs: -4, md: -6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: '#666',
              textTransform: 'uppercase',
              marginBottom: 2,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            Our Core Technologies
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#1a1a1a',
              marginBottom: 2,
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            혁신을 만드는 핵심 기술
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.8,
              color: '#4a4a4a',
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            최첨단 기술로 산업의 미래를 선도합니다
          </Typography>
        </Box>
      </Box>

      {/* 카드 그리드 */}
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {technologyContent.cards.map((card, index) => (
          <Grid key={card.id} item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                opacity: isContentInView ? 1 : 0,
                transform: isContentInView
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transitionDelay: `${0.6 + index * 0.15}s`,
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  '& .card-image': {
                    transform: 'scale(1.08)',
                  },
                  '& .card-button': {
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                    '& .arrow-icon': {
                      transform: 'translateX(4px)',
                    },
                  },
                },
              }}
            >
              {/* 이미지 */}
              <Box
                sx={{
                  width: '100%',
                  paddingTop: '65%',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                }}
              >
                <Box
                  component="img"
                  src={card.photo}
                  alt={card.title}
                  className="card-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />

                {/* 이미지 오버레이 */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }}
                />
              </Box>

              {/* 카드 콘텐츠 */}
              <Box
                sx={{
                  padding: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                {/* 카드 번호 */}
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#999',
                    marginBottom: 1.5,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Typography>

                {/* 제목 */}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.35rem', md: '1.5rem' },
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 2,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </Typography>

                {/* 설명 */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontWeight: 400,
                    color: '#4a4a4a',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 3,
                  }}
                >
                  {card.description}
                </Typography>

                {/* 버튼 */}
                <Button
                  className="card-button"
                  variant="text"
                  endIcon={
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{
                        fontSize: '1.25rem',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    padding: '12px 20px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    textTransform: 'none',
                    borderRadius: '8px',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#1a1a1a',
                      borderColor: '#1a1a1a',
                    },
                  }}
                >
                  자세히 보기
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 하단 장식 라인 */}
      <Box
        sx={{
          width: '80px',
          height: '3px',
          backgroundColor: '#1a1a1a',
          margin: '80px auto 0',
          opacity: isContentInView ? 0.3 : 0,
          transform: isContentInView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'all 1s ease-out 1.2s',
        }}
      />
    </Box>
  );
});

TechnologyCardsSection.displayName = 'TechnologyCardsSection';

export default TechnologyCardsSection;

// import React, { forwardRef, useEffect } from 'react';
// import { Box, Typography, Button, Grid, Chip } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { technologyContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import { useBackground } from '../context/BackgroundContext';

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
//       {/* 헤더 섹션 - Recognition Rather Than Recall */}
//       <Box
//         ref={contentRef}
//         sx={{
//           width: '100%',
//           maxWidth: '1400px',
//           marginBottom: { xs: 5, md: 8 },
//           textAlign: { xs: 'center', md: 'left' },
//           paddingX: { xs: 2, md: 0 },
//         }}
//       >
//         {/* 상태 표시 칩 - Visibility of System Status */}
//         <Chip
//           icon={<CheckCircleOutlineIcon sx={{ fontSize: '1rem' }} />}
//           label="핵심 기술 3가지"
//           sx={{
//             marginBottom: 3,
//             backgroundColor: '#1a1a1a',
//             color: '#ffffff',
//             fontWeight: 600,
//             fontSize: '0.875rem',
//             height: '36px',
//             opacity: isContentInView ? 1 : 0,
//             transform: isContentInView ? 'translateY(0)' : 'translateY(-10px)',
//             transition: 'all 0.6s ease-out',
//             '& .MuiChip-icon': {
//               color: '#ffffff',
//             },
//           }}
//         />

//         {/* 메인 헤딩 - Clear Hierarchy */}
//         <Typography
//           variant="h1"
//           sx={{
//             fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
//             fontWeight: 800,
//             lineHeight: 1.1,
//             color: '#1a1a1a',
//             marginBottom: 2,
//             opacity: isContentInView ? 1 : 0,
//             transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'all 0.7s ease-out 0.1s',
//           }}
//         >
//           Our Technology
//         </Typography>

//         {/* 설명 - Clear Information Architecture */}
//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: { xs: '1.05rem', md: '1.2rem' },
//             lineHeight: 1.7,
//             color: '#4a4a4a',
//             maxWidth: '700px',
//             marginX: { xs: 'auto', md: 0 },
//             opacity: isContentInView ? 1 : 0,
//             transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'all 0.7s ease-out 0.2s',
//           }}
//         >
//           첨단 기술력으로 산업의 혁신을 이끌어갑니다. 각 기술의 상세 정보를
//           확인하고 더 알아보세요.
//         </Typography>
//       </Box>

//       {/* 카드 그리드 - Consistency and Standards */}
//       <Grid
//         container
//         spacing={{ xs: 2.5, sm: 3, md: 4 }}
//         sx={{
//           maxWidth: '1400px',
//           margin: '0 auto',
//           width: '100%',
//         }}
//       >
//         {technologyContent.cards.map((card, index) => (
//           <Grid key={card.id} item xs={12} sm={6} md={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#ffffff',
//                 borderRadius: '20px',
//                 overflow: 'hidden',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                 border: '1px solid rgba(0, 0, 0, 0.06)',
//                 boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
//                 opacity: isContentInView ? 1 : 0,
//                 transform: isContentInView
//                   ? 'translateY(0)'
//                   : 'translateY(30px)',
//                 transitionDelay: `${0.4 + index * 0.1}s`,
//                 // User Control - 명확한 hover 피드백
//                 '&:hover': {
//                   transform: 'translateY(-8px)',
//                   boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
//                   borderColor: '#1a1a1a',
//                   '& .card-image': {
//                     transform: 'scale(1.05)',
//                   },
//                   '& .card-overlay': {
//                     opacity: 0.6,
//                   },
//                   '& .card-cta': {
//                     backgroundColor: '#1a1a1a',
//                     color: '#ffffff',
//                     transform: 'translateX(4px)',
//                   },
//                   '& .feature-item': {
//                     transform: 'translateX(4px)',
//                   },
//                 },
//               }}
//             >
//               {/* 이미지 섹션 - Visual Hierarchy */}
//               <Box
//                 sx={{
//                   position: 'relative',
//                   width: '100%',
//                   paddingTop: '60%',
//                   overflow: 'hidden',
//                   backgroundColor: '#f8f9fa',
//                 }}
//               >
//                 {/* 카드 번호 배지 - Recognition */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 16,
//                     left: 16,
//                     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//                     backdropFilter: 'blur(10px)',
//                     borderRadius: '12px',
//                     padding: '6px 14px',
//                     zIndex: 2,
//                     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: '0.875rem',
//                       fontWeight: 700,
//                       color: '#1a1a1a',
//                       letterSpacing: '0.05em',
//                     }}
//                   >
//                     {String(index + 1).padStart(2, '0')}
//                   </Typography>
//                 </Box>

//                 <Box
//                   component="img"
//                   src={card.photo}
//                   alt={card.title}
//                   className="card-image"
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
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
//                   padding: { xs: 3, sm: 3.5, md: 4 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   flex: 1,
//                   gap: 2,
//                 }}
//               >
//                 {/* 제목 - Clear Labeling */}
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontSize: { xs: '1.4rem', md: '1.55rem' },
//                     fontWeight: 700,
//                     color: '#1a1a1a',
//                     lineHeight: 1.3,
//                     marginBottom: 1,
//                   }}
//                 >
//                   {card.title}
//                 </Typography>

//                 {/* 설명 - Readability */}
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: { xs: '0.95rem', md: '1rem' },
//                     lineHeight: 1.65,
//                     color: '#5a5a5a',
//                     flex: 1,
//                     marginBottom: 2,
//                   }}
//                 >
//                   {card.description}
//                 </Typography>

//                 {/* 구분선 - Visual Separation */}
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: '1px',
//                     backgroundColor: 'rgba(0, 0, 0, 0.08)',
//                     marginY: 1,
//                   }}
//                 />

//                 {/* CTA 버튼 - Clear Action */}
//                 <Button
//                   className="card-cta"
//                   variant="text"
//                   endIcon={
//                     <ArrowForwardIcon
//                       sx={{
//                         fontSize: '1.1rem',
//                         transition: 'transform 0.3s ease',
//                       }}
//                     />
//                   }
//                   sx={{
//                     padding: '14px 24px',
//                     fontSize: '0.95rem',
//                     fontWeight: 600,
//                     color: '#1a1a1a',
//                     textTransform: 'none',
//                     borderRadius: '12px',
//                     justifyContent: 'space-between',
//                     backgroundColor: 'rgba(0, 0, 0, 0.03)',
//                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                     '&:hover': {
//                       backgroundColor: '#1a1a1a',
//                     },
//                   }}
//                   // Accessibility - 명확한 aria-label
//                   aria-label={`${card.title} 자세히 보기`}
//                 >
//                   자세히 보기
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Footer CTA - Help and Documentation */}
//       <Box
//         sx={{
//           marginTop: { xs: 6, md: 10 },
//           textAlign: 'center',
//           opacity: isContentInView ? 1 : 0,
//           transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
//           transition: 'all 0.8s ease-out 1s',
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             fontSize: '0.95rem',
//             color: '#666',
//             marginBottom: 2,
//           }}
//         >
//           더 궁금한 내용이 있으신가요?
//         </Typography>
//         <Button
//           variant="outlined"
//           sx={{
//             borderColor: '#1a1a1a',
//             color: '#1a1a1a',
//             padding: '12px 32px',
//             fontSize: '1rem',
//             fontWeight: 600,
//             borderRadius: '10px',
//             textTransform: 'none',
//             borderWidth: '2px',
//             '&:hover': {
//               borderWidth: '2px',
//               borderColor: '#1a1a1a',
//               backgroundColor: 'rgba(26, 26, 26, 0.04)',
//             },
//           }}
//         >
//           전체 기술 문서 보기
//         </Button>
//       </Box>
//     </Box>
//   );
// });

// TechnologyCardsSection.displayName = 'TechnologyCardsSection';

// export default TechnologyCardsSection;
