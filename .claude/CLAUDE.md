# GrHiit Project - Claude AI Configuration

## Project Overview

**GrHiit** is a business-to-consumer fitness application built as a standalone Nuxt.js project:
- **Web Portal**: Nuxt.js application for user registration, subscription management, and SEO content
- **Mobile App**: React Native application (planned) for full fitness experience  
- **Content Strategy**: SEO-optimized articles about training system to drive traffic
- **Revenue Strategy**: Encourage web subscriptions to bypass app store fees

## Current Architecture

### Technology Stack
- **Frontend**: Nuxt.js 3.19.0 with Tailwind CSS v3.4.17
- **Content Management**: Nuxt Content v3.6.3 (stable version with collections support)
- **Package Manager**: npm (converted from pnpm workspaces)
- **Deployment**: AWS Amplify (successfully deployed with SSG)
- **Future Backend**: Supabase + Stripe

### Project Structure
```
grhiit-web/ (standalone)
├── app/               # Nuxt application source
├── content/           # Content system for articles  
├── public/            # Static assets
├── amplify.yml        # AWS deployment configuration
├── package.json       # Simplified dependency management
└── .claude/           # AI session management & docs
```

## Development Workflow Rules

### 🚨 CRITICAL CONSTRAINTS

#### Server Management
- **USER RUNS ALL DEV SERVERS** in separate terminals
- **NEVER** start, stop, or manage development servers in prompts
- **NEVER** run `pnpm dev`, `nuxt dev`, or any development server commands
- Assume servers are managed externally

#### Package Management  
- **USE NPM** for standalone project
- **Direct commands**: `npm run dev`, `npm run generate`, etc.
- **No workspace filtering needed** - single package structure

#### Deployment Strategy
- **Platform**: AWS Amplify with static site generation
- **Build Command**: `npm run generate` (creates static files)
- **Auto Deploy**: Pushes to main branch trigger production deployment
- **Root Directory**: `/` (project root - standalone structure)

## Current Status & Known Issues

### ✅ CONTENT SYSTEM FULLY RESOLVED
**Resolution**: Successfully upgraded to Nuxt 3.19.0 + Content v3.6.3 with working article system

**Solutions That Worked**:
- ✅ Upgraded to stable version combination (avoided Nuxt 4 compatibility issues)
- ✅ Implemented correct Content v3 API: `queryCollection('articles')` with `.all()` method
- ✅ Fixed article routing to use `article.path` property (not `_path`)
- ✅ Configured pure SSG for AWS Amplify deployment
- ✅ Articles list and individual article pages working correctly

**Current Status**: 
- ✅ AWS Amplify deployment working with Nuxt 3.19.0 + Content v3.6.3
- ✅ Articles loading and displaying properly (both list and individual pages)
- ✅ SEO-optimized static site generation functional
- ✅ Content marketing strategy ready for implementation

### Deployment History
**AWS Amplify Issues Resolved**: Previously blocked due to:
- SQLite native binding compilation failures → Fixed with filesystem-only mode
- Directory navigation errors → Fixed build command structure
- Incorrect Nuxt Content API usage → Updated to v2 compatible syntax

**Current Platform**: AWS Amplify successfully deployed and operational

## AI Behavior Guidelines

### Before Making Any Changes
1. **Check Current Status**: Always reference `.claude/docs/architecture.md` for latest state
2. **Consider SQLite Impact**: Any content-related changes must account for SQLite binding issues
3. **Verify Workspace Context**: Ensure commands use proper pnpm workspace filtering
4. **Static-First Approach**: All solutions must work with static site generation

### Development Approach
- **Focus on Deployment-Ready Solutions**: Prioritize what works in serverless environments
- **Avoid Native Dependencies**: Especially SQLite, better-sqlite3, or other compiled modules
- **Monorepo Awareness**: Account for workspace complexity in all solutions
- **Documentation First**: Update architecture.md for significant changes

### Communication Style
- **Reality Filter**: Never claim solutions are "fixed" until user confirms via testing
- **Label Speculation**: Mark unverified claims as [Inference] or [Unverified]
- **Acknowledge Failures**: Be transparent about previous failed attempts
- **Focus on Root Causes**: Address underlying issues, not just symptoms

## Future Architecture Vision

### Short-term Goals
1. **Resolve Deployment**: Get Nuxt Content working OR implement alternative
2. **Establish Shared Packages**: Create @grhiit/types, @grhiit/supabase-client
3. **Content Management**: Stable article/blog system for SEO

### Long-term Migration (When Full-time)
- **Platform**: Hetzner VPS + Coolify self-hosted
- **Cost Savings**: €4-20/month vs $50+/month managed services  
- **Full Control**: Custom configurations, background jobs, database hosting

## Configuration References

### AWS Amplify Configuration (amplify.yml)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm install 22
        - nvm use 22
        - npm install
    build:
      commands:
        - export NODE_OPTIONS="--max-old-space-size=4096"
        - npm run generate
  artifacts:
    baseDirectory: .output/public
    files:
      - '**/*'
```

### Key Dependencies (package.json)
```json
{
  "@nuxt/content": "^3.6.3",     // Latest stable with collections support
  "nuxt": "^3.19.0",              // Latest stable 3.x (avoiding 4.x compatibility issues)
  "@nuxtjs/tailwindcss": "^6.14.0",
  "vue": "^3.5.20"
}
```

### Working Content v3 API Pattern
```typescript
// Articles list page
const { data: articles } = await useAsyncData('articles-list', async () => {
  const query = queryCollection('articles')
  const all = await query.all()
  return Array.isArray(all) ? all.filter(article => article.published === true) : []
})

// Individual article page  
const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  const query = queryCollection('articles')
  const all = await query.all()
  return all.find(article => article.path === `/articles/${slug}`)
})
```

## Session Management

- **Active Session**: Tracked in `.claude/sessions/`
- **Architecture Updates**: Document significant changes in `.claude/docs/architecture.md`
- **Issue Tracking**: Maintain current status and blocker information

---

**Last Updated**: September 5, 2025  
**Status**: ✅ FULLY OPERATIONAL - Standalone project successfully deployed to AWS Amplify  
**Architecture**: Converted from monorepo to standalone - SQLite dependencies resolved through architecture change  
**Next Priority**: Content marketing strategy implementation