import { useState } from "react";
import { TrainingType, Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";

interface Props {
  workouts: Workout[];
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout: onEditWorkout }: Props) => {
  const [trainingTypeFilter, setTrainingTypeFilter] = useState<TrainingType>(
    TrainingType.All
  );

  const filteredWorkouts = (workouts: Workout[]) => {
    if (trainingTypeFilter === TrainingType.All) {
      console.log(trainingTypeFilter);
      return workouts;
    } else console.log(trainingTypeFilter);

    return workouts.filter(
      (workout) => workout.trainingType === trainingTypeFilter
    );
  };

  return (
    <>
      <div className="bg-amber-200 bg-opacity-65 rounded-lg w-fit">
        <select
          name="training-type"
          id="training-type"
          value={trainingTypeFilter}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
          onChange={(element) => {
            setTrainingTypeFilter(element.target.value as TrainingType);
          }}
        >
          <option value={TrainingType.All}>All Workouts</option>
          <option value={TrainingType.Base}>Base Fitness</option>
          <option value={TrainingType.Strength}>Strength</option>
          <option value={TrainingType.Power}>Power</option>
          <option value={TrainingType.PowerEndurance}>Power Endurance</option>
          <option value={TrainingType.Performance}>Performance</option>
        </select>
        {filteredWorkouts(workouts).map((workout: any) => (
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
