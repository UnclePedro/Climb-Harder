const SeasonNotes = (props: {
  trainingFocuses: string;
  goals: string;
  achievements: string;
  seasonNotesClose: any;
}) => {
  return (
    <>
      <div className="p-6">
        <p className="font-bold pb-2 text-left">Training Focuses</p>
        <textarea className="w-full h-48 border border-gray-300 rounded resize-y">
          {props.trainingFocuses}
        </textarea>
        <p className="font-bold pb-2 text-left">Goals</p>
        <textarea className="w-full h-48 border border-gray-300 rounded resize-y">
          {props.goals}
        </textarea>
        <p className="font-bold pb-2 text-left">Achievements</p>
        <textarea className="w-full h-48 border border-gray-300 rounded resize-y">
          {props.achievements}
        </textarea>
        <button
          className="bg-blue-200 rounded-lg p-2"
          onClick={props.seasonNotesClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default SeasonNotes;
