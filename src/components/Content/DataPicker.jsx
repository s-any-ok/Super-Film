import React from "react";
import DayPicker from "react-day-picker";
import s from "./Content.module.css";
import "react-day-picker/lib/style.css";
import { withRouter } from "react-router-dom";
import { correctDateFormat } from "../../helpers/helpers";
class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date(),
    };
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  handleSubmit = () => {
    let res = correctDateFormat(this.state.selectedDay.toLocaleDateString());
    this.props.requestFilms(res);
    this.props.history.push("/films");
  };

  render() {
    return (
      <>
        <DayPicker
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <button className={s.button} onClick={this.handleSubmit}>
          Search
        </button>
      </>
    );
  }
}

export default withRouter(DataPicker);
