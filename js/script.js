const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	// const body = document.querySelector('.hide')

	burger.onclick = () => {
		// TOGGLE NAV
		nav.classList.toggle("nav-active");
		// body.classList.toggle("blur")
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
	const profile_image = document.getElementById('profile-image');

	// const theme = localStorage.getItem('theme');

	// if (theme) {
	// 	body.classList.add(theme)
	// }

	icon.onclick = () => {
		document.body.classList.toggle('light')
		// localStorage.setItem('theme', document.body.classList)
		if(document.body.classList.contains('light')){
			icon.src = 'img/moon.png';
			profile_image.src = "img/blob_light_2.png";
		} else{
			icon.src = 'img/sun.png';
			profile_image.src = "img/blob_dark.png";
		}
	}
}

const app = () => {
	navSlide();
	themeSwitch();
};

app();
