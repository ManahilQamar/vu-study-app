import React, { useRef, useEffect } from 'react';

export default function DotGrid({
  dotSize = 4,
  gap = 20,
  baseColor = '#2F293A',
  activeColor = '#5227FF',
  proximity = 120,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width;
    let height;

    let mouse = {
      x: -9999,
      y: -9999,
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width;
      canvas.height = height;
    };

    resize();

    window.addEventListener('resize', resize);

    const move = e => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const leave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mouseleave', leave);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {

          const dx = mouse.x - x;
          const dy = mouse.y - y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          let color = baseColor;
          let size = dotSize;

          if (dist < proximity) {
            color = activeColor;

            size =
              dotSize +
              ((proximity - dist) / proximity) * 3;
          }

          ctx.beginPath();

          ctx.fillStyle = color;

          ctx.arc(
            x,
            y,
            size,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);

      canvas.removeEventListener(
        'mousemove',
        move
      );

      canvas.removeEventListener(
        'mouseleave',
        leave
      );
    };
  }, [
    dotSize,
    gap,
    baseColor,
    activeColor,
    proximity,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}