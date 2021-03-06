const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
//const textBox = document.getElementById('cafe-text');

// cafe introsection
const coffeeImage = document.querySelector('.coffee-icon');

const cafeText = document.getElementById('cafe-text');
const cafe1 = document.getElementById('cafe1');
const cafe2 = document.getElementById('cafe2');
const cafe3 = document.getElementById('cafe3');
const cafeLink = document.getElementById('cafe-link');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    //textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    coffeeImage.style.filter = isDark ? 'invert(100%)' : 'invert(0)';
    isDark ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listner
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}

// query for cafe intro section

function imgSlider(cafeImg) {
    document.querySelector('.jeju-cafe-pic').src = cafeImg;
}


cafe1.addEventListener('click', function() {
    cafeText.innerHTML = "This is a place where you can see the sea Aewol while sipping on your cup of coffee. It also has a roof-top so you can sit outside and enjoy the scenery. What makes them so special is the fact that they have their own natural fermentation species for bread so you can taste their unique flavor of breads.";
    cafeLink.setAttribute('href', "https://www.instagram.com/sumnsome_jeju/");
});

cafe2.addEventListener('click', function() {
    cafeText.innerHTML = "A cafe that was shown on Korean show called Warm and Cozy is also a great place to visit. They have a big white coffee cup on top of their building and that is a trade mark for them. And also a romantice ocean view terrace is great addition to the cafe. You will not regret going to this place!";
    cafeLink.setAttribute('href', "https://www.jejubomnal.com/");
});

cafe3.addEventListener('click', function() {
    cafeText.innerHTML = "Cafe Groove is placed in Hyeopjae Beach. This cafe is created by chefs and marketers from New York. You can certainly feel the American style interior combined with the feel of Jeju. This exquisite place has the signature desserts: crodog and croffle. With these awesome desserts you will definitely feel the groove";
    cafeLink.setAttribute('href', "https://www.instagram.com/groov.jeju/");
});

