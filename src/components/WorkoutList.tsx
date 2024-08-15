import { useState } from "react";
import { TrainingType, Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";
import {
  filterWorkouts,
  totalWorkoutTime,
} from "../helpers/workoutStorageHelper";
import { formatDate, newId } from "../utils/helpers";

interface Props {
  workouts: Workout[];
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout }: Props) => {
  const [trainingTypeFilter, setTrainingTypeFilter] = useState<
    TrainingType | ""
  >("");

  return (
    <>
      <div className="bg-amber-200 bg-opacity-65 shadow-md p-1 pb-2 rounded-lg min-w-80 w-fit">
        <p className="text-sm italic p-3">
          Total time worked out:{" "}
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

        {filterWorkouts(workouts, trainingTypeFilter)
          .sort((workoutA, workoutB) => workoutB.date - workoutA.date)
          .map((workout: Workout) => (
            <button
              key={workout.id}
              className="m-1 mx-3 sm:m-2 w-11/12 sm:w-fit"
              onClick={() => {
                onEditWorkout(workout.id);
              }}
            >
              <WorkoutTile
                name={workout.name}
                trainingType={workout.trainingType}
                date={formatDate(workout.date)}
                id={workout.id}
              />
            </button>
          ))}
      </div>
    </>
  );
};

export default WorkoutList;
