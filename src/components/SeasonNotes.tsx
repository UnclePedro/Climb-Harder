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
        {/* <div className="flex ml-20">
          <button
            className="font-medium text-xl rounded-full w-10 h-10 ml-64 bg-amber-500"
            onClick={onClose}
          >
            x
          </button>
        </div> */}
        <p className="font-bold text-lg text-left pt-3">Training Focuses</p>

        <textarea
          onChange={(element) => {
            setTrainingFocuses(element.target.value);
            localStorage.setItem("trainingFocuses", element.target.value);
          }}
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {trainingFocuses}
        </textarea>
        <p className="font-bold text-lg text-left">Goals</p>
        <textarea
          onChange={(element) => {
            setGoals(element.target.value);
            localStorage.setItem("goals", element.target.value);
          }}
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {goals}
        </textarea>
        <p className="font-bold text-lg text-left">Achievements</p>
        <textarea
          onChange={(element) => {
            setAchievements(element.target.value);
            localStorage.setItem("achievements", element.target.value);
          }}
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {achievements}
        </textarea>
        <button
          className="bg-amber-500 font-bold rounded-lg p-3 mt-2 "
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SeasonNotes;
