# GrHiit Ecosystem - Product Requirements Document (PRD)

## Complete Product Strategy & Launch Requirements

**Status**: Web Live (AWS Amplify) | Mobile Pre-Development  
**Architecture**: Monorepo (pnpm workspaces)  
**Strategy**: Web SEO Traffic → Mobile Engagement & Viral Growth  

---

## 🎯 PRODUCT ECOSYSTEM OVERVIEW

### Business Model & User Journey
1. **SEO Content Strategy**: Web articles drive organic traffic and establish authority
2. **Conversion Funnel**: Web visitors → Email list → Mobile app downloads  
3. **Engagement & Retention**: Mobile app provides core fitness experience
4. **Viral Growth**: Mobile sharing drives organic acquisition
5. **Monetization**: Subscriptions (web preferred, mobile App Store backup)

### Platform Roles
- **Web Portal**: SEO content, user registration, subscription management, admin tools
- **Mobile App**: Core fitness experience, interval timer, viral sharing, user retention
- **Shared Backend**: Supabase for user accounts, subscriptions, workout data, analytics

---

## 🌐 WEB PLATFORM REQUIREMENTS

### Current Status ✅ LIVE
- **Platform**: AWS Amplify (working deployment)
- **Framework**: Nuxt.js 3.19.0 with Nuxt Content v2.13.2  
- **Content**: Filesystem-based articles (no SQLite dependencies)
- **Styling**: Tailwind CSS v3.4.17
- **Domain**: Production ready with SEO optimization

### Web Platform Features

#### Content Management System ✅ IMPLEMENTED
- **Nuxt Content v2**: Filesystem-based article management
- **SEO Optimized**: Static site generation for search engines
- **Article Structure**: Training philosophy, workout science, mental toughness content
- **Performance**: Fast loading, mobile-responsive design

#### Admin Panel 🚧 IN DEVELOPMENT  
- **CSV Workout Upload**: Interface for uploading 24-workout definitions
- **Content Management**: Article creation, editing, publishing workflow
- **User Analytics**: Subscription metrics, content performance  
- **Workout Management**: Preview, edit, and organize 24-workout program

#### User Management 📋 PLANNED
- **Account Creation**: Supabase authentication integration
- **Subscription Portal**: Stripe integration for web payments (avoid App Store fees)
- **Profile Management**: User preferences, workout history sync
- **Cross-Platform Sync**: Account data shared with mobile app

#### SEO Content Strategy 📝 ONGOING
- **Training Philosophy Articles**: Work-to-rest ratios, mental toughness, bodyweight training  
- **Workout Science**: Evidence-based interval training content
- **Success Stories**: User transformation content (when available)
- **Mental Toughness Content**: "You vs You" philosophy, doing hard things

### Web Technical Stack (CONFIRMED)
```yaml
Framework: Nuxt.js 3.19.0
Content: Nuxt Content v2.13.2 (filesystem mode)
Styling: Tailwind CSS v3.4.17  
Deployment: AWS Amplify
Database: Supabase (planned integration)
Payments: Stripe (web subscriptions)
Analytics: TBD (Google Analytics, Supabase Analytics)
```

---

## 📱 MOBILE PLATFORM REQUIREMENTS

### Development Status 📋 PLANNING COMPLETE
- **Framework**: Expo React Native (chosen)
- **Platform**: iOS-first development  
- **Architecture**: Monorepo integration with web platform
- **Timeline**: Post web admin panel completion

### Mobile Core Features (MVP)

#### Precision Interval Timer System 🎯 CRITICAL
- **Variable Intervals**: Any duration (seconds to minutes) from CSV definitions
- **Work-to-Rest Ratios**: Precise 2:1 ratios building to Tabata (20:10)
- **Background Operation**: Timer continues when app backgrounded  
- **Audio/Visual Cues**: Clear interval transitions
- **Screen Wake**: Prevent phone sleep during workouts

#### 24-Workout Program 📊 CORE
- **8-Week Structure**: 3 workouts per week, progressive difficulty
- **CSV Integration**: Download workout definitions from web admin
- **Offline Capability**: All workouts stored locally (critical requirement)
- **Progress Tracking**: Visual progress through 24-workout journey
- **Rep Counting**: User accountability system ("You vs You" philosophy)

#### Trial & Subscription System 💰 BUSINESS CRITICAL  
- **3-Workout Trial**: First 3 workouts free with 5-day time limit
- **Subscription Integration**: Apple App Store payments + web subscription sync
- **Cross-Platform Recognition**: Web subscriptions unlock mobile features
- **Trial Management**: Prevent circumvention, fair usage tracking

#### 🔥 Viral Sharing System 🚀 GROWTH ENGINE
- **Post-Workout Templates**: Dynamic sharing templates with workout data
- **Motivational Messaging**: "You vs You", "All it takes is all you've got"
- **Professional Design**: Midjourney-generated "aura type" backgrounds  
- **Platform Integration**: Instagram Stories/Feed, TikTok vertical formats
- **Identity-Based Sharing**: Mental toughness and personal achievement focus

### Mobile Technical Stack (CONFIRMED)
```yaml
Framework: Expo React Native 50+
Language: TypeScript (consistent with web)
Navigation: React Navigation v6 (Tab + Stack)
State: React Query + Context API
Storage: Expo SecureStore + AsyncStorage  
Authentication: Supabase (shared with web)
Styling: NativeWind (Tailwind for React Native)
Payments: Apple App Store StoreKit 2
Sharing: Native iOS sharing + template engine
Building: EAS Build (30 free builds/month)
```

---

## 🔗 SHARED SYSTEMS & INTEGRATION

### Supabase Backend (PLANNED)
```sql
-- User accounts (shared across platforms)
users {
  id: uuid
  email: string
  subscription_status: enum
  subscription_platform: 'web' | 'ios'
  trial_workouts_used: integer
  trial_start_date: timestamp
}

-- Workout definitions (uploaded via web admin)
workouts {
  id: uuid  
  week_number: 1-8
  workout_number: 1-24
  csv_data: json
}

-- User progress (mobile app data)
user_workout_sessions {
  user_id: uuid
  workout_id: uuid
  completed_at: timestamp
  session_data: json
}
```

### Authentication Flow
1. **Web Registration**: Users create accounts via web platform
2. **Mobile Login**: Same credentials work in mobile app  
3. **Subscription Sync**: Web subscriptions unlock mobile features
4. **Cross-Platform Data**: Workout progress syncs between platforms

### Content Pipeline  
1. **Admin Upload**: CSV workout definitions via web admin
2. **Database Storage**: Workout data stored in Supabase
3. **Mobile Sync**: App downloads latest workout definitions  
4. **Offline Storage**: Workouts cached locally for offline use

---

## 📋 UNIFIED LAUNCH CHECKLIST

### Phase 1: Web Platform Completion 🌐 CURRENT FOCUS
- [x] **Basic Web App**: Nuxt.js deployed on AWS Amplify
- [x] **Content System**: Nuxt Content v2 working with articles
- [ ] **Admin Panel**: CSV upload interface for workout management
- [ ] **Supabase Integration**: User accounts and workout database  
- [ ] **Subscription System**: Stripe integration for web payments
- [ ] **SEO Content**: Core articles about training philosophy

### Phase 2: Mobile App Development 📱 NEXT
- [ ] **Expo Setup**: Basic app structure in monorepo
- [ ] **Timer Engine**: Precision interval timing system
- [ ] **Workout Integration**: CSV data → mobile workout sequences
- [ ] **Trial System**: 3-workout, 5-day trial implementation
- [ ] **Sharing Templates**: Viral sharing template system  
- [ ] **App Store Submission**: iOS launch preparation

### Phase 3: Integration & Polish 🔗 FINAL
- [ ] **Cross-Platform Sync**: Web ↔ Mobile account integration
- [ ] **Analytics Implementation**: User behavior and business metrics
- [ ] **Performance Optimization**: Both platforms optimized  
- [ ] **Support Systems**: Customer service, documentation
- [ ] **Marketing Coordination**: Web content + mobile viral sharing

---

## 📈 SUCCESS METRICS & GOALS

### Web Platform Metrics  
- **Organic Traffic**: SEO article performance and search rankings
- **Email Signups**: Conversion rate from articles to email list
- **Subscription Conversion**: Web subscription rate and revenue
- **Content Engagement**: Time on page, article shares, return visitors

### Mobile Platform Metrics
- **Download Conversion**: Web traffic → mobile downloads  
- **Trial Completion**: Users completing 3-workout trial
- **Subscription Upgrade**: Trial → paid subscription rate
- **Viral Sharing**: Post-workout sharing rate and social reach
- **Retention**: Daily/weekly active users, workout completion rates

### Business Goals
- **Revenue**: Subscription revenue across both platforms
- **Growth**: Organic user acquisition via SEO + viral sharing
- **Community**: Build mental toughness movement around "You vs You"
- **Brand Recognition**: Establish GrHiit as science-based HIIT authority

---

## ⚠️ CRITICAL SUCCESS FACTORS

### Web Platform Dependencies
1. **Admin Panel Critical**: Must complete CSV upload system before mobile development
2. **Supabase Integration**: Shared authentication required for mobile sync
3. **Content Quality**: SEO articles must establish authority and drive traffic
4. **Subscription System**: Web payments preferred to avoid App Store fees

### Mobile Platform Dependencies  
1. **Workout Data Pipeline**: Requires completed web admin system
2. **Sharing System**: Viral templates critical for organic growth
3. **Timer Precision**: Core differentiator must be flawless  
4. **Trial Balance**: Must convert users without being restrictive

### Integration Requirements
1. **Seamless Account Sync**: Users shouldn't notice platform differences
2. **Subscription Recognition**: Web subscribers get immediate mobile access
3. **Data Consistency**: Workout progress accurate across platforms
4. **Performance**: Both platforms must be fast and reliable

---

**Next Priority**: Complete web admin panel for CSV workout upload system
**Owner**: Kevin Jordan  
**Updated**: September 4, 2025  
**Status**: Web Live | Mobile Planning Complete | Ready for Development

---

## 📱 VIRAL SHARING & ORGANIC MARKETING

### Post-Workout Sharing Templates

#### Template System Requirements
- **Trigger**: Automatically offer sharing after workout completion
- **Template Library**: Multiple visual templates with "aura type backgrounds"
- **Dynamic Data Integration**: Pull workout data from CSV format
- **Motivational Messaging**: Curated phrases focused on mental toughness

#### Template Data Sources
```json
{
  "workout_data": {
    "workout_number": "1-24",
    "week": "1-8", 
    "duration": "actual_time_completed",
    "intervals_completed": "blocks/intervals_finished",
    "difficulty": "beginner/intermediate/advanced"
  },
  "motivational_phrases": [
    "All it takes is all you've got",
    "The only thing standing between you and your future self is you",
    "You vs You",
    "Do hard things on purpose", 
    "One day. One second. One rep at a time.",
    "Intensity. Discipline. Consistency.",
    "Mental toughness isn't optional"
  ]
}
```

#### Visual Template Categories
1. **Achievement Templates**: "Workout [X] Complete" with progress visualization
2. **Mental Toughness Quotes**: Focus on identity and decision-making
3. **Progress Milestones**: "Week [X] Complete", "Halfway There", "Program Complete"
4. **Oxygen Debt Challenges**: "Pushed through when gassed", "New personal limit"
5. **You vs You Themes**: Individual accomplishment focus

#### Template Design Requirements
- **Midjourney Generated**: Professional "aura type" backgrounds
- **Brand Consistency**: GrHiit colors, fonts, and messaging
- **Multiple Formats**: Instagram Square, Story, TikTok Vertical
- **CSV Integration**: Workout details dynamically inserted
- **Mobile Optimized**: Fast rendering, small file sizes

### Social Platform Strategy

#### Primary Platforms (Launch)
1. **Instagram**: Stories + Feed posts
2. **TikTok**: Vertical video format templates  
3. **Future**: Twitter/X (API limitations noted)

#### Sharing Flow
```
Workout Complete → Template Selection → Personalize Message → Share to Platform(s)
                ↓
        Optional: Save to Camera Roll
```

#### Viral Content Categories
- **Mental Toughness Identity**: "I'm someone who does hard things"
- **You vs You Philosophy**: Personal achievement focus  
- **Oxygen Debt Challenges**: "Pushed through when completely gassed"
- **Progressive Milestones**: Week-by-week journey documentation
- **Before/After Mindset**: "Old me vs New me" mental transformation

---

## 🔥 ORGANIC GROWTH STRATEGY

### Viral Mechanics
1. **Identity-Based Sharing**: Users share because it reflects who they want to be
2. **Achievement Unlocking**: Natural sharing moments after difficult workouts  
3. **Community Building**: "You vs You" creates supportive, non-competitive environment
4. **Mental Toughness Movement**: Broader theme than just fitness
5. **Authentic Stories**: Real user experiences, not influencer content

### Content Amplification
- **User-Generated Content**: Encourage sharing personal breakthroughs
- **Mental Toughness Hashtags**: #YouVsYou #MentalToughness #DoHardThings
- **Founder Story Integration**: Kevin's journey and philosophy
- **Challenge Campaigns**: Weekly/monthly mental toughness challenges

---

## 📊 TECHNICAL SHARING REQUIREMENTS

### Mobile Implementation
```typescript
interface SharingTemplate {
  id: string
  name: string
  category: 'achievement' | 'quote' | 'milestone' | 'challenge'
  background_image: string
  text_overlay_zones: TextZone[]
  supported_formats: ['instagram_square', 'instagram_story', 'tiktok_vertical']
}

interface WorkoutShareData {
  workout_id: number
  workout_name: string
  week_number: number
  completion_time: string
  user_stats: UserStats
  motivational_phrase: string
  template_id: string
}
```

### Sharing Features
- **Template Engine**: Dynamic text overlay on background images
- **Export Options**: High-resolution image generation
- **Platform Integration**: Native iOS sharing sheet
- **Analytics**: Track which templates/phrases perform best
- **A/B Testing**: Multiple template versions for optimization

---

## 📋 LAUNCH CHECKLIST

### Core Functionality ✅ DEFINED
- [x] **Interval Timer System**: Precision timing for any work/rest ratio
- [x] **Workout Program**: 24 workouts, CSV-driven definitions  
- [x] **Trial System**: 3 free workouts, 5-day limit
- [x] **Offline Capability**: Local storage for all workouts
- [x] **Authentication**: Shared Supabase accounts with web

### Viral Sharing System 🎯 IN PLANNING
- [ ] **Template Library**: Design and develop sharing templates
- [ ] **Motivational Content**: Curate mental toughness phrases  
- [ ] **Dynamic Data Integration**: Workout data → template system
- [ ] **Platform Integration**: Instagram/TikTok sharing
- [ ] **Template Engine**: Mobile image generation system

### Business Requirements 💼 PENDING
- [ ] **App Store Submission**: Screenshots, metadata, review process
- [ ] **Subscription System**: Apple App Store integration + web sync
- [ ] **Analytics**: User behavior and sharing performance tracking
- [ ] **Support System**: Customer service and bug reporting
- [ ] **Legal**: Terms of service, privacy policy updates

### Marketing Launch 📢 FUTURE
- [ ] **Influencer Strategy**: Mental toughness focused partnerships
- [ ] **Content Calendar**: Supporting web content and social posts
- [ ] **Community Building**: Discord/social media communities  
- [ ] **PR Strategy**: Mental health/fitness media outreach
- [ ] **Launch Campaign**: Coordinated web + mobile app release

---

## 🎨 TEMPLATE DEVELOPMENT PIPELINE

### Phase 1: Template Design (Midjourney)
1. **Background Generation**: "Aura type" backgrounds in various styles
2. **Brand Integration**: GrHiit colors and visual identity
3. **Format Variations**: Square, Story, Vertical orientations
4. **Style Testing**: A/B test different visual approaches

### Phase 2: Content Curation  
1. **Motivational Phrases**: Expand beyond current set
2. **Context Variations**: Different phrases for different achievements
3. **Identity Messaging**: "I'm someone who..." variations
4. **Mental Toughness Themes**: Broader philosophical concepts

### Phase 3: Technical Implementation
1. **Template Engine**: Dynamic text overlay system
2. **Image Generation**: High-quality mobile rendering
3. **Platform Optimization**: Format-specific export
4. **Performance**: Fast template loading and generation

---

## 📈 SUCCESS METRICS

### App Growth Metrics
- **Organic Downloads**: Driven by social sharing
- **Sharing Rate**: % of users who share post-workout
- **Template Performance**: Which templates/phrases go viral
- **User Retention**: Impact of sharing on engagement

### Viral Content Metrics  
- **Social Media Reach**: Impressions and engagement on shared content
- **Hashtag Performance**: #YouVsYou and related tag usage
- **User-Generated Content**: Volume and quality of authentic shares
- **Brand Recognition**: GrHiit mentions and attribution

---

## ⚠️ CRITICAL SUCCESS FACTORS

### Must-Have Before Launch
1. **Sharing Templates Must Be Ready**: Core differentiator for organic growth
2. **Template Quality**: Professional design quality competitive with top fitness apps
3. **Seamless Sharing Experience**: One-tap sharing to maximize conversion
4. **Phrase Curation**: Mental toughness messaging must resonate authentically
5. **Performance**: Template generation must be fast and reliable

### Risk Mitigation
- **Template Backup Plan**: Multiple design styles in case primary approach fails
- **Phrase Testing**: Validate motivational content with target audience
- **Platform Dependencies**: Have alternatives if iOS sharing APIs change
- **Content Moderation**: Ensure shared content aligns with brand values

---

**Next Steps**: 
1. Begin template design process (Midjourney)
2. Curate comprehensive motivational phrase library
3. Design technical architecture for sharing system
4. Integrate sharing requirements into mobile app development plan

**Owner**: Kevin Jordan  
**Updated**: September 4, 2025  
**Status**: Planning Phase - Ready for Template Development