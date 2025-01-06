function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const date = new Date();
    
    // Време
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Ден и дата
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    dateElement.textContent = `${dayOfWeek}, ${dayOfMonth} ${month} ${year} г.`;
}

// Актуализираме времето на всяка секунда
setInterval(updateTime, 1000);

// Инициализиране на часовника при зареждане на страницата
updateTime();