const divProfile = document.getElementById("divProfile");
const divProfileButton = document.getElementById("divProfileButton");
const divShare = document.getElementById("divShare");
const divShareButton = document.getElementById("divShareButton");
const drawersImage = document.getElementById("responsiveImage");

document.addEventListener("DOMContentLoaded", () => {
	function toggleVisibilityMobile(showDiv, hideDiv, showButton) {
		if (showDiv.classList.contains("hidden")) {
			showDiv.classList.remove("hidden");
			hideDiv.classList.remove("flex");
			showDiv.classList.add("flex");
			hideDiv.classList.add("hidden");
			showButton.classList.remove("hidden");
		}
	}
	
	function toggleVisibilityDesktop(showDiv, hideButton) {
		if (showDiv.classList.contains("hidden")) {
			showDiv.classList.remove("hidden");
			showDiv.classList.add("flex");
			hideButton.classList.add("hidden");
		} else {
			showDiv.classList.remove("flex");
			showDiv.classList.add("hidden");
			hideButton.classList.add("hidden");
		}
	}

	function handleProfileButtonClick() {
		if (window.innerWidth < 1024) {
				toggleVisibilityMobile(divShare, divProfile, divShareButton);
		} else {
				toggleVisibilityDesktop(divShare, divShareButton);
		}
	}

	function handleShareButtonClick() {
			toggleVisibilityMobile(divProfile, divShare);
	}

	function configureResponsiveScreen() {
		const windowWidth = window.innerWidth;

		divProfileButton.removeEventListener("click", handleProfileButtonClick);
		divShareButton.removeEventListener("click", handleShareButtonClick);

		if (windowWidth >= 1024) {
				divProfileButton.addEventListener("click", handleProfileButtonClick);
				drawersImage.src = "./images/drawers(desktop).png";
		} else {
				divProfileButton.addEventListener("click", handleProfileButtonClick);
				divShareButton.addEventListener("click", handleShareButtonClick);
				drawersImage.src = "./images/drawers(mobile).jpg";
		}
	}
	
	configureResponsiveScreen();
	window.addEventListener("resize", configureResponsiveScreen);
})