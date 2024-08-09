import { useState } from "react";
import { TrainingType, Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";
import {
  filterWorkouts,
  totalWorkoutTime,
} from "../helpers/workoutStorageHelper";
import { newId } from "../utils/helpers";

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
      <div className="bg-amber-200 bg-opacity-65 shadow-md rounded-lg min-w-80 w-fit">
        <p className="text-sm italic p-4">
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
        <div className="pb-4">
          <select
            name="training-type"
            id="training-type"
            value={trainingTypeFilter}
            className="flex w-56 mx-3 p-3 h-12  bg-amber-300 bg-opacity-80 shadow-md rounded resize-y"
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

        {filterWorkouts(workouts, trainingTypeFilter).map((workout: any) => (
          <button
            key={workout.id}
            className="m-2"
            onClick={() => {
              onEditWorkout(workout.id);
            }}
          >
            <WorkoutTile
              name={workout.name}
              trainingType={workout.trainingType}
              date={workout.date}
              id={workout.id}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default WorkoutList;
