var swiper = new Swiper(".mySwiper", {
	loop: true,
	autoplay: {
		delay: 3000, disableOnInteraction: false
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

function menu() {
	const mn = document.getElementById('menuSup');
	mn.style.display = mn.style.display == "flex" ? "none" : "flex";
}