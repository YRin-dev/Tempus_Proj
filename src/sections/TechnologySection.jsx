import React, { forwardRef, useMemo } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import FadeInandOut from '../components/patterns/pageTransition/FadeInandOut';
import { technologyContent } from '../data/contentData';
import fabImg from '../assets/photo/fabImg.png';
import useIsInView from '../hooks/useIsInView';

/**
 * TechnologySection 컴포넌트
 *
 * 기술 소개 섹션입니다.
 * - FadeInandOut으로 fabImg 이미지 fade in/out 효과
 * - 텍스트는 고정된 위치에서 동적으로 나타남
 * - 현대적이고 감각적인 reveal 애니메이션
 */
const TechnologySection = forwardRef((props, ref) => {
  // 각 텍스트 요소별 개별 트리거 - threshold 최적화
  const [labelRef, isLabelInView] = useIsInView({
    threshold: 0.1, // 더 빠른 트리거를 위해 낮춤
    triggerOnce: true,
  });

  const [messageRef, isMessageInView] = useIsInView({
    threshold: 0.1, // 더 빠른 트리거를 위해 낮춤
    triggerOnce: true,
  });

  // 고정된 위치의 텍스트 콘텐츠 - 메모이제이션으로 불필요한 리렌더링 방지
  const mainMessage = useMemo(
    () => (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: { xs: '40px 20px', md: '60px 40px' },
          paddingTop: { xs: '80px', md: '120px' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* 상단 라벨 */}
          <Box
            ref={labelRef}
            sx={{
              opacity: isLabelInView ? 1 : 0,
              transform: isLabelInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              willChange: 'opacity, transform',
            }}
          >
            <Box
              sx={{
                display: 'inline-block',
                padding: '8px 24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* <Typography
                sx={{
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                Core Technology
              </Typography> */}
            </Box>
          </Box>

          {/* 메인 메시지 */}
          <Stack
            spacing={0}
            alignItems="center"
            sx={{
              width: '100%',
              maxWidth: '900px',
            }}
          >
            <Box
              ref={messageRef}
              sx={{
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4.5rem',
                    lg: '5.5rem',
                  },
                  fontWeight: 800,
                  color: '#ffffff',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  opacity: isMessageInView ? 1 : 0,
                  transform: isMessageInView
                    ? 'translate3d(0, 0, 0)'
                    : 'translate3d(0, 40px, 0)',
                  transition: isMessageInView
                    ? 'none'
                    : 'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) 200ms',
                  ...(isMessageInView
                    ? {}
                    : { willChange: 'opacity, transform' }),
                }}
              >
                {technologyContent.mainMessage[0]}
              </Typography>
            </Box>

            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                marginTop: { xs: '24px', md: '32px' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.6rem' },
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  opacity: isMessageInView ? 1 : 0,
                  transform: isMessageInView
                    ? 'translate3d(0, 0, 0)'
                    : 'translate3d(0, 30px, 0)',
                  transition: isMessageInView
                    ? 'none'
                    : 'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1) 400ms, transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) 400ms',
                  ...(isMessageInView
                    ? {}
                    : { willChange: 'opacity, transform' }),
                }}
              >
                {technologyContent.subMessage[0]}
              </Typography>
            </Box>

            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.4rem', lg: '1.6rem' },
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  opacity: isMessageInView ? 1 : 0,
                  transform: isMessageInView
                    ? 'translate3d(0, 0, 0)'
                    : 'translate3d(0, 30px, 0)',
                  transition:
                    'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1) 500ms, transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) 500ms',
                  willChange: 'opacity, transform',
                }}
              >
                {technologyContent.subMessage[1]}
              </Typography>
            </Box>
          </Stack>

          {/* 장식 라인 */}
          <Box
            sx={{
              width: '80px',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: isMessageInView ? 1 : 0,
              transform: isMessageInView ? 'scaleX(1)' : 'scaleX(0)',
              transition:
                'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 600ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 600ms',
              willChange: 'opacity, transform',
            }}
          />

          {/* TECHNOLOGY 대형 텍스트 - 이미지 하단에 고정 */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              width: '100%',
              paddingBottom: { xs: '40px', md: '60px' },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4rem', sm: '6rem', md: '9rem', lg: '14rem' },
                fontWeight: 900,
                lineHeight: 0.85,
                color: 'rgba(255, 255, 255, 0.25)',
                letterSpacing: '-0.03em',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {technologyContent.mainTitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
    [isLabelInView, isMessageInView, labelRef, messageRef]
  );

  return (
    <Box
      ref={(node) => {
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <FadeInandOut
        image={fabImg}
        msg={mainMessage}
        useFadeEffect={true}
        targetOpacity={0.3}
      />
    </Box>
  );
});

TechnologySection.displayName = 'TechnologySection';
export default TechnologySection;
