import React from "react";
import { connect } from "react-redux";
import s from "./Content.module.css";
import film from "../../assets/film.png";

const Films = (props) => {
  return (
    <>
      <div className={s.filmsDate}>
        <h5>
          {new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(props.date)}
        </h5>
      </div>
      <div>
        {props.films.map((f) => (
          <Film
            image={f.image}
            name={f.name}
            date={f.show.premiered}
            season={f.season}
            number={f.number}
          />
        ))}
      </div>
    </>
  );
};

const Film = ({ image, name, date, season, number }) => {
  return (
    <div className={s.filmWrapper}>
      <div className={s.filmImg}>
        <img src={image === null ? film : image.medium} alt="film" />
      </div>
      <div className={s.filmContent}>
        <div className={s.filmName}>{name}</div>
        <div className={s.filmDate}>{date.slice(0, 4)}</div>
        <div className={s.seasonEpisode}>
          <div>Сезон: {season}</div>
          <div>Эпизод: {number}</div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    films: state.filmsPage.films,
    date: state.filmsPage.date,
  };
};

export default connect(mapStateToProps, null)(Films);
