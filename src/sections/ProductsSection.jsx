// //mostly perfect
// import React, { forwardRef } from 'react';
// import { Box, Typography, Grid, Container, alpha } from '@mui/material';
// import { getProjectsList } from '../data/productData';
// import useIsInView from '../hooks/useIsInView';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const DecorationShape = ({ top, left, right, bottom, size, color, delay }) => (
//   <Box
//     sx={{
//       position: 'absolute',
//       top,
//       left,
//       right,
//       bottom,
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       backgroundColor: color,
//       opacity: 0.4,
//       zIndex: 0,
//       animation: 'float 8s ease-in-out infinite',
//       animationDelay: delay,
//       '@keyframes float': {
//         '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
//         '50%': { transform: 'translateY(-30px) rotate(15deg)' },
//       },
//     }}
//   />
// );

// const ProductsSection = forwardRef((props, ref) => {
//   const products = getProjectsList();
//   const [headerRef, isHeaderInView] = useIsInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const colorPresets = [
//     {
//       bg: 'linear-gradient(45deg,rgb(33, 112, 176) 0%, #6DD5ED 100%)',
//       text: '#FFFFFF',
//       accent: '#A6E0F7',
//     },
//     // {
//     //   // 1번: 은은한 블루-그레이 (Steel & Cloud)
//     //   bg: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//     //   text: '#0F172A', // 배경이 밝으므로 다크 텍스트 사용
//     //   accent: '#3B82F6',
//     // },
//     { bg: '#F1F7FF', text: '#0F172A', accent: '#3B82F6' },
//     {
//       bg: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
//       text: '#FFFFFF',
//       accent: '#60A5FA',
//     },
//     { bg: '#0F172A', text: '#FFFFFF', accent: '#60A5FA' },
//     {
//       // 3번: 신뢰감을 주는 중간 톤 블루 그라데이션
//       bg: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
//       text: '#0F172A',
//       accent: '#3B82F6',
//     },
//     {
//       // 1번: 은은한 블루-그레이 (Steel & Cloud)
//       bg: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//       text: '#0F172A', // 배경이 밝으므로 다크 텍스트 사용
//       accent: '#3B82F6',
//     },
//     {
//       // 2번: 매우 연한 파스텔 블루
//       bg: '#F8FAFC',
//       text: '#0F172A',
//       accent: '#3B82F6',
//     },
//   ];

//   return (
//     <Box
//       ref={ref}
//       sx={{ width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}
//     >
//       {/* --- 섹션 헤더 --- */}
//       <Box
//         ref={headerRef}
//         sx={{
//           pt: { xs: 10, md: 15 },
//           pb: { xs: 5, md: 8 },
//           textAlign: 'center',
//           opacity: isHeaderInView ? 1 : 0,
//           transform: isHeaderInView ? 'none' : 'translateY(30px)',
//           transition: 'all 1.2s ease',
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: '0.8rem',
//             fontWeight: 800,
//             color: '#3B82F6',
//             letterSpacing: '0.4em',
//             mb: 1.5,
//           }}
//         >
//           OUR SOLUTIONS
//         </Typography>
//         <Typography
//           variant="h2"
//           sx={{
//             fontSize: { xs: '2rem', md: '3.2rem' },
//             fontWeight: 950,
//             color: '#0F172A',
//           }}
//         >
//           PRODUCTS
//         </Typography>
//       </Box>

//       {/* --- 제품 리스트 --- */}
//       <Box>
//         {products.map((product, index) => (
//           <ProductItem
//             key={product.id}
//             product={product}
//             index={index}
//             stylePreset={colorPresets[index % colorPresets.length]}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// });

// const ProductItem = ({ product, index, stylePreset }) => {
//   const [itemRef, isInView] = useIsInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//   const isReversed = index % 2 !== 0;

//   return (
//     <Box
//       ref={itemRef}
//       sx={{
//         position: 'relative',
//         width: '100%',
//         // 한 화면에 두 개가 보이도록 높이 조절 (50vh)
//         minHeight: { xs: 'auto', md: '50vh' },
//         display: 'flex',
//         alignItems: 'center',
//         background: stylePreset.bg,
//         color: stylePreset.text,
//         py: { xs: 8, md: 10 },
//         // 사선 각도를 조금 더 완만하게 조정하여 촘촘한 배치 대응
//         clipPath: {
//           md:
//             index % 2 === 0
//               ? 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
//               : 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
//           xs: 'none',
//         },
//         // 섹션 간 간격 좁힘
//         mt: index === 0 ? 0 : { md: -8 },
//         zIndex: 10 - index,
//       }}
//     >
//       {/* 장식 요소들 */}
//       <DecorationShape
//         top="23%"
//         left="10%"
//         size={40}
//         color={alpha(stylePreset.text, 0.1)}
//         delay="0s"
//       />
//       <DecorationShape
//         bottom="15%"
//         right="5%"
//         size={80}
//         color={alpha(stylePreset.text, 0.05)}
//         delay="2s"
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//         <Grid
//           container
//           spacing={{ xs: 4, md: 8 }}
//           alignItems="center"
//           direction={isReversed ? 'row-reverse' : 'row'}
//           sx={{
//             // 홀수 번째(0,2,4...)는 왼쪽으로, 짝수 번째(1,3,5...)는 오른쪽으로 이동
//             transform: {
//               md: index % 2 === 0 ? 'translateX(-40px)' : 'translateX(40px)',
//             },
//           }}
//         >
//           {/* 배경 큰 숫자 장식 (공간감 확보) */}
//           <Typography
//             sx={{
//               position: 'absolute',
//               top: '10%',
//               //[isReversed ? 'left' : 'right']: '0',
//               right: isReversed ? 'auto' : '-1%',
//               left: isReversed ? '-1%' : 'auto',
//               fontSize: { xs: '8rem', md: '15rem' },
//               fontWeight: 900,
//               //color: alpha('#e2e8f0', 0.3),
//               color: alpha(stylePreset.text, 0.05),
//               zIndex: -1,
//               lineHeight: 1,
//               userSelect: 'none',
//             }}
//           >
//             {String(index + 1).padStart(2, '0')}
//           </Typography>

//           {/* 이미지 영역: 크기 최적화 */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 opacity: isInView ? 1 : 0,
//                 transform: isInView ? 'none' : `scale(0.9) translateY(20px)`,
//                 transition: 'all 1s ease 0.1s',
//                 textAlign: 'center',
//               }}
//             >
//               <Box
//                 component="img"
//                 src={product.img}
//                 alt={product.title}
//                 sx={{
//                   width: '100%',
//                   maxWidth: '300px',
//                   height: { xs: '280px', md: '300px' }, // 고정 높이
//                   objectFit: 'contain', // 이미지 비율 유지하며 컨테이너에 맞춤
//                   borderRadius: '12px',
//                   filter:
//                     stylePreset.text === '#FFFFFF'
//                       ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
//                       : 'drop-shadow(0 20px 40px rgba(15,23,42,0.1))',
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* 텍스트 영역: 컴팩트한 레이아웃 */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 opacity: isInView ? 1 : 0,
//                 transform: isInView ? 'none' : 'translateY(20px)',
//                 transition: 'all 1s ease 0.2s',
//                 pl: !isReversed ? { md: 4 } : 0,
//                 pr: isReversed ? { md: 4 } : 0,
//               }}
//             >
//               {/* 카테고리 & 라인 포인트 */}
//               <Box
//                 sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
//               >
//                 <Box
//                   sx={{ width: 30, height: 2, bgcolor: stylePreset.accent }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: '0.85rem',
//                     fontWeight: 800,
//                     letterSpacing: '0.2em',
//                     color: stylePreset.accent,
//                     textTransform: 'uppercase',
//                   }}
//                 >
//                   {product.exp}
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontSize: { xs: '1.8rem', md: '2.5rem' }, // 제목 크기 축소
//                   fontWeight: 900,
//                   mb: 2,
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {product.title}
//               </Typography>
//               {/*
//               <Typography
//                 sx={{
//                   fontSize: '0.95rem', // 설명 크기 축소
//                   lineHeight: 1.6,
//                   mb: 4,
//                   opacity: 0.8,
//                   wordBreak: 'keep-all',
//                 }}
//               >
//                 {product.description}
//               </Typography> */}

//               <Typography
//                 sx={{
//                   fontSize: '1.05rem',
//                   lineHeight: 1.8,
//                   mb: 5,
//                   opacity: 0.9,
//                   wordBreak: 'keep-all',
//                   fontWeight: 400,
//                 }}
//               >
//                 {product.description}
//               </Typography>

//               <Box
//                 component="button"
//                 sx={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: 1.5,
//                   px: 3.5,
//                   py: 1.4,
//                   backgroundColor: stylePreset.text,
//                   color: stylePreset.text === '#FFFFFF' ? '#0F172A' : '#FFFFFF',
//                   borderRadius: '50px',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: 800,
//                   fontSize: '0.85rem',
//                   transition: '0.3s',
//                   '&:hover': { transform: 'translateY(-3px)' },
//                 }}
//               >
//                 DETAILS
//                 <ArrowForwardIcon sx={{ fontSize: 16 }} />
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// ProductsSection.displayName = 'ProductsSection';

// export default ProductsSection;

import React, { forwardRef } from 'react';
import { Box, Typography, Grid, Container, alpha } from '@mui/material';
import { getProjectsList } from '../data/productData';
import useIsInView from '../hooks/useIsInView';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DecorationShape = ({ top, left, right, bottom, size, color, delay }) => (
  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: 0.4,
      zIndex: 0,
      animation: 'float 8s ease-in-out infinite',
      animationDelay: delay,
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
        '50%': { transform: 'translateY(-30px) rotate(15deg)' },
      },
    }}
  />
);

const ProductsSection = forwardRef((props, ref) => {
  const products = getProjectsList();
  const [headerRef, isHeaderInView] = useIsInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const colorPresets = [
    {
      bg: 'linear-gradient(45deg,rgb(33, 112, 176) 0%, #6DD5ED 100%)',
      text: '#FFFFFF',
      accent: '#A6E0F7',
    },
    { bg: '#F1F7FF', text: '#0F172A', accent: '#3B82F6' },
    {
      bg: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
      text: '#FFFFFF',
      accent: '#60A5FA',
    },
    { bg: '#0F172A', text: '#FFFFFF', accent: '#60A5FA' },
    {
      bg: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      text: '#0F172A',
      accent: '#3B82F6',
    },
    {
      bg: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      text: '#0F172A',
      accent: '#3B82F6',
    },
    { bg: '#F8FAFC', text: '#0F172A', accent: '#3B82F6' },
  ];

  return (
    <Box
      ref={ref}
      sx={{ width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}
    >
      {/* --- 섹션 헤더 --- */}
      <Box
        ref={headerRef}
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 8 },
          textAlign: 'center',
          opacity: isHeaderInView ? 1 : 0,
          transform: isHeaderInView ? 'none' : 'translateY(40px)',
          transition: 'all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: '#3B82F6',
            letterSpacing: '0.4em',
            mb: 1.5,
          }}
        >
          OUR SOLUTIONS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3.2rem' },
            fontWeight: 950,
            color: '#0F172A',
          }}
        >
          PRODUCTS
        </Typography>
      </Box>

      {/* --- 제품 리스트 --- */}
      <Box>
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            index={index}
            stylePreset={colorPresets[index % colorPresets.length]}
          />
        ))}
      </Box>
    </Box>
  );
});

const ProductItem = ({ product, index, stylePreset }) => {
  const [itemRef, isInView] = useIsInView({
    threshold: 1,
    triggerOnce: true,
  });
  const isReversed = index % 2 !== 0;

  return (
    <Box
      ref={itemRef}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 'auto', md: '50vh' },
        display: 'flex',
        alignItems: 'center',
        background: stylePreset.bg,
        color: stylePreset.text,
        py: { xs: 8, md: 10 },
        clipPath: {
          md:
            index % 2 === 0
              ? 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
              : 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',
          xs: 'none',
        },
        mt: index === 0 ? 0 : { md: -8 },
        zIndex: 10 - index,
        // 지그재그 애니메이션 추가
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? 'translateY(0)'
          : {
              xs: 'translateY(40px)',
              md: index % 2 === 0 ? 'translateY(-80px)' : 'translateY(80px)',
            },
        transition: 'all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      <DecorationShape
        top="23%"
        left="10%"
        size={40}
        color={alpha(stylePreset.text, 0.1)}
        delay="0s"
      />
      <DecorationShape
        bottom="15%"
        right="5%"
        size={80}
        color={alpha(stylePreset.text, 0.05)}
        delay="2s"
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* 배경 숫자 애니메이션: 좌우 지그재그 (Horizontal Zig-zag) */}
        <Typography
          sx={{
            position: 'absolute',
            top: '10%',
            right: isReversed ? 'auto' : '-1%',
            left: isReversed ? '-1%' : 'auto',
            fontSize: { xs: '8rem', md: '15rem' },
            fontWeight: 900,
            color: alpha(stylePreset.text, 0.05),
            zIndex: -1,
            lineHeight: 1,
            userSelect: 'none',
            // 애니메이션: 나타날 때 지그재그로 슬라이드
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? 'translateX(0)'
              : `translateX(${isReversed ? '-150px' : '150px'})`, // 방향 교차
            transition: 'all 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          direction={isReversed ? 'row-reverse' : 'row'}
          sx={
            {
              // 전체 그리드 고정 위치 유지를 위해 기존 transform 제거 후 개별 요소 애니메이션 적용
            }
          }
        >
          {/* 이미지 영역: 아래에서 위로 (Vertical Slide Up) */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : `translateY(60px) scale(0.95)`,
                transition: 'all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s', // 약간의 딜레이
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={product.img}
                alt={product.title}
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  height: { xs: '280px', md: '300px' },
                  objectFit: 'contain',
                  borderRadius: '12px',
                  filter:
                    stylePreset.text === '#FFFFFF'
                      ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                      : 'drop-shadow(0 20px 40px rgba(15,23,42,0.1))',
                }}
              />
            </Box>
          </Grid>

          {/* 텍스트 영역: 아래에서 위로 (Vertical Slide Up) */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(80px)', // 이미지보다 더 아래에서 시작하여 깊이감 부여
                transition: 'all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s', // 이미지 다음 순차적으로 등장
                pl: !isReversed ? { md: 4 } : 0,
                pr: isReversed ? { md: 4 } : 0,
              }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
              >
                <Box
                  sx={{ width: 30, height: 2, bgcolor: stylePreset.accent }}
                />
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.2em',
                    color: stylePreset.accent,
                    textTransform: 'uppercase',
                  }}
                >
                  {product.exp}
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 900,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                {product.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  mb: 5,
                  opacity: 0.9,
                  wordBreak: 'keep-all',
                  fontWeight: 400,
                }}
              >
                {product.description}
              </Typography>

              <Box
                component="button"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3.5,
                  py: 1.4,
                  backgroundColor: stylePreset.text,
                  color: stylePreset.text === '#FFFFFF' ? '#0F172A' : '#FFFFFF',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  transition: '0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                DETAILS
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;
