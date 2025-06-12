// console.log("Hello from Node.js")


// import dayjs from 'dayjs';         // ✘ Error  —  це синтаксис ES-модулів (браузерний)
                                      // Node.js за замовчуванням його не підтримує без додаткових налаштувань


// const dayjs = require('dayjs');    // Це синтаксис CommonJS (require() та module.exports) — стандартних модулів у Node.js
                                      // Працює одразу, без додаткових налаштувань
                                      // Але це старіший і менш популяріший підхід порівняно з ES-модулями


// Щоб використовувати ES-модулі в Node.js, потрібно додати поле ("type": "module") у файл package.json

import dayjs from 'dayjs' // ✔

console.log("Now", dayjs().format('YYYY-MM-DD HH:mm:ss')) // Now 2025-06-12 10:44:52