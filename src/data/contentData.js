/**
 * 랜딩 페이지 콘텐츠 데이터
 * 모든 섹션에서 사용되는 텍스트를 중앙 관리
 */

// HeroSection 콘텐츠
export const heroContent = {
  mainText: '보이지 않는것을 봅니다',
  typingSpeed: 60,
  deleteSpeed: 30,
  startDelay: 300,
  cursorType: 'line',
};

// TransitionSection 콘텐츠
export const transitionContent = {
  text: 'SENSOR',
};

// MissionSection 콘텐츠
export const missionContent = {
  title: '당신의 시스템에 적합한 코와 눈을 제공합니다',
  description: {
    brandName: 'Tempus',
    message: [
      '는 자체 MEMSFab 기반 차별화된 적외선센서 기술로',
      'Physical AI의 새로운 가능성을 열어갑니다',
    ],
  },
};

// TechnologySection 기술소개
export const MicroThermopileContent = {
  title: 'Micro Thermopile 원천기술',
  mainMessage: ['In-house MEMS Fab 기반 개발/생산'],
};

// ProjectsSection 콘텐츠
export const productContent = {
  title: 'NDIR 냉매센서',
  // 실제 프로젝트 데이터는 projectsData.js에서 관리
  description: 'NDIR 가스센서 기반 냉매센서',
};

// ContactSection 콘텐츠
export const contactContent = {
  title: ["Let's Work", 'Together'],
  subtitle: ['인재를 모집합니다,', '함께 만들어 나가요.'],
  contact: {
    email: {
      label: 'Email',
      value: 'hello@ordinary.design',
    },
    phone: {
      label: 'Phone',
      value: '+82 10 1234 5678',
    },
  },
};

// 전체 사이트 메타 데이터
export const siteMetadata = {
  // brandName: 'Tempus',
  brandTagline: 'See the unseen',
  navigation: {
    home: 'Home',
    technology: 'Technology',
    product: 'Product',
    career: 'Career',
    contact: 'Contact',
  },
};
