import { Season } from "../models/Season";
import { newId } from "../utils/helpers";

const defaultSeason: Season = {
  id: newId(),
  name: "Season 1",
  workouts: [],
  seasonNotes: {
    trainingFocuses: "",
    goals: "",
    achievements: "",
  },
};

// Returns seasons array if exists, if null creates new empty season
export const getSeasons = (): Season[] => {
  if (localStorage.getItem("seasons") === null) {
    localStorage.setItem("seasons", JSON.stringify(defaultSeason));
  }
  const seasonsLocal = localStorage.getItem("seasons") as string;
  const seasons = JSON.parse(seasonsLocal) as Season[];
  return seasons;
};

// Selects specific season within the seasons array based on filtering by ID
export const getSeason = (seasonId: string): Season => {
  return getSeasons().find((season) => season.id === seasonId) as Season;
};
