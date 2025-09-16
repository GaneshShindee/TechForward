import { useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

type TiltProps = {
  children: React.ReactNode;
  max?: number; // max tilt in degrees
  scale?: number; // scale on hover
  className?: string;
};

export const Tilt = ({ children, max = 8, scale = 1.02, className }: TiltProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useTransform(rotateX, (v) => v);
  const y = useTransform(rotateY, (v) => v);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rX = (py - 0.5) * -2 * max;
    const rY = (px - 0.5) * 2 * max;
    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleLeave = () => {
    animate(rotateX, 0, { type: 'spring', stiffness: 200, damping: 15 });
    animate(rotateY, 0, { type: 'spring', stiffness: 200, damping: 15 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: x, rotateY: y, transformStyle: 'preserve-3d' as any }}
      whileHover={{ scale }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default Tilt;


