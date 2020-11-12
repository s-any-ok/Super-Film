import * as axios from "axios";

const instantion = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export const filmsAPI = {
  getFilms(date) {
    return instantion
      .get(`schedule?country=US&date=${date}`)
      .then((response) => response.data)
      .catch((error) => {
        return Promise.reject(error);
      });
  },
};
