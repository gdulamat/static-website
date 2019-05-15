(function(){

let imgs = document.querySelectorAll(".picture img, .picture-pros img"),
	lBox = document.createElement("div"),
	lbContainer = document.createElement("div"),
	lbLeft = document.createElement("div"),
	lbLeftArrow = document.createElement("div"),
	lbRight = document.createElement("div"),
	lbRightArrow = document.createElement("div"),
	lbClose = document.createElement("div"),
	lbNumber = document.createElement("div"),
	lbScope = [],
	imgIndex = 0;

buildLB();

imgs.forEach(function(img){
	img.addEventListener("click", openLightbox, false);
});

lbLeft.addEventListener("click", fromLeft, false);
lbRight.addEventListener("click", fromRight, false);
lbClose.addEventListener("click", close, false);
lBox.addEventListener("click", close, false);


// add swipe
//if(window.innerWidth < 1024)
if(window.innerWidth < 1024){
	let hamSwipe = new Hammer(lBox);
	hamSwipe.on("swipeleft", function(e){
		lbLeft.click();
	});
	hamSwipe.on("swiperight", function(e){
		lbRight.click();
	});
}

// accessibily logic
window.addEventListener("keyup", function(e){
	if(e.keyCode === 27){
        close(e);
    }
    if(e.keyCode === 37){
        fromLeft();
    }
    if(e.keyCode === 39){
        fromRight();
    }
}, false);

window.addEventListener("popstate", function(e){
	close(e);
}, false);

/****************************************************************************************/
function buildLB(){
	let fragment = document.createDocumentFragment();

	lBox.classList.add("light-box");
	fragment.appendChild(lBox);

	lbLeftArrow.classList.add("light-box__left-arrow");
	lbLeft.appendChild(lbLeftArrow);

	lbRightArrow.classList.add("light-box__right-arrow");
	lbRight.appendChild(lbRightArrow);

	lbContainer.classList.add("light-box__container");
	lBox.appendChild(lbContainer);

	lbLeft.classList.add("light-box__left");
	lBox.appendChild(lbLeft);

	lbRight.classList.add("light-box__right");
	lBox.appendChild(lbRight);

	lbClose.classList.add("light-box__close");
	lBox.appendChild(lbClose);

	lbNumber.classList.add("light-box__img-number");
	lBox.appendChild(lbNumber);

	document.body.appendChild(fragment);
}
/****************************************************************************************/
function openLightbox(e){
	window.history.pushState({open: true}, "Agnieszka Korber Portfolio", "");
	lbScope = [...e.target.parentNode.parentNode.querySelectorAll("img")];
	
	lbContainer.style.backgroundImage = "url(" + e.target.getAttribute("src") + ")";
	imgIndex = lbScope.indexOf(e.target);

	if(lbScope.length > 1){
		lbLeft.style.display = "flex";
		lbRight.style.display = "flex";
	}
	lBox.style.display = "block";
	lBox.focus();
	document.body.classList.add("block-body");
	setImgNumber();
}

function fromLeft(e){
	if(imgIndex === 0){
		lbContainer.style.backgroundImage = "url(" + lbScope[lbScope.length -1].dataset.src + ")";
		imgIndex = lbScope.length -1;
		setImgNumber();
		return;
	}
	lbContainer.style.backgroundImage = "url(" + lbScope[imgIndex -1].dataset.src + ")";
	imgIndex = imgIndex -1;
	setImgNumber();
}

function fromRight(e){
	if(imgIndex === lbScope.length -1){	
		lbContainer.style.backgroundImage = "url(" + lbScope[0].dataset.src + ")";
		imgIndex = 0;
		setImgNumber();
		return;
	}
	lbContainer.style.backgroundImage = "url(" + lbScope[imgIndex +1].dataset.src + ")";
	imgIndex = imgIndex +1;
	setImgNumber();
}

function close(e){
	if(!(e.target === lBox ||
		e.target === lbClose ||
		e.keyCode === 27 ||
		e.constructor.toString() === "function PopStateEvent() { [native code] }")) return;

	lbLeft.style.display = "none";
	lbRight.style.display = "none";
	lBox.style.display = "none";
	document.body.classList.remove("block-body");
}

function setImgNumber(){
	lbNumber.innerHTML= (imgIndex + 1) + "/" + (lbScope.length);
}

})();