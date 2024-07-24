import { Season } from "../models/Season";

export const getSeasons = (): Season => {
  if (localStorage.getItem("seasons") === null) {
    localStorage.setItem("seasons", "[]");
  }
  const seasonsLocal = localStorage.getItem("seasons") as string;
  const seasons = JSON.parse(seasonsLocal) as Season;
  return seasons;
};
