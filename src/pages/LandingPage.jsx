import React from 'react';
import { Box, Stack } from '@mui/material';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import TypingEffect from '../components/patterns/typoraphy/TypingEffect';
import {
  path_T,
  path_e,
  path_m,
  path_p,
  path_u,
  path_s,
} from '../data/logoTypePathData';
import { heroContent } from '../data/contentData';
//import tempusLogoImage from '../assets/photo/Tempuslogo.png';

function LandingPage() {
  // TEMPUS 로고 컴포넌트
  // LandingPage.jsx 안에서
  const TempusLogo = ({ size = 2 }) => {
    // 로고 전체 스케일 (0.5, 0.7, 1.2 이런 식으로 마음대로)
    const logoScale = size;

    const letterProps = {
      color: '#1E40AF',
      duration: 500,
      scale: 1, // ✅ 개별 글자 scale은 1로 고정
      triggerMode: 'viewport',
      isTrigger: true,
    };

    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          // ✅ 이 값 하나로 로고 전체 크기를 조절
          transform: `scale(${logoScale})`,
          transformOrigin: 'center bottom', // 밑변 기준으로 커졌다 작아졌다 하게
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              transform: 'translate(13px, -1px)',
            }}
          >
            <AnimatedPath
              data={path_T}
              width={145}
              height={237}
              strokeWidth={36}
              {...letterProps}
              startDelay={0}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              transform: 'translateY(1px)',
            }}
          >
            <AnimatedPath
              data={path_e}
              width={141}
              height={171}
              strokeWidth={32}
              {...letterProps}
              startDelay={100}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_m}
              width={196}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={200}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              transform: 'translateY(69px)',
            }}
          >
            <AnimatedPath
              data={path_p}
              width={160}
              height={237}
              strokeWidth={32}
              {...letterProps}
              startDelay={300}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_u}
              width={129}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={400}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AnimatedPath
              data={path_s}
              width={114}
              height={161}
              strokeWidth={32}
              {...letterProps}
              startDelay={500}
            />
          </Box>
        </Stack>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAF7',
        padding: '40px',
        overflow: 'visible',
      }}
    >
      {/* 여기 size 값만 바꿔서 전체 로고 크기 조절 */}
      <TempusLogo size={0.7} /> {/* 0.5 ~ 1.3 사이 아무 값이나 써도 됨 */}
      <Box
        sx={{
          mt: 8,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TypingEffect
          texts={[heroContent.mainText]}
          typingSpeed={heroContent.typingSpeed}
          deleteSpeed={heroContent.deleteSpeed}
          startDelay={heroContent.startDelay}
          cursorType={heroContent.cursorType}
          fontSize="5.4rem"
          cursorColor="#1E40AF"
          textAlign="center"
          sx={{ py: 0 }} // TypingEffect의 기본 패딩 제거하여 정렬 정확도 향상
        />
      </Box>
    </Box>
  );
}

export default LandingPage;
