import { useState } from "react";
import Home from "./components/Home.tsx";
import SeasonNotes from "./components/SeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import { getWorkouts } from "./helpers/workoutStorageHelper.ts";

function App() {
  const workouts = getWorkouts();

  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string>();

  if (displaySeasonNotes)
    return <SeasonNotes onClose={() => setDisplaySeasonNotes(false)} />;
  if (editingWorkoutId)
    return (
      <EditWorkout
        onClose={() => setEditingWorkoutId(undefined)}
        workoutId={editingWorkoutId}
        workouts={workouts}
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
