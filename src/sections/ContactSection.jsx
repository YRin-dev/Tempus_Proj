import React, { forwardRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import FullPageSection from '../components/commons/container/FullPageSection';
import {
  contactContent,
  qualityManagementCareerContent,
  EngineeringCareerContent,
} from '../data/contentData';

/**
 * ContactSection 컴포넌트
 *
 * 연락처 섹션입니다.
 * - FullPageSection으로 전체 화면 높이 차지
 * - "인재를 모집합니다"
 * - contactContent에서 "Let's Work Together" 제목과 서브타이틀 가져오기
 * - 현재 open 되어있는 두 공고를 flex 레이아웃으로 카드 형태로 배치
 * - 카드 아래에 채용공고 사이트 페이지로 연결해 주는 버튼
 * - 하단에 이메일과 전화번호를 큰 폰트로 표시
 *
 * Props:
 * @param {React.Ref} ref - 섹션 ref [Optional]
 *
 * Example usage:
 * <ContactSection ref={contactSectionRef} />
 */
const ContactSection = forwardRef((props, ref) => {
  const careerPosts = [
    qualityManagementCareerContent,
    EngineeringCareerContent,
  ];

  return (
    <FullPageSection ref={ref}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          padding: { xs: '40px 20px', md: '80px 40px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {/* 제목 섹션 */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 900,
              letterSpacing: '-0.02em',
              fontFamily: '"Pretendard Variable", "Pretendard", sans-serif',
              marginBottom: 2,
            }}
          >
            {contactContent.title[0]}{' '}
            <Box component="span" sx={{ display: 'block' }}>
              {contactContent.title[1]}
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            {contactContent.subtitle[0]}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
            }}
          >
            {contactContent.subtitle[1]}
          </Typography>
        </Box>

        {/* 채용 공고 카드 */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{
            width: '100%',
          }}
        >
          {careerPosts.map((post, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                padding: 4,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* 제목 */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                }}
              >
                {post.title[0]}
              </Typography>

              {/* 부제목 */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 500,
                  color: 'text.secondary',
                }}
              >
                {post.subtitle[0]}
              </Typography>

              {/* 설명 */}
              {post.description.map((desc, descIndex) => (
                <Typography
                  key={descIndex}
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </Typography>
              ))}

              {/* 채용공고 사이트로 가는 버튼 */}
              <Button
                variant="contained"
                sx={{
                  marginTop: 'auto',
                  padding: '12px 32px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: 0,
                  textTransform: 'none',
                }}
              >
                채용공고 보기
              </Button>
            </Box>
          ))}
        </Stack>

        {/* 연락처 정보 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            paddingTop: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          {/* 이메일 */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'text.secondary',
                display: 'block',
                marginBottom: 1,
              }}
            >
              {contactContent.contact.email.label}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
              }}
            >
              {contactContent.contact.email.value}
            </Typography>
          </Box>

          {/* 전화번호 */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'text.secondary',
                display: 'block',
                marginBottom: 1,
              }}
            >
              {contactContent.contact.phone.label}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
              }}
            >
              {contactContent.contact.phone.value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </FullPageSection>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
