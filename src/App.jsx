import React from "react";
import { CssBaseline, ThemeProvider, useMediaQuery, Box, Typography } from "@mui/material";
import "./App.css";

// 커스텀 테마 불러오기!
import { lightTheme } from "./styles/theme";

// 커스텀 훅 불러오기
import useLenisScroll from "./hooks/useLenisScroll";
import useScrollRestoration from "./hooks/useScrollRestoration";

// Context 불러오기
import { BackgroundProvider } from "./context/BackgroundContext";
import { SectionRefsProvider } from "./context/SectionRefsContext";

// 공통 컴포넌트 불러오기
import BackgroundLayer from "./components/commons/BackgroundLayer";
import Header from "./components/commons/Header";
import CustomTooltipCursor from "./components/patterns/customCursor/CustomTooltipCursor";
import ContentArea from "./components/commons/container/ContentArea";

/**
 * App 컴포넌트
 * 
 * 튜토리얼 시작용 기본 애플리케이션 구조
 * 
 * 기능:
 * - Lenis 부드러운 스크롤 전역 활성화
 * - GSAP ScrollTrigger 연동
 * - 전역 배경색 관리 시스템
 * - CustomTooltipCursor 커스텀 커서 시스템 (데스크탑만)
 * - Header 상단 고정 네비게이션
 * - SectionRefsContext 섹션 이동 기능
 * - 튜토리얼용 기본 환영 메시지
 */
function App() {
  const theme = lightTheme;
  
  // 모바일 버전 감지 (md 브레이크포인트 이하)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // 브라우저 자동 스크롤 복원 비활성화
  useScrollRestoration();
  
  // Lenis 부드러운 스크롤 활성화 (GSAP ScrollTrigger 연동)
  useLenisScroll(true, {
    integrateGSAP: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundProvider>
        <SectionRefsProvider>
          {/* 전역 배경 레이어 */}
          <BackgroundLayer />
          
          {/* 커스텀 커서 - 데스크탑에서만 활성화 */}
          {!isMobile && (
            <CustomTooltipCursor 
              size={40}
              borderWidth={3}
              lag={0.15}
            />
          )}
          
          {/* 상단 고정 헤더 */}
          <Header />
          
          {/* 메인 콘텐츠 영역 */}
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pt: { xs: '80px', md: '120px' }, // Header 높이만큼 상단 패딩
            }}
          >
            <ContentArea>
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'Blackout-Midnight, sans-serif',
                    fontWeight: 'normal',
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                    mb: 3,
                    lineHeight: 1.1,
                  }}
                >
                  Ordinary Design
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                  }}
                >
                  인터랙티브 웹 디자인 튜토리얼에 오신 것을 환영합니다
                  <br />
                  평범한 사람들을 위한 특별한 경험을 함께 만들어보세요
                </Typography>
              </Box>
            </ContentArea>
          </Box>
        </SectionRefsProvider>
      </BackgroundProvider>
    </ThemeProvider>
  );
}

export default App;
