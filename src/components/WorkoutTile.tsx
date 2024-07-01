interface Props {
  title: String;
}

const WorkoutTile = ({ title }: Props) => {
  return (
    //
    <>
      <p>Workout: {title}</p>{" "}
    </>
  );
};

export default WorkoutTile;
