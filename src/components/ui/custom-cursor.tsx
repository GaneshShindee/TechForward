import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const isReducedMotionPreferred = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dotX = useSpring(mouseX, { stiffness: 1500, damping: 90, mass: 0.4 });
  const dotY = useSpring(mouseY, { stiffness: 1500, damping: 90, mass: 0.4 });
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.6 });
  const scale = useRef(1);
  const [isPointer, setIsPointer] = useState(false);

  const ringTransform = useTransform([ringX, ringY], ([x, y]) => `translate3d(${x}px, ${y}px, 0)`);
  const dotTransform = useTransform([dotX, dotY], ([x, y]) => `translate3d(${x}px, ${y}px, 0)`);

  useEffect(() => {
    if (isReducedMotionPreferred()) return; // respect reduced motion
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const over = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const pointerLike = !!target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        getComputedStyle(target).cursor === 'pointer'
      );
      setIsPointer(pointerLike);
      scale.current = pointerLike ? 1.35 : 1;
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over as any);
    document.body.classList.add('custom-cursor-active');
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over as any);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  const ringSize = 36;
  const dotSize = 6;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        aria-hidden
        className="absolute rounded-full border border-primary/50 bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          transform: ringTransform,
          transition: 'box-shadow 180ms ease',
        }}
        animate={{ scale: scale.current }}
      />
      <motion.div
        aria-hidden
        className="absolute rounded-full bg-primary"
        style={{
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
          transform: dotTransform,
        }}
        animate={{ scale: isPointer ? 0.8 : 1 }}
      />
    </div>
  );
};

export default CustomCursor;


