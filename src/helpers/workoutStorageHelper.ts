import { Season } from "../models/Season";
import { TrainingType, Workout } from "../models/Workout";
import { updateSeason } from "./seasonsStorageHelper";

export const getWorkouts = (currentSeason: Season): Workout[] => {
  const workouts = currentSeason.workouts;
  return workouts;
};

export const saveWorkout = (updatedWorkout: Workout, currentSeason: Season) => {
  currentSeason.workouts = [
    ...getWorkouts(currentSeason).filter(
      (existingWorkout) => existingWorkout.id !== updatedWorkout.id
    ),
    updatedWorkout,
  ];
  updateSeason(currentSeason);
};

export const deleteWorkout = (workoutId: string, currentSeason: Season) => {
  const updatedWorkouts = getWorkouts(currentSeason).filter(
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
