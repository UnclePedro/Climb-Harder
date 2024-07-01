import { useState } from "react";
import Home from "./components/Home.tsx";
import SeasonNotes from "./components/SeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";

function App() {
  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<String>();

  if (displaySeasonNotes)
    return <SeasonNotes onClose={() => setDisplaySeasonNotes(false)} />;
  if (editingWorkoutId)
    return (
      <EditWorkout
        onClose={() => setEditingWorkoutId(undefined)}
        workoutId={editingWorkoutId}
      />
    );

  return (
    <>
      <Home
        seasonNotesOpen={() => setDisplaySeasonNotes(true)}
        onEditWorkout={(workoutId) => setEditingWorkoutId(workoutId)}
      />
      {/* <p>editing workout id: {editingWorkoutId}</p> */}
    </>
  );
}

export default App;
