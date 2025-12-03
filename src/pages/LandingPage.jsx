import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * LandingPage 컴포넌트
 * 
 * 메인 포트폴리오 소개 페이지
 * 
 * Props: 없음
 * 
 * Example usage:
 * <LandingPage />
 */
function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: '80px', md: '120px' },
      }}
    >
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
          Landing Page
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
          메인 포트폴리오 소개 페이지
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;

