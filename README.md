📝 TODO API

REST API for managing tasks with access and refresh tokens. Refresh tokens are stored in httpOnly cookies.

Endpoints
Method	Path	Description
GET	/api/users	Get user info and tasks
PATCH	/api/auth/update/username	Update username
PATCH	/api/auth/update/password	Update password
DELETE	/api/users	Delete user
GET	/api/tasks	Get user tasks
POST	/api/tasks	Create task
PATCH	/api/tasks/{id}	Update task
DELETE	/api/tasks/{id}	Delete task
POST	/api/auth/register	Register user
POST	/api/auth/login	Login and get tokens
POST	/api/auth/logout	Logout
POST	/api/auth/refresh	Refresh access token via httpOnly cookie
Auth

Access tokens go in Authorization: Bearer <token>.
Refresh tokens are in httpOnly cookies and used only at /auth/refresh.

Example
GET /api/tasks
Authorization: Bearer <access_token>

[
  { "id": 1, "title": "Buy milk", "completed": false },
  { "id": 2, "title": "Read book", "completed": true }
]