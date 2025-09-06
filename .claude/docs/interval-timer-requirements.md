# GrHiit Interval Timer Requirements

## Precision Interval Training System

Based on the detailed workout structure provided, this document defines the exact requirements for the mobile app's interval timer functionality.

## Workout Structure Example

**15-minute precision workout:**
```
Block 1: 10 intervals → 6 seconds work / 3 seconds rest → 30 second break
Block 2: 10 intervals → 6 seconds work / 3 seconds rest → 30 second break  
Block 3: 3 intervals → Burpees/Flying Squats alternating → 30 second break
Repeat Block 3: 2 more times (total 3 rounds)
Block 4: 10 intervals → 6 seconds work / 3 seconds rest → 30 second break
Block 5: 10 intervals → 6 seconds work / 3 seconds rest → END
```

## Key Characteristics

### Precision Requirements
- **Exact Timing**: Variable intervals (can range from seconds to minutes) require precision accuracy
- **Never Stop**: Once started, continuous pressure with precise timing
- **No Pausing**: Users cannot pause mid-workout (design philosophy)
- **Scripted Sequences**: Every work/rest ratio precisely defined in CSV
- **Mental Challenge**: Longer intervals (up to 1+ minutes) designed to push mental limits when "completely gassed"

### Mobile Timer Functionality

#### Core Timer Features
1. **Precision Timing**: Accurate timing for any interval duration (seconds to minutes)
2. **Exercise Display**: Large, clear text showing current exercise
3. **Interval State**: Clear "WORK" vs "REST" vs "BREAK" indicators  
4. **Progress Tracking**: Show current interval (5/10) and block (2/5)
5. **Audio/Visual Cues**: Clear start/stop signals for any duration
6. **Background Operation**: Timer continues if app backgrounded
7. **Screen Wake**: Prevent phone sleep during active workouts
8. **Mental Endurance Focus**: Support for challenging long intervals when users are exhausted

#### Timer UI Layout Concept
```
┌─────────────────────────────────────┐
│           WORKOUT 1 - WEEK 1         │
│                                     │
│              WORK                   │
│               :05                   │
│                                     │
│         HIGH KNEES                  │
│                                     │
│    Interval 5/10  │  Block 2/5     │
│                                     │
│         [●●●●○○○○○○]               │
│                                     │
│    Next: 3 sec rest                │
└─────────────────────────────────────┘
```

## CSV Structure Requirements

### Proposed CSV Format
```csv
workout_id,block_number,interval_count,work_seconds,rest_seconds,exercise_name,block_rest_seconds,repeat_count
1,1,10,6,3,"High Knees",30,1
1,2,10,6,3,"Jumping Jacks",30,1  
1,3,3,20,10,"Burpees",30,3
1,3,3,20,10,"Flying Squats",30,3
1,4,10,6,3,"Mountain Climbers",30,1
1,5,10,6,3,"High Knees",0,1
```

### CSV Column Definitions
- **workout_id**: Links to main workout table (1-24)
- **block_number**: Sequence within workout (1,2,3,4,5...)
- **interval_count**: How many work/rest cycles in this block
- **work_seconds**: Duration of work interval
- **rest_seconds**: Duration of rest interval  
- **exercise_name**: Movement to perform during work intervals
- **block_rest_seconds**: Break between blocks (usually 30 seconds)
- **repeat_count**: How many times this block repeats

## Database Schema

### Workout Tables
```sql
-- Main workout definitions
workouts {
  id: uuid
  week_number: 1-8
  workout_number: 1-24
  title: string
  estimated_duration: minutes
  total_blocks: integer
}

-- Individual interval blocks from CSV
workout_blocks {
  id: uuid
  workout_id: uuid
  block_number: integer
  interval_count: integer
  work_seconds: integer
  rest_seconds: integer
  exercise_name: string
  block_rest_seconds: integer
  repeat_count: integer
}

-- User workout sessions
user_workout_sessions {
  id: uuid
  user_id: uuid
  workout_id: uuid
  started_at: timestamp
  completed_at: timestamp
  status: 'completed' | 'abandoned' | 'paused'
  blocks_completed: integer
  total_blocks: integer
  actual_duration: minutes
  abandon_reason: string
}
```

## Technical Implementation Requirements

### Timer Precision
- **React Native Timer**: Use precise timing library (not setTimeout)
- **Background Audio**: iOS background modes for uninterrupted timer
- **Haptic Feedback**: iPhone vibration for interval transitions
- **Audio Cues**: Beep or voice countdown for start/stop

### Offline Storage
- **All 24 Workouts**: Must be stored locally for offline operation
- **SQLite Database**: Local storage of workout blocks and user progress
- **Sync Strategy**: Upload completed sessions when connected

### User Experience
- **Large Timer Display**: Easy to see during intense exercise
- **Color Coding**: Different colors for WORK/REST/BREAK states
- **Progress Indicators**: Visual progress through workout
- **No Interruptions**: Disable notifications during workouts

## Progressive Difficulty Examples

**Note**: These are illustrative - actual intervals will vary widely based on CSV definitions

### Potential Progression Patterns
- **Early Weeks**: Shorter intervals to build base fitness
- **Mid Program**: Variable intervals mixing short/long to build capacity  
- **Advanced Weeks**: Longer challenging intervals (30+ seconds to 1+ minutes)
- **Mental Component**: Longer work intervals when exhausted test mental resilience

### Example Interval Variations
- Short: 6 seconds work / 3 seconds rest
- Medium: 20 seconds work / 10 seconds rest  
- Long: 45 seconds work / 15 seconds rest
- Mental Challenge: 60+ seconds work / 60+ seconds rest

## Data Collection Requirements

### During Workout
- **Start/End Times**: Exact workout duration
- **Block Completion**: Which blocks were completed
- **Interruptions**: If user backgrounds app or receives calls

### Post Workout
- **Completion Status**: Full completion vs abandoned
- **Perceived Exertion**: Optional RPE scale 1-10
- **Notes**: Optional user feedback

## Critical Questions Remaining

1. **Audio Strategy**: Beeps, voice cues, or visual-only?
2. **Pause Functionality**: Emergency pause allowed, or strictly no-pause?
3. **Interruption Handling**: What if phone call comes in during workout?
4. **Repeat Workouts**: Can users redo completed workouts during trial?
5. **Alternative Exercises**: Modifications for injuries/limitations?

## Ready to Implement

With this structure defined, we can begin building:
1. **Timer Engine**: Precision interval timing system
2. **Workout Parser**: Convert CSV data to timer sequences  
3. **UI Components**: Large, clear workout display
4. **Local Storage**: Offline workout data management
5. **Progress Tracking**: 8-week program visualization

---

**Status**: Timer requirements fully defined
**Next**: Begin Expo app setup with timer prototype
**Created**: September 4, 2025