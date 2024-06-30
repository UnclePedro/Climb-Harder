interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: String) => void;
}

const Home = ({ seasonNotesOpen, onEditWorkout }: Props) => {
  return (
    <>
      <div className="p-6">
        <p className="text-sm text-left w-72">
          “The man who has no imagination has no wings.” – Muhammad Ali
        </p>
        <h1 className="pt-6 text-lg text-left font-bold">Logbook</h1>
        <button
          className="bg-blue-200 rounded-lg p-2"
          onClick={() => seasonNotesOpen()}
        >
          Goals & Achievements
        </button>
        <button
          className="bg-blue-200 rounded-lg p-2"
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
