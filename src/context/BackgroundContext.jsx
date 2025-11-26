import React, { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

/**
 * BackgroundProvider 컴포넌트
 * 전체 앱의 배경색 상태를 관리하고 섹션별 트랜지션을 제공
 * 우선순위 기반으로 충돌을 방지
 * 
 * Props:
 * @param {ReactNode} children - 하위 컴포넌트들 [Required]
 * 
 * Example usage:
 * <BackgroundProvider>
 *   <App />
 * </BackgroundProvider>
 */
export function BackgroundProvider({ children }) {
  const [backgroundMode, setBackgroundMode] = useState('light');
  
  // 배경색 정의
  const backgroundColors = {
    light: '#ffffff',
    dark: '#020202'
  };

  /**
   * 직접 배경 모드 업데이트
   * @param {string} mode - 'light' 또는 'dark'
   */
  const updateBackgroundMode = (mode) => {
    if (mode === 'light' || mode === 'dark') {
      console.log(`🎨 Background mode change to: ${mode}`);
      setBackgroundMode(mode);
    }
  };

  const value = {
    backgroundMode,
    updateBackgroundMode,
    currentBackgroundColor: backgroundColors[backgroundMode],
    backgroundColors,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

/**
 * 배경 Context를 사용하는 커스텀 훅
 * @returns {Object} 배경 관련 상태와 함수들
 */
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}; 