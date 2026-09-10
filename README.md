# Backend API

A starter Express + Prisma + JWT backend with authentication, user routes, and Swagger docs.

## Getting started

1. Install dependencies:
   npm install
2. Generate Prisma client:
   npx prisma generate
3. Run database migrations:
   npx prisma migrate dev
4. Start the app:
   npm run dev

## Environment

Copy `.env.example` to `.env`, set `DATABASE_URL` to your PostgreSQL connection string,
and make sure the database exists before running migrations. The server verifies the
PostgreSQL connection before it starts listening.

## API

- Base URL: http://localhost:3000/api
- Swagger UI: http://localhost:3000/api-docs

## Available endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/users
- GET /api/users/me
- PATCH /api/users/me
