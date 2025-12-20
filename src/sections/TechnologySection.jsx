import React, { forwardRef, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import StickySection from '../components/patterns/pageTransition/StickySection';
import { technologyContent } from '../data/contentData';
import fabImg from '../assets/photo/fabImg.png';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * TechnologySection 컴포넌트
 *
 * 기술 소개 섹션입니다.
 * - StickySection으로 fabImg 이미지 고정 + 축소 효과
 * - StorySection 스타일의 글자 모션 적용
 * - useIsInView를 사용한 텍스트 색상 전환 효과
 * - useBackground를 사용하여 섹션이 10%만 보여도 gray 배경색으로 전환
 * - msg: 메인 메시지 (mainMessage, subMessage)
 * - content: H1 텍스트와 설명 (StorySection의 StoryContent 스타일)
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <TechnologySection ref={technologySectionRef} />
 */
const TechnologySection = forwardRef((props, ref) => {
  const { updateBackgroundMode } = useBackground();

  // 배경색 등록용 useIsInView - 섹션이 10%만 보여도 배경색 전환
  const [sectionBgRef, isInView] = useIsInView({
    threshold: 0.4, // 10%만 보여도 활성화
    triggerOnce: false, // 스크롤할 때마다 감지
  });
  useEffect(() => {
    console.log('🔍 TransitionSection isInView changed:', isInView);
    if (isInView) {
      updateBackgroundMode('gray');
    }
  }, [isInView, updateBackgroundMode]);

  // StoryContent용 useIsInView 훅
  const [textRef, isTextInView] = useIsInView({
    threshold: 0.9,
    rootMargin: '0px',
    triggerOnce: false, // 스크롤할 때마다 감지
  });

  // mainMessage와 subMessage용 useIsInView 훅 (90% 보일 때 활성화)
  const [messageRef, isMessageInView] = useIsInView({
    threshold: 0.8, // 90% 이상 보일 때 true (10% 가려지면 false)
    rootMargin: '0px',
    triggerOnce: false,
  });

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
        ref={messageRef}
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
          // 🎨 opacity 전환 효과
          opacity: isMessageInView ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
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
          color: 'rgba(240, 235, 235, 0.35)',
          letterSpacing: '-0.02em',
          fontFamily: 'Arial, sans-serif',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {technologyContent.mainTitle}
      </Typography>

      {/* StoryContent - mainTitle 밑에 위치 */}
      <Box
        ref={textRef}
        sx={{
          position: 'absolute',
          bottom: { xs: '5%', md: '-10%', lg: '-68%' },
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          zIndex: 1,
        }}
      >
        <Box
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
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
                sx={{
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4,
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.3rem',
                    md: '1.8rem',
                    lg: '2.2rem',
                  },
                  // 🎨 텍스트 색상 전환 효과
                  color: isTextInView ? '#000000' : 'transparent',
                  transition: 'color 1.2s ease-in-out',
                }}
              >
                {technologyContent.h1Title}
              </Typography>
              <Typography
                width={'100%'}
                fontWeight={'bold'}
                textAlign="center"
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.2rem',
                    lg: '1.4rem',
                  },
                  // 🎨 텍스트 색상 전환 효과
                  color: isTextInView ? '#000000' : 'transparent',
                  transition: 'color 1.2s ease-in-out 0.3s', // 약간의 딜레이 추가
                }}
              >
                {technologyContent.description}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );

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
        // backgroundColor: '#F3F4F6',
        position: 'relative',
      }}
    >
      <StickySection
        image={fabImg}
        msg={mainMessage}
        targetScale={0.7}
        useFadeEffect={true}
        targetOpacity={0.3}
      />
    </Box>
  );
});

TechnologySection.displayName = 'TechnologySection';

export default TechnologySection;
