import { useState } from "react";
import Home from "./components/Home.tsx";
import SeasonNotes from "./components/SeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";

function App() {
  const workoutsLocal = localStorage.getItem("workouts");
  const unstringifiedWorkouts = JSON.parse(workoutsLocal || "");

  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<String>();
  const [workouts, setWorkouts] = useState(unstringifiedWorkouts);

  if (displaySeasonNotes)
    return <SeasonNotes onClose={() => setDisplaySeasonNotes(false)} />;
  if (editingWorkoutId)
    return (
      <EditWorkout
        onClose={() => setEditingWorkoutId(undefined)}
        workoutId={editingWorkoutId}
        workouts={workouts}
        onSave={setWorkouts}
      />
    );

  return (
    <>
      <Home
        seasonNotesOpen={() => setDisplaySeasonNotes(true)}
        onEditWorkout={(workoutId) => setEditingWorkoutId(workoutId)}
        workouts={workouts}
      />
    </>
  );
}

export default App;
