import React from 'react';
import FullPageSection from '../components/commons/container/FullPageSection';

/**
 * ContactSection 컴포넌트
 *
 * 연락처 섹션입니다.
 * - FullPageSection으로 전체 화면 높이 차지
 * - "인재를 모집합니다"
 * - contactContent에서 "Let's Work Together" 제목과 서브타이틀 가져오기
 * - 현재 open 되어있는 두 공고를 flex 레이아웃으로 카드 형태로 배치
 * - 하단에 이메일과 전화번호를 큰 폰트로 표시
 *
 * Props:
 * (현재 props 없음)
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <FullPageSection>
      {/* TODO: Contact 섹션 내용 구현 */}
      <Box>ContactSection - 연락처 정보</Box>
    </FullPageSection>
  );
}

export default ContactSection;
