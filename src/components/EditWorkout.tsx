import { Workout, TrainingType } from "../models/Workout.ts";
import {
  newDate,
  deleteWorkout,
  saveWorkout,
} from "../helpers/workoutStorageHelper.ts";
import { useState } from "react";

interface Props {
  onClose: () => void;
  workoutId: string; // Loads either a new workoutId if one doesn't exist, or uses the workoutId of existing workout
  workouts: Workout[];
}

const EditWorkout = ({ onClose, workoutId, workouts }: Props) => {
  // Used to prefill new workout with last workout details
  const lastWorkout = workouts[workouts.length - 1] as Workout | undefined;
  const defaultWorkout: Workout = {
    id: workoutId,
    name: lastWorkout?.name ?? "Workout Name",
    trainingType: lastWorkout?.trainingType ?? TrainingType.Base,
    details: "",
    duration: undefined,
    date: newDate(),
  };

  // If the workoutId matches an existingWorkout.id from the workouts array, fill form state with that data. Or, set state to previous workout details and empty strings for a blank form
  const workoutToEdit =
    workouts.find(
      (existingWorkout: Workout) => existingWorkout.id === workoutId
    ) || defaultWorkout;

  // Check if workout exists. If true, delete button is rendered
  const isExistingWorkout = workouts.some(
    (existingWorkout: Workout) => existingWorkout.id === workoutId
  );

  // Used to hold data of the new or existing workout being edited, then passed to onSave
  const [workoutData, setWorkoutData] = useState<Workout>(workoutToEdit);

  return (
    <>
      <div className="p-6 font-roboto">
        <div className="flex justify-end mr-6">
          <button
            className="font-medium text-xl rounded-full w-10 h-10 bg-amber-500 "
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div className="">
          <p className="font-bold text-lg text-left mt-2">Workout Name</p>
          <input
            defaultValue="Workout"
            onChange={(element) => {
              setWorkoutData({
                ...workoutData,
                name: element.target.value,
              });
            }}
            className="w-full h-14 border border-gray-300 bg-amber-200 rounded p-3"
            value={workoutData.name}
          />

          <p className="font-bold text-lg text-left mt-2">Training Type</p>
          <select
            name="training-type"
            id="training-type"
            value={workoutData.trainingType}
            className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
            onChange={(element) => {
              setWorkoutData({
                ...workoutData,
                trainingType: element.target.value as TrainingType,
              });
            }}
          >
            <option value={TrainingType.Base}>Base Fitness</option>
            <option value={TrainingType.Strength}>Strength</option>
            <option value={TrainingType.Power}>Power</option>
            <option value={TrainingType.PowerEndurance}>Power Endurance</option>
            <option value={TrainingType.Performance}>Performance</option>
          </select>

          <p className="font-bold text-lg text-left mt-2">Details</p>
          <textarea
            onChange={(element) => {
              setWorkoutData({
                ...workoutData,
                details: element.target.value,
              });
            }}
            className="w-full h-48 border border-gray-300 bg-amber-200 rounded resize-y p-3"
            value={workoutData.details}
          />

          <p className="font-bold text-lg text-left mt-2">
            Duration of Session (minutes)
          </p>
          <input
            type="number"
            onChange={(element) => {
              const updatedDuration = parseInt(element.target.value);
              setWorkoutData({
                ...workoutData,
                duration: updatedDuration,
              });
            }}
            className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
            value={workoutData.duration}
          />

          <p className="font-bold text-lg text-left mt-2">Date</p>
          <input
            type="date"
            id="date"
            onChange={(element) => {
              setWorkoutData({
                ...workoutData,
                date: element.target.value,
              });
            }}
            className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
            value={workoutData.date}
          />

          <button
            className="bg-amber-500 font-bold rounded-lg p-3 mt-2 "
            onClick={() => {
              saveWorkout(workoutData);
              onClose();
            }}
          >
            Save
          </button>

          {isExistingWorkout && (
            <button
              className="bg-amber-500 font-bold rounded-lg p-3 mx-4 "
              onClick={() => {
                deleteWorkout(workoutId);
                onClose();
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default EditWorkout;
