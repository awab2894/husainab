let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountin1 = document.getElementById('mountin1');
let mountin2 = document.getElementById('mountin2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountin3 = document.getElementById('mountin3');


window.onscroll = function () {
    let value = scrollY;
    let value2 = value - 140;
    stars.style.left = value * 1 + 'px';
    moon.style.top = value * 4 + 'px';
    mountin1.style.top = value *2 + 'px';
    mountin2.style.top = value * 1.2 + 'px';
    river.style.top = value * 1 + 'px';
    boat.style.top = value  + 'px';
    boat.style.right = value * 3 + 'px';

    if (scrollY >= 172) {
        document.querySelector('.main').style.background = 'liner-gradient(#fff ,##30c)';
    }
}