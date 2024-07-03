import { useState } from "react";
import { Workout } from "../models/Workout.ts";

interface Props {
  onClose: () => void;
  workoutId: String;
  workouts: any;
  onSave: any;
}

const EditWorkout = ({ onClose, workoutId, onSave, workouts }: Props) => {
  // If the workoutId matches an existing workoutId from the workouts array, use that workout data to fill the form. Or, set data to empty strings for a blank form.
  const workoutToEdit = workouts.find(
    (workout: any) => workout.id === workoutId
  ) || {
    title: "",
    type: "",
    details: "",
    duration: "",
    date: "",
  };

  const [workoutName, setWorkoutName] = useState(workoutToEdit.title);
  const [trainingType, setTrainingType] = useState(workoutToEdit.type);
  const [details, setDetails] = useState(workoutToEdit.details);
  const [duration, setDuration] = useState(workoutToEdit.duration);
  const [date, setDate] = useState(workoutToEdit.date);

  // this seems to work but doesn't use the Workout.ts interface... can't return Null error when I type it as Workout
  const handleSave = () => {
    const workout = {
      id: workoutId,
      title: workoutName,
      type: trainingType,
      details: details,
      duration: duration,
      date: date,
    };

    onSave((prevWorkouts: Workout[]) => {
      const updatedWorkouts = [...prevWorkouts, workout];
      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      return updatedWorkouts;
    });

    onClose();
  };

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

        <p className="font-bold text-lg text-left">Workout Name</p>
        <textarea
          onChange={(element) => {
            setWorkoutName(element.target.value);
            localStorage.setItem("workoutName", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded p-3 mb-5"
        >
          {workoutName}
        </textarea>
        <p className="font-bold text-lg text-left">Training Type</p>
        <textarea
          onChange={(element) => {
            setTrainingType(element.target.value);
            localStorage.setItem("trainingType", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {trainingType}
        </textarea>
        <p className="font-bold text-lg text-left">Details</p>
        <textarea
          onChange={(element) => {
            setDetails(element.target.value);
            localStorage.setItem("workoutDetails", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {details}
        </textarea>
        <p className="font-bold text-lg text-left">Duration of Session</p>
        <textarea
          onChange={(element) => {
            setDuration(element.target.value);
            localStorage.setItem("duration", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {duration}
        </textarea>
        <p className="font-bold text-lg text-left">Date</p>
        <textarea
          onChange={(element) => {
            setDate(element.target.value);
            localStorage.setItem("date", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3 mb-5"
        >
          {date}
        </textarea>
        <button
          className="bg-amber-600 font-bold rounded-lg p-3 "
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditWorkout;
