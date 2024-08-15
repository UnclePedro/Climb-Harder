import { Season } from "../models/Season";
import { TrainingType, Workout } from "../models/Workout";
import { updateSeason } from "./seasonsStorageHelper";

export const getWorkouts = (currentSeason: Season): Workout[] => {
  const workouts = currentSeason.workouts;
  return workouts;
};

export const saveWorkout = (updatedWorkout: Workout, currentSeason: Season) =>
  updateSeason({
    ...currentSeason,
    workouts: [
      ...getWorkouts(currentSeason).filter(
        (existingWorkout) => existingWorkout.id !== updatedWorkout.id
      ),
      updatedWorkout,
    ],
  });

export const deleteWorkout = (workoutId: string, currentSeason: Season) => {
  const updatedWorkouts = getWorkouts(currentSeason).filter(
    (existingWorkout: Workout) => existingWorkout.id !== workoutId
  );
  updateSeason({
    ...currentSeason,
    workouts: updatedWorkouts,
  });
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
    return workouts;
  }

  return workouts.filter(
    (workout) => workout.trainingType === trainingTypeFilter
  );
};
