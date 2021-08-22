export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomImages(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const phrases = [
  'Тото, у меня такое ощущение, что мы больше не в Канзасе',
  'Да пребудет с тобой Сила!',
  'Хьюстон, у нас проблема',
  'Carpe diem. Ловите момент, мальчики. Сделайте свою жизнь экстраординарной!',
  'Улыбаемся и машем!',
  'Всё будет хорошо, я узнавала'
];

export const sounds = [
  'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
  'https://actions.google.com/sounds/v1/cartoon/tympani_bing.ogg',
  'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg',
  'https://actions.google.com/sounds/v1/animals/buzzing_fly.ogg',
  'https://actions.google.com/sounds/v1/emergency/emergency_siren_distant.ogg',
  'https://actions.google.com/sounds/v1/foley/jog_on_solid_wood.ogg'
];
