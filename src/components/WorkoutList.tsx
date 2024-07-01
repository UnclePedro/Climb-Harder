import WorkoutTile from "./WorkoutTile";

interface Props {
  workouts: any;
}

const WorkoutList = ({ workouts }: Props) => {
  // Need to map workouts array into WorkoutTile with structure of Workout interface... Needs to be pulling the data from LocalStorage instead of State to render the list

  const workoutsLocal = localStorage.getItem("workouts");
  const unstringifiedWorkouts = JSON.parse(workoutsLocal || "");

  return (
    <>
      {unstringifiedWorkouts.map((workout: any) => (
        <>
          <p>localStorage:</p>
          <WorkoutTile key={workout.id} title={workout.title} />
        </>
      ))}
    </>
  );
};

export default WorkoutList;
