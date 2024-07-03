import WorkoutTile from "./WorkoutTile";
import { Fade } from "react-awesome-reveal";

interface Props {
  workouts: any;
}

const WorkoutList = ({ workouts }: Props) => {
  // Need to map workouts array into WorkoutTile with structure of Workout interface... Needs to be pulling the data from LocalStorage instead of State to render the list

  const workoutsLocal = localStorage.getItem("workouts");
  const unstringifiedWorkouts = JSON.parse(workoutsLocal || "");

  return (
    <>
      <Fade>
        <div className="bg-amber-200 bg-opacity-65 rounded-lg">
          {unstringifiedWorkouts.map((workout: any) => (
            <>
              <button className="m-2">
                <WorkoutTile
                  key={workout.id}
                  title={workout.title}
                  date={workout.date}
                  id={workout.id}
                />
              </button>
            </>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default WorkoutList;
