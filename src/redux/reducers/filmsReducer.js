import { filmsAPI } from "../../api/api";
const SET_FILMS = "SET_FILMS";
const SET_DATE = "SET_DATE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  films: [],
  isFetching: false,
  date: null,
};
const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, films: [...action.films] };
    case SET_DATE:
      return { ...state, date: action.date };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};
//-------------------Actions--------------------//
export const setFilms = (films) => ({
  type: SET_FILMS,
  films,
});
export const setDate = (date) => ({
  type: SET_DATE,
  date,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

//-------------------Thunks--------------------//

export const requestFilms = (date) => async (dispath) => {
  const data = await filmsAPI.getFilms(date);
  dispath(setFilms(data));
  dispath(setDate(date));
  //dispath(toggleIsFetching(true));

  //dispath(toggleIsFetching(false));
};

export default filmsReducer;
