import { useEffect, useRef } from 'react';

type NeuronBackgroundProps = {
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const NeuronBackground = ({ className }: NeuronBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
    const reduced = prefersReducedMotion();

    const nodeCount = reduced ? 0 : isMobile ? 40 : 90;
    const maxVelocity = isMobile ? 0.15 : 0.25;
    const linkDistance = isMobile ? 90 : 130;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxVelocity,
        vy: (Math.random() - 0.5) * maxVelocity,
        r: Math.random() * 1.6 + 0.8,
      });
    }

    const gradientGlow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 2);
    gradientGlow.addColorStop(0, 'hsla(217, 91%, 60%, 0.06)');
    gradientGlow.addColorStop(1, 'hsla(224, 76%, 48%, 0.03)');

    const resize = () => {
      const { offsetWidth, offsetHeight } = canvas;
      width = canvas.width = offsetWidth;
      height = canvas.height = offsetHeight;
    };
    const onResize = () => {
      resize();
    };
    window.addEventListener('resize', onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle background glow
      ctx.fillStyle = gradientGlow;
      ctx.fillRect(0, 0, width, height);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
      }

      // draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * (isMobile ? 0.4 : 0.7);
            ctx.strokeStyle = `hsla(217, 91%, 60%, ${alpha})`;
            ctx.lineWidth = isMobile ? 0.5 : 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes with glow
      for (const n of nodes) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        glow.addColorStop(0, 'hsla(217, 91%, 60%, 0.45)');
        glow.addColorStop(1, 'hsla(217, 91%, 60%, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'hsl(217, 91%, 60%)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (!reduced) {
      draw();
    }

    resize();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default NeuronBackground;


