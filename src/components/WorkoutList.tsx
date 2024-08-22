import { useState } from "react";
import { TrainingType, Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";
import {
  filterWorkouts,
  getWeekNumber,
  totalWorkoutTime,
} from "../helpers/workoutStorageHelper";
import { formatDateForDisplay, newId } from "../utils/helpers";

interface Props {
  workouts: Workout[];
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout }: Props) => {
  const [trainingTypeFilter, setTrainingTypeFilter] = useState<
    TrainingType | ""
  >("");

  // Group workouts by week
  const groupedWorkouts: { [week: string]: Workout[] } = {};
  filterWorkouts(workouts, trainingTypeFilter).forEach((workout) => {
    const week = getWeekNumber(workouts, workout);
    if (!groupedWorkouts[week]) {
      groupedWorkouts[week] = [];
    }
    groupedWorkouts[week].push(workout);
  });

  // Sort workouts within each week
  const sortedGroupedWorkouts = Object.keys(groupedWorkouts)
    .sort((weekA, weekB) => {
      const dateA = groupedWorkouts[weekA][0].date;
      const dateB = groupedWorkouts[weekB][0].date;
      return dateB - dateA; // Reverse chronological order
    })
    .reduce((acc, week) => {
      acc[week] = [...groupedWorkouts[week]].sort(
        (workoutA, workoutB) => workoutB.date - workoutA.date
      );
      return acc;
    }, {} as { [week: string]: Workout[] });

  return (
    <>
      <div className="bg-amber-200 bg-opacity-65 shadow-md p-1 pb-2 rounded-lg min-w-80 w-fit">
        <p className="text-sm italic p-3">
          Total training time:{" "}
          {totalWorkoutTime(filterWorkouts(workouts, trainingTypeFilter))} hours
        </p>
        <div className="flex justify-end -mt-12 mr-4">
          <button
            className="bg-amber-500 font-medium rounded-full w-10 h-10 ml-6 mt-3"
            onClick={() => {
              onEditWorkout(newId());
            }}
          >
            +
          </button>
        </div>
        <div className="pb-2">
          <select
            name="training-type"
            id="training-type"
            value={trainingTypeFilter}
            className="flex w-56 mx-3 p-2 h-10 bg-amber-300 bg-opacity-80 shadow-md rounded resize-y"
            onChange={(element) => {
              setTrainingTypeFilter(element.target.value as TrainingType);
            }}
          >
            <option value={""}>All Workouts</option>
            <option value={TrainingType.Base}>Base Fitness</option>
            <option value={TrainingType.Strength}>Strength</option>
            <option value={TrainingType.Power}>Power</option>
            <option value={TrainingType.PowerEndurance}>Power Endurance</option>
            <option value={TrainingType.Performance}>Performance</option>
          </select>
        </div>

        {Object.keys(sortedGroupedWorkouts).map((week) => (
          <div key={week} className="m-1 mx-3 sm:m-2 w-11/12 sm:w-fit">
            <p className="text-sm font-bold mt-3 sm:pl-1 sm:w-18">{week}</p>
            {sortedGroupedWorkouts[week].map((workout) => (
              <button
                key={workout.id}
                className="w-full sm:w-fit"
                onClick={() => {
                  onEditWorkout(workout.id);
                }}
              >
                <WorkoutTile
                  name={workout.name}
                  trainingType={workout.trainingType}
                  date={formatDateForDisplay(workout.date)}
                  id={workout.id}
                />
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkoutList;
