import { useState } from "react";

interface Props {
  onClose: () => void;
  workoutId: String;
}

const EditWorkout = ({ onClose, workoutId }: Props) => {
  const [workoutName, setWorkoutName] = useState(
    localStorage.getItem("workoutName")
  );
  const [trainingType, setTrainingType] = useState(
    localStorage.getItem("trainingType")
  );
  const [details, setDetails] = useState(
    localStorage.getItem("workoutDetails")
  );
  const [length, setLength] = useState(localStorage.getItem("length"));
  const [date, setDate] = useState(localStorage.getItem("date"));

  return (
    <>
      <div className="p-6 mt-12 font-roboto">
        <p className="font-bold text-lg text-left">Workout Name</p>
        <textarea
          onChange={(element) => {
            setWorkoutName(element.target.value);
            localStorage.setItem("workoutName", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-gray-200 rounded p-3 mb-5"
        >
          {workoutName}
        </textarea>
        <p className="font-bold text-lg text-left">Training Type</p>
        <textarea
          onChange={(element) => {
            setTrainingType(element.target.value);
            localStorage.setItem("trainingType", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-gray-200 rounded resize-y p-3 mb-5"
        >
          {trainingType}
        </textarea>
        <p className="font-bold text-lg text-left">Details</p>
        <textarea
          onChange={(element) => {
            setDetails(element.target.value);
            localStorage.setItem("workoutDetails", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-gray-200 rounded resize-y p-3 mb-5"
        >
          {details}
        </textarea>
        <p className="font-bold text-lg text-left">Length of Session</p>
        <textarea
          onChange={(element) => {
            setLength(element.target.value);
            localStorage.setItem("length", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-gray-200 rounded resize-y p-3 mb-5"
        >
          {length}
        </textarea>
        <p className="font-bold text-lg text-left">Date</p>
        <textarea
          onChange={(element) => {
            setDate(element.target.value);
            localStorage.setItem("date", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-gray-200 rounded resize-y p-3 mb-5"
        >
          {date}
        </textarea>
        <button
          className="bg-gray-400 font-bold rounded-lg p-3 "
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditWorkout;
