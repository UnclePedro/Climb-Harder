interface Props {
  name: String;
  trainingType: String;
  date: String;
  id: String;
}

const WorkoutTile = ({ name, trainingType, date, id }: Props) => {
  return (
    // Need to make use of Workout interface so I can conditionally render bg color based on workout type
    <>
      <div className="bg-amber-500 p-4 m-2 rounded-lg">
        <p className="text-sm">{date}</p>
        <p className="font-bold">{name}</p>
        <p className="font-bold">{trainingType}</p>
        {/* <p>{id}</p> */}
      </div>
    </>
  );
};

export default WorkoutTile;
