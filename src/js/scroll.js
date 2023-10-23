function scrollToSection() {
  let durationTime = 1000;
  function smoothScroll(targetEl, duration) {
    let mobileMenu = document.querySelector('[data-menu]'),
      target = targetEl.startsWith('#')
        ? document.getElementById(targetEl.substring(1))
        : document.getElementById(targetEl),
      targetPosition = target.getBoundingClientRect().top,
      startPosition = window.pageYOffset,
      startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
      mobileMenu.classList.add('is-hidden');
      setTimeout(() => {
        requestAnimationFrame(animation);
      }, durationTime);
      return;
    }
    requestAnimationFrame(animation);
  }
  const links = document.querySelectorAll('a.scroll-to');
  if (links) {
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, durationTime);
      });
    });
  }
}
scrollToSection();
