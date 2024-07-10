export interface Workout {
  id: String;
  name: String;
  trainingType: TrainingType;
  details: String;
  duration: Number; // recieved as minutes
  date: Date;
}

export enum TrainingType {
  Base = "Base Fitness",
  Strength = "Strength",
  Power = "Power",
  PowerEndurance = "Power Endurance",
  Performance = "Performance",
}
