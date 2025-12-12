import React from 'react';
import { Box } from '@mui/material';
import ParallaxContainer from '../components/patterns/scroll/ParallaxContainer';

/**
 * ProductsSection 컴포넌트
 *
 * 제품 소개 섹션입니다.
 * - 일반 Box 컨테이너 (FullPageSection 미사용)
 * - ParallaxContainer(maxZ={6})로 6개 레이어 깊이 관리
 * - productData.js에서 프로젝트 데이터 가져오기
 * - ProjectCard들을 Grid(xs: 6, md: 6, lg: 4) 반응형 격자로 배치
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <ProductsSection />
 */
function ProductsSection() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <ParallaxContainer maxZ={6}>
        {/* TODO: Products 섹션 내용 구현 */}
        <Box>ProductsSection - 제품 소개</Box>
      </ParallaxContainer>
    </Box>
  );
}

export default ProductsSection;
