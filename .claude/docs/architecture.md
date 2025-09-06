# GrHiit Project Architecture

## Overview
Business-to-consumer fitness application with web portal and React Native mobile app, built as a monorepo.

## Current Structure

```
grhiit/
├── .claude/
│   ├── docs/                    # Project documentation
│   └── sessions/                # Development session logs
├── apps/
│   ├── web/                     # Nuxt.js web application
│   │   ├── app/                 # Nuxt source directory
│   │   ├── content/             # Articles/blog content
│   │   ├── components/          # Vue components
│   │   ├── assets/              # Static assets
│   │   ├── nuxt.config.ts       # Nuxt configuration
│   │   └── package.json         # Web app dependencies
│   └── mobile/                  # React Native app (planned)
├── packages/
│   ├── shared-types/            # TypeScript types (planned)
│   ├── supabase-client/         # Supabase helpers (planned)
│   └── stripe-utils/            # Payment utilities (planned)
├── supabase/                    # Database functions/migrations (planned)
├── pnpm-workspace.yaml          # pnpm workspace configuration
├── vercel.json                  # Vercel deployment config
└── amplify.yml                  # AWS Amplify config (deprecated)
```

## Technology Stack

### Frontend Web (apps/web)
- **Framework**: Nuxt.js 3.19.0
- **Content**: Nuxt Content (currently v2.13.2 - downgraded from v3.6.3)
- **Styling**: Tailwind CSS v3.4.17
- **Package Manager**: pnpm v10.15.1
- **Deployment**: AWS Amplify (successfully deployed with filesystem-only mode)

### Backend Services
- **Database & Auth**: Supabase (planned)
- **Payments**: Stripe (web), Apple App Store (mobile)

### Mobile (planned)
- **Framework**: React Native
- **Deployment**: Expo/EAS or standard React Native

## Deployment Architecture

### Web Application
- **Platform**: AWS Amplify
- **Build Command**: `pnpm generate`
- **Output Directory**: `.output/public`
- **Install Command**: `pnpm install --no-frozen-lockfile`
- **Environment**: Node.js 22, Linux x64
- **App Root**: `apps/web`

### Monorepo Configuration
- **Workspace Tool**: pnpm workspaces
- **Root Directory**: `apps/web` (for Amplify deployment)
- **Build Strategy**: Static site generation (SSG)

## Content Management

### Articles & Blog
- **System**: Nuxt Content v2.13.2 (filesystem-based)
- **Content Location**: `apps/web/content/`
- **Purpose**: SEO-optimized articles about training system
- **Output**: Static HTML for social sharing

## Known Issues & Solutions

### SQLite Binding Problems - RESOLVED
**Issue**: Nuxt Content v3 required better-sqlite3 native bindings that failed to compile in serverless environments.

**Solutions That Worked**:
1. ✅ Downgraded to Nuxt Content v2.13.2
2. ✅ Removed all SQLite dependencies from build process
3. ✅ Added `NUXT_CONTENT_DATABASE_TYPE=fs` environment variable
4. ✅ Fixed directory navigation in amplify.yml
5. ✅ Updated content API from `queryCollection()` to `queryContent()`

### Deployment Platform Status
**Current**: AWS Amplify
- ✅ Resolved: Monorepo + pnpm workspace configuration
- ✅ Resolved: SQLite compilation failures with filesystem-only mode
- ✅ Working: Articles rendering properly
- ✅ Working: SEO-optimized static site generation

## Future Architecture Plans

### When Project Becomes Full-Time
**Migration Target**: Hetzner VPS + Coolify
- **Cost**: €4-20/month vs $50+/month managed services
- **Control**: Full server management and custom configurations
- **Scalability**: Manual but cost-effective

### User Flow & Ecosystem
1. **Web Portal**: User registration, subscription management, payment processing
2. **Mobile App**: Full fitness application experience
3. **Content Strategy**: SEO articles drive traffic to web portal
4. **Payment Strategy**: Encourage web subscriptions to bypass app store fees

## Development Workflow

### Session Management
- Sessions tracked in `.claude/sessions/`
- Current session: `2025-09-03-0845.md`
- Goals and progress documented

### Git Strategy
- Main branch for production deployments
- Automatic deployments on push to main
- Commits include deployment status tracking

## Configuration Files

### amplify.yml
```yaml
version: 1
applications:
  - appRoot: apps/web
    frontend:
      phases:
        preBuild:
          commands:
            - nvm install 22
            - nvm use 22
            - corepack enable
            - corepack prepare pnpm@10.15.1 --activate
            - cd ../..
            - export NUXT_CONTENT_DATABASE_TYPE=fs
            - pnpm install --no-frozen-lockfile
            - cd apps/web
            - pnpm exec nuxt prepare
        build:
          commands:
            - export NODE_OPTIONS="--max-old-space-size=4096"
            - export NUXT_CONTENT_DATABASE_TYPE=fs
            - pnpm generate
      artifacts:
        baseDirectory: .output/public
        files:
          - '**/*'
```

### Key Dependencies
```json
{
  "@nuxt/content": "^2.13.2",
  "nuxt": "^3.5.0",
  "@nuxtjs/tailwindcss": "^6.14.0",
  "vue": "^3.5.20"
}
```

## Current Status
- ✅ Monorepo structure established
- ✅ Web app basic skeleton working locally
- ✅ **DEPLOYMENT WORKING**: AWS Amplify successfully deployed
- ✅ **ARTICLES RENDERING**: Nuxt Content v2 working with filesystem-only mode
- ✅ **SEO READY**: Static site generation functional for search engines

## Next Steps
1. ✅ ~~Resolve Nuxt Content v2 deployment issues~~ - COMPLETED
2. Begin shared packages development (types, Supabase client)
3. Plan React Native mobile app structure
4. Implement user authentication and subscription system
5. Develop additional SEO content for traffic generation