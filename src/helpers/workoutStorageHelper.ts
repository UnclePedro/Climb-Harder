import { TrainingType, Workout } from "../models/Workout";

// If previous user, get existing workouts data. If new user, set empty workouts array.
export const getWorkouts = (): Workout[] => {
  if (localStorage.getItem("workouts") === null) {
    localStorage.setItem("workouts", "[]");
  }
  const workoutsLocal = localStorage.getItem("workouts") as string;
  const workouts = JSON.parse(workoutsLocal) as Workout[];
  return workouts;
};

// const validateForm = (workout: Workout) => {
//   if (workout.name === "") {
//     alert("Please fill out workout name.");
//     return false;
//   }
// };

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

export const getDate = () => {
  let date, month, year;

  date = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();

  date = date.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");

  return `${year}-${month}-${date}`;
};

export const totalWorkoutTime = (workouts: Workout[]) => {
  return workouts
    .reduce((accumulator: number, { duration }) => {
      return accumulator + duration / 60;
    }, 0)
    .toFixed(2);
};

export const filterWorkouts = (
  workouts: Workout[],
  trainingTypeFilter: TrainingType | string
) => {
  if (trainingTypeFilter === "") {
    console.log(trainingTypeFilter);
    return workouts;
  } else console.log(trainingTypeFilter);

  return workouts.filter(
    (workout) => workout.trainingType === trainingTypeFilter
  );
};
