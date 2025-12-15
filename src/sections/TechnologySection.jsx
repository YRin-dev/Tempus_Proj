import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import StickySection from '../components/patterns/pageTransition/StickySection';
import { technologyContent } from '../data/contentData';
import fabImg from '../assets/photo/fabImg.png';

/**
 * TechnologySection 컴포넌트
 *
 * 기술 소개 섹션입니다.
 * - StickySection으로 fabImg 이미지 고정 + 축소 효과
 * - StorySection 스타일의 글자 모션 적용
 * - msg: 메인 메시지 (mainMessage, subMessage)
 * - content: H1 텍스트와 설명 (StorySection의 StoryContent 스타일)
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TechnologySection />
 */
function TechnologySection() {
  // 메인 메시지 (msg prop으로 전달)
  const mainMessage = (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        zIndex: 9,
      }}
    >
      <Stack
        width={'100%'}
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '0px 2px 20px rgba(0,0,0,0.9)',
          padding: '20px',
          maxWidth: '80%',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: 6,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 2,
            }}
          >
            {technologyContent.mainMessage[0]}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
              fontWeight: 400,
              color: '#ffffff',
              opacity: 0.9,
              marginBottom: 1,
            }}
          >
            {technologyContent.subMessage[0]}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' },
              fontWeight: 400,
              color: '#ffffff',
              opacity: 0.9,
            }}
          >
            {technologyContent.subMessage[1]}
          </Typography>
        </Box>
      </Stack>

      {/* TECHNOLOGY 메인 텍스트 (배경) */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: { xs: '8rem', md: '12rem', lg: '15rem' },
          fontWeight: 900,
          lineHeight: 0.8,
          color: 'rgba(255, 255, 255, 0.1)',
          letterSpacing: '-0.02em',
          fontFamily: 'Arial, sans-serif',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {technologyContent.mainTitle}
      </Typography>
    </Box>
  );

  // StoryContent 스타일의 텍스트 콘텐츠 (content prop으로 전달)
  const StoryContent = () => {
    const storyText = technologyContent.h1Title;
    const byText = technologyContent.description;

    return (
      <Box
        sx={{
          backgroundColor: 'transparent',
          width: '100%',
          mt: 8,
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        <Box
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              transform: 'translateY(80px)',
              animation: 'slideUp 0.8s ease-out 0.2s forwards',
              opacity: 0,
              '@keyframes slideUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(80px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Stack
              width={'100%'}
              spacing={4}
              alignItems="center"
              sx={{
                p: 4,
                borderRadius: 2,
                backdropFilter: 'blur(5px)',
              }}
            >
              <Typography
                width={'100%'}
                textAlign="center"
                fontWeight={'400'}
                color="#c0c0c0"
                sx={{
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4,
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.3rem',
                    md: '1.8rem',
                    lg: '2.2rem',
                  },
                }}
              >
                {storyText}
              </Typography>
              <Typography
                width={'100%'}
                fontWeight={'bold'}
                textAlign="center"
                color="#E0e0e0"
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.4rem',
                  },
                }}
              >
                {byText}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <StickySection
      image={fabImg}
      msg={mainMessage}
      content={<StoryContent />}
      targetScale={0.7}
      useFadeEffect={true}
      targetOpacity={0.3}
    />
  );
}

export default TechnologySection;
