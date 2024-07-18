import { SeasonNotes } from "../models/SeasonNotes";
import { saveSeasonNotes } from "../helpers/seasonNotesStorageHelper";

interface Props {
  onClose: () => void;
  seasonNotes: SeasonNotes;
}

const EditSeasonNotes = ({ onClose, seasonNotes }: Props) => {
  return (
    <>
      <div className="p-6 font-roboto">
        <p className="font-bold text-lg text-left pt-3">Training Focuses</p>

        <textarea
          onChange={(element) =>
            (seasonNotes.trainingFocuses = element.target.value)
          }
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
          value={seasonNotes.trainingFocuses}
        />
        <p className="font-bold text-lg text-left">Goals</p>
        <textarea
          onChange={(element) => (seasonNotes.goals = element.target.value)}
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
          value={seasonNotes.goals}
        />

        <p className="font-bold text-lg text-left">Achievements</p>
        <textarea
          onChange={(element) =>
            (seasonNotes.achievements = element.target.value)
          }
          className="w-full h-40 border border-gray-300 bg-amber-200 rounded resize-y p-3"
          value={seasonNotes.achievements}
        />
        <button
          className="bg-amber-500 font-bold rounded-lg p-3 mt-2 "
          onClick={() => {
            saveSeasonNotes(seasonNotes);
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditSeasonNotes;
