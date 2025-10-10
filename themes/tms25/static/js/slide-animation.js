// slideUp
function slideUp(target, duration = 500) {
  target.style.transitionProperty = 'height';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = `${target.offsetHeight}px`;
  
  target.offsetHeight;
  target.style.height = '0';
  window.setTimeout(() => {
    target.style.display = 'none';
    // スタイルをクリア
    ['height', 'transition-duration','transition-property']
    .forEach(prop => target.style.removeProperty(prop));
  }, duration);
}

// slideDown
function slideDown(target, duration = 500) {
  target.style.removeProperty('display');
  let display = getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;

  const height = target.offsetHeight;
  target.style.height = '0';

  target.offsetHeight;
  target.style.transitionProperty = 'height';
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;

  window.setTimeout(() => {
    ['height', 'transition-duration','transition-property']
    .forEach(prop => target.style.removeProperty(prop));
  }, duration);
}

// slideToggle
function slideToggle(target, duration = 500) {
  if (getComputedStyle(target).display === 'none') {
    slideDown(target, duration);
  } else {
    slideUp(target, duration);
  }
}
