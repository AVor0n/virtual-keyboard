import keysData from '../data/keys.js';

// eslint-disable-next-line import/no-mutable-exports
export let lang = localStorage.getItem('lang') || 'en'; // ToDo: чекнуть раскладку пользователя

export function initRender() {
    const $keyboard = document.createElement('div');
    $keyboard.classList.add('container', 'keyboard');

    keysData.forEach(row => {
        const $row = document.createElement('div');
        $row.classList.add('row');

        row.forEach(keyData => {
            const $key = document.createElement('div');
            $key.classList.add('key', `key-${keyData.code}`);

            const $mainKeyChar = document.createElement('div');
            $mainKeyChar.classList.add('key_main-char');
            $mainKeyChar.textContent = keyData.display ?? keyData.char ?? keyData[`${lang}_char`];
            $key.append($mainKeyChar);

            if (keyData.shiftChar || keyData[`${lang}_shiftChar`]) {
                const $secondKeyChar = document.createElement('div');
                $secondKeyChar.classList.add('key_second-char');
                $secondKeyChar.textContent = keyData.shiftChar ?? keyData[`${lang}_shiftChar`];
                $key.append($secondKeyChar);
            }

            $row.append($key);
        });

        $keyboard.append($row);
    });

    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';

    document.body.classList.add('container');
    document.body.append(textarea);
    document.body.append($keyboard);
}

export function changeLanguage() {
    lang = lang === 'ru' ? 'en' : 'ru';
    keysData.forEach(row => {
        row.forEach(key => {
            if (key[`${lang}_char`]) {
                const $key = document.querySelector(`.key-${key.code} .key_main-char`);
                $key.textContent = key[`${lang}_char`];
            }
            if (key[`${lang}_shiftChar`]) {
                const $key = document.querySelector(`.key-${key.code} .key_second-char`);
                $key.textContent = key[`${lang}_shiftChar`];
            }
        });
    });
}
