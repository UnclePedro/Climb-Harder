import { useState } from "react";
import { TrainingType, Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";
import {
  filterWorkouts,
  totalWorkoutTime,
} from "../helpers/workoutStorageHelper";

interface Props {
  workouts: Workout[];
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout: onEditWorkout }: Props) => {
  const [trainingTypeFilter, setTrainingTypeFilter] = useState<
    TrainingType | ""
  >("");

  return (
    <>
      <div className="bg-amber-200 bg-opacity-65 shadow-md rounded-lg w-fit">
        <p className="text-sm italic p-4">
          Total time worked out this season:{" "}
          {totalWorkoutTime(filterWorkouts(workouts, trainingTypeFilter))} hours
        </p>
        <select
          name="training-type"
          id="training-type"
          value={trainingTypeFilter}
          className="flex w-10/12 sm:w-72 m-3 p-3 h-12  bg-amber-200 bg-opacity-60 shadow-md rounded resize-y"
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
        {filterWorkouts(workouts, trainingTypeFilter).map((workout: any) => (
          <button
            key={workout.id}
            className="m-2"
            onClick={() => {
              onEditWorkout(workout.id), console.log(workout.id);
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
