(function() {
  // Module constants
  const PARTICLE_COUNT = 60;
  const PARTICLE_RADIUS = 2;
  const SPEED_MIN = 0.3;
  const SPEED_MAX = 0.8;
  const CONNECT_DISTANCE = 120;
  const DOT_COLOR = "rgba(99, 179, 237, 0.8)";
  const LINE_COLOR_RGB = "99, 179, 237";
  const LINE_MAX_ALPHA = 0.2;

  try {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none";
    hero.prepend(canvas);

    const ctx = canvas.getContext("2d");

    // Set canvas size
    function resizeCanvas() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      // Clamp particle positions after resize
      particles.forEach(p => {
        p.x = Math.min(p.x, canvas.width - 1);
        p.y = Math.min(p.y, canvas.height - 1);
      });
    }
    resizeCanvas();

    // Initialize particles
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: PARTICLE_RADIUS
      });
    }

    // Draw static frame (for reduced motion)
    function drawStaticFrame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      });
    }

    // Animation tick
    let rafId;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions and bounce on walls
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y <= 0 || p.y >= canvas.height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DISTANCE) {
            const alpha = (1 - distance / CONNECT_DISTANCE) * LINE_MAX_ALPHA;
            ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      });

      rafId = requestAnimationFrame(tick);
    }

    // Page Visibility API
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
      } else if (!prefersReducedMotion) {
        tick();
      }
    });

    // Resize handler
    window.addEventListener("resize", resizeCanvas);

    // Start animation or draw static frame
    if (prefersReducedMotion) {
      drawStaticFrame();
    } else {
      tick();
    }

  } catch (err) {
    console.error("particles.js initialization error:", err);
  }
})();
