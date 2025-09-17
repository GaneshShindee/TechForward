import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const isReducedMotionPreferred = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const getBackgroundColor = (element: HTMLElement): string | null => {
  const computedStyle = getComputedStyle(element);
  let backgroundColor = computedStyle.backgroundColor;
  
  // If background is transparent, check parent elements
  if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
    const parent = element.parentElement;
    if (parent && parent !== document.body) {
      return getBackgroundColor(parent);
    }
    return null;
  }
  
  return backgroundColor;
};

const checkIfDarkBackground = (color: string | null): boolean => {
  if (!color) return true; // Default to dark if can't determine
  
  // Parse RGB values
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!rgbMatch) return true;
  
  const [, r, g, b] = rgbMatch.map(Number);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance < 0.5; // Dark if luminance < 0.5
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
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  const ringTransform = useTransform([ringX, ringY], ([x, y]) => `translate3d(${x}px, ${y}px, 0)`);
  const dotTransform = useTransform([dotX, dotY], ([x, y]) => `translate3d(${x}px, ${y}px, 0)`);

  useEffect(() => {
    if (isReducedMotionPreferred()) return; // respect reduced motion
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Detect background color at cursor position
      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (element) {
        const bgColor = getBackgroundColor(element);
        const isDark = checkIfDarkBackground(bgColor);
        setIsDarkBackground(isDark);
      }
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

  // Dynamic colors based on background
  const cursorColors = isDarkBackground 
    ? {
        ring: 'border-blue-400/50 bg-blue-400/10 shadow-[0_0_20px_hsl(217_91%_60%/0.35)]',
        dot: 'bg-blue-400'
      }
    : {
        ring: 'border-blue-800/50 bg-blue-800/10 shadow-[0_0_20px_hsl(224_76%_48%/0.35)]',
        dot: 'bg-blue-800'
      };

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        aria-hidden
        className={`absolute rounded-full border ${cursorColors.ring}`}
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
        className={`absolute rounded-full ${cursorColors.dot}`}
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