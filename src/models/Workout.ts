export interface Workout {
  id: String;
  title: String;
  type: WorkoutType;
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
