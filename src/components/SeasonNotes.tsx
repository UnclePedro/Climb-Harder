import { useState } from "react";

interface Props {
  onClose: () => void;
}

const SeasonNotes = ({ onClose }: Props) => {
  const [trainingFocuses, setTrainingFocuses] = useState("Flexibility");
  const [goals, setGoals] = useState("Redpoint LSD");
  const [achievements, setAchievements] = useState(
    "Redpointed In Between Dreams"
  );
  return (
    <>
      <div className="p-6">
        <p className="font-bold pb-2 text-left">Training Focuses</p>
        <textarea
          onBlur={(element) => setTrainingFocuses(element.target.value)}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {trainingFocuses}
        </textarea>
        <p className="font-bold pb-2 text-left">Goals</p>
        <textarea
          onBlur={(element) => setGoals(element.target.value)}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {goals}
        </textarea>
        <p className="font-bold pb-2 text-left">Achievements</p>
        <textarea
          onBlur={(element) => setAchievements(element.target.value)}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {achievements}
        </textarea>
        <button className="bg-blue-200 rounded-lg p-2" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default SeasonNotes;
