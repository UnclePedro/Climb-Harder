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

export const getWeekNumber = (workouts: Workout[], workout: Workout) => {
  const firstWorkoutDate = new Date(
    workouts.reduce((firstWorkout, currentWorkout) =>
      currentWorkout.date < firstWorkout.date ? currentWorkout : firstWorkout
    ).date
  );
  const weekNumber =
    Math.floor(
      (new Date(workout.date).getTime() - firstWorkoutDate.getTime()) /
        (1000 * 60 * 60 * 24 * 7)
    ) + 1;
  return `Week ${weekNumber}`;
};

// I need to group the workouts based on 7 days between each workout. Week 1, Week 2 etc.
// Create an array that holds objects for each week with the corresponding workouts
// Need to run a maths operation, and based on the result, push each workout where it needs to go
