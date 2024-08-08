import { useState } from "react";
import Home from "./components/Home.tsx";
import EditSeasonNotes from "./components/EditSeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import { getWorkouts } from "./helpers/workoutStorageHelper.ts";
import { getSeasonNotes } from "./helpers/seasonNotesStorageHelper.ts";
import { addSeason, getSeasons } from "./helpers/seasonsStorageHelper.ts";
import { Season } from "./models/Season.ts";

function App() {
  const [seasons, setSeasons] = useState(getSeasons());
  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string>();

  const currentSeason: Season = getSeasons().find(
    (season) => season.id === seasons[seasons.length - 1].id
  ) as Season;
  const workouts = getWorkouts(currentSeason);
  const seasonNotes = getSeasonNotes(currentSeason);

  if (displaySeasonNotes)
    return (
      <EditSeasonNotes
        seasonNotes={seasonNotes}
        currentSeason={currentSeason}
        onClose={() => setDisplaySeasonNotes(false)}
      />
    );
  if (editingWorkoutId)
    return (
      <EditWorkout
        workoutId={editingWorkoutId}
        workouts={workouts}
        currentSeason={currentSeason}
        onClose={() => setEditingWorkoutId(undefined)}
      />
    );

  return (
    <Home
      seasonNotesOpen={() => setDisplaySeasonNotes(true)}
      onEditWorkout={(workoutId) => setEditingWorkoutId(workoutId)}
      workouts={workouts}
      currentSeason={currentSeason}
      addSeason={() => setSeasons(addSeason())}
    />
  );
}

export default App;
