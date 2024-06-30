import { useState } from "react";
import Home from "./components/Home.tsx";
import SeasonNotes from "./components/SeasonNotes.tsx";

function App() {
  const [displaySeasonNotes, setDisplaySeasonNotes] = useState(false);

  return (
    <>
      {displaySeasonNotes ? (
        <SeasonNotes onClose={() => setDisplaySeasonNotes(false)} />
      ) : (
        <Home seasonNotesOpen={() => setDisplaySeasonNotes(true)} />
      )}
    </>
  );
}

export default App;
