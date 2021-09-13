const nav = document.querySelector("#nav");


window.addEventListener("scroll", scrollNav);
document.addEventListener("DOMContentLoaded", scrollNav);


function scrollNav() {
	let scrollPos = window.scrollY;
	console.log(pageYOffset);
	if (scrollPos>0) {
		nav.classList.add("nav-scroll");
	} else {
		nav.classList.remove("nav-scroll");
	}
}