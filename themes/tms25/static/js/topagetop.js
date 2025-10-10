document.addEventListener('DOMContentLoaded', function () {
  const pagetopBtn = document.querySelector('.topagetop');

  // スクロール量を見てボタン表示/非表示
  function showToTopBtn() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      pagetopBtn.classList.add('is-show');
    } else {
      pagetopBtn.classList.remove('is-show');
    }
  }

  // ページトップへスクロール
  pagetopBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 初回 + スクロール時に実行
  window.addEventListener('load', showToTopBtn);
  window.addEventListener('scroll', showToTopBtn);
});