import WorkoutTile from "./WorkoutTile";
import { Fade } from "react-awesome-reveal";

interface Props {
  workouts: any;
  onEditWorkout: (workoutId: string) => void;
}

const WorkoutList = ({ workouts, onEditWorkout: onEditWorkout }: Props) => {
  return (
    <>
      <Fade>
        <div className="bg-amber-200 bg-opacity-65 rounded-lg">
          <p className="p-2 text-sm italic">
            Total time worked out this season: {}
          </p>
          {workouts.toReversed().map((workout: any) => (
            <button
              key={workout.id}
              className="m-1"
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
      </Fade>
    </>
  );
};

export default WorkoutList;
