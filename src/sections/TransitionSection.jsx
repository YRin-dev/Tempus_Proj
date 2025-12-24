import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { transitionContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import buildingImg from '../assets/photo/buildingImg.jpeg';

/**
 * TransitionSection 컴포넌트
 *
 * 회사 소개 섹션 - 현대적이고 감각적인 디자인
 * - 왼쪽: 회사 소개 텍스트 (ABOUT 타이틀)
 * - 오른쪽: 회사 건물 이미지
 * - Split layout with parallax effect
 * - useIsInView로 애니메이션 효과
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TransitionSection />
 */
function TransitionSection() {
  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      //ref={ref}
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#FAFAF7',
        overflow: 'hidden',
      }}
    >
      {/* 상단 블러 효과 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '150px',
          background:
            'linear-gradient(to bottom, rgba(250, 250, 247, 0.3), rgba(250, 250, 247, 0.8), rgba(250, 250, 247, 1))',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 메인 컨테이너 */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1600px',
          height: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          padding: { xs: '80px 20px 40px', md: '0 60px' },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* 왼쪽: 텍스트 콘텐츠 */}
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { xs: 0, md: '30px', lg: '40px' },
            paddingRight: { xs: 0, md: '60px' },
            zIndex: 2,
          }}
        >
          {/* ABOUT 타이틀 - 배경 텍스트 */}
          <Box
            sx={{
              position: 'relative',
              marginBottom: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '5rem', sm: '7rem', md: '9rem', lg: '11rem' },
                fontWeight: 900,
                lineHeight: 0.9,
                color: 'rgba(26, 26, 26, 0.08)',
                letterSpacing: '-0.03em',
                fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
                position: 'absolute',
                top: { xs: '-80px', md: '-100px' },
                left: { xs: '-10px', md: '-40px' },
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              ABOUT
            </Typography>

            {/* 작은 라벨 */}
            {/* <Typography
              sx={{
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: '#666',
                textTransform: 'uppercase',
                marginBottom: 2,
                position: 'relative',
                zIndex: 1,
                opacity: isContentInView ? 1 : 0,
                transform: isContentInView
                  ? 'translateY(0)'
                  : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              Who We Are
            </Typography> */}

            {/* 메인 헤딩 */}
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '3.5rem',
                },
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#1a1a1a',
                marginBottom: 2,
                position: 'relative',
                zIndex: 1,
                opacity: isContentInView ? 1 : 0,
                transform: isContentInView
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              {transitionContent.text === 'ABOUT'
                ? '혁신을 선도하는\n기업입니다'
                : transitionContent.text}
            </Typography>
          </Box>

          {/* 설명 텍스트 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.0,
              marginBottom: 4,
            }}
          >
            {transitionContent.description.map((text, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                  lineHeight: 1.8,
                  color:
                    index === transitionContent.description.length - 1
                      ? '#1a1a1a'
                      : '#4a4a4a',
                  fontWeight:
                    index === transitionContent.description.length - 1
                      ? 600
                      : 400,
                  opacity: isContentInView ? 1 : 0,
                  transform: isContentInView
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${0.3 + index * 0.1}s`,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* CTA 버튼 */}
          <Box
            sx={{
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.8s',
            }}
          >
            <Button
              variant="outlined"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                fontWeight: 600,
                borderRadius: '10px',
                textTransform: 'none',
                borderWidth: '2px',
                borderColor: 'rgba(30, 64, 175, 0.04)',
                backgroundColor: 'rgba(30, 64, 175, 0.04)',
                color: '#1E40AF',
                padding: { xs: '14px 36px', md: '16px 48px' },
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderWidth: '2px',
                  borderColor: '#1E40AF',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              더 알아보기
            </Button>
          </Box>
        </Box>

        {/* 오른쪽: 이미지 */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: { xs: '400px', md: 'auto' },
          }}
        >
          {/* 장식용 배경 요소 */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: { xs: '200px', md: '300px', lg: '400px' },
              height: { xs: '200px', md: '300px', lg: '400px' },
              background:
                'linear-gradient(135deg, rgba(26, 26, 26, 0.05) 0%, rgba(26, 26, 26, 0.02) 100%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 0,
              opacity: isContentInView ? 0.8 : 0,
              transition: 'opacity 1.5s ease-out',
            }}
          />

          {/* 메인 이미지 */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '90%' },
              height: { xs: '100%', md: '80%' },
              maxHeight: '650px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              opacity: isContentInView ? 1 : 0,
              transform: isContentInView
                ? 'translateX(0) scale(1)'
                : 'translateX(50px) scale(0.95)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 50%)',
                pointerEvents: 'none',
              },
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
                objectPosition: 'center',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* 장식용 라인 요소 - 페이지 정중앙 (x축), y축 위치 고정 */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: { xs: '10%', md: '10%' },
          width: '120px',
          height: '4px',
          backgroundColor: '#1a1a1a',
          opacity: isContentInView ? 0.8 : 0,
          transform: isContentInView
            ? 'translateX(-50%) scaleX(1)'
            : 'translateX(-50%) scaleX(0)',
          transformOrigin: 'center',
          transition: 'all 1s ease-out 0.5s',
          zIndex: 3,
        }}
      />
    </Box>
  );
}

export default TransitionSection;
