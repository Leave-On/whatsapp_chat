## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev  - запуск проекта в dev режиме
npm run start:build  - запуск проекта в prod режиме
```

----

## Описание

Получение и отправка текстовых сообщений с помошью сервиса GREEN API (https://green-api.com/).

Авторизация через userId и userToken сервиса GREEN API.

(Валидация отсутствует, номер телефона собеседника необходимо указывать начиная с 7)

Получение сообщений реализовано через стандартный setInterval с задержкой в 7 сек.



----

## Инструменты

Работа со стейтом - Redux-toolkit

Сборка - vite

Линтинг - eslint

Форматирование - prettier

Стили - scss-modules

typescript

axios

----