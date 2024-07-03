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
          {workouts.map((workout: any) => (
            <button
              key={workout.id}
              className="m-2"
              onClick={() => {
                onEditWorkout(workout.id), console.log(workout.id);
              }}
            >
              <WorkoutTile
                title={workout.title}
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
