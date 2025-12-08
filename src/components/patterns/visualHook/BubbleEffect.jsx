import { MathUtils, Color } from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Instances, Instance, Float } from '@react-three/drei';

// 연한 그라데이션 색상 팔레트 (GradientBox의 pastelDream 등 참고)
const softGradientColors = [
  '#FFDEE9', // 연한 핑크
  '#B5FFFC', // 연한 시안
  '#E0F2FE', // 연한 스카이 블루
  '#F0E6FF', // 연한 라벤더
  '#FFF0E6', // 연한 피치
  '#E6F5FF', // 연한 하늘색
  '#FFE6F0', // 연한 로즈
  '#E6FFE6', // 연한 민트
];

// 두 색상 사이의 그라데이션 색상 계산
const interpolateColor = (color1, color2, factor) => {
  const c1 = new Color(color1);
  const c2 = new Color(color2);
  return c1.lerp(c2, factor);
};

// 연한 그라데이션 색상 생성
const getGradientColor = () => {
  const colorIndex1 = Math.floor(Math.random() * softGradientColors.length);
  const colorIndex2 = (colorIndex1 + 1) % softGradientColors.length;
  const gradientFactor = Math.random();

  const baseColor = softGradientColors[colorIndex1];
  const targetColor = softGradientColors[colorIndex2];
  return interpolateColor(baseColor, targetColor, gradientFactor);
};

// 파티클 데이터 생성 함수
const createParticles = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      xFactor: MathUtils.randFloatSpread(20),
      zFactor: MathUtils.randFloatSpread(20),
      oscillationSpeed: MathUtils.randFloat(0.5, 1.5),
      // 초기 Y 위치를 화면에 보이도록 조정 (-10 ~ 25 범위)
      initialY: MathUtils.randFloat(-10, 25),
      size: MathUtils.randFloat(0.2, 1.0),
      // 최적화: 사전 계산된 값들
      baseSpeed: MathUtils.randFloat(1.2, 2.2),
      oscillationAmplitudeX: MathUtils.randFloat(0.3, 0.7),
      oscillationAmplitudeZ: MathUtils.randFloat(0.2, 0.5),
    });
  }
  return data;
};

// 부드러운 속도 계산 함수 (스크롤 방향 고려하지 않음)
const calculateSmoothSpeed = (baseSpeed, scrollProgress) => {
  // 스크롤 진행률에 따른 부드러운 배율 (0.8 ~ 1.2)
  const speedMultiplier = 0.8 + scrollProgress * 0.4;

  // 급격한 변화를 방지하는 부드러운 곡선
  const smoothFactor = 1 + Math.sin(scrollProgress * Math.PI * 0.5) * 0.1;

  return baseSpeed * speedMultiplier * smoothFactor;
};

export default function BubbleEffect({ scrollProgress, bubbleCount = 120 }) {
  const ref = useRef();

  // 파티클 데이터를 메모이제이션하여 성능 최적화
  const particles = useMemo(() => createParticles(bubbleCount), [bubbleCount]);

  // 스크롤 진행률 스무딩 (급격한 변화 방지)
  const smoothedProgress = useMemo(() => {
    const clamped = Math.max(0, Math.min(1, scrollProgress));
    return Math.round(clamped * 50) / 50; // 0.02 단위로 스무딩
  }, [scrollProgress]);

  // 연한 그라데이션 색상들을 메모이제이션
  const gradientColors = useMemo(() => {
    return Array.from({ length: bubbleCount }, () => getGradientColor());
  }, [bubbleCount]);

  return (
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={1}>
      <Instances
        limit={particles.length}
        ref={ref}
        castShadow
        receiveShadow
        position={[0, -5, 0]}
      >
        {/* 기하학 복잡도 최적화 (32 -> 20) - 품질과 성능의 균형 */}
        <sphereGeometry args={[1, 20, 20]} />
        <meshPhysicalMaterial
          roughness={0.02}
          metalness={0.005}
          envMapIntensity={0.5}
          transmission={0.99}
          thickness={1.2}
          ior={1.5}
          transparent={true}
          opacity={0.3}
          clearcoat={0.1}
          clearcoatRoughness={0.1}
        />

        {particles.map((data, i) => (
          <SmoothBubble
            key={i}
            {...data}
            scrollProgress={smoothedProgress}
            color={gradientColors[i]}
          />
        ))}
      </Instances>
    </Float>
  );
}

// 부드러운 버블 컴포넌트
function SmoothBubble({
  xFactor,
  zFactor,
  oscillationSpeed,
  initialY,
  scrollProgress,
  size,
  baseSpeed,
  oscillationAmplitudeX,
  oscillationAmplitudeZ,
  color,
}) {
  const ref = useRef();
  const smoothProgressRef = useRef(scrollProgress);
  const colorRef = useRef(new Color(color));

  // 초기값들을 useMemo로 메모이제이션
  const constants = useMemo(
    () => ({
      initialX: xFactor,
      initialZ: zFactor,
      computedBaseSpeed: baseSpeed / (size + 0.1),
    }),
    [xFactor, zFactor, baseSpeed, size]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { initialX, initialZ, computedBaseSpeed } = constants;

    // 스크롤 진행률을 부드럽게 보간 (lerp)
    smoothProgressRef.current +=
      (scrollProgress - smoothProgressRef.current) * 0.05;

    // 항상 위로 상승하는 속도 (음수 없음)
    const riseSpeed = calculateSmoothSpeed(
      computedBaseSpeed,
      smoothProgressRef.current
    );
    const currentY = initialY + ((t * riseSpeed) % 60);

    // 삼각함수 계산 최적화 (부드러운 진동)
    const oscillationTime = t * oscillationSpeed;
    const currentX =
      initialX + Math.sin(oscillationTime) * oscillationAmplitudeX;
    const currentZ =
      initialZ + Math.cos(oscillationTime * 0.7) * oscillationAmplitudeZ;

    // 위치, 크기 및 색상 업데이트
    if (ref.current) {
      ref.current.position.set(currentX, currentY, currentZ);
      ref.current.scale.setScalar(size);
      // 각 버블의 색상 적용 (Instances에서 개별 색상 적용)
      if (ref.current.color) {
        ref.current.color.copy(colorRef.current);
      }
    }
  });

  return <Instance ref={ref} color={color} />;
}
