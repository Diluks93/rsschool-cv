/*tabs*/
const tabNavs = document.querySelectorAll('.razrysh__item'),
      tabPanes = document.querySelectorAll('.razrysh__img');
for (let i = 0; i<tabNavs.length; i++) {
    tabNavs[i].addEventListener('click', function(e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute('data-tab');

        for (let j=0; j<tabNavs.length; j++) {
            let contentAttr = tabPanes[j].getAttribute('data-tab-content');

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add('active');
                tabPanes[j].classList.add('active');
            } else {
                tabNavs[j].classList.remove('active');
                tabPanes[j].classList.remove('active');
            }
        };
    });
};
/*btn up and down*/
const goTopBtn = document.querySelector('.bi-arrow-up-square');
const goDownBtn = document.querySelector('.bi-arrow-down-square');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = 10;
    if (scrolled >= coords) {
    goTopBtn.classList.add('bi-arrow-up-square-show');
    } else goDownBtn.classList.add('bi-arrow-down-square-show');
    if (scrolled < coords) {
    goTopBtn.classList.remove('bi-arrow-up-square-show');
    } else goDownBtn.classList.remove('bi-arrow-down-square-show');
};
function backToTop() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -1000);
           setTimeout(backToTop, 500);
    }
};
/*scrolly*/
const nav = document.querySelector('#scrollspyHeading2');
window.addEventListener('scroll', scrollNav);
document.addEventListener('DOMContentLoaded', scrollNav);
function scrollNav() {
	let scrollPos = window.scrollY;
//	console.log(pageYOffset);
	if (scrollPos>10) {
		nav.classList.add('section2','main');
	} else {
		nav.classList.remove('section2','main');
	};
};