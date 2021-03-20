
let userName = prompt("what is you name?");
let numberOfMiles = window.prompt('How far is the distance in kilometer from work to where are you living ?');
let timeNeeded = window.prompt('how long it take you in munitue to reach your work ?')
let speedTime = (numberOfMiles * 1000)/(timeNeeded*60)
speedTime = Number(speedTime);
speedTime = Math.ceil(speedTime);
console.log(speedTime);
let message =`${userName}, you need ${timeNeeded} seconde to come to work, the distance between your house and your work is ${numberOfMiles}km and your speed is ${speedTime}.m/s`
console.log(message);
alert(message);
