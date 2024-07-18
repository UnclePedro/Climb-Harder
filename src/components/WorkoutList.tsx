import { Workout } from "../models/Workout";
import WorkoutTile from "./WorkoutTile";

interface Props {
  workouts: Workout[];
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout: onEditWorkout }: Props) => {
  return (
    <>
      <div className="bg-amber-200 bg-opacity-65 rounded-lg w-fit">
        {workouts.map((workout: any) => (
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
