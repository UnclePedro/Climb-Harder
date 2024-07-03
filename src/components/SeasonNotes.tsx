import { useState } from "react";

interface Props {
  onClose: () => void;
}

const SeasonNotes = ({ onClose }: Props) => {
  const [trainingFocuses, setTrainingFocuses] = useState(
    localStorage.getItem("trainingFocuses")
  );
  const [goals, setGoals] = useState(localStorage.getItem("goals"));
  const [achievements, setAchievements] = useState(
    localStorage.getItem("achievements")
  );

  return (
    <>
      <div className="p-6 font-roboto">
        <div className="flex ml-20">
          <button
            className="font-medium text-xl rounded-full w-10 p-2 ml-80"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <p className="font-bold text-lg text-left">Training Focuses</p>

        <textarea
          onChange={(element) => {
            setTrainingFocuses(element.target.value);
            localStorage.setItem("trainingFocuses", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {trainingFocuses}
        </textarea>
        <p className="font-bold text-lg text-left">Goals</p>
        <textarea
          onChange={(element) => {
            setGoals(element.target.value);
            localStorage.setItem("goals", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {goals}
        </textarea>
        <p className="font-bold text-lg text-left">Achievements</p>
        <textarea
          onChange={(element) => {
            setAchievements(element.target.value);
            localStorage.setItem("achievements", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {achievements}
        </textarea>
      </div>
    </>
  );
};

export default SeasonNotes;
