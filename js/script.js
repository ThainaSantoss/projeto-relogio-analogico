// selecionando os elementos usados
let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");


// setar time
function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // relogio digita
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  // relogio analogico

  // calculo de angulos 
  let sDeg = ((360 / 60) * second) - 90;
  let mDeg = ((360 / 60) * minute) - 90;
  let hDeg = ((360 / 12 ) * hour) - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

// adiciona o 0 (00:00:00)
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}
// função para iniciar relogios a cada segundo 
setInterval(updateClock, 1000);
// função para ele ser chamado uma vez que ele seja executado sem tempo de espera
updateClock();
