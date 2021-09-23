let btn = document.getElementById('menuBtn');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let links = document.querySelectorAll('.right a');


let flag = true;

btn.addEventListener("click", () => {
    flag = !flag;
    if (!flag) {
        left.style.transform = "translateY(0)";
        right.style.transform = "translateY(0)";
    } else {
        left.style.transform = "translateY(100vh)";
        right.style.transform = "translateY(-100vh)";
    }
    // left.style.background = "url('img/ale.JPG')";

    $('.typing-demo').toggle();
})