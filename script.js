function rngnumbers() {
	var x = document.getElementsByClassName("button1");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].innerHTML = Math.floor(Math.random() * 100 + 1);
	}
}

function contentwidth() {
	var checkBox = document.getElementById("myCheck");
	var x = document.getElementsByClassName("content");
	var i;
	if (checkBox.checked == true) {
		for (i = 0; i < x.length; i++) {
			x[i].style.width = "100%";
		}
	} else {
		for (i = 0; i < x.length; i++) {
			x[i].style.width = "80%";
		}
	}
}

function demo() {
	var x = document.getElementsByClassName("button1");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].innerHTML = "hello";
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buttonclicked(web) {
	var site1 = document.getElementsByClassName("button1");
	var i;
	for (i = 0; i < site1.length; i++) {
		site1[i].style.animationDelay = "0s";
		site1[i].classList.replace("animate__fadeInUpBig", "animate__fadeOutLeft");
	}
	await sleep(500);
	window.location.href = web;
	console.log(i);
	/* alert("This is an alert box") */;
}

function buttonanim() {
	var btn = document.getElementsByClassName("button1");
	var anim = "animate__fadeInUpBig"
	var i;
	for (i = 0; i < btn.length; i++) {
		var delay = i * 0.05 + "s"
		btn[i].style.animationDelay = delay;
		btn[i].classList.add(anim);
		console.log(delay)
	}
}


async function btnreveal() {
	var btn = document.getElementsByClassName("button1")
	var i;
	for (i = 0; i < btn.length; i++) {
		if (btn[i].innerHTML == "Discord") {
			btn[i].innerHTML = "Copied"
			await sleep(1000)
			btn[i].innerHTML = "SectoR#5931"
			navigator.clipboard.writeText("SectoR#5931")
		}
	}
}


async function backbutton() {
	var site = document.getElementsByClassName("content");
	var i;
	for (i = 0; i < site.length; i++) {
		site[i].style.animation = "fadeOutRight 1s forwards";
	}
	await sleep(500);
	window.location.href = "../";
}

//alert("This is an alert box");
