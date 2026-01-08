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

// import React, { forwardRef } from 'react';
// import { Box, Typography, Button, Container, Grid } from '@mui/material';
// import FullPageSection from '../components/commons/container/FullPageSection';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
//           backgroundColor: '#F8FAFC', //
//           overflow: 'hidden',
//           py: { xs: 10, md: 0 },
//         }}
//       >
//         {/* --- 배경 장식 도형 top --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '550px',
//             width: '600px',
//             height: '300px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '20px 250px 20px 250px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '150px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '250px 20px 250px 20px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />

//         {/* --- 배경 장식 도형 --- 아래 회분 */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '50%',
//             left: '200px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#FAF6E8',
//             borderRadius: '20px 20px 20px 150px',
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

//           {/* 2. 하단 콘텐츠 섹션 (가로 한 줄 배치: 설명 + 카드1 + 카드2) - justifyContent="center" 추가 */}
//           <Grid
//             container
//             spacing={3}
//             alignItems="stretch"
//             justifyContent="center"
//           >
//             {/* 왼쪽: 설명 문구 및 버튼 */}
//             <Grid item xs={12} lg={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   px: { lg: 2 }, // 양옆 균형을 위해 padding 조정
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
//                       marginLeft: '50px',
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
//                     height: '280px',

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
//                   {/* <Box
//                     sx={{
//                       mt: 3,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                       color: '#0F172A',
//                       fontWeight: 800,
//                       cursor: 'pointer',
//                       '&:hover': '#3B82F6',
//                     }}
//                   >
//                     <Typography sx={{ fontSize: '0.9rem' }}>
//                       READ DETAILS
//                     </Typography>
//                     <ArrowForwardIcon
//                       className="hover-arrow"
//                       sx={{ fontSize: 18, opacity: 0.7, transition: '0.3s' }}
//                     />
//                   </Box> */}
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

//         {/* 배경 워터마크 */}
//         {/* <Typography
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
//         </Typography> */}
//       </Box>
//     </FullPageSection>
//   );
// });

// CareerSection.displayName = 'CareerSection';

// export default CareerSection;

//화분 느낌
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
//           backgroundColor: '#FDFDFB', // 따뜻하고 깨끗한 오프화이트 (종이 질감 느낌)
//           overflow: 'hidden',
//           py: { xs: 10, md: 0 },
//         }}
//       >
//         {/* --- 배경 장식 도형 (새싹 테마: Sage Green) --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '5%',
//             left: '15%',
//             width: '450px',
//             height: '450px',
//             backgroundColor: '#E8F2EE', // 매우 연한 세이지 그린 (새싹의 생명력)
//             borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%', // 유기적인 잎사귀 형태
//             filter: 'blur(40px)',
//             opacity: isInView ? 0.6 : 0,
//             transform: isInView
//               ? 'rotate(0deg) scale(1)'
//               : 'rotate(-15deg) scale(0.8)',
//             transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
//           }}
//         />

//         {/* --- 배경 장식: '새싹'의 유기적 형태 (Blue 톤으로 변경) --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '5%',
//             right: '10%',
//             width: '450px',
//             height: '450px',
//             backgroundColor: '#EFF6FF', // 매우 연한 블루
//             borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%',
//             filter: 'blur(60px)',
//             opacity: isInView ? 0.8 : 0,
//             transform: isInView
//               ? 'rotate(0deg) scale(1)'
//               : 'rotate(-20deg) scale(0.8)',
//             transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//           }}
//         />

//         {/* --- 배경 장식 도형 top --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '550px',
//             width: '600px',
//             height: '300px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '20px 250px 20px 250px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         />
//         {/* <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '13%',
//             right: '150px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#ECF4F9',
//             borderRadius: '250px 20px 250px 20px',
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.3s',
//           }}
//         /> */}

//         {/* --- 배경 장식 도형 (화분 테마: Muted Sand) --- */}
//         <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             top: '50%',
//             right: '200px',
//             width: '340px',
//             height: '280px',
//             backgroundColor: '#F5F0E8', // 부드러운 샌드 베이지 (토양과 화분의 안정감)
//             borderRadius: '100px 100px 300px 100px',
//             opacity: isInView ? 0.7 : 0,
//             transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
//             transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
//             transitionDelay: '0.2s',
//           }}
//         />

//         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//           {/* 1. 상단 타이틀 섹션 */}
//           <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '2.5rem', md: '3.8rem' },
//                 fontWeight: 900,
//                 color: '#2C3333', // 깊이감 있는 다크 차콜 그린
//                 lineHeight: 1.1,
//                 letterSpacing: '-0.03em',
//                 ...getAnimatedStyle(0.3),
//               }}
//             >
//               {contactContent.title[0]} <br />
//               <Box component="span" sx={{ color: '#3B82F6' }}>
//                 {' '}
//                 {/* 성장과 신뢰의 그린 컬러 */}
//                 {contactContent.title[1]}
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: { xs: '1.1rem', md: '1.2rem' },
//                 color: '#707772',
//                 lineHeight: 1.8,
//                 maxWidth: '650px',
//                 mx: 'auto',
//                 wordBreak: 'keep-all',
//                 marginTop: '24px',
//                 ...getAnimatedStyle(0.5),
//               }}
//             >
//               {contactContent.subtitle[0]} {contactContent.subtitle[1]}
//             </Typography>
//           </Box>

//           {/* 2. 하단 콘텐츠 섹션 */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="stretch"
//             justifyContent="center"
//           >
//             {/* 오른쪽: 채용 카드 */}
//             {careerPosts.map((post, index) => (
//               <Grid item xs={12} md={6} lg={4} key={index}>
//                 <Box
//                   sx={{
//                     height: '280px',
//                     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//                     backdropFilter: 'blur(20px)',
//                     borderRadius: '24px',
//                     padding: { xs: 4, md: 5 },
//                     border: '1px solid rgba(255, 255, 255, 0.8)',
//                     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                     cursor: 'pointer',
//                     ...getAnimatedStyle(0.7 + index * 0.1),
//                     '&:hover': {
//                       backgroundColor: '#FFFFFF',
//                       transform: 'translateY(-12px)',
//                       boxShadow: '0 30px 60px rgba(95, 141, 78, 0.12)', // 은은한 그린 쉐도우
//                       '& .arrow-icon': {
//                         transform: 'rotate(-45deg)', // 대각선 위로 향하는 화살표 (성장 의미)
//                         color: '#5F8D4E',
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
//                           fontSize: '0.75rem',
//                           color: '#3B82F6',
//                           fontWeight: 700,
//                           mb: 1,
//                           letterSpacing: '0.1em',
//                           textTransform: 'uppercase',
//                         }}
//                       >
//                         {post.subtitle[0]}
//                       </Typography>
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           color: '#2C3333',
//                           fontSize: '1.4rem',
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {post.title[0]}
//                       </Typography>
//                     </Box>
//                     <ArrowForwardIosIcon
//                       className="arrow-icon"
//                       sx={{
//                         fontSize: 16,
//                         color: '#A5ADAA',
//                         transition: '0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ flexGrow: 1 }}>
//                     {post.description.map((desc, i) => (
//                       <Typography
//                         key={i}
//                         sx={{
//                           color: '#606C66',
//                           lineHeight: 1.7,
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
//                       fontWeight: 700,
//                       fontSize: '0.85rem',
//                       color: '#2C3333',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 0.5,
//                       mt: 2,
//                       '&::after': {
//                         content: '""',
//                         width: '0px',
//                         height: '2px',
//                         backgroundColor: '#3B82F6',
//                         transition: '0.3s',
//                       },
//                       '&:hover::after': {
//                         width: '20px',
//                       },
//                     }}
//                   >
//                     자세히 보기
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}

//             {/* 왼쪽: 설명 문구 및 버튼 */}
//             <Grid item xs={12} lg={4}>
//               <Box
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   px: { lg: 3 },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: '1.15rem',
//                     color: '#4A504C',
//                     lineHeight: 1.7,
//                     mb: 5,
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
//                       borderColor: '#2C3333',
//                       color: '#2C3333',
//                       padding: '12px 40px',
//                       borderRadius: '12px', // 둥글지만 너무 원형은 아니게 (세련미)
//                       fontSize: '0.95rem',
//                       fontWeight: 700,
//                       borderWidth: '1.5px',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         borderWidth: '1.5px',
//                         backgroundColor: '#2C3333',
//                         color: '#FFF',
//                         transform: 'translateY(-3px)',
//                         boxShadow: '0 10px 20px rgba(44, 51, 51, 0.15)',
//                       },
//                     }}
//                   >
//                     기업 문화 알아보기
//                   </Button>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </FullPageSection>
//   );
// });

// CareerSection.displayName = 'CareerSection';

// export default CareerSection;

import React, { forwardRef } from 'react';
import { Box, Typography, Button, Container, Grid, alpha } from '@mui/material';
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
          backgroundColor: '#F8F9FA', // 깔끔한 라이트 블루 그레이
          overflow: 'hidden',
          py: { xs: 10, md: 0 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '150px',
            background:
              'linear-gradient(180deg, #FFFFFF 0%, rgba(253, 253, 251, 0) 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* --- 배경 장식: '새싹'의 유기적 형태 (Blue 톤으로 변경) --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '10%',
            right: '600px',
            width: '600px',
            height: '300px',
            backgroundColor: '#F0F7FF', // 매우 연한 블루
            borderRadius: '20px 250px 20px 250px',
            filter: 'blur(1px)',
            opacity: isInView ? 0.8 : 0,
            transform: isInView
              ? 'rotate(0deg) scale(1)'
              : 'rotate(-20deg) scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        />

        {/* --- 배경 장식 도형 (새싹 테마: Sage Green) --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '10%',
            right: '15%',
            width: '340px',
            height: '280px',
            backgroundColor: '#E8F2EE', // 매우 연한 세이지 그린 (새싹의 생명력)
            borderRadius: '250px 20px 250px 20px',
            filter: 'blur(5px)',
            opacity: isInView ? 0.6 : 0,
            transform: isInView
              ? 'rotate(0deg) scale(1)'
              : 'rotate(-15deg) scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* --- 배경 장식: '화분'의 안정적 형태 --- */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '49%',
            right: '190px',
            width: '390px',
            height: '300px',
            filter: 'blur(0px)',
            backgroundColor: '#F7F5F0',
            borderRadius: '40px 100px 300px 40px',
            opacity: isInView ? 0.6 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-100px)',
            transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          {/* 1. 타이틀 섹션 */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#334155',
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
                marginTop: '24px',
                ...getAnimatedStyle(0.5),
              }}
            >
              {contactContent.subtitle[0]} {contactContent.subtitle[1]}
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            alignItems="stretch"
            justifyContent="center"
          >
            {/* 3. 오른쪽: 채용 카드 */}
            {careerPosts.map((post, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                sx={{ display: 'flex' }}
              >
                <Box
                  sx={{
                    width: '400px',
                    height: '300px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '32px',
                    padding: { xs: 4, md: 5 },
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    ...getAnimatedStyle(0.7 + index * 0.1),
                    '&:hover': {
                      backgroundColor: '#FFFFFF',
                      transform: 'translateY(-15px)',
                      //boxShadow: '0 40px 80px rgba(15, 23, 42, 0.08)',
                      boxShadow: `0 30px 60px ${alpha('#3B82F6', 0.15)}`,
                      borderColor: '#3B82F6', // 호버 시 테두리 블루
                      '& .arrow-icon': {
                        transform: 'translate(4px, -4px) rotate(-45deg)', // 대각선 위로 이동 및 회전
                        color: '#3B82F6',
                      },
                      '& .detail-text': {
                        color: '#3B82F6',
                      },
                      '& .hover-arrow': {
                        transform: 'translateX(5px)',
                        opacity: 1,
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
                          mb: 1,
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
                        transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
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
                        {index === 1 ? desc : `• ${desc}`}
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
                      '&:hover': '#639CF8',
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

            {/* 2. 오른쪽: 설명 및 버튼 */}
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: { lg: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    mb: 5,
                    wordBreak: 'keep-all',
                    fontWeight: 500,
                    ...getAnimatedStyle(0.5),
                  }}
                >
                  혁신적인 기술로 세상을 연결하는 여정에 <br />
                  여러분의 열정을 더해주세요.
                </Typography>

                {/* <Box sx={getAnimatedStyle(0.6)}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#0F172A',
                      color: '#0F172A',
                      padding: '14px 40px',
                      borderRadius: '100px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderWidth: '2px',
                      transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                      '&:hover': {
                        borderColor: '#3B82F6',
                        backgroundColor: '#3B82F6',
                        color: '#FFF',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 30px rgba(59, 130, 246, 0.2)',
                      },
                    }}
                  >
                    기업 문화 알아보기
                  </Button>
                </Box> */}

                <Box
                  component="button"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.6,
                    marginLeft: '50px',
                    width: 'fit-content', // 글자 사이즈에 맞게 자동 조정
                    backgroundColor: 'transparent',
                    color: '#0F172A',
                    borderRadius: '50px',
                    border: `1px solid ${alpha('#0F172A', 0.3)}`,
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)', // 위로 살짝 떠오름
                      borderColor: '#3B82F6', // 강조색으로 경계선 변경
                      color: '#3B82F6', // 텍스트 색상 변경
                      backgroundColor: alpha('#3B82F6', 0.05), // 아주 은은한 배경색 추가
                      boxShadow: `0 10px 20px ${alpha('#3B82F6', 0.2)}`, // 강조색 그림자
                      '& .arrow-icon': {
                        transform: 'translateX(5px)', // 화살표만 오른쪽으로 밀려남
                      },
                    },
                    '&:active': {
                      transform: 'translateY(-1px)', // 클릭 시 눌리는 효과
                    },
                  }}
                >
                  DETAILS
                  <ArrowForwardIcon
                    className="arrow-icon" // 클래스명 부여하여 hover 시 선택 가능하게 함
                    sx={{
                      fontSize: 18,
                      transition:
                        'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)', // 화살표 전용 트랜지션
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Shape Divider - 하단 물결 효과 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: 'rotate(180deg)',
            zIndex: 1,
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: 'relative',
              display: 'block',
              width: 'calc(159% + 1.3px)',
              height: '80px',
              transform: 'rotateY(180deg)',
            }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.25"
              fill="#0F172A"
              fillOpacity="1"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.5"
              fill="#0F172A"
              fillOpacity="1"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#0F172A"
              fillOpacity="1"
            />
          </svg>
        </Box>
      </Box>
    </FullPageSection>
  );
});

CareerSection.displayName = 'CareerSection';

export default CareerSection;
