# 📝 TODO API

REST API for managing user tasks with access & refresh tokens.  
Refresh tokens are stored in httpOnly cookies.

---

## Features
- User registration, login, logout
- Access & refresh token authentication
- CRUD tasks
- Update username/password
- Delete user

---

## Authentication
- Access token: short-lived, send in header `Authorization: Bearer <token>`
- Refresh token: long-lived, in httpOnly cookie, used at `POST /api/auth/refresh`

---

## Endpoints
- GET    /api/users – get user info and tasks
- PATCH  /api/auth/update/username – update username
- PATCH  /api/auth/update/password – update password
- DELETE /api/users – delete user
- GET    /api/tasks – get user tasks
- POST   /api/tasks – create task
- PATCH  /api/tasks/{id} – update task
- DELETE /api/tasks/{id} – delete task
- POST   /api/auth/register – register
- POST   /api/auth/login – login, get tokens
- POST   /api/auth/logout – logout
- POST   /api/auth/refresh – refresh access token

---

## Example Request
GET /api/tasks  
Authorization: Bearer <access_token>

### Example Response
[
  { "id": 1, "title": "Buy milk", "completed": false },
  { "id": 2, "title": "Read book", "completed": true }
]

---

> Note: All protected endpoints require a valid access token. Refresh token used only via /auth/refresh.
