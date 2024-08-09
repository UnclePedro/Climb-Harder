import { useState } from "react";
import Home from "./components/Home.tsx";
import EditSeasonNotes from "./components/EditSeasonNotes.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import { getWorkouts } from "./helpers/workoutStorageHelper.ts";
import { getSeasonNotes } from "./helpers/seasonNotesStorageHelper.ts";
import {
  addSeason,
  getSeason,
  getSeasons,
} from "./helpers/seasonsStorageHelper.ts";
import { Season } from "./models/Season.ts";

function App() {
  const [seasons, setSeasons] = useState(getSeasons());
  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState<string>();

  const [viewingSeason, setViewingSeason] = useState(
    getSeasons().find(
      (season) => season.id === seasons[seasons.length - 1].id
    ) as Season
  );

  const workouts = getWorkouts(viewingSeason);
  const seasonNotes = getSeasonNotes(viewingSeason);

  if (displaySeasonNotes)
    return (
      <EditSeasonNotes
        seasonNotes={seasonNotes}
        currentSeason={viewingSeason}
        onClose={() => setDisplaySeasonNotes(false)}
      />
    );
  if (editingWorkoutId)
    return (
      <EditWorkout
        workoutId={editingWorkoutId}
        workouts={workouts}
        currentSeason={viewingSeason}
        onClose={() => setEditingWorkoutId(undefined)}
      />
    );

  return (
    <Home
      seasonNotesOpen={() => setDisplaySeasonNotes(true)}
      onEditWorkout={(workoutId) => setEditingWorkoutId(workoutId)}
      workouts={workouts}
      addSeason={() => setSeasons(addSeason())}
      setViewingSeason={(seasonId: string) =>
        setViewingSeason(getSeason(seasonId))
      }
      viewingSeason={viewingSeason}
    />
  );
}

export default App;
