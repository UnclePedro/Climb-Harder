const SeasonNotes = (props: {
  trainingFocuses: string;
  goals: string;
  achievements: string;
  seasonNotesClose: any;
}) => {
  return (
    <>
      <div className="">
        <button onClick={props.seasonNotesClose}>Close</button>
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
      </div>
    </>
  );
};

export default SeasonNotes;
