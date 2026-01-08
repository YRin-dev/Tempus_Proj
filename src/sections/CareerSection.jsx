// import React, { forwardRef } from 'react';
// import { Box, Typography, Button, Container, Grid } from '@mui/material';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import {
//   contactContent,
//   qualityManagementCareerContent,
//   EngineeringCareerContent,
// } from '../data/contentData';

// const CareerSection = forwardRef((props, ref) => {
//   const [viewRef, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const careerPosts = [
//     qualityManagementCareerContent,
//     EngineeringCareerContent,
//   ];

//   const getAnimatedStyle = (delay) => ({
//     opacity: isInView ? 1 : 0,
//     transform: isInView ? 'translateY(0)' : 'translateY(40px)',
//     transition: `all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
//   });

//   return (
//     <FullPageSection ref={ref}>
//       <Box
//         ref={viewRef}
//         sx={{
//           width: '100%',
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           position: 'relative',
//           backgroundColor: '#F8FAFC',
//           overflow: 'hidden',
//           py: { xs: 10, md: 0 },
//         }}
//       >
//         {/* --- 배경 장식 도형 --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '60%',
//             left: '0',
//             width: '8%',
//             height: '140px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '0 250px 250px 0',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />

//         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//           {/* 1. 상단 타이틀 섹션 (중앙 정렬 유지) */}
//           <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2.5rem', md: '4rem' },
//                 fontWeight: 900,
//                 color: '#0F172A',
//                 lineHeight: 1.1,
//                 letterSpacing: '-0.03em',
//                 ...getAnimatedStyle(0.3),
//               }}
//             >
//               {contactContent.title[0]} <br />
//               <Box component="span" sx={{ color: '#3B82F6' }}>
//                 {contactContent.title[1]}
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: { xs: '1.1rem', md: '1.25rem' },

//                 color: '#64748B',

//                 lineHeight: 1.8,

//                 maxWidth: '700px',

//                 mx: 'auto',

//                 wordBreak: 'keep-all',
//                 marginTop: '20px',

//                 ...getAnimatedStyle(0.5),
//               }}
//             >
//               {contactContent.subtitle[0]} {contactContent.subtitle[1]}
//             </Typography>
//           </Box>

//           {/* 2. 하단 콘텐츠 섹션 (가로 한 줄 배치: 설명 + 카드1 + 카드2) */}
//           <Grid container spacing={3} alignItems="stretch">
//             {/* 왼쪽: 설명 문구 및 버튼 */}
//             <Grid item xs={12} lg={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   pr: { lg: 4 },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: '1.2rem',
//                     color: '#475569',
//                     lineHeight: 1.7,
//                     mb: 4,
//                     wordBreak: 'keep-all',
//                     fontWeight: 500,
//                     ...getAnimatedStyle(0.5),
//                   }}
//                 >
//                   혁신적인 기술로 세상을 연결하는 여정에 <br />
//                   여러분의 열정을 더해주세요.
//                 </Typography>

//                 <Box sx={getAnimatedStyle(0.6)}>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       borderColor: '#0F172A',
//                       color: '#0F172A',
//                       padding: '14px 36px',
//                       borderRadius: '100px',
//                       fontSize: '0.95rem',
//                       fontWeight: 700,
//                       borderWidth: '2px',
//                       transition: 'all 0.3s',
//                       '&:hover': {
//                         borderWidth: '2px',
//                         backgroundColor: '#0F172A',
//                         color: '#FFF',
//                       },
//                     }}
//                   >
//                     기업 문화 알아보기
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* 오른쪽: 카드들 (한 줄에 나란히) */}
//             {careerPosts.map((post, index) => (
//               <Grid item xs={12} md={6} lg={4} key={index}>
//                 <Box
//                   sx={{
//                     height: '100%',
//                     backgroundColor: 'rgba(255, 255, 255, 0.75)',
//                     backdropFilter: 'blur(12px)',
//                     borderRadius: '32px',
//                     padding: { xs: 4, md: 5 },
//                     border: '1px solid rgba(255, 255, 255, 0.5)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                     cursor: 'pointer',
//                     ...getAnimatedStyle(0.7 + index * 0.1),
//                     '&:hover': {
//                       backgroundColor: '#FFFFFF',
//                       transform: 'translateY(-15px)',
//                       boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
//                       '& .arrow-icon': {
//                         transform: 'translateX(5px)',
//                         color: '#3B82F6',
//                       },
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       mb: 3,
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         sx={{
//                           fontSize: '0.8rem',
//                           color: '#3B82F6',
//                           fontWeight: 800,
//                           mb: 1,
//                           textTransform: 'uppercase',
//                         }}
//                       >
//                         {post.subtitle[0]}
//                       </Typography>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 850,
//                           color: '#0F172A',
//                           fontSize: '1.5rem',
//                           lineHeight: 1.2,
//                         }}
//                       >
//                         {post.title[0]}
//                       </Typography>
//                     </Box>
//                     <ArrowForwardIosIcon
//                       className="arrow-icon"
//                       sx={{
//                         fontSize: 18,
//                         color: '#CBD5E1',
//                         mt: 1,
//                         transition: '0.3s',
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ flexGrow: 1, mb: 4 }}>
//                     {post.description.map((desc, i) => (
//                       <Typography
//                         key={i}
//                         sx={{
//                           color: '#475569',
//                           lineHeight: 1.6,
//                           fontSize: '0.95rem',
//                           mb: 0.5,
//                         }}
//                       >
//                         • {desc}
//                       </Typography>
//                     ))}
//                   </Box>

//                   <Typography
//                     sx={{
//                       fontWeight: 800,
//                       fontSize: '0.9rem',
//                       color: '#0F172A',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                     }}
//                   >
//                     DETAILS{' '}
//                     <Box component="span" sx={{ fontSize: '1.2rem' }}>
//                       →
//                     </Box>
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

//         {/* 배경 워터마크 */}
//         <Typography
//           sx={{
//             position: 'absolute',
//             bottom: '2%',
//             right: '2%',
//             fontSize: '12vw',
//             fontWeight: 900,
//             color: 'rgba(15, 23, 42, 0.02)',
//             zIndex: 0,
//             userSelect: 'none',
//           }}
//         >
//           JOIN US
//         </Typography>
//       </Box>
//     </FullPageSection>
//   );
// });

// CareerSection.displayName = 'CareerSection';

// export default CareerSection;

import React, { forwardRef } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import FullPageSection from '../components/commons/container/FullPageSection';
import useIsInView from '../hooks/useIsInView';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  contactContent,
  qualityManagementCareerContent,
  EngineeringCareerContent,
} from '../data/contentData';

const CareerSection = forwardRef((props, ref) => {
  const [viewRef, isInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const careerPosts = [
    qualityManagementCareerContent,
    EngineeringCareerContent,
  ];

  const getAnimatedStyle = (delay) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
  });

  return (
    <FullPageSection ref={ref}>
      <Box
        ref={viewRef}
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#F8FAFC',
          overflow: 'hidden',
          py: { xs: 10, md: 0 },
        }}
      >
        {/* --- 배경 장식 도형 top --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '13%',
            right: '550px',
            width: '600px',
            height: '300px',
            backgroundColor: '#ECF4F9',
            borderRadius: '20px 250px 20px 250px',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '0.3s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '13%',
            right: '150px',
            width: '340px',
            height: '280px',
            backgroundColor: '#ECF4F9',
            borderRadius: '250px 20px 250px 20px',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '0.3s',
          }}
        />

        {/* --- 배경 장식 도형 --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '50%',
            left: '200px',
            width: '340px',
            height: '280px',
            backgroundColor: '#FAF6E8',
            borderRadius: '20px 20px 20px 150px',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '0.3s',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          {/* 1. 상단 타이틀 섹션 (중앙 정렬 유지) */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                ...getAnimatedStyle(0.3),
              }}
            >
              {contactContent.title[0]} <br />
              <Box component="span" sx={{ color: '#3B82F6' }}>
                {contactContent.title[1]}
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: '#64748B',
                lineHeight: 1.8,
                maxWidth: '700px',
                mx: 'auto',
                wordBreak: 'keep-all',
                marginTop: '20px',
                ...getAnimatedStyle(0.5),
              }}
            >
              {contactContent.subtitle[0]} {contactContent.subtitle[1]}
            </Typography>
          </Box>

          {/* 2. 하단 콘텐츠 섹션 (가로 한 줄 배치: 설명 + 카드1 + 카드2) - justifyContent="center" 추가 */}
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justifyContent="center"
          >
            {/* 왼쪽: 설명 문구 및 버튼 */}
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: { lg: 2 }, // 양옆 균형을 위해 padding 조정
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    mb: 4,
                    wordBreak: 'keep-all',
                    fontWeight: 500,
                    ...getAnimatedStyle(0.5),
                  }}
                >
                  혁신적인 기술로 세상을 연결하는 여정에 <br />
                  여러분의 열정을 더해주세요.
                </Typography>

                <Box sx={getAnimatedStyle(0.6)}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#0F172A',
                      color: '#0F172A',
                      padding: '14px 36px',
                      marginLeft: '50px',
                      borderRadius: '100px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      borderWidth: '2px',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderWidth: '2px',
                        backgroundColor: '#0F172A',
                        color: '#FFF',
                      },
                    }}
                  >
                    기업 문화 알아보기
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* 오른쪽: 카드들 (한 줄에 나란히) */}
            {careerPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    height: '100%',

                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '32px',
                    padding: { xs: 4, md: 5 },
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    ...getAnimatedStyle(0.7 + index * 0.1),
                    '&:hover': {
                      backgroundColor: '#FFFFFF',
                      transform: 'translateY(-15px)',
                      boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
                      '& .arrow-icon': {
                        transform: 'translateX(5px)',
                        color: '#3B82F6',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 3,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: '#3B82F6',
                          fontWeight: 800,
                          mb: 1,
                          textTransform: 'uppercase',
                        }}
                      >
                        {post.subtitle[0]}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 850,
                          color: '#0F172A',
                          fontSize: '1.5rem',
                          lineHeight: 1.2,
                        }}
                      >
                        {post.title[0]}
                      </Typography>
                    </Box>
                    <ArrowForwardIosIcon
                      className="arrow-icon"
                      sx={{
                        fontSize: 18,
                        color: '#CBD5E1',
                        mt: 1,
                        transition: '0.3s',
                      }}
                    />
                  </Box>

                  <Box sx={{ flexGrow: 1, mb: 4 }}>
                    {post.description.map((desc, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: '#475569',
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          mb: 0.5,
                        }}
                      >
                        • {desc}
                      </Typography>
                    ))}
                  </Box>
                  {/* <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#0F172A',
                      fontWeight: 800,
                      cursor: 'pointer',
                      '&:hover': '#3B82F6',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.9rem' }}>
                      READ DETAILS
                    </Typography>
                    <ArrowForwardIcon
                      className="hover-arrow"
                      sx={{ fontSize: 18, opacity: 0.7, transition: '0.3s' }}
                    />
                  </Box> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* 배경 워터마크 */}
        {/* <Typography
          sx={{
            position: 'absolute',
            bottom: '2%',
            right: '2%',
            fontSize: '12vw',
            fontWeight: 900,
            color: 'rgba(15, 23, 42, 0.02)',
            zIndex: 0,
            userSelect: 'none',
          }}
        >
          JOIN US
        </Typography> */}
      </Box>
    </FullPageSection>
  );
});

CareerSection.displayName = 'CareerSection';

export default CareerSection;
