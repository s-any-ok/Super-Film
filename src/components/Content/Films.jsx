import React from "react";
import { connect } from "react-redux";
import s from "./Content.module.css";
import film from "../../assets/film.png";

const Films = (props) => {
  return (
    <>
      <div className={s.filmDate}>
        <h5>{props.date}</h5>
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

const Film = ({ image }) => {
  debugger;
  return (
    <div className={s.filmWrapper}>
      <div>
        <img src={image === null ? film : image.medium} alt="film" />
      </div>
      <div>Content</div>
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
