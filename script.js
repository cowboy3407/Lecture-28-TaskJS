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

    document.querySelector('.days').textContent = dayNumber.toString().padStart(2, '0');
    document.querySelector('.hours').textContent = hourNumber.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minuteNumber.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = secondsNumber.toString().padStart(2, '0');
}

setInterval(countdown, 1000);
countdown();
