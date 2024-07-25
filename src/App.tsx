import { useState } from "react";
import Home from "./components/Home.tsx";
import EditSeasonNotes from "./components/EditSeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import { getWorkouts } from "./helpers/workoutStorageHelper.ts";
import { getSeasonNotes } from "./helpers/seasonNotesStorageHelper.ts";
import { getSeasons } from "./helpers/seasonsStorageHelper.ts";
import { Season } from "./models/Season.ts";

function App() {
  const seasons = getSeasons();

  const [currentSeasonId, setCurrentSeasonId] = useState<string>(
    seasons[seasons.length - 1].id
  );
  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string>();

  // Need to create state to hold the current season ID being edited similar to editingWorkoutId
  // Then use the season ID to find the season in the Seasons array

  const currentSeason: Season = seasons.find(
    (season) => season.id === currentSeasonId
  ) as Season;
  const workouts = getWorkouts(currentSeason);
  const seasonNotes = getSeasonNotes();

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
        currentSeason={currentSeason}
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
