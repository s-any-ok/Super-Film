import React from "react";
import { connect } from "react-redux";
import TV from "../../assets/tv.png";
import s from "./Content.module.css";
import DataPicker from "./DataPicker";
import {
  requestFilms,
  checkIsStartPage,
} from "../../redux/reducers/filmsReducer";

const StartPage = (props) => {
  return (
    <>
      <div className={s.startImg}>
        <img src={TV} alt="tv" />
        <p>
          Для получения списка сериалов, пожалуйста, выберите необходимый месяц
          и день.
        </p>
      </div>
      <div className={s.dataContent}>
        <DataPicker
          requestFilms={props.requestFilms}
          checkIsStartPage={props.checkIsStartPage}
        />
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
  checkIsStartPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
