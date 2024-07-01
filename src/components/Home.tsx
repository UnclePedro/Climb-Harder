interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: String) => void;
}

const Home = ({ seasonNotesOpen, onEditWorkout }: Props) => {
  return (
    <>
      <div className="p-6 font-roboto">
        <p className="text-sm text-left w-72">
          “The man who has no imagination has no wings.” – Muhammad Ali
        </p>
        <h1 className="pt-6 text-2xl text-left font-bold">Training Logbook</h1>
        <button
          className="bg-gray-500 font-medium rounded-lg p-2"
          onClick={() => seasonNotesOpen()}
        >
          Goals & Achievements
        </button>
        <button
          className="bg-gray-500 font-medium rounded-lg p-2 ml-12"
          onClick={() => {
            const newWorkoutId = crypto.randomUUID();
            onEditWorkout(newWorkoutId);
          }}
        >
          New Workout
        </button>
      </div>
    </>
  );
};

export default Home;
