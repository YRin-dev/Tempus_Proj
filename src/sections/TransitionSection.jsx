import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { transitionContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * TransitionSection 컴포넌트
 *
 * 회사 소개에 대한 내용을 표시하는 섹션입니다.
 * - 가로로 넓은 카드 형식
 * - 화면 최대 넓이 (100vw)
 * - transitionContent에서 "ABOUT" 텍스트 가져오기
 * - useBackground('light') 모드 전환 + useIsInView 사용 (threshold: 0.1)
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TransitionSection />
 */
function TransitionSection() {
  const { updateBackgroundMode } = useBackground();
  const [ref, isInView] = useIsInView({ threshold: 0.1, triggerOnce: false });

  // 뷰포트에 10%만 보여도 light 모드로 전환
  React.useEffect(() => {
    if (isInView) {
      updateBackgroundMode('light');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#ffffff',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '90vw',
          padding: { xs: '40px 20px', md: '80px 40px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {/* ABOUT 텍스트 */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '8rem', md: '12rem', lg: '16rem' },
            fontWeight: 900,
            lineHeight: 0.8,
            color: '#f0f0f0',
            letterSpacing: '-0.02em',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {transitionContent.text}
        </Typography>

        {/* 회사 소개 내용 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: { xs: '100%', md: '800px' },
            marginTop: { xs: '-60px', md: '-120px' },
            paddingLeft: { xs: '20px', md: '40px' },
          }}
        >
          {transitionContent.description.map((text, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
                lineHeight: 1.8,
                color: '#1a1a1a',
                fontWeight:
                  index === transitionContent.description.length - 1
                    ? 600
                    : 400,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* 디테일 페이지로 가는 버튼 */}
        <Box sx={{ paddingLeft: { xs: '20px', md: '40px' }, marginTop: 2 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#1a1a1a',
              color: '#1a1a1a',
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: 0,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#1a1a1a',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
              },
            }}
          >
            더 알아보기
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TransitionSection;
