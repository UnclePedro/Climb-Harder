import { useState } from "react";
import { Workout, TrainingType } from "../models/Workout.ts";

interface Props {
  onClose: () => void;
  workoutId: String; // Loads either a new workoutId if one doesn't exist, or uses the workoutId of existing workout
  workouts: any;
  onSave: any;
}

const EditWorkout = ({ onClose, workoutId, onSave, workouts }: Props) => {
  // Used to prefill new workout with last workout details
  const lastWorkout = workouts[workouts.length - 1] || "";

  // If the workoutId matches an existingWorkout.id from the workouts array, fill form state with that data. Or, set state to previous workout details and empty strings for a blank form
  const workoutToEdit = workouts.find(
    (existingWorkout: Workout) => existingWorkout.id === workoutId
  ) || {
    id: workoutId,
    name: lastWorkout.name,
    trainingType: lastWorkout.trainingType || TrainingType.Base,
    details: "",
    duration: "",
    date: "",
  };

  const [name, setName] = useState(workoutToEdit.name);
  const [trainingType, setTrainingType] = useState(workoutToEdit.trainingType);
  const [details, setDetails] = useState(workoutToEdit.details);
  const [duration, setDuration] = useState(workoutToEdit.duration);
  const [date, setDate] = useState(workoutToEdit.date);

  const handleSave = () => {
    const workout: Workout = {
      id: workoutId,
      name: name,
      trainingType: trainingType,
      details: details,
      duration: duration,
      date: date,
    };

    onSave((prevWorkouts: Workout[]) => {
      // Check if the workout already exists by comparing the live workoutId with the workout array id's
      const existingWorkout = prevWorkouts.find(
        (savedWorkout: Workout) => savedWorkout.id === workout.id
      );

      // Holds array of workouts that reflects any updates made to existing workouts, or recieves new workoutout object
      let updatedWorkouts;

      if (existingWorkout) {
        // The ternary operator updates the specific workout object if its id matches an existing workout.id; otherwise, it keeps the workout object unchanged to be added in else statement.
        updatedWorkouts = prevWorkouts.map((savedWorkout: Workout) =>
          savedWorkout.id === workout.id ? workout : savedWorkout
        );
      } else {
        // If the workout does not exist, add it
        updatedWorkouts = [...prevWorkouts, workout];
      }

      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      return updatedWorkouts;
    });

    onClose();
  };

  // Doesn't update state until refresh... need to be able to return updatedWorkouts and trigger onClose afterwards
  const handleDelete = () => {
    const updatedWorkouts = workouts.filter(
      (existingWorkout: Workout) => existingWorkout.id !== workoutId
    );
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    // return updatedWorkouts;
    onClose();
  };

  // Check if workout exists. If true, delete button is rendered
  const isExistingWorkout = workouts.some(
    (existingWorkout: Workout) => existingWorkout.id === workoutId
  );

  return (
    <>
      <div className="p-6 font-roboto">
        <div className="flex ml-20">
          <button
            className="font-medium text-xl rounded-full w-10 h-10 ml-64 bg-amber-500 "
            onClick={onClose}
          >
            x
          </button>
        </div>

        <p className="font-bold text-lg text-left">Workout Name</p>
        <textarea
          onChange={(element) => {
            setName(element.target.value);
            localStorage.setItem("workoutName", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded p-3"
        >
          {name}
        </textarea>
        <p className="font-bold text-lg text-left">Training Type</p>
        <select
          name="training-type"
          id="training-type"
          value={trainingType}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
          onChange={(element) => {
            setTrainingType(element.target.value);
            localStorage.setItem("trainingType", element.target.value);
          }}
        >
          <option value={TrainingType.Base}>Base Fitness</option>
          <option value={TrainingType.Strength}>Strength</option>
          <option value={TrainingType.Power}>Power</option>
          <option value={TrainingType.PowerEndurance}>Power Endurance</option>
          <option value={TrainingType.Performance}>Performance</option>
        </select>

        <p className="font-bold text-lg text-left">Details</p>
        <textarea
          onChange={(element) => {
            setDetails(element.target.value);
            localStorage.setItem("workoutDetails", element.target.value);
          }}
          className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {details}
        </textarea>
        <p className="font-bold text-lg text-left">Duration of Session</p>
        <textarea
          onChange={(element) => {
            setDuration(element.target.value);
            localStorage.setItem("duration", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {duration}
        </textarea>
        <p className="font-bold text-lg text-left">Date</p>
        <textarea
          onChange={(element) => {
            setDate(element.target.value);
            localStorage.setItem("date", element.target.value);
          }}
          className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
        >
          {date}
        </textarea>
        <button
          className="bg-amber-500 font-bold rounded-lg p-3 mt-2 "
          onClick={handleSave}
        >
          Save
        </button>

        {isExistingWorkout ? (
          <button
            className="bg-amber-500 font-bold rounded-lg p-3 mx-4 "
            onClick={handleDelete}
          >
            Delete
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default EditWorkout;
