const hashName = location.hash;
const anchors = document.querySelectorAll('a[href^="#"]');
const headerHeight = document.querySelector('.site-header').clientHeight;
const anchorEl = document.querySelector('.anchor-links');
const anchorsHeight = anchorEl ? document.querySelector('.anchor-links').clientHeight - 50 : 0;

if( hashName != '') {
  setTimeout(()=> {
    const target = document.getElementById(hashName.replace('#', ''));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - anchorsHeight - 50;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
  }, 100);
}

anchors.forEach(link => {
  const anchorsHeight = document.querySelector('.anchor-links').clientHeight - 50;
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.hash;
    const target = document.getElementById(targetId.replace('#', ''));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - anchorsHeight - 50;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});