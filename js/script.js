const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.onclick = () => {
		// TOGGLE NAV
		nav.classList.toggle("nav-active");

		// ANIMATE LINKS
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ``;
			} else {
				link.style.animation = `navLinkFade 0.3s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});

		// BURGER ANIMATION
		burger.classList.toggle("toggle");
	};
};

const themeSwitch = () => {
	const icon = document.getElementById('icon');

	icon.addEventListener('click', () => {
		document.body.classList.toggle('light')
		if(document.body.classList.contains('light')){
			icon.src = 'img/moon.png'
		} else{
			icon.src = 'img/sun.png'
		}
	})
}

const app = () => {
	navSlide();
	themeSwitch();
};

app();
