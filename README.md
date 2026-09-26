# Student Registration + Login + JSON + Docker

## Flow

Student Registration
        ↓
POST /api/register
        ↓
data/students.json
        ↓
Login
        ↓
POST /api/login
        ↓
JSON data is checked
        ↓
Welcome Page

## Run locally

```bash
npm install
npm start
```

Open:

http://localhost:3000

## Run with Docker

Build:

```bash
docker build -t student-portal .
```

Run:

```bash
docker run -d --name student-portal-container -p 3000:3000 -v "${PWD}/data:/app/data" student-portal
```

On Windows PowerShell, the same command normally works:

```powershell
docker run -d --name student-portal-container -p 3000:3000 -v "${PWD}/data:/app/data" student-portal
```

Open:

http://localhost:3000

## Useful Docker commands

Check container:

```bash
docker ps
```

View logs:

```bash
docker logs student-portal-container
```

Stop:

```bash
docker stop student-portal-container
```

Start again:

```bash
docker start student-portal-container
```

Remove:

```bash
docker rm -f student-portal-container
```

## Important note

This is a learning/demo project. Passwords are intentionally stored in JSON as plain text to demonstrate the requested JSON workflow. A production application should hash passwords with a password-hashing algorithm such as bcrypt/Argon2 and use a real database plus proper authentication/session handling.
