# Mangrow Bio Full-Stack Platform

Production-ready Next.js application for the Mangrow Bio consulting website with dynamic CMS, lead capture, admin dashboard, secure auth, and deployment-ready infrastructure.

## Stack

- Frontend + Backend: `Next.js` (App Router + API routes)
- Database: `PostgreSQL` (Neon, Supabase, or Railway)
- ORM: `Prisma`
- Auth: `JWT` (httpOnly cookie with CSRF protection)
- Password hashing: `bcryptjs`
- Email notifications: `Nodemailer` (SMTP, optional)

## Project Structure

```text
MangrowBio/
  prisma/
    schema.prisma
    seed.ts
  src/
    app/        # UI pages + API routes + admin dashboard
    backend/    # controllers, middleware, utils
    components/ # shared UI components
    lib/        # utilities (auth, prisma)
```

## API Coverage

- Contact:
  - `POST /api/contact` - Submit contact form (rate-limited)
  - `GET /api/contacts` (admin) - List all contacts
  - `PATCH /api/contacts/:id/status` (admin) - Update contact status
- Case studies:
  - `GET /api/cases` - List all case studies
  - `GET /api/cases/:id` - Get single case study
  - `POST /api/cases` (admin) - Create case study
  - `PUT /api/cases/:id` (admin) - Update case study
  - `DELETE /api/cases/:id` (admin) - Delete case study
- Blog:
  - `GET /api/blog` - List all blog posts
  - `GET /api/blog/:slug` - Get blog post by slug
  - `POST /api/blog` (admin) - Create blog post
  - `PUT /api/blog/:slug` (admin) - Update blog post
  - `DELETE /api/blog/:slug` (admin) - Delete blog post
- Auth:
  - `POST /api/auth/login` - Admin login
  - `POST /api/auth/logout` - Admin logout

## Environment Variables

Copy and edit:

```bash
cp .env.example .env
```

### Required Variables

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT signing (min 32 chars)
- `NEXT_PUBLIC_SITE_URL` - Public site URL (e.g., https://mangrowbio.com)
- `ADMIN_EMAIL` - Admin email for login
- `ADMIN_PASSWORD` - Admin password (will be hashed)

### Optional Variables (Email Notifications)

- `SMTP_HOST` - SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP port (usually 587 or 465)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `SMTP_FROM` - Email sender address
- `CONTACT_NOTIFICATION_TO` - Email to receive contact submissions

## Local Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npm run prisma:seed
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

- Application: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Default credentials: `admin@mangrowbio.com` / `admin123`

## Deployment

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables (see `.env.example`)
4. Deploy
5. Run post-deployment setup (see `VERCEL_DEPLOYMENT.md`)

### Detailed Instructions

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for:
- PostgreSQL setup (Neon, Supabase, Railway)
- Environment variable configuration
- Post-deployment database seeding
- Troubleshooting
- Custom domain setup
- Monitoring and logging

## Security & Performance

### Security Features
✅ JWT authentication with 24-hour expiration
✅ HttpOnly cookies (XSS protection)
✅ CSRF protection (sameSite=lax)
✅ Bcrypt password hashing (10 rounds)
✅ Input sanitization on all endpoints
✅ Rate limiting on contact form (6 req/min)
✅ Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
✅ Admin API authentication middleware

### Performance Features
✅ Next.js Image optimization (AVIF, WebP)
✅ Static asset caching (1 year)
✅ Prisma query optimization with indexes
✅ Error boundary with graceful fallbacks
✅ Email transporter caching

### Generated Files
- `/sitemap.xml` - XML sitemap for SEO
- `/robots.txt` - Robots.txt for crawlers

## Development Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Prisma commands
npm run prisma:generate # Generate Prisma client
npm run prisma:migrate  # Run database migrations
npm run prisma:seed     # Seed database with initial data
```

## Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Database Issues
```bash
# Reset database (dev only!)
npx prisma migrate reset

# Check database connection
npx prisma db push
```

### TypeScript Errors
```bash
# Regenerate Prisma types
npm run prisma:generate
```

## Project Architecture

### Frontend (`src/app/`)
- Page layouts and components
- Client-side forms and interactions
- Admin dashboard UI

### Backend (`src/backend/`)
- **Controllers**: Business logic for each resource
- **Middleware**: Authentication, rate limiting
- **Utils**: Validation, error handling, email, logging

### Utilities (`src/lib/`)
- Prisma client singleton
- JWT encryption/decryption
- Authentication helpers

## Database Schema

The application uses Prisma ORM with PostgreSQL:

- **User** - Admin users with bcrypt password hashing
- **Contact** - Contact form submissions with status tracking
- **CaseStudy** - Success stories and case studies
- **BlogPost** - Blog articles with slug-based routing

All models include timestamps and appropriate indexes for performance.

## Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit with clear messages: `git commit -m "feat: add new feature"`
4. Push to GitHub: `git push origin feature/your-feature`
5. Create Pull Request

## License

All rights reserved © Mangrow Bio Inc.
