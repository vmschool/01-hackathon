import { random } from '../utils';

export const randomShape = () => {
    const arrayWithSvg = [
        [`    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-52 -53 100 100" stroke-width="2">
         <g fill="none">
          <ellipse stroke="#66899a" rx="6" ry="44"/>
          <ellipse stroke="#e1d85d" rx="6" ry="44" transform="rotate(-66)"/>
          <ellipse stroke="#80a3cf" rx="6" ry="44" transform="rotate(66)"/>
          <circle stroke="#4b541f" r="44"/>
         </g>
         <g fill="#66899a" stroke="white">
          <circle fill="#80a3cf" r="13"/>
          <circle cy="-44" r="9"/>
          <circle cx="-40" cy="18" r="9"/>
          <circle cx="40" cy="18" r="9"/>
         </g>
        </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" viewBox="0 0 100 100">
        <path d="M50,4L4,50L50,96L96,50Z" stroke="#FE4" stroke-width="3"/>
        <path d="M50,5L5,50L50,95L95,50Z" stroke="#333" fill="#FE4" stroke-width="3"/>
        <path d="M37,42c-1,0,11-20,13-20c1,0,15,20,13,20h-9c0,8,9,22,12,25l-4,4l-8,-7v13h-10v-35z" stroke="#CA0" fill="#CA0"/>
        <path d="M35,40c-1,0,11-20,13-20c1,0,15,20,13,20h-9c0,8,9,22,12,25l-4,4l-8,-7v13h-10v-35z" stroke="#333" fill="#555"/>
        </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M10,45v-35h35M10,55v35h35M60,90h35v-35" stroke="#000" stroke-width="10" fill="none"/>
    <path d="M60,10h35v35" stroke="#FC0" stroke-width="10" fill="none"/>
    <path d="M25,49l-1,28l64-60l-3,1l-56,48Z" stroke="#0F0" fill="#0F0" stroke-width="2" stroke-linejoin="round"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="43" fill="none" stroke="#000" stroke-width="9"/>
    <path d="M50,42c-6-9-20-9,-25,0c-2,5-2,11,0,16c5,9,19,9,25,0l-6-3c-2,5-9,5-11,0c-1-1-1-9,0-10c2-5,9-4,11,0z"/>
    <path d="M78,42c-6-9-20-9,-25,0c-2,5-2,11,0,16c5,9,19,9,25,0l-6-3c-2,5-9,5-11,0c-1-1-1-9,0-10c2-5,9-4,11,0z"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" stroke="#000">
    <path d="M8,80s-5,8,5,9l78,0s9,0,5-9l-40-71s-4-6-8,0z" stroke-width="2" fill="#fff" fill-rule="evenodd"/>
    <path d="M52,10 L10,85 L93,85z" stroke-width="2" stroke-linejoin="round" fill="#fc0" fill-rule="evenodd"/>
    <path d="M52,32l0,26" stroke-width="9" stroke-linecap="round" fill-rule="evenodd"/>
    <circle r="6" cx="52" cy="73"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M30,76q6-14,13-26q6-12,14-23q8-12,13-17q3-4,6-6q1-1,5-2q8-1,12-1q1,0,1,1q0,1-1,2q-13,11-27,33q-14,21-24,44q-4,9-5,11q-1,2-9,2q-5,0-6-1q-1-1-5-6q-5-8-12-15q-3-4-3-6q0-2,4-5q3-2,6-2q3,0,8,3q5,4,10,14z" fill="green"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect fill="#039" x="0" y="3" height="95" width="95" rx="15"/>
    <path d="M20,56L19,35C19,30,27,20,33,21L55,21A30,30,0,0,1,20,56Z" fill="#369" stroke="#369" stroke-linejoin="round" stroke-width="5px"/>
    <path d="M17,67A37,37,0,0,0,67,18A36,36,0,1,1,17,67" fill="#FFF"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 90">
    <path d="M68,87h-13l20-56h14l20,56h-13l-4-12h-20l-4,12zM75,65h14l-7-22l-7,22z " fill="#2a376e"/>
    <path d="M15,87h-13l20-56h14l19,56h-12l-4-12h-21l-3,12zM22,65h14l-7-22l-7,22z" fill="#bf2426"/>
    <path d="M705,169c5,18,5,27-2,48l-58,172l-62-175c0,0,7-19,11-30c3,0,9,7,9,7c0,0-7-20-4-24l9-24l10,6c-2-6-5-19-5-19l9-28l10,5c0,0-7-19-5-22l24-63c20,47,36,98,54,147zM659,485c1,5,0,11-5,19c1,10,1,13-2,17c-3,3-6,4-10,4c1-3,1-7,0-8c-13-17-42-50-42-50h-15l-14,36l6,10c0,0,13,0,19,0c1,0,2,1,3,3v6c-1-1-3-2-4-3c-14,0-24,0-37,1l-4,2c-2-5,2-9,5-9c3,0,6,0,5-2c-1-3-2-4-5-7h-16c-16-46-33-92-47-139c6,0,14-3,14-3c0,0-16-6-20-15c-3-9-14-40-14-40c0,0,9-1,13-3c-5-4-18-8-20-14c-7-18-11-35-11-35c0,0,16-1,14-2c-9-4-21-16-21-16c0,0-11-31-11-31c1-1,16,0,16,0c-4-8-16-12-13-23c4-13,9-26,12-34l9,5c-1-5-4-23-4-23l12-35l9,7l-3-24l20-51l52,147l109,310zM475,476l-5-8l-6,8h-22l48-74l27,74h-14l-5-8l-5,8h-18z" fill="#2a376e" transform="scale(0.1)"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 100 100">
    <circle r="32" cx="35" cy="65" fill="#F00" opacity="0.5"/>
    <circle r="32" cx="65" cy="65" fill="#0F0" opacity="0.5"/>
    <circle r="32" cx="50" cy="35" fill="#00F" opacity="0.5"/>
    </svg>`],

        [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 105">
    <g fill="#97C024" stroke="#97C024" stroke-linejoin="round" stroke-linecap="round">
      <path d="M14,40v24M81,40v24M38,68v24M57,68v24M28,42v31h39v-31z" stroke-width="12"/>
      <path d="M32,5l5,10M64,5l-6,10 " stroke-width="2"/>
    </g>
    <path d="M22,35h51v10h-51zM22,33c0-31,51-31,51,0" fill="#97C024"/>
    <g fill="#FFF">
      <circle cx="36" cy="22" r="2"/>
      <circle cx="59" cy="22" r="2"/>
    </g>
    </svg>`]
    ];

    const randomNumber = random(0, arr.length - 1);

    return arrayWithSvg[randomNumber];
};
