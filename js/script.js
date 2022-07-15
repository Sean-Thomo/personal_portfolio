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

const emojiTop = () => {
	const emoji = document.getElementsById('emoji');
	const sticky = emoji.offsetTop;
	window.onscroll = () => {
		if (window.pageYOffset >= sticky) {
			emoji.classList.add("emoji")
		} else {
			navbar.classList.remove("emoji")
		}
	}
}

const themeSwitch = () => {
	const icon = document.getElementById('icon');
	const profile_image = document.getElementById('profile-image');

	icon.onclick = () => {
		document.body.classList.toggle('light')
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
	emojiTop()
};

app();
