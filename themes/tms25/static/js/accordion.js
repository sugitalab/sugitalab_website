const accordion = () => {
  const accHandle = document.querySelectorAll(".accordion-trigger");
  accHandle.forEach( e => {
     e.addEventListener("click", (event) => {
      const parent = event.target.closest('.accordion-block');
      const body = parent?.querySelector('.accordion-body');
      if (body && body.classList.contains('accordion-body')) {
        slideToggle(body, 500);
      }
    });
  }); 
}

accordion();