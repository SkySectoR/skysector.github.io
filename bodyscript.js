window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		document.getElementById("header").style.fontSize = "2em";
		document.getElementById("header").style.backgroundColor =
			"rgb(0, 0, 0)";
	} else {
		document.getElementById("header").style.fontSize = "3em";
		document.getElementById("header").style.backgroundColor =
			"rgba(0, 0, 0, 0)";
	}
}

buttonanim()