var element = document.getElementById("box");

function startAnimation() {
    element.classList.add("animation");
}

element.addEventListener("animationend", listener, false);

function listener(event) {
    if (event.type == "animationend") {
        console.log("Animation Complete");
    }
}