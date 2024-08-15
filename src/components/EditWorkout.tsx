import { Workout, TrainingType } from "../models/Workout.ts";
import { deleteWorkout, saveWorkout } from "../helpers/workoutStorageHelper.ts";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Season } from "../models/Season.ts";
import { formatDate, getDate } from "../utils/helpers.ts";

interface Props {
  onClose: () => void;
  workoutId: string; // Loads either a new workoutId if one doesn't exist, or uses the workoutId of existing workout
  workouts: Workout[];
  currentSeason: Season;
}

const EditWorkout = ({
  onClose,
  workoutId,
  workouts,
  currentSeason,
}: Props) => {
  // Used to prefill new workout with last workout details
  const lastWorkout = workouts[workouts.length - 1] as Workout | undefined;

  const defaultWorkout: Workout = {
    id: workoutId,
    name: lastWorkout?.name ?? "Workout Name",
    trainingType: lastWorkout?.trainingType ?? TrainingType.Base,
    details: "",
    duration: 0,
    date: getDate(),
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
      <Fade>
        <div className="flex justify-center items-center">
          <div className="p-6 font-roboto w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-end">
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
                onChange={(element) => {
                  setWorkoutData({
                    ...workoutData,
                    name: element.target.value,
                  });
                }}
                className="w-full h-14 border border-gray-300 bg-amber-200 rounded p-3"
                value={workoutData.name}
                maxLength={30}
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
                <option value={TrainingType.PowerEndurance}>
                  Power Endurance
                </option>
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
                className="w-full h-56 border border-gray-300 bg-amber-200 rounded resize-y p-3"
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
                onChange={(element) => {
                  const dateTimestamp = new Date(
                    element.target.value
                  ).getTime(); // Convert to timestamp
                  setWorkoutData({
                    ...workoutData,
                    date: dateTimestamp,
                  });
                }}
                className="w-full h-14 border border-gray-300 bg-amber-200 rounded resize-y p-3"
                value={formatDate(workoutData.date)} // Format the timestamp back to "YYYY-MM-DD" for display
              />

              <button
                className="bg-amber-500 font-bold rounded-lg p-3 mt-2"
                onClick={() => {
                  saveWorkout(workoutData, currentSeason);
                  onClose();
                }}
              >
                Save
              </button>

              {isExistingWorkout && (
                <button
                  className="bg-amber-500 font-bold rounded-lg p-3 mx-4 "
                  onClick={() => {
                    deleteWorkout(workoutId, currentSeason);
                    onClose();
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default EditWorkout;
