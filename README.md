[![Build Status](https://travis-ci.org/Automattic/_s.svg?branch=master)](https://travis-ci.org/Automattic/_s)

_s
===

Hi. I'm a starter theme called `_s`, or `underscores`, if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A modern workflow with a pre-made command-line interface to turn your project into a more pleasant experience.
* A just right amount of lean, well-commented, modern, HTML5 templates.
* A custom header implementation in `inc/custom-header.php`. Just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample layouts in `sass/layouts/` made using CSS Grid for a sidebar on either side of your content. Just uncomment the layout of your choice in `sass/style.scss`.
Note: `.no-sidebar` styles are automatically loaded.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Full support for `WooCommerce plugin` integration with hooks in `inc/woocommerce.php`, styling override woocommerce.css with product gallery features (zoom, swipe, lightbox) enabled.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Installation
---------------

### Requirements

`_s` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository, change its name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain and replace with: `'megatherium-is-awesome'`.
2. Search for `_s_` to capture all the functions names and replace with: `megatherium_is_awesome_`.
3. Search for `Text Domain: _s` in `style.css` and replace with: `Text Domain: megatherium-is-awesome`.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;Megatherium_is_Awesome</code>.
5. Search for `_s-` to capture prefixed handles and replace with: `megatherium-is-awesome-`.
6. Search for `_S_` (in uppercase) to capture constants and replace with: `MEGATHERIUM_IS_AWESOME_`.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

### Setup

To start using all the tools that come with `_s`  you need to install the necessary Node.js and Composer dependencies :

```sh
$ composer install
$ npm install
```

### Available CLI commands

`_s` comes packed with CLI commands tailored for WordPress theme development :

- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- `composer lint:php` : checks all PHP files for syntax errors.
- `composer make-pot` : generates a .pot file in the `languages/` directory.
- `npm run compile:css` : compiles SASS files to css.
- `npm run compile:rtl` : generates an RTL stylesheet.
- `npm run watch` : watches all SASS files and recompiles them to css when they change.
- `npm run lint:scss` : checks all SASS files against [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/).
- `npm run lint:js` : checks all JavaScript files against [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `npm run bundle` : generates a .zip archive for distribution, excluding development and system files.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!

### Описание папок темы

- **inc** - здесь хранятся функции, которые уже используются в шаблоне и новые функции, которые создаст разработчик
- **js** - содержит библиотеки JavaScript
- **languages** - здесь языковые файлы, WordPress мультиязычная платформа
- **layouts** - здесь будут новые пользовательские CSS стили
- **template-parts** - для дополнительных PHP файлов


### Описание файлов темы

- **404.php** - файл, показывающий шаблон несуществующей страницы
- **archive.php** - файл с шаблоном страницы архив (по дням, неделям и годам)
- **comments.php** - файл с шаблоном внешнего вида комментариев
- **footer.php** - шаблон с подключением подвала сайта
- **functions.php** - подключает все файлы темы к ядру самого WordPress
- **header.php** - файл с шаблоном подключения шапки сайта
- **index.php** - файл с шаблоном генерации архива страниц блога
- **LICENSE.txt** - информация о лицензии (бесплатная / платная)
- **page.php** - шаблон для отдельных страниц
- **rtl.css** - меняющий направление текста на right-to-left для отдельных языков
- **screenshot.png** - превью-картинка для темы в админке
- **search.php** - шаблон результатов поиска на блоге
- **sidebar.php** - файл с шаблоном для правой / левой колонки темы
- **single.php** - файл с шаблоном для отдельно взятого поста
- **style.css** - основной CSS файл темы


### Что делать чтобы начать разработку?

1. Скачать OpenServer (или другой сервер с PHP и MySQL)
2. Скачать (WordPress )[https://ru.wordpress.org/]
3. Зайти в папку domains
4. Создать папку с названием локального сайта (например, nglazkov.loc)
5. Разархивировать в новую папку WordPress
6. Создать БД (MySQL)
7. Зайти на локальный домен, указать БД установить WP
8. Зайти в папку с установленным WP, зайти в папку wp-content, зайти в папку themes
9. Установить (Composer)[https://getcomposer.org/] на компьютер
10. Установить (Node.js и npm)[https://nodejs.org/ru/] на компьютер
11. В эту папку склонировать репозиторий
12. Перейти в папку с репозиторием и выполнить следующие команды
    1. `npm install`
    2. `composer install`  
13. Проверить, что всё ок командой `npm run watch`. Если ошибок нет, то следующий шаг. Если есть, переустановить всё вышеуказанными командами, удалив папки `vendor` и `node_modules`
14. Зайти в админпанель WP (локальныйдомен/wp-admin)
15. Внешний вид -> Темы
16. На карточку с нашей темой -> Кнопка "Активировать"
17. Перейти на сайт и проверить, установилась ли тема