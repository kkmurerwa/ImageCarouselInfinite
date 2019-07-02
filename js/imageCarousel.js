var slideIndex = -1; //Helps monitor location of navigation
var previousIndex; //Monitors previous active item
var slides = document.getElementsByClassName("slideItem");
var images = document.getElementsByClassName("slideImage");


//Determine direction to scroll when an image is clicked
function directionDeterminer(n) {
    let activePosition;
    n -= 1;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList == "slideItem second-div") {
            activePosition = i;
            break;
        }
    }
    if (activePosition > n) {
        if (n == 0 && activePosition == 5) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
    } else if (activePosition < n) {
        if (n == 5 && activePosition == 0) {
            plusSlides(-1);
        } else {
            plusSlides(1);
        }

    }
}

//Is called when scroll is required by any function, button or object
function plusSlides(n) {
    previousIndex = slideIndex;
    showSlides(slideIndex += n);
}


//Determines if slides are descending or ascending in value and calls relevant methods
function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("first-div");
        slides[i].classList.remove("second-div");
        slides[i].classList.remove("third-div");
    }
    if (slideIndex > previousIndex) {
        ascending(slides);
    } else {
        descending(slides);
    }
}


//Helps in scrolling up
function ascending(slides) {
    if (slideIndex >= 0 && slideIndex <= 3) {
        slides[slideIndex].classList.add("first-div");
        slides[slideIndex + 1].classList.add("second-div");
        slides[slideIndex + 2].classList.add("third-div");
    } else if (slideIndex == 4) {
        slides[4].classList.add("first-div");
        slides[5].classList.add("second-div");
        slides[0].classList.add("third-div");
    } else if (slideIndex == 5) {
        slides[5].classList.add("first-div");
        slides[0].classList.add("second-div");
        slides[1].classList.add("third-div");
    } else if (slideIndex == 6) {
        slideIndex = 0;
        slides[slideIndex].classList.add("first-div");
        slides[slideIndex + 1].classList.add("second-div");
        slides[slideIndex + 2].classList.add("third-div");
    }
}



//Helps in scrolling down
function descending(slides) {
    if (slideIndex >= 0 && slideIndex <= 3) {
        slides[slideIndex].classList.add("first-div");
        slides[slideIndex + 1].classList.add("second-div");
        slides[slideIndex + 2].classList.add("third-div");
    } else if (slideIndex == -1) {
        slides[5].classList.add("first-div");
        slides[0].classList.add("second-div");
        slides[1].classList.add("third-div");
    } else if (slideIndex == -2) {
        slides[4].classList.add("first-div");
        slides[5].classList.add("second-div");
        slides[0].classList.add("third-div");
    } else {
        slideIndex = 3
        slides[3].classList.add("first-div");
        slides[4].classList.add("second-div");
        slides[5].classList.add("third-div");
    }
}