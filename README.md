## 1. Завантажуємо репозиторій та розгортаємо проект

`npm install`

або

`yarn`

## 2. Запускаємо сервер за допомогою nodemon

`npm run start`

або

`yarn start`

## Маршрути сервера

# /: Головний маршрут, що повертає "Get root route".

# /users: Маршрут для користувачів:
1. GET: "Get users route".
2. POST: "Post users route".

# /users/:userId: Маршрут для окремого користувача:
1. GET: "Get user by Id route: {userId}".
2. PUT: "Put user by Id route: {userId}".
3. DELETE: "Delete user by Id route: {userId}".

# /articles: Маршрут для статей:
1. GET: "Get articles route".
2. POST: "Post articles route".

# /articles/:articleId: Маршрут для конкретної статті:
1. GET: "Get article by Id route: {articleId}".
2. PUT: "Put article by Id route: {articleId}".
3. DELETE: "Delete article by Id route: {articleId}".