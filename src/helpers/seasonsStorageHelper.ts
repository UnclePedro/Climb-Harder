import { Season } from "../models/Season";
import { newId } from "../utils/helpers";

const defaultSeasons: Season[] = [
  {
    id: newId(),
    name: "Season 1",
    workouts: [],
    seasonNotes: {
      trainingFocuses: "",
      goals: "",
      achievements: "",
    },
  },
];

// Returns seasons array if exists, if null creates new empty season
export const getSeasons = (): Season[] => {
  if (localStorage.getItem("seasons") === null) {
    localStorage.setItem("seasons", JSON.stringify(defaultSeasons));
  }
  const seasonsLocal = localStorage.getItem("seasons") as string;
  const seasons = JSON.parse(seasonsLocal) as Season[];
  return seasons;
};

// Selects specific season within the seasons array by filtering by ID
export const getSeason = (seasonId: string): Season => {
  return getSeasons().find((season) => season.id === seasonId) as Season;
};

export const updateSeason = (updatedSeason: Season) => {
  const updatedSeasons = getSeasons().map((season) => {
    if (season.id === updatedSeason.id) {
      return updatedSeason;
    } else return season;
  });
  localStorage.setItem("seasons", JSON.stringify(updatedSeasons));
};

export const addSeason = () => {
  const newSeason: Season = {
    id: newId(),
    name: `Season ${getSeasons().length + 1}`,
    workouts: [],
    seasonNotes: {
      trainingFocuses: "",
      goals: "",
      achievements: "",
    },
  };

  const updatedSeasons = [...getSeasons(), newSeason];
  localStorage.setItem("seasons", JSON.stringify(updatedSeasons));
  return updatedSeasons;
};