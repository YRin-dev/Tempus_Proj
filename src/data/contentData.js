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
  text: 'ABOUT',
};

// MissionSection 콘텐츠
export const missionContent = {
  title: 'Tempus Mission/ 응용 분야 및 특징',
  description: {
    brandName: 'Tempus',
    message: [
      '는 다양한 산업 분야에서 활용되는',
      '센서 기술과 솔루션으로 Physical AI의 새로운 가능성을 열어갑니다',
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

// CareertactSection 콘텐츠
export const qualityManagementCareerContent = {
  title: ['품질팀'],
  subtitle: ['일본어 가능자'],
  description: [
    '품질 관리 및 개선 업무를 담당할 인재를 모집합니다',
    ' 일본어 소통이 가능한 분을 우대합니다',
  ],
};
export const EngineeringCareerContent = {
  title: ['제품응용팀'],
  subtitle: ['연구소 엔지니어'],
  description: [
    '제품 응용 기술 개발 및 연구 업무를 수행할 엔지니어를 모집합니다',
  ],
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
