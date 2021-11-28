import { Module } from '../core/module';
import { random } from '../utils';
import './meteor-shower.css';

import starSky from '../assets/img/starSky.jpg';

export default class MeteorShower extends Module {

    constructor(text) {
        super('MeteorShower', text);
        this.isRun = false;
    }

    trigger() {
        if (!this.isRun) {
            const body = document.querySelector('body');

            const cometTemplate = document.createElement('div');
            cometTemplate.className = 'comet';
            const core = document.createElement('core');
            core.className = 'core';
            cometTemplate.append(core);

            body.classList.add('meteor-shower');
            body.style.background = `url(${starSky}) no-repeat center`;
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';

            //body.append(meteorShower);
            const comets = [];
            for (let index = 0; index < 50; index++) {
                let comet = cometTemplate.cloneNode(true);
                comet.style.top = '-100vh';
                comet.style.left = `${250 + 100 * index}px`;
                comet.style.transition = `${random(0.5, 10)}s ease, ${random(0.5, 10)}s ease`;
                comet.style.transitionProperty = 'top, left';

                comets.push(comet);
                body.append(comets[index]);
            }

            setTimeout(() => {
                comets.forEach(comet => {
                    const left = comet.style.left.match(/\d{1,}/g)[0];
                    comet.style.top = '100vh';
                    comet.style.left = `${-1 * left}px`;
                    console.log(`${-1 * left}px`);
                });

            }, 0);

            function deleteModule() {
                comets.forEach(comet => comet.remove());
                body.classList.remove('meteor-shower');
                body.style.background = '';
                this.isRun = false;
            }

            setTimeout(deleteModule.bind(this), 3000);
            this.isRun = true;
        }

    }

}