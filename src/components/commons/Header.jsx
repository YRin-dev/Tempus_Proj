import React, { useState } from 'react';
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useBackground } from '../../context/BackgroundContext';
import { useSectionRefs } from '../../context/SectionRefsContext';

import { siteMetadata } from '../../data/contentData';
import ContentArea from './container/ContentArea';
import tempusLogoImage from '../../assets/photo/Tempuslogo.png';

/**
 * Header 컴포넌트
 *
 * Props:
 * 없음 (전역 Context 사용)
 *
 * 기능:
 * - 투명한 배경의 상단 고정 헤더
 * - Home/Technology/Products/Career/Contact 메뉴 포함
 * - SectionRefsContext를 사용한 섹션 이동 네비게이션 기능
 * - 반응형 디자인 (모바일: Drawer 메뉴, 데스크톱: 가로 메뉴)
 * - 배경 모드에 따른 텍스트 색상 자동 조정
 *
 * Example usage:
 * <Header />
 */
const Header = () => {
  const { isMissionSectionInView, isHeroSectionInView } = useBackground();
  const { scrollToSection } = useSectionRefs();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  // HeroSection 또는 MissionSection이 보일 때만 dark 모드 스타일 적용
  const isDarkMode = isHeroSectionInView || isMissionSectionInView;

  // 기본값은 light 모드 (검은색 텍스트, 로고에 그림자)
  // HeroSection 또는 MissionSection이 보일 때만 dark 모드 (흰색 텍스트)
  const textColor = isDarkMode ? '#ffffff' : '#000000';

  // 로고 필터: MissionSection이 보일 때는 흰색 반전, 그 외에는 기본값(light 모드)일 때 그림자 적용
  const logoFilter = isMissionSectionInView
    ? 'brightness(0) invert(1)' // 흰색으로 반전
    : isDarkMode
    ? 'none' // dark 모드일 때는 그림자 없음
    : 'drop-shadow(0 1px 3px rgba(255,255,255,0.8)) drop-shadow(0 1px 2px rgba(255,255,255,0.6))'; // 기본값(light 모드)일 때 그림자

  /**
   * 로고 클릭 핸들러 - TopSection으로 이동
   */
  const handleLogoClick = () => {
    scrollToSection('top');
  };

  /**
   * 네비게이션 메뉴 클릭 핸들러
   * @param {string} section - 이동할 섹션 ('top', 'technology', 'technologyCards', 'products', 'career', 'contact')
   */
  const handleNavClick = (section) => {
    setDrawerOpen(false); // 모바일 메뉴 닫기
    scrollToSection(section);
  };

  /**
   * Drawer 토글 핸들러
   */
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  /**
   * 네비게이션 메뉴 아이템들
   * SectionRefsContext의 섹션 이름과 매핑
   * Technology 메뉴는 TechnologyCardsSection으로 이동
   */
  const menuItems = [
    { label: siteMetadata.navigation.home, section: 'top' },
    { label: siteMetadata.navigation.technology, section: 'technologyCards' },
    { label: siteMetadata.navigation.product, section: 'products' },
    { label: siteMetadata.navigation.career, section: 'career' },
    { label: siteMetadata.navigation.contact, section: 'contact' },
  ];

  /**
   * 모바일 Drawer 컨텐츠
   */
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: isDarkMode ? '#121212' : '#ffffff',
        position: 'relative',
      }}
    >
      {/* Drawer 헤더 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: `1px solid ${isDarkMode ? '#333' : '#e0e0e0'}`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: textColor,
          }}
        >
          Menu
        </Typography>
        <IconButton onClick={toggleDrawer} sx={{ color: textColor }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* 메뉴 리스트 */}
      <List sx={{ pt: 4 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.section}
            onClick={() => handleNavClick(item.section)}
            sx={{
              cursor: 'pointer',
              py: 2,
              '&:hover': {
                bgcolor: isDarkMode ? '#222' : '#f5f5f5',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: textColor,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: { xs: 2, md: 3 },
          transition: 'all 0.7s ease-in-out',
          bgcolor: 'transparent',
          //backdropFilter: isDarkMode ? 'none' : 'blur(10px)', // 기본값(light 모드)일 때 blur 적용
          borderBottom: 'none',
        }}
      >
        <ContentArea>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mx: 'auto',
            }}
          >
            {/* 회사 로고 이미지 */}
            <Box
              onClick={handleLogoClick}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                height: { xs: '2rem', md: '2.5rem' },
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <Box
                component="img"
                src={tempusLogoImage}
                alt="Tempus Logo"
                sx={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: logoFilter,
                }}
              />
            </Box>

            {/* 데스크톱 네비게이션 메뉴 */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 2, md: 4 },
                  alignItems: 'center',
                }}
              >
                {menuItems.map((item) => (
                  <Typography
                    key={item.section}
                    variant="body2"
                    onClick={() => handleNavClick(item.section)}
                    sx={{
                      color: textColor,
                      opacity: 0.8,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textShadow: isDarkMode
                        ? 'none'
                        : '0 1px 2px rgba(255,255,255,0.8)', // 기본값(light 모드)일 때 그림자
                      '&:hover': {
                        opacity: 1,
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )}

            {/* 모바일 햄버거 메뉴 */}
            {isMobile && (
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  color: textColor,
                  filter: isDarkMode
                    ? 'none'
                    : 'drop-shadow(0 1px 2px rgba(255,255,255,0.8))', // 기본값(light 모드)일 때 그림자
                  '&:hover': {
                    bgcolor: isDarkMode
                      ? 'rgba(255,255,255,0.04)'
                      : 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </ContentArea>
      </Box>

      {/* 모바일 Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
