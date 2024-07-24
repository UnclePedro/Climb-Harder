import { Season } from "../models/Season";
import { TrainingType } from "../models/Workout";
import { newId } from "../utils/helpers";
import { getDate } from "./workoutStorageHelper";

const defaultSeason: Season = {
  id: newId(),
  name: "",
  workouts: {
    id: newId(),
    name: "",
    trainingType: TrainingType.Base,
    details: "",
    duration: 0,
    date: getDate(),
  },
  seasonNotes: {
    trainingFocuses: "",
    goals: "",
    achievements: "",
  },
};

export const getSeasons = (): Season => {
  if (localStorage.getItem("seasons") === null) {
    localStorage.setItem("seasons", JSON.stringify(defaultSeason));
  }
  const seasonsLocal = localStorage.getItem("seasons") as string;
  const seasons = JSON.parse(seasonsLocal) as Season;
  return seasons;
};
