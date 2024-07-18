import { useState } from "react";
import Home from "./components/Home.tsx";
import EditSeasonNotes from "./components/EditSeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import { getWorkouts } from "./helpers/workoutStorageHelper.ts";
import { getSeasonNotes } from "./helpers/seasonNotesStorageHelper.ts";

function App() {
  const workouts = getWorkouts();
  const seasonNotes = getSeasonNotes();

  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string>();

  if (displaySeasonNotes)
    return (
      <EditSeasonNotes
        onClose={() => setDisplaySeasonNotes(false)}
        seasonNotes={seasonNotes}
      />
    );
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
