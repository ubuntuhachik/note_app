Live version: https://noteapp-26122019.web.app/

Тестовое задание
При исполнении задания используйте фреймворк React.js, Angular.js, Vue.js или React Native.
Задание.
Реализовать SPA для создания заметок. Заметки должны создаваться, редактироваться, удаляться всеми пользователями приложения (без авторизации).

Должна быть возможность добавить комментарии к уже созданным заметкам.

Данные должны сохраняться в “local storage” или в базе данных “Firebase” в зависимости от опции выбранной на странице настроек пользователя.

Данные должны быть проверены на валидность перед сохранением.
Раздел заметок
Заметка должна иметь поля:
name — required
content — required

Страницы:
страницы редактирования/создания заметки
страница заметки (на странице должны быть информация о заметке и комментарии)
Настройки
Поле для выбора провайдера для сохранения данных (“local storage”, “Firebase”).
Комментарий
Должен иметь поля:
author — required, должно содержать два слова, оба с большой буквы
content — required
created_at — дата создания, заполняется автоматически

Всю сделанную работу выложить на свой аккаунт в Github.
Пожелания
Написание тестов будет плюсом.
Использование CSS Bootstrap будет плюсом.
Код должен быть легко читаем и расширяем и соответствовать best practices выбранного фреймворка.