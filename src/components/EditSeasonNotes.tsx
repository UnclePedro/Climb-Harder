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
          <div className="p-3 sm:p-6 font-roboto h-11/12 w-11/12 sm:w-4/5 lg:w-1/2">
            <div className="flex justify-end mt-3">
              <button
                className="font-medium text-xl rounded-full w-10 h-10 bg-amber-500 "
                onClick={onClose}
              >
                x
              </button>
            </div>
            <p className="font-bold text-lg text-left">Training Focuses</p>

            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  trainingFocuses: element.target.value,
                });
              }}
              className="w-full h-[18vh] sm:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.trainingFocuses}
            />
            <p className="font-bold text-lg text-left mt-2">Goals</p>
            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  goals: element.target.value,
                });
              }}
              className="w-full h-[18vh] sm:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.goals}
            />

            <p className="font-bold text-lg text-left mt-2">Achievements</p>
            <textarea
              onChange={(element) => {
                setSeasonNotesData({
                  ...seasonNotesData,
                  achievements: element.target.value,
                });
              }}
              className="w-full h-[18vh] sm:h-52 border border-gray-300 bg-amber-200 rounded resize-y p-3"
              value={seasonNotesData.achievements}
            />
            <button
              className="bg-amber-500 font-bold rounded-lg p-3 mt-3 "
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
