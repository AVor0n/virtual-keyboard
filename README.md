# RSS Виртуальная клавиатура

## Задание

#### Вам нужно создать виртуальную клавиатуру наподобие такой:
![](https://i.imgur.com/MUYRlDL.png)

### Функциональные требования:
- дизайн — на ваше усмотрение
- изначально файл index.html должен быть пустым (все необходимые элементы генерируются с использованием JS)
- нажатие на кнопкy физической клавиатуры должно подсвечивать нажатую кнопку на виртуальной:
  ![](https://i.imgur.com/yU70dGz.png)
  **Может быть различия в нажатиях на кнопки клавиатуры для разных операционных систем: windows и Mac OS. Что бы избежать ошибок необходимо на странице с клавиатурой указать в какой OS создавалась клавиатура.**
- Если нажатие происходит на несколько кнопок, то подсвечиваются все нажатые кнопки (исключений нет и для ctrl-alt-shift):
  ![](https://i.imgur.com/5sg3wmF.png)
- виртуальная клавиатура должна уметь переключаться между русской и английской раскладками (сочетание клавиш — на ваше усмотрение), при этом на кнопках должны отображаться символы выбранного языка:
  ![](https://i.imgur.com/SRvkXxc.png)
- выбранный язык должен сохраняться после перезагрузки страницы. Кнопки для смены языка должны быть указаны на странице c клавиатурой, что бы было понятно, как проверяющему поменять язык на клавиатуре
- анимация нажатия на кнопку
- клики по кнопкам мышкой на виртуальной клавиатуре и нажатие на кнопки физической клавиатуры выводят символы в инпут (textarea), расположенный на странице над клавиатурой. Нажатие стрелок вниз-вверх-влево-вправо либо выводят соответствующую стрелочку в инпут, либо реализуют навигацию по инпуту, нажатие на `enter` должно осуществлять перевод каретки, `tab` создает горизонтальный отступ, при нажатии остальных функциональных клавиш в инпут символы не выводятся, `backspace` удаляет символ, стоящий перед курсором, `del` удаляет символ, стоящий после курсора. Оставшиеся `shift`, `alt`, `ctrl`, `caps lock`, `space` должны работать как в реальной клавиатуре.

### Технические требования
- должно работать в Chrome последней версии
- использование jQuery и других библиотек не допускается
- использование Bootstrap и других CSS фреймворков не допускается
- использование Angular/React/Vue и других фреймворков не допускается
- можно использовать CSS preprocessors
- использовать [eslint (eslint-config-airbnb-base)](https://eslint.org/)
- рабочее приложение должно быть размещено на GitHub Pages (https://pages.github.com/), это произойдет автоматически при создании `gh-pages` бранча. После чего страница будет доступна по адресу вида https://your-github-account.github.io/name-repository

### Требования к коммитам, PR, репозиторию
- название PR должно содержать **the task name**
- описание PR должно соответстоввать [требованиям stage2](https://docs.rs.school/#/stage2?id=%d0%a2%d1%80%d0%b5%d0%b1%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f-%d0%ba-pull-request-pr) (самопроверка, ссылка на демо)
- PR `не должен содержать закомментированного кода, ненужных файлов, изменений из других веток и сгенерированных файлов`, например `.bundle.js`. Пожалуйста, просмотрите ваши изменения, прежде чем делать PR. Файлы `.editorconfig`, `.gitignore` и т.д. могут быть включены в PR
- Комментарии в PR являются хорошей практикой
- [Как сделать хороший PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)
