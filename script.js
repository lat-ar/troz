
document.addEventListener("DOMContentLoaded", function () {
  // Redirección al hacer clic en el botón "Start experience"
  const startBtn = document.getElementById("start-experience");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      window.open("https://lens.snap.com/experience/c6c9e24c-5828-437a-b9a8-8ca6fe518550", "_blank");
    });
  }

  // Enhanced spatial interaction effects
  const landingOverlay = document.getElementById("landing-overlay");
  const landingImage = document.querySelector(".landing-image");
  const landingTitle = document.querySelector(".landing-title");
  const landingCta = document.querySelector(".landing-cta");

  // Mouse parallax effect for spatial depth
  if (landingOverlay) {
    landingOverlay.addEventListener("mousemove", function(e) {
      const rect = landingOverlay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      // Parallax effect on different elements with different depths
      if (landingImage) {
        landingImage.style.transform = `translateZ(50px) translate(${deltaX * 10}px, ${deltaY * 5}px) rotateY(${deltaX * 2}deg)`;
      }
      
      if (landingTitle) {
        landingTitle.style.transform = `translateZ(80px) translate(${deltaX * -5}px, ${deltaY * -3}px)`;
      }
      
      if (landingCta) {
        landingCta.style.transform = `translateZ(100px) translate(${deltaX * -8}px, ${deltaY * -4}px)`;
      }
    });

    // Reset transforms when mouse leaves
    landingOverlay.addEventListener("mouseleave", function() {
      if (landingImage) {
        landingImage.style.transform = "";
      }
      if (landingTitle) {
        landingTitle.style.transform = "";
      }
      if (landingCta) {
        landingCta.style.transform = "";
      }
    });
  }

  // Enhanced button interaction with spatial feedback
  if (landingCta) {
    landingCta.addEventListener("mouseenter", function() {
      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
      `;
      
      // Add ripple animation
      const style = document.createElement("style");
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
        style.remove();
      }, 600);
    });
  }

  // Subtle page load animation for professional entrance
  const elements = document.querySelectorAll('.landing-title, .landing-hashtag, .landing-image, .landing-cta');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = `translateY(30px) translateZ(${100 - index * 20}px)`;
    
    setTimeout(() => {
      element.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      element.style.opacity = '1';
      element.style.transform = '';
    }, index * 200 + 300);
  });

  // Create floating particles system
  createParticles();
});

// Particle System Functions
function createParticles() {
  const particlesContainer = document.getElementById('particles-container');
  if (!particlesContainer) {
    console.log('Particles container not found');
    return;
  }

  console.log('Creating particles...');

  // Create 6 particles with cempasúchil orange colors
  const particleColors = [
    '#FF8C00', // Dark orange
    '#FF9500', // Orange
    '#FFA500', // Golden orange
    '#FF7F00', // Dark orange
    '#FF8C00', // Dark orange
    '#FF9500'  // Orange
  ];

  const particleSizes = [8, 10, 7, 9, 11, 8]; // Even larger sizes for better visibility

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.id = `particle-${i}`;
    
    // Set initial position and styles - more visible
    particle.style.cssText = `
      width: ${particleSizes[i]}px;
      height: ${particleSizes[i]}px;
      background: radial-gradient(circle, ${particleColors[i]} 0%, ${darkenColor(particleColors[i], 15)} 100%);
      box-shadow: 0 0 ${20 + i * 4}px ${particleColors[i]}FF, 0 0 ${30 + i * 6}px ${particleColors[i]}AA;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: none;
      will-change: transform, opacity;
      opacity: 0.9;
      z-index: 30;
      display: block;
      visibility: visible;
    `;
    
    particlesContainer.appendChild(particle);
    console.log(`Created particle ${i}`);
  }

  // Start orbital animation after a short delay
  setTimeout(() => {
    startOrbitalAnimation();
    addParticleInteraction();
  }, 1000);
}

function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function startOrbitalAnimation() {
  const particles = document.querySelectorAll('.particle');
  if (!particles.length) return;

  console.log('Starting orbital animation...');

  // Orbital parameters for each particle
  const orbitalParams = [
    { radius: 180, speed: 0.02, angle: 0, zOffset: 30 },
    { radius: 220, speed: 0.015, angle: 60, zOffset: 20 },
    { radius: 150, speed: 0.025, angle: 120, zOffset: 40 },
    { radius: 200, speed: 0.018, angle: 180, zOffset: 25 },
    { radius: 250, speed: 0.012, angle: 240, zOffset: 15 },
    { radius: 160, speed: 0.022, angle: 300, zOffset: 35 }
  ];

  let animationId;

  function animate() {
    particles.forEach((particle, index) => {
      const params = orbitalParams[index];
      
      // Update angle
      params.angle += params.speed;
      
      // Calculate orbital position
      let x = Math.cos(params.angle) * params.radius;
      let y = Math.sin(params.angle) * params.radius;
      
      // Apply mouse influence if hovering
      if (window.particleIsHovering && window.particleIsHovering()) {
        const mouseInfluence = window.particleMouseInfluence || { x: 0, y: 0 };
        x += mouseInfluence.x * 20;
        y += mouseInfluence.y * 20;
      }
      
      // Apply transform - always visible after fade in
      const timeSinceStart = Date.now() - startTime;
      const opacity = timeSinceStart > 2000 ? 0.95 : Math.min(0.95, timeSinceStart / 2000);
      
      particle.style.transform = `translate(${x}px, ${y}px) translateZ(${params.zOffset}px)`;
      particle.style.opacity = opacity;
      
      // Add dynamic glow effect
      const glowIntensity = 0.8 + Math.sin(params.angle * 2) * 0.2;
      particle.style.boxShadow = `0 0 ${25 + glowIntensity * 10}px rgba(255, 140, 0, ${0.9 + glowIntensity * 0.1})`;
      
      // Make sure particle is always visible
      particle.style.display = 'block';
      particle.style.visibility = 'visible';
      
      // Add slight scale variation for more dynamic effect
      const scale = 1 + Math.sin(params.angle * 1.5) * 0.1;
      particle.style.transform += ` scale(${scale})`;
    });
    
    animationId = requestAnimationFrame(animate);
  }

  const startTime = Date.now();
  animate();
  console.log('Orbital animation started');
}

function addParticleInteraction() {
  const landingVisual = document.querySelector('.landing-visual');
  const particles = document.querySelectorAll('.particle');
  
  if (!landingVisual || !particles.length) {
    console.log('Interaction elements not found');
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;
  let mouseInfluence = { x: 0, y: 0 };

  landingVisual.addEventListener('mouseenter', () => {
    isHovering = true;
    console.log('Mouse entered visual area');
  });

  landingVisual.addEventListener('mouseleave', () => {
    isHovering = false;
    mouseInfluence = { x: 0, y: 0 };
    console.log('Mouse left visual area');
  });

  landingVisual.addEventListener('mousemove', (e) => {
    const rect = landingVisual.getBoundingClientRect();
    mouseX = e.clientX - rect.left - rect.width / 2;
    mouseY = e.clientY - rect.top - rect.height / 2;
    
    // Smooth mouse influence
    const targetInfluence = {
      x: mouseX / 100,
      y: mouseY / 100
    };
    
    mouseInfluence.x += (targetInfluence.x - mouseInfluence.x) * 0.1;
    mouseInfluence.y += (targetInfluence.y - mouseInfluence.y) * 0.1;
  });
  
  // Export mouse influence for use in animation
  window.particleMouseInfluence = mouseInfluence;
  window.particleIsHovering = () => isHovering;
}


