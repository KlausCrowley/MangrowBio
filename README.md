# Mangrow Bio Full-Stack Platform

Production-ready Next.js application for the Mangrow Bio consulting website with dynamic CMS, lead capture, admin dashboard, secure auth, and deployment-ready infrastructure.

## Stack

- Frontend + Backend: `Next.js` (App Router + API routes)
- Database: `SQLite` (default) / `PostgreSQL` (production optional)
- ORM: `Prisma`
- Auth: `JWT` (httpOnly cookie)
- Password hashing: `bcryptjs`
- Email notifications: `Nodemailer` (SMTP)

## Project Structure

```text
pharma-app/
  prisma/
    schema.prisma
    seed.ts
  src/
    app/        # UI pages + API routes + admin dashboard
    backend/    # controllers, middleware, utils
    components/ # shared UI components
```

## API Coverage

- Contact:
  - `POST /api/contact`
  - `GET /api/contacts` (admin)
  - `PATCH /api/contacts/:id/status` (admin)
- Case studies:
  - `GET /api/cases`
  - `GET /api/cases/:id`
  - `POST /api/cases` (admin)
  - `PUT /api/cases/:id` (admin)
  - `DELETE /api/cases/:id` (admin)
- Blog:
  - `GET /api/blog`
  - `GET /api/blog/:slug`
  - `POST /api/blog` (admin)
  - `PUT /api/blog/:slug` (admin)
  - `DELETE /api/blog/:slug` (admin)
- Auth:
  - `POST /api/auth/login`
  - `POST /api/auth/logout`

## Environment Variables

Copy and edit:

```bash
cp .env.example .env
```

Required values:
- `DATABASE_URL`
- `JWT_SECRET`
- `NEXT_PUBLIC_SITE_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- SMTP variables (optional but recommended for contact notifications)

## Local Setup

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Application: [http://localhost:3000](http://localhost:3000)  
Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Deployment

### Vercel + Neon/Supabase (optional PostgreSQL)

1. Create PostgreSQL DB and copy connection URL to `DATABASE_URL`.
2. Import repo to Vercel and configure env vars.
3. Deploy.
4. Run migrations in production:

```bash
npx prisma migrate deploy
```

5. (Optional one-time) Seed admin/content:

```bash
npm run prisma:seed
```

## Security and Performance

- Admin APIs are protected with JWT verification proxy middleware.
- Contact endpoint includes rate limiting and input sanitization.
- Passwords use bcrypt hashing.
- Sitemap and robots are generated (`/sitemap.xml`, `/robots.txt`).
