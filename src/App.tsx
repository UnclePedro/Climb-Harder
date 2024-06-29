import { useState } from "react";
import Home from "./components/Home.tsx";
import SeasonNotes from "./components/SeasonNotes.tsx";

function App() {
  const [trainingFocuses, setTrainingFocuses] = useState("Flexibility");
  const [goals, setGoals] = useState("Redpoint LSD");
  const [achievements, setAchievements] = useState(
    "Redpointed In Between Dreams"
  );
  let [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);

  const toggleDisplaySeasonNotes = () => {
    if (!displaySeasonNotes) {
      setDisplaySeasonNotes(true);
    } else setDisplaySeasonNotes(false);
  };

  return (
    <>
      {displaySeasonNotes ? (
        <SeasonNotes
          trainingFocuses={trainingFocuses}
          goals={goals}
          achievements={achievements}
          seasonNotesClose={toggleDisplaySeasonNotes}
        />
      ) : (
        <Home seasonNotesOpen={toggleDisplaySeasonNotes} />
      )}
    </>
  );
}

export default App;
