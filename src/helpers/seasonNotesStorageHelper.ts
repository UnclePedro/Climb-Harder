import { Season } from "../models/Season";
import { SeasonNotes } from "../models/SeasonNotes";

export const getSeasonNotes = (currentSeason: Season) => {
  const seasonNotes = currentSeason.seasonNotes as SeasonNotes;
  return seasonNotes;
};

export const saveSeasonNotes = (updatedSeasonNotes: SeasonNotes) => {
  localStorage.setItem("seasons", JSON.stringify(updatedSeasonNotes));
};
