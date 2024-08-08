import { Fade } from "react-awesome-reveal";
import { Workout } from "../models/Workout";
import QuoteGenerator from "./QuoteGenerator";
import WorkoutList from "./WorkoutList";
import { newId } from "../utils/helpers";
import { Season } from "../models/Season";

interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: string) => void;
  workouts: Workout[];
  currentSeason: Season;
  addSeason: () => void;
}

const Home = ({
  seasonNotesOpen,
  onEditWorkout,
  workouts,
  currentSeason,
  addSeason,
}: Props) => {
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
                Training Logbook - {currentSeason.name}
              </h1>
              <div className="font-bold rounded-lg px-2 py-1 mt-3 w-18"></div>
              <button
                className="bg-amber-500 font-medium rounded-full w-10 h-10 ml-6 mt-5"
                onClick={() => {
                  onEditWorkout(newId());
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
          </div>

          <div className="p-6 -mt-8">
            <WorkoutList workouts={workouts} onEditWorkout={onEditWorkout} />
          </div>
          <button
            className="bg-red-500 font-medium rounded-lg px-2 py-1 ml-6"
            onClick={() => addSeason()}
          >
            End Season
          </button>
        </div>
      </Fade>
    </>
  );
};

export default Home;
