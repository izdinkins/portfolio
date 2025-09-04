import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_BEHIND_GRADIENT =
  'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)';
const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20
};

const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
const easeInOutCubic = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const ProfileCard = ({
  avatarUrl = '<Placeholder avatar URL>',
  miniAvatarUrl,
  iconUrl = '',
  grainUrl = '',
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  className = '',
  onContactClick
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;
    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = currentTime => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    event => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    animationHandlers.cancelAnimation();
    wrap.classList.add('active');
    card.classList.add('active');
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    event => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY,
        card,
        wrap
      );
      wrap.classList.remove('active');
      card.classList.remove('active');
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    event => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const { beta, gamma } = event;
      if (!beta || !gamma) return;
      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
        window.DeviceMotionEvent.requestPermission()
          .then(state => {
            if (state === 'granted') window.addEventListener('deviceorientation', handleDeviceOrientation);
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);
    card.addEventListener('click', handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);

    return () => {
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
      card.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      animationHandlers.cancelAnimation();
    };
  }, [enableTilt, animationHandlers, handlePointerEnter, handlePointerLeave, handlePointerMove, handleDeviceOrientation]);

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? `url(${iconUrl})` : 'none',
      '--grain': grainUrl ? `url(${grainUrl})` : 'none',
      '--behind-gradient': showBehindGradient ? behindGradient ?? DEFAULT_BEHIND_GRADIENT : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT
    }),
    [iconUrl, grainUrl, behindGradient, innerGradient, showBehindGradient]
  );

  return (
    <div ref={wrapRef} className={`relative perspective-[500px] ${className}`} style={cardStyle}>
      <section
        ref={cardRef}
        className="relative grid aspect-[0.718] max-h-[540px] h-[80svh] rounded-[30px] border border-white/10 overflow-hidden transform-gpu transition-transform duration-[1000ms]"
      >
        {/* Background gradients & effects */}
        <div className="absolute inset-0 bg-[image:var(--behind-gradient)] scale-[0.8] blur-[36px] contrast-[2] saturate-[2] transition-all duration-500"></div>
        <div className="absolute inset-0 bg-[image:var(--inner-gradient)]"></div>

        {/* Shine & glare */}
        <div className="absolute inset-0 mix-blend-color-dodge pointer-events-none bg-[repeating-linear-gradient(0deg,#c137ff,#07c6ff,#c137ff),radial-gradient(farthest-corner_circle_at_var(--pointer-x)_var(--pointer-y),hsla(0,0%,100%,0.1)_12%,hsla(0,0%,100%,0.15)_20%,hsla(0,0%,100%,0.25)_120%)] bg-blend-hard-light bg-[length:500%_500%,300%_300%] animate-holo-bg"></div>
        <div className="absolute inset-0 mix-blend-overlay bg-radial-gradient"></div>

        {/* User avatar */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
          <div className="flex justify-between items-center bg-white/10 backdrop-blur-xl rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img src={miniAvatarUrl || avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/90 text-sm font-medium">@{handle}</span>
                <span className="text-white/70 text-sm">{status}</span>
              </div>
            </div>
            <button
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all"
              onClick={() => onContactClick?.()}
            >
              {contactText}
            </button>
          </div>
          {/* Name & title */}
          <div className="mt-3 text-center">
            <h3 className="text-[min(5svh,3em)] font-semibold bg-gradient-to-b from-white to-indigo-300 bg-clip-text text-transparent">{name}</h3>
            <p className="text-[16px] font-semibold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent -mt-2">{title}</p>
          </div>
        </div>

        {/* Main avatar */}
        <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
          <img src={avatarUrl} alt={name} className="w-full max-w-[150px] object-contain opacity-[calc(1.75-var(--pointer-from-center))]" />
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);
