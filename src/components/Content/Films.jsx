import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./Content.module.css";
import film from "../../assets/film.png";
import Modal from "react-modal";
Modal.setAppElement("#root");
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={s.filmWrapper}>
      <div className={s.filmImg}>
        <img
          onClick={toggleModal}
          src={image === null ? film : image.medium}
          alt={name}
        />
      </div>
      <div className={s.filmContent}>
        <div className={s.filmName}>{name}</div>
        <div className={s.filmDate}>{date.slice(0, 4)}</div>
        <div className={s.seasonEpisode}>
          <div className={s.season}>Сезон: {season}</div>
          <div className={s.episod}>Эпизод: {number}</div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <img
          className={s.modalImg}
          onClick={toggleModal}
          src={image === null ? film : image.original}
          alt={name}
        />
      </Modal>
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
