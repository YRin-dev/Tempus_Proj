// import React, { forwardRef } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Container,
//   Button,
//   Chip,
//   Stack,
// } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import { productsContent } from '../data/contentData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// // 더미 특징 데이터 (실제 데이터 연동 시 productData.js에 포함시켜야 함)
// const dummyFeatures = [
//   ['정밀 측정 기술', '긴 수명과 높은 신뢰성', '다양한 환경 적용 가능'],
//   ['조기 화재 감지', '배터리 열폭주 예방', '실시간 모니터링 시스템'],
//   ['다중 공기질 측정', '스마트 환기 연동', '쾌적한 실내 환경 조성'],
//   ['신속한 누출 감지', '원격 경보 알림', '높은 안전 기준 충족'],
//   ['비접촉 온도 측정', '넓은 측정 범위', '빠른 응답 속도'],
// ];

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   return (
//     <Box
//       ref={ref}
//       sx={{
//         width: '100%',
//         backgroundColor: '#F8F9FA', // 배경색을 연한 회색으로 변경하여 모던함 강조
//         py: { xs: 12, md: 16 },
//         overflow: 'hidden',
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* --- 섹션 헤더 --- */}
//         <Box
//           ref={headerRef}
//           sx={{
//             mb: { xs: 10, md: 14 },
//             textAlign: 'center',
//             opacity: isHeaderInView ? 1 : 0,
//             transform: isHeaderInView ? 'translateY(0)' : 'translateY(30px)',
//             transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '1rem',
//               fontWeight: 700,
//               color: '#1E40AF',
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//               mb: 2,
//               display: 'block',
//             }}
//           >
//             {productsContent.title}
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: '2.5rem', md: '3.5rem' },
//               fontWeight: 900,
//               color: '#111827',
//               lineHeight: 1.2,
//               wordBreak: 'keep-all',
//             }}
//           >
//             혁신적인 센서 기술로
//             <br />더 안전하고 스마트한 세상을 만듭니다.
//           </Typography>
//         </Box>

//         {/* --- 제품 리스트 (지그재그 레이아웃) --- */}
//         <Stack spacing={{ xs: 12, md: 16 }}>
//           {products.map((product, index) => (
//             <ProductItem
//               key={product.id}
//               product={product}
//               index={index}
//               features={dummyFeatures[index % dummyFeatures.length]} // 더미 특징 할당
//             />
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// });

// // 개별 제품 아이템 컴포넌트
// const ProductItem = ({ product, index, features }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0; // 홀수 번째 아이템은 좌우 반전

//   // 애니메이션 스타일 생성 함수
//   const getAnimStyle = (delay) => ({
//     opacity: isInView ? 1 : 0,
//     transform: isInView ? 'translateY(0)' : 'translateY(40px)',
//     transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
//   });

//   return (
//     <Grid
//       ref={itemRef}
//       container
//       spacing={{ xs: 6, md: 8 }}
//       alignItems="center"
//       direction={isReversed ? 'row-reverse' : 'row'} // 지그재그 레이아웃 핵심
//     >
//       {/* --- 이미지 영역 --- */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             position: 'relative',
//             borderRadius: 8, // 더 큰 둥근 모서리
//             overflow: 'hidden',
//             boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)', // 부드럽고 깊은 그림자
//             ...getAnimStyle(0.6), // 가장 늦게 등장
//             '&:hover img': {
//               transform: 'scale(1.05)', // 호버 시 이미지 살짝 확대
//             },
//           }}
//         >
//           <Box
//             component="img"
//             src={product.img}
//             alt={product.title}
//             sx={{
//               width: '100%',
//               height: 'auto',
//               maxHeight: { md: '500px' },
//               objectFit: 'cover',
//               display: 'block',
//               transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
//             }}
//           />
//         </Box>
//       </Grid>

//       {/* --- 텍스트 정보 영역 --- */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             pl: isReversed ? 0 : { md: 4 },
//             pr: isReversed ? { md: 4 } : 0,
//           }}
//         >
//           {/* 배지 (Badge) */}
//           <Chip
//             label={product.exp}
//             sx={{
//               mb: 3,
//               fontWeight: 700,
//               color: '#1E40AF',
//               backgroundColor: 'rgba(30, 64, 175, 0.1)',
//               borderRadius: 2,
//               px: 1,
//               ...getAnimStyle(0), // 가장 먼저 등장
//             }}
//           />

//           {/* 제목 */}
//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: '2rem', md: '2.5rem' },
//               fontWeight: 800,
//               color: '#111827',
//               mb: 2,
//               lineHeight: 1.2,
//               ...getAnimStyle(0.1),
//             }}
//           >
//             {product.title}
//           </Typography>

//           {/* 설명 */}
//           <Typography
//             sx={{
//               fontSize: '1.05rem',
//               color: '#4B5563',
//               lineHeight: 1.7,
//               mb: 4,
//               wordBreak: 'keep-all',
//               ...getAnimStyle(0.2),
//             }}
//           >
//             {product.description}
//           </Typography>

//           {/* 특징 리스트 (더미 데이터 활용) */}
//           <Stack spacing={2} sx={{ mb: 5, ...getAnimStyle(0.3) }}>
//             {features.map((feature, idx) => (
//               <Stack
//                 key={idx}
//                 direction="row"
//                 alignItems="center"
//                 spacing={1.5}
//               >
//                 <CheckCircleOutlineIcon
//                   sx={{ color: '#3B82F6', fontSize: 20 }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: '0.95rem',
//                     fontWeight: 600,
//                     color: '#374151',
//                   }}
//                 >
//                   {feature}
//                 </Typography>
//               </Stack>
//             ))}
//           </Stack>

//           {/* 버튼 */}
//           <Box sx={{ ...getAnimStyle(0.4) }}>
//             <Button
//               variant="contained"
//               endIcon={<ArrowForwardIcon />}
//               sx={{
//                 backgroundColor: '#1E40AF',
//                 padding: '12px 28px',
//                 fontSize: '0.95rem',
//                 fontWeight: 700,
//                 borderRadius: 3,
//                 textTransform: 'none',
//                 boxShadow: '0 4px 12px rgba(30, 64, 175, 0.2)',
//                 '&:hover': {
//                   backgroundColor: '#15338F',
//                   boxShadow: '0 6px 16px rgba(30, 64, 175, 0.3)',
//                   transform: 'translateY(-2px)',
//                 },
//                 transition: 'all 0.3s ease',
//               }}
//             >
//               제품 상세보기
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;

//v02
import React, { forwardRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Stack,
  Divider,
} from '@mui/material';
import { getProjectsList } from '../data/productData';
import { productsContent } from '../data/contentData';
import useIsInView from '../hooks/useIsInView';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductsSection = forwardRef((props, ref) => {
  const products = getProjectsList();
  const [headerRef, isHeaderInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: { xs: 15, md: 25 }, // 충분한 여백으로 고급스러움 강조
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* --- 섹션 헤더: 정갈한 정렬 --- */}
        <Box
          ref={headerRef}
          sx={{
            mb: { xs: 12, md: 20 },
            opacity: isHeaderInView ? 1 : 0,
            transform: isHeaderInView ? 'none' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#3B82F6',
              letterSpacing: '0.4em',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              component="span"
              sx={{ width: 40, height: '1px', bgcolor: '#3B82F6' }}
            />
            OUR SOLUTIONS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.4rem', md: '4rem' },
              fontWeight: 900,
              color: '#0F172A',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
            }}
          >
            {productsContent.title || 'Precision Technology.'}
          </Typography>
        </Box>

        {/* --- 제품 리스트 (고급스러운 지그재그) --- */}
        <Stack spacing={{ xs: 15, md: 25 }}>
          {products.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
});

// 개별 제품 아이템
const ProductItem = ({ product, index }) => {
  const [itemRef, isInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const isReversed = index % 2 !== 0;

  return (
    <Grid
      ref={itemRef}
      container
      spacing={{ xs: 4, md: 10 }}
      alignItems="center"
      direction={isReversed ? 'row-reverse' : 'row'}
    >
      {/* 이미지 섹션: 플로팅 효과 */}
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            position: 'relative',
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? 'none'
              : isReversed
              ? 'translateX(50px)'
              : 'translateX(-50px)',
            transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '4px', // 너무 둥글지 않은 세련된 모서리
              overflow: 'hidden',
              backgroundColor: '#f8fafc',
              '&::after': {
                // 이미지 보호막 효과
                content: '""',
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(45deg, rgba(15,23,42,0.05) 0%, transparent 100%)',
              },
            }}
          >
            <Box
              component="img"
              src={product.img}
              alt={product.title}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 1s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            />
          </Box>
          {/* 이미지 배경 장식 요소 */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              [isReversed ? 'right' : 'left']: -20,
              width: '100px',
              height: '100px',
              borderLeft: !isReversed ? '1px solid #e2e8f0' : 'none',
              borderTop: '1px solid #e2e8f0',
              borderRight: isReversed ? '1px solid #e2e8f0' : 'none',
              zIndex: -1,
            }}
          />
        </Box>
      </Grid>

      {/* 텍스트 섹션: 에디토리얼 스타일 */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            pl: isReversed ? 0 : { md: 4 },
            pr: isReversed ? { md: 4 } : 0,
            opacity: isInView ? 1 : 0,
            transition: 'all 1.2s ease 0.4s',
          }}
        >
          {/* 제품 번호와 카테고리 */}
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '1.2rem',
                fontWeight: 900,
                color: '#e2e8f0',
                fontFamily: 'serif',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#3B82F6',
                letterSpacing: '0.1em',
              }}
            >
              {product.exp}
            </Typography>
          </Stack>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              color: '#0F172A',
              mb: 3,
              letterSpacing: '-0.02em',
              wordBreak: 'keep-all',
            }}
          >
            {product.title}
          </Typography>

          <Divider
            sx={{
              width: 40,
              height: 2,
              bgcolor: '#0F172A',
              mb: 4,
              border: 'none',
            }}
          />

          <Typography
            sx={{
              fontSize: '1.05rem',
              color: '#64748b',
              lineHeight: 1.8,
              mb: 5,
              wordBreak: 'keep-all',
              fontWeight: 400,
            }}
          >
            {product.description}
          </Typography>

          {/* 세련된 텍스트 버튼 */}
          <Box
            component="button"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              padding: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#0F172A',
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                gap: 3,
                color: '#3B82F6',
              },
            }}
          >
            VIEW CASE STUDY
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;
