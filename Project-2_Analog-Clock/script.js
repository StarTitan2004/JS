const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360)+90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//   console.log(secondsDegrees);
//   console.log(seconds);


  const minutes = now.getMinutes();
  const minsDegrees = ((minutes / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
//   console.log(minsDegrees);
//   console.log(minutes);

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) +90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//   console.log(hourDegrees);
//   console.log(hour);
}


setInterval(setDate, 1000);

setDate();

