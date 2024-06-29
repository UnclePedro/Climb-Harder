import { useState } from "react";
import Goals from "./components/Goals.tsx";
import Home from "./components/Home.tsx";

function App() {
  const [trainingFocuses, setTrainingFocuses] = useState("Flexibility");
  const [goals, setGoals] = useState("Redpoint LSD");
  const [achievements, setAchievements] = useState(
    "Redpointed In Between Dreams"
  );

  return (
    <>
      <Home />
      <Goals
        trainingFocuses={trainingFocuses}
        goals={goals}
        achievements={achievements}
      />
    </>
  );
}

export default App;
