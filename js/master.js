let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let countOfDate = new Date("may 9 2023 18:00:00").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDif = countOfDate - dateNow;
  let dayCount = Math.floor(dateDif / (1000 * 60 * 60 * 24));
  let hourCount = Math.floor(
    (dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minuteCount = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
  let secondCount = Math.floor((dateDif % (1000 * 60)) / 1000);
  days.innerHTML = dayCount < 10 ? `0${dayCount}` : dayCount;
  hours.innerHTML = hourCount < 10 ? `0${hourCount}` : hourCount;
  minutes.innerHTML = minuteCount < 10 ? `0${minuteCount}` : minuteCount;
  seconds.innerHTML = secondCount < 10 ? `0${secondCount}` : secondCount;
  if (dateDif < 0) {
    clearInterval(counter);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, 1000);

let yearOfTitle = document.querySelector(
  ".events .container .info .title span"
);
let yearOfCopy = document.querySelector(".copyright .year_copy");
yearOfTitle.innerHTML = new Date().getFullYear();
yearOfCopy.innerHTML = new Date().getFullYear();
