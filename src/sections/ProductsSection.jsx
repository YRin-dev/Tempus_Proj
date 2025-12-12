import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import ParallaxContainer from '../components/patterns/scroll/ParallaxContainer';
import ParallaxLayer from '../components/patterns/scroll/ParallaxLayer';
import ProjectCard from '../components/commons/ProjectCard';
import { getProjectsList } from '../data/productData';
import { productsContent } from '../data/contentData';

/**
 * ProductsSection 컴포넌트
 *
 * 제품 소개 섹션입니다.
 * - 일반 Box 컨테이너 (FullPageSection 미사용)
 * - ParallaxContainer(maxZ={6})로 6개 레이어 깊이 관리
 * - productData.js에서 프로젝트 데이터 가져오기
 * - ProjectCard들을 Grid(xs: 6, md: 6, lg: 4) 반응형 격자로 배치
 * - ParallaxLayer의 depth값에 따라 크기 조절 (높을수록 작게, 낮을수록 크게)
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <ProductsSection />
 */
function ProductsSection() {
  const products = getProjectsList();

  // depthZ에 따른 스케일 계산 (가장 가까운 depth=1 기준, 멀리 있는 것은 1 이하)
  const getScaleByDepth = (depthZ) => {
    const baseDepth = 1; // 가장 가까운 depth
    return Math.max(0.7, 1 - (depthZ - baseDepth) * 0.1); // depth가 높을수록 작게
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        padding: { xs: '40px 20px', md: '80px 40px' },
      }}
    >
      <ParallaxContainer maxZ={6}>
        {/* 제목 레이어 */}
        <ParallaxLayer depthZ={5}>
          <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
                fontWeight: 700,
                margin: 0,
              }}
            >
              {productsContent.title}
            </Box>
          </Box>
        </ParallaxLayer>

        {/* 제품 카드 레이어 - Grid 레이아웃 */}
        <ParallaxLayer depthZ={3}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            {products.map((product, index) => {
              // 각 제품마다 다른 depthZ 할당 (리듬감 있는 패턴)
              const depthZ = index % 3 === 0 ? 1 : index % 3 === 1 ? 2 : 3;
              const scale = getScaleByDepth(depthZ);

              return (
                <Grid key={product.id} size={{ xs: 6, md: 6, lg: 4 }}>
                  <Box
                    sx={{
                      transform: `scale(${scale})`,
                      transformOrigin: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                      }}
                    >
                      {/* 반은 사진, 반은 title과 description */}
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', md: 'row' },
                          gap: 2,
                        }}
                      >
                        {/* 사진 부분 */}
                        <Box
                          sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: '200px', md: '300px' },
                            overflow: 'hidden',
                            borderRadius: 1,
                          }}
                        >
                          <Box
                            component="img"
                            src={product.img}
                            alt={product.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </Box>

                        {/* 제목과 설명 부분 */}
                        <Box
                          sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 1,
                          }}
                        >
                          <Box
                            component="h3"
                            sx={{
                              fontSize: { xs: '1.25rem', md: '1.5rem' },
                              fontWeight: 600,
                              margin: 0,
                            }}
                          >
                            {product.title}
                          </Box>
                          <Box
                            component="p"
                            sx={{
                              fontSize: { xs: '0.875rem', md: '1rem' },
                              fontWeight: 400,
                              color: 'text.secondary',
                              margin: 0,
                            }}
                          >
                            {product.description}
                          </Box>
                        </Box>
                      </Box>

                      {/* 디테일 페이지로 가는 버튼 */}
                      <Button
                        variant="outlined"
                        sx={{
                          alignSelf: 'flex-start',
                          padding: '10px 24px',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          borderRadius: 0,
                          textTransform: 'none',
                        }}
                      >
                        자세히 보기
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </ParallaxLayer>
      </ParallaxContainer>
    </Box>
  );
}

export default ProductsSection;
