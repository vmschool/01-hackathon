export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function beep(f) { // f - частота в герцах

  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  oscillator.frequency.value = f;
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(0.5) //длительность 0.5 секунды

}