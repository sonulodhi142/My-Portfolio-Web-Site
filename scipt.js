let words = document.querySelectorAll('.word');
words.forEach((word)=>{
    let letters = word.textContent.split('');
    word.textContent='';
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className ='letter';
        word.append(span);
    });
});
let currentWordIdex = 0;
let maxWordIdex = words.length - 1;
words[currentWordIdex].style.opacity = '1';

let changeText = () =>{
    let currentWord = words[currentWordIdex];
    let nextWord = currentWordIdex === maxWordIdex ? words[0] : words[currentWordIdex +1];

    Array.from(currentWord.children).forEach((letter,i) =>{
        setTimeout(() =>{
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i) =>{
        letter.className = " letter behind";
        setTimeout(() =>{
            letter.className = "letter in";
        }, 340 + i * 80);
    })
    currentWordIdex = currentWordIdex === maxWordIdex ? 0 : currentWordIdex+1;
};
changeText();
setInterval(changeText,3000);

//circle script/////////////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var parcent = Math.floor(dots*marked/100);
    var points = '';
    var rotate = 360 / dots;


    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < parcent; i++){
        pointsMarked[i].classList.add('marked');
    }
})

/// mixitup section in portfolio//////

var mixer = mixitup('.portfolio-gallrey');

//active menu script/////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    let current;

    // Find the section currently in view
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    current = sections[len];

    // Remove "active" class from all menu items
    menuLi.forEach(sec => sec.classList.remove("active"));

    // Add "active" class to the menu item corresponding to the current section
    if (current) {
        let activeLink = document.querySelector(`header ul li a[href="#${current.id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);


//sticy navbar script/////////////////////////////////////////////////

const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});

/// toggle icon navbar/////////////////////////////////////////////////

let menuIcon =document.querySelector("#menu-icon");
let naveList = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    naveList.classList.toggle("open");
}

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    naveList.classList.remove("open");
}

/// parallax////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



//-------------------------------------------------------------------------//

 document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more');
    const readLessBtn = document.getElementById('read-less');
    const content = document.querySelector('.sonu .content');

   

    // Initial setup: Content is hidden after the first few lines
    const showMoreText = "Sonu Lodhi, a talented full stack engineer, has always been passionate about technology. From a young age, Sonu loved exploring how things worked, which led to mastering both front-end and back-end development. This unique blend of skills allowed Sonu to create cohesive and functional applications, quickly earning recognition in the tech community One standout project was developing a web application for a local nonprofit. The app streamlined their operations and improved their outreach, showcasing Sonu's innovative solutions and dedication to making a positive impact. This work highlighted Sonu's ability to use technology for the greater good, solidifying a reputation as a skilled and compassionate engineer";
    const truncatedText = showMoreText.substring(0, 300); // Show only first 100 characters initially
    

    content.innerHTML = truncatedText + '...';
    
    readMoreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        content.innerHTML = showMoreText;
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline';
        readLessBtn.style.textAlign = 'center';
        readLessBtn.style.marginTop = '10px';
        readLessBtn.style.display = 'inline-flex';
        
    });

    readLessBtn.addEventListener('click', function (event) {
        event.preventDefault();
        content.innerHTML = truncatedText + '...';
        readMoreBtn.style.display = 'inline';
        readLessBtn.style.display = 'none';
        readMoreBtn.style.textAlign = 'center';
        readMoreBtn.style.display = 'inline-flex';
        readMoreBtn.style.color = 'black';
    });
});

function ReadLess(event, id){
    event.preventDefault();
    const read = document.querySelector(`.hide-content[data-id="${id}"]`);
    const readMoreBtn = document.querySelector(`.read-more[data-id="${id}"]`);
    const readLessBtn = document.querySelector(`.hide[data-id="${id}"]`);

    read.style.display = 'none';
    readMoreBtn.style.display = 'inline';
    readLessBtn.style.display = 'none';
}

function ReadMore(event, id){
    event.preventDefault();
    const read = document.querySelector(`.hide-content[data-id="${id}"]`);
    const readMoreBtn = document.querySelector(`.read-more[data-id="${id}"]`);
    const readLessBtn = document.querySelector(`.hide[data-id="${id}"]`);

    read.style.display = 'inline';
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline';
}
















const hideBtn = document.getElementById('hide-1');
const hideBtn1 = document.getElementById('hide-btn-1');


function ReadMore(id) {
    event.preventDefault();
    document.getElementById('hide-content-' + id).style.display = 'inline';
    document.getElementById('hide-btn-' + id).style.display = 'none';
    document.getElementById('hide-' + id).style.display = 'inline-flex';
    
}

function ReadLess(id) {
    event.preventDefault();
    document.getElementById('hide-content-' + id).style.display = 'none';
    document.getElementById('hide-btn-' + id).style.display = 'inline-flex';
    document.getElementById('hide-' + id).style.display = 'none';
    
}