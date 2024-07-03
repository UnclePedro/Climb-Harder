interface Props {
  title: String;
  date: String;

  id: String;
}

const WorkoutTile = ({ title, date, id }: Props) => {
  return (
    // Need to make use of Workout interface so I can conditionally render bg color based on workout type
    <>
      <div className="bg-amber-500 p-4 m-2 rounded-lg">
        <p className="text-sm">{date}</p>
        <p className="font-bold">{title}</p>
        <button>{id}</button>
      </div>
    </>
  );
};

export default WorkoutTile;
