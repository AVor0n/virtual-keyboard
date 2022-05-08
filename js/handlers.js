import { changeLanguage } from './render.js';

export function initKeyboardHandlers() {
    document.addEventListener('keydown', e => {
        const $pressedKey = document.querySelector(`.key-${e.code}`);
        $pressedKey.classList.add('pressed');

        if (e.shiftKey && e.altKey && !e.repeat) {
            const lang = changeLanguage();
            localStorage.setItem('lang', lang);
        }
    });

    document.addEventListener('keyup', e => {
        const $pressedKey = document.querySelector(`.key-${e.code}`);
        $pressedKey.classList.remove('pressed');
    });
}

export function initMouseHandlers() {
    const $keyboard = document.querySelector('.keyboard');
    $keyboard.addEventListener('mousedown', e => {
        if (e.target.classList.contains('key')) {
            e.target.classList.add('pressed');
        }
    });

    $keyboard.addEventListener('mouseup', () => {
        document.querySelectorAll('.key').forEach($key => $key.classList.remove('pressed'));
    });
}
