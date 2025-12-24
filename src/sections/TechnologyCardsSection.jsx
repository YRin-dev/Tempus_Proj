import React, { forwardRef, useEffect } from 'react';
import { Box, Typography, Button, Grid, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { technologyContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import { useBackground } from '../context/BackgroundContext';

import microThermopileImg from '../assets/photo/micro-thermopile.png';
import noseImg from '../assets/photo/nose.png';
import eyeImg from '../assets/photo/eye.png';
/**
 * TechnologyCardsSection 컴포넌트 (Heuristic UX 버전)
 *
 * 휴리스틱 원칙에 기반한 사용성 개선:
 * 1. Visibility of System Status - 카드 상태 명확히 표시
 * 2. Recognition Rather Than Recall - 아이콘과 라벨로 직관적 인식
 * 3. Aesthetic and Minimalist Design - 핵심 정보 위주
 * 4. Consistency and Standards - 일관된 패턴과 계층 구조
 * 5. User Control and Freedom - 명확한 액션 버튼
 * 6. Flexibility and Efficiency - 반응형 디자인
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 */
const TechnologyCardsSection = forwardRef((props, ref) => {
  const { updateBackgroundMode } = useBackground();

  const [sectionBgRef, isInView] = useIsInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [contentRef, isContentInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isInView) {
      updateBackgroundMode('lightgray');
    }
  }, [isInView, updateBackgroundMode]);

  return (
    <Box
      ref={(node) => {
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
        padding: {
          xs: '60px 16px 40px',
          sm: '80px 24px 60px',
          md: '100px 40px 80px',
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 헤더 섹션 - Recognition Rather Than Recall */}
      <Box
        ref={contentRef}
        sx={{
          width: '100%',
          maxWidth: '1400px',
          marginBottom: { xs: 5, md: 8 },
          textAlign: { xs: 'center', md: 'left' },
          paddingX: { xs: 2, md: 0 },
        }}
      >
        {/* 상태 표시 칩 - Visibility of System Status */}
        {/* <Chip
          icon={<CheckCircleOutlineIcon sx={{ fontSize: '1rem' }} />}
          label="핵심 기술 3가지"
          sx={{
            marginBottom: 3,
            backgroundColor: '#1E40AF',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.875rem',
            height: '36px',
            opacity: isContentInView ? 1 : 0,
            transform: isContentInView ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'all 0.6s ease-out',
            '& .MuiChip-icon': {
              color: '#ffffff',
            },
          }}
        /> */}

        {/* 메인 헤딩 - Clear Hierarchy */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
            marginBottom: 2,
            opacity: isContentInView ? 1 : 0,
            transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease-out 0.1s',
          }}
        >
          Technology
        </Typography>

        {/* 설명 - Clear Information Architecture */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            lineHeight: 1.7,
            color: '#4a4a4a',
            maxWidth: '700px',
            marginX: { xs: 'auto', md: 0 },
            opacity: isContentInView ? 1 : 0,
            transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease-out 0.2s',
          }}
        >
          독자적 Micro-thermopile 기반 MEMS 센서 기술 마이크로
          전자기계시스템(MEMS) 기술을 활용한 초소형, 고성능 멀티채널센서를
          제공합니다. 자체 개발 원천기술에 기반하여 고객 요구에 맞춤형으로
          대응합니다.
        </Typography>
      </Box>

      {/* 카드 그리드 - Consistency and Standards */}
      <Grid
        container
        spacing={{ xs: 2.5, sm: 3, md: 4 }}
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {technologyContent.cards.map((card, index) => (
          <Grid key={card.id} item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '22px 22px 29px rgba(87, 78, 241, 0.06)',
                opacity: isContentInView ? 1 : 0,
                transform: isContentInView
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transitionDelay: `${0.3 + index * 0.1}s`,
                // User Control - 명확한 hover 피드백
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '22px 22px 40px rgba(87, 78, 241, 0.2)',

                  '& .card-image': {
                    transform: 'scale(1.05)',
                  },
                  '& .card-overlay': {
                    opacity: 0.6,
                  },
                  '& .card-cta': {
                    backgroundColor: '#1E40AF',
                    color: '#ffffff',
                    transform: 'translateX(4px)',
                  },
                  '& .feature-item': {
                    transform: 'translateX(4px)',
                  },
                },
              }}
            >
              {/* 이미지 섹션 - Visual Hierarchy */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '60%',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <Box
                  component="img"
                  src={
                    index === 1
                      ? noseImg
                      : index === 2
                      ? eyeImg
                      : microThermopileImg
                  }
                  alt={card.title}
                  className="card-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />

                {/* 오버레이 - Visual Feedback */}
                <Box
                  className="card-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4))',
                    opacity: 0.4,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                />
              </Box>

              {/* 콘텐츠 섹션 - Information Architecture */}
              <Box
                sx={{
                  padding: { xs: 3, sm: 3.5, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: 2,
                }}
              >
                {/* 제목 - Clear Labeling */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.4rem', md: '1.55rem' },
                    fontWeight: 700,
                    color: '#1a1a1a',
                    lineHeight: 1.3,
                    marginBottom: 1,
                  }}
                >
                  {card.title}
                </Typography>

                {/* 설명 - Readability */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.65,
                    color: '#5a5a5a',
                    flex: 1,
                    marginBottom: 2,
                  }}
                >
                  {card.description}
                </Typography>

                {/* 구분선 - Visual Separation */}
                <Box
                  sx={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    marginY: 1,
                  }}
                />

                {/* CTA 버튼 - Clear Action */}
                <Button
                  className="card-cta"
                  variant="text"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        fontSize: '1.1rem',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    padding: '14px 24px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1E40AF',
                    textTransform: 'none',
                    borderRadius: '12px',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#1E40AF',
                    },
                  }}
                  // Accessibility - 명확한 aria-label
                  aria-label={`${card.title} 자세히 보기`}
                >
                  자세히 보기
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Footer CTA - Help and Documentation */}
      <Box
        sx={{
          marginTop: { xs: 6, md: 10 },
          textAlign: 'center',
          opacity: isContentInView ? 1 : 0,
          transform: isContentInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 1s',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.95rem',
            color: '#666',
            marginBottom: 2,
          }}
        >
          더 궁금한 내용이 있으신가요?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#1E40AF',
            color: '#1E40AF',
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '10px',
            textTransform: 'none',
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              borderColor: '#1E40AF',
              backgroundColor: 'rgba(30, 64, 175, 0.04)',
            },
          }}
        >
          전체 기술 문서 보기
        </Button>
      </Box>
    </Box>
  );
});

TechnologyCardsSection.displayName = 'TechnologyCardsSection';

export default TechnologyCardsSection;
