FitLog
FitLog is a responsive workout library and fitness planning web application built with Next.js. Users can browse workouts, view detailed workout information, add exercises to their daily plan, and save workouts for later.

Technologies Used
Next.js
React
TypeScript
Tailwind CSS
DaisyUI
Next.js Image
Context API
REST API
Features
1. Workout Library
Displays workout exercises from the FitLog API.
Shows workout image, name, muscle groups, equipment, duration, calories, and rating.
Responsive workout card layout.
Users can click a workout to view its details.
2. Workout Details
Each workout has a dedicated details page containing:

Workout image
Workout name
Description
Muscle groups
Equipment
Difficulty
Sets
Reps
Duration
Calories burned
Rating
Step-by-step instructions
Users can also add a workout to their plan or save it for later.

3. My Plan
Users can create their daily workout plan.

The My Plan page includes:

Today's Plan
Saved workouts
Total exercises
Total workout minutes
Total calories
View Details button
Mark as Done button
Remove workout option
4. Saved Workouts
Users can save workouts for later.

Saved workouts can be:

Viewed from the Saved tab
Opened through View Details
Removed using the remove button
5. Responsive Design
FitLog is designed to work across:

Mobile devices
Tablets
Laptops
Desktop screens
6. Workout API
Workout information is loaded dynamically from the FitLog API rather than being hardcoded.

API:

https://api.abcz.workers.dev/api/fitlog

7. Context API
React Context API is used to manage:

Today's workout plan
Saved workouts
Adding workouts
Removing workouts
Saving workouts
8. Dynamic Workout Routes
Each workout has its own dynamic URL:

/workout/[id]
