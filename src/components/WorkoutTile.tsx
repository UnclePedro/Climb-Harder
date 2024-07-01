interface Props {
  title: String;
}

const WorkoutTile = ({ title }: Props) => {
  return (
    //
    <>
      <p className="bg-slate-500 p-4 m-2">Workout: {title}</p>{" "}
    </>
  );
};

export default WorkoutTile;
