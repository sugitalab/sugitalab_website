const PageToTop = () => {
  const ele = document.getElementsByClassName('bie-to-pagetop')[0];

  const returnTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      ele.classList.add('bie-is-active');
    } else {
      ele.classList.remove('bie-is-active');
    }
  };

  window.addEventListener('scroll', scrollWindow);
  ele.addEventListener('click', returnTop);
};

PageToTop();
