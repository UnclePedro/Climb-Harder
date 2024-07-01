import WorkoutTile from "./WorkoutTile";

interface Props {
  workouts: any;
}

const WorkoutList = ({ workouts }: Props) => {
  // Need to map workouts array into WorkoutTile with structure of Workout interface... Needs to be pulling the data from LocalStorage instead of State to render the list

  const workoutsLocalStorage = localStorage.getItem("workouts");

  return (
    <>
      <p>Local Storage: {workoutsLocalStorage}</p>

      {workouts.map((workout: any) => (
        <WorkoutTile key={workout.id} title={workout.title} />
      ))}
    </>
  );
};

export default WorkoutList;
