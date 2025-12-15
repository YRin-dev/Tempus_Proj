import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { technologyContent } from '../data/contentData';

/**
 * TechnologyCardsSection 컴포넌트
 *
 * 3개의 기술 카드를 표시하는 섹션입니다.
 * TechnologySection 다음에 나타나는 컴포넌트입니다.
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TechnologyCardsSection />
 */
function TechnologyCardsSection() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '40px 20px', md: '80px 40px' },
        backgroundColor: '#000000',
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                padding: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                  color: '#ffffff',
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
                  color: '#ffffff',
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
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  padding: '10px 24px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: 0,
                  textTransform: 'none',
                  marginTop: 'auto',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: '#ffffff',
                    color: '#000000',
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
}

export default TechnologyCardsSection;
