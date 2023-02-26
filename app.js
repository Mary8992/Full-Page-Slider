const imgBx = document.querySelector(".imgBx");
const slides = imgBx.getElementsByTagName("img");
let i = 0;

function nextSlide() {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}

function PrevSlide() {
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
}

/*

(i + 1) % slides.length is an expression that calculates the index of the next slide.

The % operator returns the remainder of a division operation, so (i + 1) % slides.length will always be a value between 0 and slides.length - 1. This allows us to cycle through the slides continuously, since it always returns a valid index within the range of slides.

Here's a breakdown of what happens in this line of code:

(i + 1) calculates the next index in the sequence.
% slides.length calculates the remainder when the next index is divided by the total number of slides. This ensures that the index wraps back around to 0 when it reaches the end of the slide array.
The resulting value is assigned to i, which becomes the index of the next slide to show.

//we can use for loop instead of second line of code in function:
function nextSlide() {
    slides[i].classList.remove("active");

    i++;

    if (i >= slides.length) {
        i = 0;
    }

    slides[i].classList.add("active");
}

In this particular case, using the modulo operator (i + 1) % slides.length is a more concise and readable way to cycle through the slides. It is also a common technique used in many programming languages for cycling through arrays or lists.

Using a for loop to achieve the same effect would require more lines of code and may be less efficient. However, if you need to perform more complex operations on each slide, then a for loop may be a better choice.

In general, the choice between a loop and other methods depends on the specific use case and the problem being solved.
 */
