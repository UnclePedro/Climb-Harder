export interface Workout {
  id: String;
  name: String;
  trainingType: WorkoutType;
  details: String;
  duration: Number; // recieved as minutes
  date: Date;
}

enum WorkoutType {
  Base,
  Strength,
  Power,
  PowerEndurance,
  Performance,
}
