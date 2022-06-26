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
  let gainNode = ctx.createGain()

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination)
  
  gainNode.gain.value = 0.1 //громкость 0.1
  oscillator.frequency.value = f


  oscillator.start()
  oscillator.stop(0.5) //длительность 0.5 секунды

}