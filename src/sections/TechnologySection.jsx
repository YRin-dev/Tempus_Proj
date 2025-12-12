//technology section v1
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import StickySection from '../components/patterns/pageTransition/StickySection';
import { technologyContent } from '../data/contentData';
import fabImg from '../assets/photo/fabImg.png';

/**
 * TechnologySection 컴포넌트
 *
 * 기술 소개 섹션입니다.
 * - StickySection으로 이미지 고정 + 텍스트 스크롤 구조
 * - fabImg.png 배경 이미지가 스크롤하면서 서서히 축소되고 흐려지는 효과
 * - Technology 관련 3개의 카드가 가로로 나열
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TechnologySection />
 */
function TechnologySection() {
  return (
    <StickySection
      targetScale={0.7}
      image={fabImg}
      useFadeEffect={true}
      targetOpacity={0.3}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '40px 20px', md: '80px 40px' },
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* 메인 메시지 */}
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
            }}
          >
            {technologyContent.subMessage}
          </Typography>
        </Box>

        {/* TECHNOLOGY 메인 텍스트 (배경) */}
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: { xs: '8rem', md: '12rem', lg: '16rem' },
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

        {/* H1 텍스트와 설명 */}
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: 8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 3,
            }}
          >
            {technologyContent.h1Title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
              fontWeight: 400,
              color: '#ffffff',
              opacity: 0.9,
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {technologyContent.description}
          </Typography>
        </Box>

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
    </StickySection>
  );
}

export default TechnologySection;
