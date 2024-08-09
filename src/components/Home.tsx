import { Fade } from "react-awesome-reveal";
import { Workout } from "../models/Workout";
import QuoteGenerator from "./QuoteGenerator";
import WorkoutList from "./WorkoutList";
import { newId } from "../utils/helpers";
import { Season } from "../models/Season";
import { getSeasons } from "../helpers/seasonsStorageHelper";

interface Props {
  seasonNotesOpen: () => void;
  onEditWorkout: (workoutId: string) => void;
  workouts: Workout[];
  addSeason: () => void;
  viewingSeason: Season;
  setViewingSeason: (seasonId: string) => void;
}

const Home = ({
  seasonNotesOpen,
  onEditWorkout,
  workouts,
  addSeason,
  viewingSeason,
  setViewingSeason,
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
              <div>
                <h1 className="pt-6 text-2xl text-left font-bold">
                  Training Logbook
                </h1>

                <select
                  name="training-type"
                  id="training-type"
                  className="font-bold text-2xl h-12 bg-opacity-0 bg-slate-50 w-36"
                  value={viewingSeason.id}
                  onChange={(element) => {
                    setViewingSeason(element.target.value);
                  }}
                >
                  {getSeasons().map((season: Season) => (
                    <option key={season.id} value={season.id}>
                      {season.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pb-4"></div>

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
          {workouts.length > 0 && (
            <button
              className="bg-red-500 font-medium rounded-lg px-2 py-1 ml-6 mb-6"
              onClick={() => {
                addSeason();
                setViewingSeason(getSeasons()[getSeasons().length - 1].id); // Get updated list of seasons and set viewingSeason to the last season
              }}
            >
              New Season
            </button>
          )}
        </div>
      </Fade>
    </>
  );
};

export default Home;
