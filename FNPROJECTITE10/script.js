let words = document.querySelectorAll(".word");

words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.appendChild(span);
    });
});

let currentWordIndex = 0;

words[currentWordIndex].style.opacity = "1";

function changeText() {
    let currentWord = words[currentWordIndex];
    let nextIndex = currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
    let nextWord = words[nextIndex];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.classList.add("behind");
        setTimeout(() => {
            letter.classList.add("in");
        }, 340 + i * 80);
    });

    currentWordIndex = nextIndex;
}

changeText();
setInterval(changeText, 3000);

//circle//

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
//mix it up portfolio
var mix = mixitup('.portfolio-gallery');

//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelector('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add(active)
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)

})
// LOGOUT FUNCTION
document.getElementById("logoutBtn").addEventListener("click", function () {
    // Remove user session
    localStorage.removeItem("loggedInUser");

    // Optional: remove all saved users (but usually keep users)
    // localStorage.removeItem("users");

    alert("You have logged out successfully!");

    // Redirect to login page
    window.location.href = "index.html"; // change if login file has another name
});
if (user) {
    // Successful login
    localStorage.setItem("loggedInUser", email);
    window.location.href = "home.html";
}

