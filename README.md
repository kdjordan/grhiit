# PROJECT PROPOSAL - GRHIIT

This project is based on an idea that I've had for a few years. It is an introduction to a specific type of fitness training that I have personally been involved in for over a decade. The purpose of this web app will be to introduce the principles behind the training methodology and give the user a 10 workout cycle to complete. Also, the app will have an admin section that will allow me to create the individual workouts for the users.  

The tech stack will be React on the frontend. The API will be built using NodeJS and the DB will be Postgres. All components of the app will be hosted on AWS.  

The primary focus will be on the frontend and the admin section functionalities. Making the interface intuitive and easy to use will be very important for this project as well as giving good information about who and why this flavor of HIIT is advantageous.  

I am aiming for users that already have some sort of fitness background and are likely already familiar with HIIT (High Intensity Interval Training). The demographic here is individuals between the ages of 15 - 55.

The backend DB should be fairly straightforward, as I will only be recording basic information about the user and tracking their progress throughout the 10 workout cycle. Other information stored will be the 10 individual workouts. I will need to create my own API for this and have a couple of forms to gather information from the user and the admin.

The Schema will look something like this :

TABLE USER
- Username - str
- First name - str
- Last name - str
- Email - str
- Begin date - date
- End date - date
- Session number (1-10) - int

TABLE SESSION
- Session number - int
- Session Intervals - []

TABLE INTERVALS
- Id - int
- Work - int 
- Rest - int
- Movement - str  

The basic functionality will include giving the user the ability to sign up and participate in the training sessions. The only way to progress from one training session to the next is to fully ‘play’ a session. The ‘play’ functionality is basically a series of timed exercises where the user is encouraged to count the repetitions that they complete for each session. The app will act as an interval timer, cuing the user to begin a movement and then rest at specific times. The screen will display the current exercise meant to be performed and have a countdown function that alerts the user when to rest.  

Also, an admin section will be available for me to enter the workouts into the DB, thus creating the individual workouts that a user can sign up and participate in.  

When a user first visits the page, there will be a small set of pages that will describe how and why the training cycle is good and why they should participate in the program. At any point the user can opt out and sign up and begin, but they will be encourages to ready all of the information presented so they know what they are getting into.  










