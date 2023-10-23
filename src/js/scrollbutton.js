const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up_svg_path');
const pathLength = scrollUpSvgPath.getTotalLength();
const getTop = () => window.pageYoffset || document.documentElement.scrollTop;


scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20 ms`;

const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength/height);
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
 };

window.addEventListener('scroll', () => {
    updateDashoffset();
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
    } else {
        scrollUp.classList.remove('scroll-up--active');
    }
});


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
 })