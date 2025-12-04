import React from 'react';
import { Box, Stack } from '@mui/material';
import { AnimatedPath } from '../components/patterns/visualHook/AnimatedPath';
import {
  path_T,
  path_e,
  path_m,
  path_p,
  path_u,
  path_s,
} from '../data/logoTypePathData';
//import tempusLogoImage from '../assets/photo/Tempuslogo.png';

function LandingPage() {
  // TEMPUS 로고 컴포넌트
  const TempusLogo = () => {
    const letterProps = {
      color: '#1E40AF',
      duration: 500,
      scale: 0.5,
      triggerMode: 'viewport',
      isTrigger: true,
    };

    return (
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
            // T 의 밑변을 살짝 위로 올려서 다른 글자와 딱 맞게
            transform: 'translate(13px, -1px)', // 필요하면 -5 ~ -20px 사이로 조정
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
            // P 를 전체 로고 기준으로 아래로 66px 내려서 윗변 맞추기
            transform: 'translateY(36px)',
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
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAF7',
        padding: '40px',
        overflow: 'visible',
      }}
    >
      <TempusLogo />
    </Box>
  );
}

export default LandingPage;
