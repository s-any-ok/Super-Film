import { connect } from "react-redux";
import superFilm from "../../assets/Super Film.png";
import arrow from "../../assets/Shape.png";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { checkIsStartPage } from "../../redux/reducers/filmsReducer";
const Header = (props) => {
  const goBack = () => {
    props.history.goBack();
    setTimeout(() => props.checkIsStartPage(true), 100);
  };
  return (
    <div>
      {!props.isStartPage && (
        <img className="arrow" onClick={goBack} src={arrow} alt="arrow" />
      )}

      <img src={superFilm} alt="Super Film" />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isStartPage: state.filmsPage.isStartPage,
  };
};
let mapDispatchToProps = {
  checkIsStartPage,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
