const newYear = new Date('January 1, 2025 00:00:00');

function countdown() {
    const presentDate = new Date(); 
    const difference = newYear - presentDate; 

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const dayNumber = Math.floor(difference / day);
    const hourNumber = Math.floor((difference % day) / hour);
    const minuteNumber = Math.floor((difference % hour) / minute);
    const secondsNumber = Math.floor((difference % minute) / second);

    document.querySelector('.days').textContent = `0${dayNumber}`.slice(-2);
    document.querySelector('.hours').textContent = `0${hourNumber}`.slice(-2);
    document.querySelector('.minutes').textContent = `0${minuteNumber}`.slice(-2);
    document.querySelector('.seconds').textContent = `0${secondsNumber}`.slice(-2);    
}

setInterval(countdown, 1000);
countdown();


const facebookIcon = document.querySelector('#facebook');
const pinterestIcon = document.querySelector('#pinterest');
const instagramIcon = document.querySelector('#instagram');

facebookIcon.addEventListener('mouseover', () => {
    facebookIcon.querySelector('svg').style.display = 'none';
    facebookIcon.querySelector('img').style.display = 'inline-block';
});

facebookIcon.addEventListener('mouseout', () => {
    facebookIcon.querySelector('img').style.display = 'none';
    facebookIcon.querySelector('svg').style.display = 'inline-block';
});

pinterestIcon.addEventListener('mouseover', () => {
    pinterestIcon.querySelector('svg').style.display = 'none';
    pinterestIcon.querySelector('img').style.display = 'inline-block';
});

pinterestIcon.addEventListener('mouseout', () => {
    pinterestIcon.querySelector('img').style.display = 'none';
    pinterestIcon.querySelector('svg').style.display = 'inline-block';
});

instagramIcon.addEventListener('mouseover', () => {
    instagramIcon.querySelector('svg').style.display = 'none';
    instagramIcon.querySelector('img').style.display = 'inline-block';
});

instagramIcon.addEventListener('mouseout', () => {
    instagramIcon.querySelector('img').style.display = 'none';
    instagramIcon.querySelector('svg').style.display = 'inline-block';
});
