import { TrainingType } from "../models/Workout";

interface Props {
  name: string;
  trainingType: TrainingType;
  date: string;
  id: string;
}

const WorkoutTile = ({ name, trainingType, date }: Props) => {
  // Object using TrainingType as key paired to string value to be inserted to tailwind as template literal
  const colors = {
    [TrainingType.Base]: "bg-sky-500",
    [TrainingType.Strength]: "bg-red-500",
    [TrainingType.Power]: "bg-yellow-400",
    [TrainingType.PowerEndurance]: "bg-green-500",
    [TrainingType.Performance]: "bg-pink-500",
  };

  return (
    <div
      className={`${colors[trainingType]} p-2 sm:p-3 rounded-lg justify-between shadow-md items-center flex sm:block`}
    >
      <p className="text-xs sm:text-sm font-bold">{name}</p>
      <p className="hidden sm:block">{trainingType}</p>
      <p className="text-xs px-18">{date}</p>
    </div>
  );
};

export default WorkoutTile;
