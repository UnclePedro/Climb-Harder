import { Workout } from "../models/Workout";

// If previous user, get existing workouts data. If new user, set empty workouts array.
export const getWorkouts = (): Workout[] => {
  if (localStorage.getItem("workouts") === null) {
    localStorage.setItem("workouts", "[]");
  }
  const workoutsLocal = localStorage.getItem("workouts") as string;
  const workouts = JSON.parse(workoutsLocal) as Workout[];
  return workouts;
};

export const saveWorkout = (workout: Workout) => {
  const workouts = getWorkouts();

  // Check if the workout already exists by comparing the opened/editing workoutId with the workout array id's
  const existingWorkout = workouts.find(
    (savedWorkout: Workout) => savedWorkout.id === workout.id
  );

  // Holds array of workouts that reflects any updates made to existing workouts, or recieves new workoutout object
  let updatedWorkouts;

  if (existingWorkout) {
    // The ternary operator updates the specific workout object if its id matches an existing workout.id; otherwise, it keeps the workout object unchanged to be added in else statement.
    updatedWorkouts = workouts.map((savedWorkout: Workout) =>
      savedWorkout.id === workout.id ? workout : savedWorkout
    );
  } else {
    // If the workout does not exist, add it
    updatedWorkouts = [...workouts, workout];
  }

  localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
};

export const deleteWorkout = (workoutId: string) => {
  const updatedWorkouts = getWorkouts().filter(
    (existingWorkout: Workout) => existingWorkout.id !== workoutId
  );
  localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
};