let progressSkil = document.querySelector(".progressSkil");
let prgrsBar = document.querySelectorAll(".progress-bar");
let prgrs = document.querySelectorAll(".prgrs ");
let num = document.querySelectorAll(".num")

let numCount = document.querySelectorAll(".counter h3");
let counter = document.querySelector(".counter");
let check = false;
window.onscroll = function () {
    if (window.scrollY >= progressSkil.offsetTop - 200) {
        skills();
    }
    if (window.scrollY >= counter.offsetTop - 300) {
        if (!check) {
            incresseNumber();
        }
        check = true;
    }
}
function skills() {
    prgrs.forEach(el => {
        el.childNodes[0].textContent = el.dataset.width;
        el.parentElement.parentElement.lastElementChild.childNodes[1].style.width = `${el.dataset.width}%`;
    })
}

function incresseNumber() {
    numCount.forEach(el => {
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == el.dataset.count) {
                clearInterval(count)
            }
        }, 2000 / el.dataset.count)
    })
}

let nav = document.querySelectorAll(".Portfolio ul li");
let img = document.querySelectorAll(".Portfolio img");

function filterImg() {
    nav.forEach(el => {
        img.forEach(im => {
            el.addEventListener("click", function () {
                if (el.dataset.fltr == im.dataset.img || el.dataset.fltr == im.dataset.all) {
                    im.parentElement.style.display = "block"
                } else {
                    im.parentElement.style.display = "none"
                }
            })

        })
    })
}
filterImg()
AOS.init();
