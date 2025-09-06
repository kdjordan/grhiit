# GrHiit Mobile App Architecture Plan

## Overview
React Native mobile application for GrHiit fitness platform, designed to complement the existing Nuxt.js web portal with native mobile fitness tracking capabilities.

## Development Context

### Your Experience Level
- **Strong**: React, JavaScript/TypeScript, web development
- **New to**: React Native, mobile development, native APIs
- **Goals**: Leverage existing React knowledge while learning mobile-specific patterns

### Integration with Existing System
- **Web Portal**: Nuxt.js (deployed on AWS Amplify) - handles user registration, subscriptions, SEO content
- **Mobile App**: React Native - core fitness experience, workout tracking
- **Shared Backend**: Supabase (planned) for user data, workouts, progress
- **Payment Strategy**: Drive mobile users to web for subscriptions (avoid App Store fees)

## Framework Decision - CONFIRMED ✅

### Expo React Native (SELECTED)
**Why Chosen:**
- **Beginner-friendly** coming from React background
- **Claude Code integration** works excellently
- **Fast development cycle** with hot reload and Expo Go
- **Built-in APIs** for camera, storage, notifications, etc.
- **Easy App Store deployment** with EAS Build/Submit
- **Free tier sufficient** for development phase

**Development Benefits for GrHiit:**
- **Instant preview** on iPhone via Expo Go app
- **Over-the-air updates** for quick fixes post-launch
- **TypeScript support** out of the box
- **All fitness app needs covered** (timers, storage, notifications, payments)

**Cost Structure:**
- **Development**: Free unlimited
- **EAS Build**: 30 builds/month free, then $29/month
- **Perfect for MVP**: Free tier handles development and initial App Store submission

## Recommended Architecture

### Monorepo Structure
```
grhiit/
├── apps/
│   ├── web/                     # Existing Nuxt.js app
│   └── mobile/                  # New Expo React Native app
│       ├── App.tsx
│       ├── app.json
│       ├── package.json
│       ├── src/
│       │   ├── components/      # Reusable UI components
│       │   ├── screens/         # Screen components
│       │   ├── navigation/      # Navigation setup
│       │   ├── services/        # API calls, storage
│       │   ├── hooks/          # Custom React hooks
│       │   ├── types/          # Local type definitions
│       │   └── utils/          # Helper functions
│       └── assets/             # Images, fonts, etc.
├── packages/
│   ├── shared-types/           # TypeScript types shared between web/mobile
│   ├── supabase-client/        # Shared Supabase integration
│   ├── api-client/            # Shared API calling logic
│   └── theme/                 # Shared design tokens (colors, spacing)
```

### Technology Stack (CONFIRMED)
- **Framework**: Expo React Native 50+ (free tier: 30 builds/month, then $29/month)
- **Language**: TypeScript (consistent with web app)
- **Navigation**: React Navigation v6 (Tab + Stack) - chosen over Expo Router for familiarity
- **State Management**: React Query + Context API (simple start)
- **Storage**: Expo SecureStore (sensitive data) + AsyncStorage (workout data)
- **Authentication**: Supabase Auth (shared with web)
- **Payments**: Apple App Store (StoreKit 2) + web subscription sync
- **Styling**: NativeWind (Tailwind for React Native) - RECOMMENDED for consistency with web
- **Offline**: React Query offline support + local SQLite for workout data
- **Push Notifications**: Expo Notifications
- **Development**: Expo Go app + iOS Simulator via Xcode
- **Building**: EAS Build (cloud building service)
- **Deployment**: EAS Submit to App Store

## Key Architectural Decisions - RESOLVED

### 1. Platform Strategy ✅
**Decision**: iOS-first development
- Primary target: iOS users
- iPhone available for testing
- Android support added in Phase 4

### 2. Authentication & User Data ✅
**Decision**: Shared authentication system
- Same Supabase accounts across web and mobile
- Users can sign up on either platform
- Account data syncs between platforms

### 3. Offline Capability ✅
**Decision**: Offline-first workout experience
- Workouts must work without internet (critical requirement)
- Local storage for workout data, sync when connected
- Data to sync: workout completion, reps per interval, progress metrics

### 4. Monetization & Subscriptions ✅
**Decision**: Freemium model with 3-workout trial
- **Free Trial**: First 3 workouts free (5-day time limit)
- **Subscription Required**: After trial for additional workouts
- **Payment Platform**: Apple App Store payments for mobile signups
- **Cross-Platform**: Web subscriptions recognized on mobile via Supabase
- **Pricing**: TBD - weekly, monthly, yearly options

## NEW CRITICAL QUESTIONS

### 5. Workout Content & Structure ✅ RESOLVED
**System Definition:**
- **8-Week Program**: 24 total workouts (3 per week) with progressive difficulty
- **Pre-Designed Workouts**: All workouts created by you, not user-customizable
- **Admin Upload**: Web admin section for CSV upload to create workout definitions
- **Mobile Ingestion**: Mobile app downloads workout data and creates timing/sequences
- **Free Trial**: First 3 workouts from the 24-workout cycle

**Remaining Technical Questions:**
- What's in the CSV structure? (exercise name, duration, rest periods, reps, instructions?)
- How does "progressive difficulty" work? (longer duration, more reps, shorter rest?)
- What data should mobile collect during workouts? (completion time, actual reps vs target, RPE scale?)
- Do workouts have video demonstrations or just text/timer instructions?

### 6. User Experience & Flow
**Questions:**
- Should users create accounts immediately, or after completing some workouts?
- What onboarding experience do you want? (tutorial, goal setting, fitness assessment?)
- How do users discover/browse available workouts?
- What happens when the 5-day trial expires but they haven't done 3 workouts?

### 7. Data & Analytics
**Questions:**
- What workout metrics are most important to track? (completion rate, progression, consistency?)
- Should users set fitness goals, and if so, what types?
- Do you want social features? (sharing progress, leaderboards, friends?)
- What analytics do you need for business insights?

### 8. Technical Architecture
**Questions:**
- How large are workout videos/content? (affects offline storage strategy)
- Do workouts include video content, or just text/timer instructions?
- Should the app work on iPad, or iPhone-only initially?
- Any integration with health apps (Apple Health, fitness trackers)?

### 9. Navigation & Routing Strategy
**Questions:**
- Tab-based navigation (Home, Workouts, Progress, Profile) or different structure?
- How should workout flow navigation work? (can users go back mid-workout?)
- Should there be a separate onboarding flow for first-time users?
- Modal vs screen navigation for workout details?

### 10. Performance & Storage
**Questions:**
- Maximum offline storage needed? (all workouts vs recent/favorites only)
- Should workout videos/images download automatically or on-demand?
- How to handle storage cleanup when device runs low on space?
- Background sync strategy when app returns to foreground?

### 11. Trial & Subscription Logic
**Questions:**
- Can users repeat workouts during trial, or must complete workouts 1, 2, and 3 in order?
- What happens if user deletes app during trial - does trial reset?
- Should trial countdown be visible in UI, or silent?
- How to handle users who try to circumvent trial (new accounts, etc.)?
- Can users access any of the 24 workouts during trial, or specifically the first 3?
- What happens if they complete 3 workouts in less than 5 days - immediate subscription required?

### 12. Error Handling & Edge Cases
**Questions:**
- What happens if user loses internet mid-workout?
- How to handle workout completion if app crashes?
- Should partially completed workouts be saved/resumable?
- What if subscription expires while user is mid-workout?

## Development Phases

### Phase 1: Foundation (1-2 weeks)
**Goal**: Get basic app running and understand React Native development

**Tasks**:
1. Set up Expo development environment
2. Configure Claude Code for React Native development
3. Create basic app structure in monorepo
4. Set up navigation between 2-3 placeholder screens
5. Configure TypeScript and basic tooling

**Learning Focus**: Expo CLI, React Native components, navigation patterns

### Phase 2: Core Infrastructure (2-3 weeks)
**Goal**: Shared services and basic user functionality

**Tasks**:
1. Create shared packages (types, API client)
2. Set up Supabase integration
3. Implement authentication flow
4. Create user profile/settings screens
5. Set up local storage for user preferences

**Learning Focus**: Mobile-specific patterns, API integration, storage

### Phase 3: MVP Workout Features (3-4 weeks)
**Goal**: Basic fitness functionality that provides value

**Tasks**:
1. Workout selection/browsing screens
2. Active workout tracking (timer, reps, sets)
3. Progress logging and basic history
4. Simple statistics/progress charts
5. Subscription status integration

**Learning Focus**: Complex UI patterns, data visualization, real-time updates

### Phase 4: Polish & Advanced Features (ongoing)
**Goal**: App Store ready application

**Tasks**:
1. Push notifications for workout reminders
2. Offline workout capability
3. Social features (if desired)
4. App Store optimization and submission
5. Analytics and crash reporting

## Xcode & Development Environment Setup

### Required Tools
1. **Xcode** (from Mac App Store) - for iOS simulator and eventually App Store submission
2. **Node.js 18+** (already have via web development)
3. **Expo CLI** (`npm install -g @expo/cli`)
4. **EAS CLI** (`npm install -g eas-cli`) - for building and deployment

### Claude Code Integration
- Expo projects work excellently with Claude Code
- Built-in TypeScript support
- Good debugging and error handling
- Hot reload works well with code changes

### Development Workflow
1. **Development**: Expo Go app on your phone + Expo dev server
2. **Testing**: iOS Simulator via Xcode
3. **Building**: EAS Build service (cloud building)
4. **Deployment**: EAS Submit to App Store

## IMMEDIATE TECHNICAL DECISIONS - RESOLVED ✅

### Styling Approach: NativeWind (RECOMMENDED)
**Why NativeWind:**
- **Consistency**: Same Tailwind classes as your web app
- **Faster Development**: No need to learn new styling paradigm
- **Utility-First**: Matches your existing workflow
- **React Native Optimized**: Better performance than styled-components

### State Management: React Query + Context API (CONFIRMED)
**Why This Combo:**
- **Simple Start**: Context for global state, React Query for server state
- **Perfect for Offline**: React Query handles caching and sync automatically
- **Familiar**: Similar to your web app patterns
- **Scalable**: Can add Redux later if needed

### Navigation Structure (iOS-First)
```typescript
// Proposed navigation structure
Tab Navigator (Bottom)
├── Home (Stack)
│   ├── Dashboard
│   └── Workout Detail
├── Workouts (Stack)
│   ├── Workout List
│   ├── Workout Detail
│   └── Active Workout
├── Progress (Stack)
│   ├── Stats Overview
│   └── Detailed Charts
└── Profile (Stack)
    ├── Profile
    ├── Settings
    └── Subscription

// Modal flows
├── Auth Flow (Modal)
│   ├── Login
│   └── Signup
├── Onboarding (Modal)
└── Subscription (Modal)
```

## MVP FEATURE PRIORITY - NEEDS YOUR RANKING

### Phase 1 (Essential - Week 1-2)
**Must-have features for basic functionality:**
- [ ] **User authentication** (signup/login/logout)
- [ ] **Basic navigation** (tab structure)
- [ ] **Workout list/browsing** (display available workouts)
- [ ] **Trial status tracking** (3 workouts, 5 days)

### Phase 2 (Core - Week 3-4)
**Features that make it a real fitness app:**
- [ ] **Active workout tracking** (timer, exercise progression)
- [ ] **Offline workout capability** (download and store locally)
- [ ] **Progress logging** (save workout completion)
- [ ] **Subscription integration** (Apple App Store + web sync)

### Phase 3 (Enhanced - Week 5-6)
**Features that improve user experience:**
- [ ] **Workout history** (past workouts and stats)
- [ ] **User profile/settings** (account management)
- [ ] **Push notifications** (workout reminders)
- [ ] **Basic progress charts** (completion trends)

### Phase 4 (Advanced - Week 7+)
**Features for App Store readiness:**
- [ ] **Apple Health integration** (sync workout data)
- [ ] **Social features** (sharing, achievements)
- [ ] **Advanced analytics** (detailed progress tracking)
- [ ] **App Store optimization** (screenshots, metadata)

### Content Strategy Questions:
- **Web Articles**: Include fitness articles from web app in mobile for engagement?
- **Cross-Platform Promotion**: How to drive mobile users to web for premium content?
- **Content Offline**: Should articles be available offline like workouts?

## IMPLEMENTATION ROADMAP

### Immediate Next Steps (This Week):
1. **Answer remaining critical questions** (workout structure, UX flow, MVP priorities)
2. **Set up development environment** (Xcode, Expo CLI installation)
3. **Create basic Expo app structure** in `apps/mobile/`
4. **Configure pnpm monorepo integration**
5. **Build first prototype screens** (splash, workout list, active workout)

### Phase 1 Deliverables (Week 1-2):
- [ ] Expo app running on iOS simulator
- [ ] Basic navigation (tab + stack structure)
- [ ] 3-4 placeholder screens
- [ ] TypeScript configuration
- [ ] Claude Code development workflow established

### Critical Path Dependencies:
- **CSV Structure Definition**: Need exact format for workout upload (exercises, timing, instructions)
- **Progressive Difficulty Logic**: How workouts 1-24 increase in difficulty
- **Trial Logic Rules**: Which 3 of the 24 workouts are free, access restrictions
- **Mobile Data Collection**: What metrics to track during each workout
- **Offline Storage Strategy**: How to store 24 workouts locally for offline access
- **Supabase Schema**: Database design for 8-week program, user progress, admin uploads
- **Admin Web Interface**: CSV upload functionality in web app
- **Navigation Flow**: Confirm workout progression (linear vs choice-based)

### Ready to Implement (No Blockers):
- **Expo App Setup**: Can start immediately
- **Basic Navigation**: React Navigation tab structure for 8-week program
- **TypeScript Configuration**: Consistent with web app
- **Development Environment**: Xcode, Expo CLI installation
- **Shared Package Structure**: Types for workout definitions, API client
- **Workout List UI**: Can build with placeholder data while CSV structure is defined
- **Progress Tracking**: Basic UI for 8-week program visualization (1-24 workout progress)

### Database Schema Implications:
```sql
-- Preliminary workout schema based on 8-week structure
workouts {
  id: uuid
  week_number: 1-8
  workout_number: 1-24
  difficulty_level: progressive
  exercises: json[] -- from CSV structure
  estimated_duration: minutes
  created_via_csv: timestamp
}

user_progress {
  user_id: uuid
  workout_id: uuid
  completed_at: timestamp
  actual_duration: minutes
  workout_data: json -- collected metrics
}
```

---

**Status**: Architecture Planning 90% Complete - Major Decisions Made
**Confirmed Decisions**: iOS-first, Expo, React Navigation, NativeWind, offline-first
**Remaining Questions**: Workout content structure, navigation flow, feature prioritization
**Ready to Start**: Development environment setup and basic app structure
**Created**: September 4, 2025
**Updated**: September 4, 2025 (with Expo and tech stack decisions)
**Next Update**: After remaining UX questions answered and initial setup complete