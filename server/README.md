# routes

## anonymous

    GET /api/users?page=0&pageSize=20&sort=+age

    GET /api/users/:id

    POST /api/auth/login
    {
        "email": "Emily.Kovacek@era.io",
        "password": "12345"
    }

    // response
    {
        "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NmNiMDJhYmQyOWY1NWFlMjA0OTM2NDMiLCJpaXMiOiJldXJpOmJvb3RjYW1wIiwibmFtZSI6IlRpbmEgRnJpdHNjaCJ9.qDQen5DKAj1OYbrFJWnw_MKkZN8bUHvVUYAXQ16qr9E",
        "tokenType": "bearer"
    }

## authentication required

    DELETE /api/users/:id
    header:
        Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIi...

PUT /api/users/:id
POST /api/users
