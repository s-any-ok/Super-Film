import * as axios from "axios";

const instantion = axios.create({
  baseURL: "http://api.tvmaze.com/",
});

export const filmsAPI = {
  getFilms(date) {
    return instantion
      .get(`schedule?country=US&date=${date}`)
      .then((response) => response.data);
  },
};
