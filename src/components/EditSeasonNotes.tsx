import { SeasonNotes } from "../models/SeasonNotes";
import { saveSeasonNotes } from "../helpers/seasonNotesStorageHelper";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Season } from "../models/Season";

interface Props {
  onClose: () => void;
  seasonNotes: SeasonNotes;
  currentSeason: Season;
}

const EditSeasonNotes = ({ onClose, seasonNotes, currentSeason }: Props) => {
  const [seasonNotesData, setSeasonNotesData] = useState(seasonNotes);

  return (
    <>
      <Fade>
        <div className="flex justify-center items-center">
          <div className="p-6 font-roboto w-11/12 md:w-2/3 lg:w-1/2">
            <p className="font-bold text-lg text-left pt-3">Training Focuses</p>

            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  trainingFocuses: element.target.value,
                });
              }}
              className="w-full h-40 md:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.trainingFocuses}
            />
            <p className="font-bold text-lg text-left pt-3">Goals</p>
            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  goals: element.target.value,
                });
              }}
              className="w-full h-40 md:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.goals}
            />

            <p className="font-bold text-lg text-left pt-3">Achievements</p>
            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  achievements: element.target.value,
                });
              }}
              className="w-full h-40 md:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.achievements}
            />
            <button
              className="bg-amber-500 font-bold rounded-lg p-3 mt-2 "
              onClick={() => {
                saveSeasonNotes(seasonNotesData, currentSeason);
                onClose();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default EditSeasonNotes;
