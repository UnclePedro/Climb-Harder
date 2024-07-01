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
      <div className="p-6 font-roboto">
        {workoutId}
        <p className="font-bold pb-2 text-left">Workout Name</p>
        <textarea
          onChange={(element) => {
            setWorkoutName(element.target.value);
            localStorage.setItem("workoutName", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {workoutName}
        </textarea>
        <p className="font-bold pb-2 text-left">Training Type</p>
        <textarea
          onChange={(element) => {
            setTrainingType(element.target.value);
            localStorage.setItem("trainingType", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {trainingType}
        </textarea>
        <p className="font-bold pb-2 text-left">Details</p>
        <textarea
          onChange={(element) => {
            setDetails(element.target.value);
            localStorage.setItem("workoutDetails", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {details}
        </textarea>
        <p className="font-bold pb-2 text-left">Length of Session</p>
        <textarea
          onChange={(element) => {
            setLength(element.target.value);
            localStorage.setItem("length", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {length}
        </textarea>
        <p className="font-bold pb-2 text-left">Date</p>
        <textarea
          onChange={(element) => {
            setDate(element.target.value);
            localStorage.setItem("date", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 rounded resize-y"
        >
          {date}
        </textarea>
        <button className="bg-blue-200 rounded-lg p-2" onClick={onClose}>
          Save
        </button>
      </div>
    </>
  );
};

export default EditWorkout;
