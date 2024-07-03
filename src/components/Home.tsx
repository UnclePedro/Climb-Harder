import WorkoutList from "./WorkoutList";

interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: String) => void;
  workouts: any;
}

const Home = ({ seasonNotesOpen, onEditWorkout, workouts }: Props) => {
  return (
    <>
      <div className="p-6 font-roboto lg:p-12">
        <div className="flex">
          <p className="text-sm text-left w-72">
            “The man who has no imagination has no wings.” – Muhammad Ali
          </p>
          <button className="bg-amber-600 font-medium rounded-full w-10 p-2 ml-10">
            ///
          </button>
        </div>

        <div className="flex mt-6">
          <h1 className="pt-6 text-2xl text-left font-bold">
            Training Logbook
          </h1>
          <button
            className="bg-amber-600 font-medium rounded-full w-10 h-10 ml-6 mt-5"
            onClick={() => {
              const newWorkoutId = crypto.randomUUID();
              onEditWorkout(newWorkoutId);
            }}
          >
            +
          </button>
        </div>
        <button
          className="bg-amber-600 font-medium rounded-lg px-2 py-1 mt-3"
          onClick={() => seasonNotesOpen()}
        >
          Goals & Achievements
        </button>
        <p className="font-medium text-lg mt-3">All Workouts</p>
        <WorkoutList workouts={workouts} onEditWorkout={onEditWorkout} />
      </div>
    </>
  );
};

export default Home;
