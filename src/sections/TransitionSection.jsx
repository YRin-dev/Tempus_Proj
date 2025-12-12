import React from 'react';
import { Box } from '@mui/material';

/**
 * TransitionSection 컴포넌트
 *
 * 회사 소개에 대한 내용을 표시하는 섹션입니다.
 * - 가로로 넓은 카드 형식
 * - 300vw 초대형 폭 (뷰포트의 3배 너비)
 * - transitionContent에서 "ABOUT" 텍스트 가져오기
 * - useBackground('light') 모드 전환 + useIsInView 사용
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <TransitionSection />
 */
function TransitionSection() {
  return (
    <Box
      sx={{
        width: '300vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* TODO: 회사 소개 내용 구현 */}
      <Box>TransitionSection - 회사 소개 내용</Box>
    </Box>
  );
}

export default TransitionSection;
