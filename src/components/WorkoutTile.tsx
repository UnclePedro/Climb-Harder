import { TrainingType } from "../models/Workout";

interface Props {
  name: String;
  trainingType: TrainingType;
  date: String;
  id: String;
}

const WorkoutTile = ({ name, trainingType, date, id }: Props) => {
  // Object using TrainingType as key paired to string value to be inserted to tailwind as template literal
  const colors = {
    [TrainingType.Base]: "bg-blue-500",
    [TrainingType.Strength]: "bg-red-500",
    [TrainingType.Power]: "bg-yellow-500",
    [TrainingType.PowerEndurance]: "bg-green-500",
    [TrainingType.Performance]: "bg-pink-500",
    default: "bg-white",
  };

  return (
    <div
      className={`${colors[trainingType] || colors.default} p-4 m-1 rounded-lg`}
    >
      <p className="text-xs">{date}</p>
      <p className="font-bold text-lg">{name}</p>
      <p className="">{trainingType}</p>
      {/* <p className="">{id}</p> */}
    </div>
  );
};

export default WorkoutTile;
