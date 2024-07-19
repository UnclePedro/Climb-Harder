import { TrainingType } from "../models/Workout";

interface Props {
  name: String;
  trainingType: TrainingType;
  date: String;
  id: String;
}

const WorkoutTile = ({ name, trainingType, date }: Props) => {
  // Object using TrainingType as key paired to string value to be inserted to tailwind as template literal
  const colors = {
    [TrainingType.Base]: "bg-sky-500",
    [TrainingType.Strength]: "bg-red-500",
    [TrainingType.Power]: "bg-violet-500",
    [TrainingType.PowerEndurance]: "bg-green-500",
    [TrainingType.Performance]: "bg-pink-500",
  };

  return (
    <div className={`${colors[trainingType]} p-4 m-1 rounded-lg shadow-md`}>
      <p className="text-xs">{date}</p>
      <p className="font-bold text-lg">{name}</p>
      <p className="">{trainingType}</p>
    </div>
  );
};

export default WorkoutTile;
