import React from 'react';
import FullPageSection from '../components/commons/container/FullPageSection';

/**
 * MissionSection 컴포넌트
 *
 * 브랜드 미션 메시지를 표시하는 섹션입니다.
 * - FullPageSection(widthType="vw")으로 전체 뷰포트 폭 차지
 * - missionContent에서 제목과 브랜드 미션 메시지 가져오기
 * - HumanIllustCarousel(pathType="circle", theme="dark")을 화면 중앙에 원형 배치
 * - useBackground('dark') 모드 전환 + useIsInView 사용
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <MissionSection />
 */
function MissionSection() {
  return (
    <FullPageSection widthType="vw">
      {/* TODO: 미션 섹션 내용 구현 */}
      <Box>MissionSection - 브랜드 미션 메시지</Box>
    </FullPageSection>
  );
}

export default MissionSection;
