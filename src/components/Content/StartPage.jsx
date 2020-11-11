import React from "react";
import { connect } from "react-redux";
import TV from "../../assets/tv.jpg";
import s from "./Content.module.css";
import DataPicker from "./DataPicker";
import { requestFilms } from "../../redux/reducers/filmsReducer";

const StartPage = (props) => {
  return (
    <>
      <div className={s.startImg}>
        <img src={TV} alt="tv" />
      </div>
      <div className={s.dataContent}>
        <DataPicker requestFilms={props.requestFilms} />
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    films: state.filmsPage.films,
  };
};

let mapDispatchToProps = {
  requestFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
