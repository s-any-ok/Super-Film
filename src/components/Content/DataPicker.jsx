import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { withRouter } from "react-router-dom";
import { correctDateFormat } from "../../helpers/helpers";
class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
    };
  }

  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      let dateApi = correctDateFormat(
        this.state.selectedDay.toLocaleDateString()
      );
      this.props.requestFilms(dateApi);
      this.props.checkIsStartPage(false);
      this.props.history.push("/films");
    }
  }
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };
  render() {
    return (
      <>
        <DayPicker
          locale="ru"
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
      </>
    );
  }
}

export default withRouter(DataPicker);
