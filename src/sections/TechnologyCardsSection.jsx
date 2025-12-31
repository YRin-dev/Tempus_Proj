// import React from 'react';
// import { Box, Typography, Grid, Container } from '@mui/material';
// import useIsInView from '../hooks/useIsInView';
// // 아이콘: 기술적 느낌을 주는 아이콘들
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'; // 원천기술
// import AirIcon from '@mui/icons-material/Air'; // 가스센서
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; // 영상센서
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// function TechnologySection() {
//   const [ref, isInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const techData = [
//     {
//       id: '01',
//       title: 'Micro-thermopile 원천기술',
//       subtitle: 'Original Tech',
//       desc: 'in-house MEMS FAB를 통한\n개발 및 생산 체계 구축',
//       icon: <SettingsInputComponentIcon sx={{ fontSize: 32 }} />,
//       color: '#1E40AF',
//     },
//     {
//       id: '02',
//       title: '코: NDIR/TCD 가스 센서',
//       subtitle: 'Robot Olfaction',
//       desc: '로봇의 후각 기능을 구현하는\n비접촉 정밀 가스센서',
//       icon: <AirIcon sx={{ fontSize: 32 }} />,
//       color: '#3B82F6',
//     },
//     {
//       id: '03',
//       title: '눈: SWIR/FIR 적외선영상센서',
//       subtitle: 'Robot Vision',
//       desc: '로봇의 시각 기능을 구현하는\n수분 및 열 영상센서',
//       icon: <RemoveRedEyeIcon sx={{ fontSize: 32 }} />,
//       color: '#60A5FA',
//     },
//   ];

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         backgroundColor: '#F8F9FB',
//         overflow: 'hidden',
//       }}
//     >
//       {/* --- 배경 정체성 요소 (Watermark) --- */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           bottom: '0%',
//           left: '5%',
//           fontSize: { md: '12vw', lg: '10vw' },
//           fontWeight: 900,
//           color: 'rgba(30, 64, 175, 0.03)',
//           lineHeight: 1,
//           zIndex: 0,
//           userSelect: 'none',
//         }}
//       >
//         TECHNOLOGY
//       </Typography>

//       {/* --- 배경 디자인 (챠라락 반원) --- */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '50%',
//           height: '70%',
//           backgroundColor: '#C0D5F0',
//           borderRadius: '500px 500px 0 0',
//           opacity: isInView ? 0.4 : 0,
//           transform: isInView ? 'translateY(0)' : 'translateY(100px)',
//           transition: 'all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
//           zIndex: 0,
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={6} alignItems="center">
//           {/* 왼쪽: 헤더 및 설명 (가독성 집중) */}
//           <Grid item xs={12} lg={4}>
//             <Box sx={{ mb: { xs: 4, lg: 0 } }}>
//               <Typography
//                 sx={{
//                   fontSize: '0.9rem',
//                   fontWeight: 800,
//                   color: '#1E40AF',
//                   letterSpacing: '0.4em',
//                   mb: 2,
//                   opacity: isInView ? 1 : 0,
//                   transition: '0.8s ease 0.2s',
//                 }}
//               >
//                 TECHNOLOGY
//               </Typography>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: '2rem', md: '2.8rem' },
//                   fontWeight: 900,
//                   color: '#1a1a1a',
//                   lineHeight: 1.2,
//                   mb: 3,
//                   opacity: isInView ? 1 : 0,
//                   transform: isInView ? 'none' : 'translateY(20px)',
//                   transition: '0.8s ease 0.4s',
//                 }}
//               >
//                 Micro-thermopile 기반
//                 <br />
//                 MEMS 센서 기술
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: '1rem',
//                   color: '#555',
//                   lineHeight: 1.7,
//                   wordBreak: 'keep-all',
//                   opacity: isInView ? 1 : 0,
//                   transition: '0.8s ease 0.6s',
//                 }}
//               >
//                 마이크로 전자기계시스템(MEMS) 기술을 활용한
//                 <br />
//                 초소형, 고성능 멀티채널센서를 제공합니다.
//                 <br />
//                 자체 개발 원천기술에 기반하여 고객 요구에 맞춤형으로 대응합니다.
//               </Typography>
//             </Box>
//           </Grid>

//           {/* 오른쪽: 기술 카드 3종 (한눈에 보기) */}
//           <Grid item xs={12} lg={8}>
//             <Grid container spacing={3}>
//               {techData.map((tech, index) => (
//                 <Grid item xs={12} md={4} key={tech.id}>
//                   <Box
//                     sx={{
//                       backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                       backdropFilter: 'blur(20px)',
//                       border: '1px solid rgba(255, 255, 255, 0.5)',
//                       borderRadius: '32px',
//                       padding: '40px 30px',
//                       height: '100%',
//                       minHeight: '380px', // 카드 높이 통일
//                       display: 'flex',
//                       flexDirection: 'column',
//                       transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//                       opacity: isInView ? 1 : 0,
//                       transform: isInView
//                         ? 'translateY(0)'
//                         : 'translateY(50px)',
//                       transitionDelay: `${0.6 + index * 0.15}s`,
//                       '&:hover': {
//                         transform: 'translateY(-15px)',
//                         backgroundColor: '#ffffff',
//                         boxShadow: '0 30px 60px rgba(30, 64, 175, 0.1)',
//                         '& .icon-box': {
//                           backgroundColor: tech.color,
//                           color: '#fff',
//                         },
//                       },
//                     }}
//                   >
//                     {/* 카드 상단: 아이콘 */}
//                     <Box
//                       className="icon-box"
//                       sx={{
//                         width: '64px',
//                         height: '64px',
//                         borderRadius: '16px',
//                         backgroundColor: '#F0F4FF',
//                         color: tech.color,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         mb: 3,
//                         transition: 'all 0.3s ease',
//                       }}
//                     >
//                       {tech.icon}
//                     </Box>

//                     {/* 카드 중단: 텍스트 */}
//                     <Typography
//                       sx={{
//                         fontSize: '0.75rem',
//                         fontWeight: 700,
//                         color: tech.color,
//                         letterSpacing: '0.1em',
//                         mb: 1,
//                         textTransform: 'uppercase',
//                       }}
//                     >
//                       {tech.subtitle}
//                     </Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 800,
//                         color: '#1a1a1a',
//                         mb: 2,
//                         fontSize: '1.25rem',
//                       }}
//                     >
//                       {tech.title}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: '0.9rem',
//                         color: '#666',
//                         lineHeight: 1.6,
//                         whiteSpace: 'pre-line',
//                         mb: 4,
//                         flexGrow: 1,
//                       }}
//                     >
//                       {tech.desc}
//                     </Typography>

//                     {/* 카드 하단: 버튼 */}
//                     <Box
//                       component="button"
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         width: '100%',
//                         padding: '12px 20px',
//                         borderRadius: '12px',
//                         border: '1px solid #eee',
//                         backgroundColor: 'transparent',
//                         cursor: 'pointer',
//                         fontWeight: 700,
//                         fontSize: '0.85rem',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           borderColor: tech.color,
//                           color: tech.color,
//                         },
//                       }}
//                     >
//                       VIEW DETAILS
//                       <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default TechnologySection;

import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import useIsInView from '../hooks/useIsInView';
// 아이콘: 더 정밀한 느낌을 주는 아이콘들
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SensorsIcon from '@mui/icons-material/Sensors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TechnologySection() {
  const [ref, isInView] = useIsInView({ threshold: 0.2, triggerOnce: true });

  const techData = [
    {
      id: '01',
      title: 'Micro-thermopile 원천기술',
      subtitle: 'CORE TECHNOLOGY',
      desc: 'in-house MEMS FAB를 통한\n독자적 설계 및 공정 원천기술 확보',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 35 }} />,
      color: '#1E40AF',
    },
    {
      id: '02',
      title: '코: NDIR/TCD 가스 센서',
      subtitle: 'ROBOT OLFACTION',
      desc: '로봇의 후각 기능을 구현하는\n비접촉 방식의 초정밀 가스 센싱',
      icon: <SensorsIcon sx={{ fontSize: 35 }} />,
      color: '#2563EB',
    },
    {
      id: '03',
      title: '눈: SWIR/FIR 적외선 센서',
      subtitle: 'ROBOT VISION',
      desc: '가시광선 너머의 정보를 시각화하여\n환경을 분석하는 차세대 영상 센서',
      icon: <VisibilityIcon sx={{ fontSize: 35 }} />,
      color: '#3B82F6',
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#F1F4F9', // 배경색을 살짝 눌러 카드를 돋보이게 함
        overflow: 'hidden',
        // --- 하이테크 도트 패턴 배경 ---
        backgroundImage: `radial-gradient(#d1d9e6 1.2px, transparent 0)`,
        backgroundSize: '40px 40px',
      }}
    >
      {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
      <Typography
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          fontSize: '15vw',
          fontWeight: 950,
          color: 'rgba(30, 64, 175, 0.04)',
          lineHeight: 1,
          zIndex: 0,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        TECH
      </Typography>

      {/* 배경 장식: 대형 워터마크 (배경과 더 조화롭게 배치) */}
      {/* <Typography
        sx={{
          position: 'absolute',
          bottom: '8px',
          right: '-3%',
          fontSize: '15vw',
          fontWeight: 950,
          color: 'rgba(30, 64, 175, 0.04)',
          lineHeight: 1,
          zIndex: 0,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        NOLOGY
      </Typography> */}

      {/* 배경 장식: 우측 하단 기하학적 면 분할 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          backgroundColor: '#E2E8F0',
          borderRadius: '100px',
          transform: 'rotate(-15deg)',
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* 왼쪽: 헤더 섹션 (밀도 있는 타이포그래피) */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ mb: { xs: 4, lg: 0 }, pl: { md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 2,
                    backgroundColor: '#1E40AF',
                    mr: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#1E40AF',
                    letterSpacing: '0.3em',
                  }}
                >
                  TECHNOLOGY
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.2rem', md: '3.2rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.1,
                  mb: 3,
                  wordBreak: 'keep-all',
                }}
              >
                독자적 기반의
                <br />
                <Box component="span" sx={{ color: '#1E40AF' }}>
                  MEMS 센서 솔루션
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  lineHeight: 1.8,
                  wordBreak: 'keep-all',
                  maxWidth: '380px',
                }}
              >
                자체 개발 원천기술을 바탕으로 고객 요구에 최적화된 맞춤형
                마이크로 센서 기술을 설계하고 공급합니다.
              </Typography>
            </Box>
          </Grid>

          {/* 오른쪽: 기술 카드 (더 선명하고 임팩트 있는 디자인) */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {techData.map((tech, index) => (
                <Grid item xs={12} md={4} key={tech.id}>
                  <Box
                    sx={{
                      position: 'relative',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '24px',
                      padding: '50px 35px',
                      height: '100%',
                      minHeight: '420px',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid rgba(30, 64, 175, 0.1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: isInView ? 1 : 0,
                      transform: isInView
                        ? 'translateY(0)'
                        : 'translateY(60px)',
                      transitionDelay: `${0.4 + index * 0.15}s`,
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-20px)',
                        // 진해진 그림자 색상 (브랜드 컬러 틴트 포함)
                        boxShadow: `0 40px 70px rgba(30, 64, 175, 0.25)`,
                        '& .accent-bar': { height: '8px' },
                        '& .hover-arrow': {
                          transform: 'translateX(5px)',
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* 아이콘: 더 진한 색감과 배경 */}
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '18px',
                        backgroundColor: `${tech.color}10`, // 10% 투명도
                        color: tech.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: `1px solid ${tech.color}20`,
                      }}
                    >
                      {tech.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: tech.color,
                        mb: 1.5,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {tech.subtitle}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 850,
                        color: '#0F172A',
                        mb: 2.5,
                        fontSize: '1.4rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {tech.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        color: '#64748B',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line',
                        flexGrow: 1,
                      }}
                    >
                      {tech.desc}
                    </Typography>

                    {/* 하단 버튼: 현대적인 링크 스타일 */}
                    <Box
                      sx={{
                        mt: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#0F172A',
                        fontWeight: 700,
                        cursor: 'pointer',
                        '&:hover': { color: tech.color },
                      }}
                    >
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
                        READ DETAILS
                      </Typography>
                      <ArrowForwardIcon
                        className="hover-arrow"
                        sx={{
                          fontSize: 18,
                          opacity: 0.7,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TechnologySection;
