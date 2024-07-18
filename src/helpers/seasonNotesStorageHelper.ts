import { SeasonNotes } from "../models/SeasonNotes";

export const getSeasonNotes = (): SeasonNotes => {
  if (localStorage.getItem("seasonNotes") === null) {
    localStorage.setItem("seasonNotes", "{}");
  }
  const seasonNotesLocal = localStorage.getItem("seasonNotes") as string;
  const seasonNotes = JSON.parse(seasonNotesLocal) as SeasonNotes;
  return seasonNotes;
};

export const saveSeasonNotes = (seasonNotes: SeasonNotes) => {
  localStorage.setItem("seasonNotes", JSON.stringify(seasonNotes));
};
