var slideIndex = 0;
var previousIndex;
let scroll = document.getElementById("infinitelyLong");
var slides = document.getElementsByClassName("slideItem");
var images = document.getElementsByClassName("slideImage");

function plusSlides(n) {
    // alert("I have been called");
    previousIndex = slideIndex;
    showSlides(slideIndex += n);
    // alert("previous" + previousIndex + " current" + slideIndex)
}

function showSlides(n) {
    // alert(slideIndex);

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("first-div");
        slides[i].classList.remove("second-div");
        slides[i].classList.remove("third-div");
        // alert(slides[i].classList)
    }
    if (slideIndex > previousIndex) {
        ascending(slides);
    } else {
        descending(slides);
    }
}

function ascending(slides) {
    //Add code here
    if (slideIndex >= 0 && slideIndex <= 3) {
        // alert(slideIndex);
        slides[slideIndex].classList.add("first-div");
        slides[slideIndex + 1].classList.add("second-div");
        slides[slideIndex + 2].classList.add("third-div");
    }
    if (slideIndex == 4) {
        slides[4].classList.add("first-div");
        slides[5].classList.add("second-div");
        slides[0].classList.add("third-div");
    }
    if (slideIndex == 5) {
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

function descending(slides) {
    // alert(slideIndex);
    if (slideIndex >= 0 && slideIndex <= 3) {
        // alert(slideIndex);
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
        // slideIndex = 6;
    } else {
        slideIndex = 3
        slides[3].classList.add("first-div");
        slides[4].classList.add("second-div");
        slides[5].classList.add("third-div");
    }
}