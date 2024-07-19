import { Fade } from "react-awesome-reveal";
import { totalWorkoutTime } from "../helpers/workoutStorageHelper";
import { Workout } from "../models/Workout";
import QuoteGenerator from "./QuoteGenerator";
import WorkoutList from "./WorkoutList";

interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: string) => void;
  workouts: Workout[];
}

const Home = ({ seasonNotesOpen, onEditWorkout, workouts }: Props) => {
  return (
    <>
      <Fade>
        <div className="md:p-8">
          <div className="p-6 font-roboto">
            <div className="w-72">
              <QuoteGenerator />
            </div>
            <div className="flex mt-4">
              <h1 className="pt-6 text-2xl text-left font-bold">
                Training Logbook
              </h1>
              <button
                className="bg-amber-500 font-medium rounded-full w-10 h-10 ml-6 mt-5"
                onClick={() => {
                  const newWorkoutId = crypto.randomUUID();
                  onEditWorkout(newWorkoutId);
                }}
              >
                +
              </button>
            </div>
            <button
              className="bg-amber-500 font-medium rounded-lg px-2 py-1 mt-3"
              onClick={() => seasonNotesOpen()}
            >
              Goals & Achievements
            </button>
            {/* <p className="font-medium text-lg mt-3">All Workouts</p> */}
            <p className="my-2 text-sm italic">
              Total time worked out this season: {totalWorkoutTime(workouts)}{" "}
              hours
            </p>
          </div>

          <div className="p-6 -mt-6">
            <WorkoutList workouts={workouts} onEditWorkout={onEditWorkout} />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Home;
