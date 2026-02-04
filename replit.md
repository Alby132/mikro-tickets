# Monorepo Project

## Overview
A TypeScript monorepo with npm workspaces containing an Express API, with placeholders for React web and Expo mobile apps.

## Project Structure
```
/
├── apps/
│   ├── web/          # React + TS web (to be set up)
│   └── api/          # Node/Express + TS backend
├── mobile/           # Expo app (to be set up)
├── prisma/           # DB schema + migrations
├── scripts/          # seed, maintenance
└── package.json      # root manager for workspaces
```

## Running the Project
- **API**: `npm run api` - Runs the Express API on port 5000
- **Web**: `npm run web` - (to be configured)

## Database Commands
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Prisma Studio

## Development
- API binds to `0.0.0.0:5000` for the Replit environment
- Uses TypeScript with strict mode
- Prisma for database ORM
- **Note**: Database requires `DATABASE_URL` environment variable to be set before running Prisma commands

## Recent Changes
- February 4, 2026: Set up monorepo structure with workspaces
- February 4, 2026: Added Express + TypeScript API
- February 4, 2026: Added Prisma schema with User model
