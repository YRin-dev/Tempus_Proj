import React, { forwardRef, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { technologyContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

/**
 * TechnologyCardsSection 컴포넌트
 *
 * 3개의 기술 카드를 표시하는 섹션입니다.
 * TechnologySection 다음에 나타나는 컴포넌트입니다.
 * - useBackground를 사용하여 섹션이 10%만 보여도 lightgray 배경색으로 전환
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <TechnologyCardsSection ref={technologyCardsSectionRef} />
 */
const TechnologyCardsSection = forwardRef((props, ref) => {
  const { updateBackgroundMode } = useBackground();

  // 배경색 등록용 useIsInView - 섹션이 10%만 보여도 배경색 전환
  const [sectionBgRef, isInView] = useIsInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  useEffect(() => {
    console.log('🔍 TransitionSection isInView changed:', isInView);
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
        padding: { xs: '40px 20px', md: '80px 40px' },
        // backgroundColor: '#F3F4F6',
        position: 'relative',
      }}
    >
      {/* 3개의 기술 카드 */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {technologyContent.cards.map((card) => (
          <Grid key={card.id} size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 2,
                padding: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {/* 이미지 */}
              <Box
                sx={{
                  width: '100%',
                  paddingTop: '75%',
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  backgroundColor: '#F3F4F6',
                }}
              >
                <Box
                  component="img"
                  src={card.photo}
                  alt={card.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* 제목 */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#111827',
                }}
              >
                {card.title}
              </Typography>

              {/* 설명 */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  fontWeight: 400,
                  color: '#111827',
                  opacity: 0.8,
                  flex: 1,
                }}
              >
                {card.description}
              </Typography>

              {/* 디테일 페이지로 가는 버튼 */}
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#111827',
                  color: '#111827',
                  padding: '10px 24px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: 0,
                  textTransform: 'none',
                  marginTop: 'auto',
                  '&:hover': {
                    borderColor: '#111827',
                    backgroundColor: '#111827',
                    color: '#ffffff',
                  },
                }}
              >
                자세히 보기
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

TechnologyCardsSection.displayName = 'TechnologyCardsSection';

export default TechnologyCardsSection;
