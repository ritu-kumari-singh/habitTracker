import React from "react";
import DetailsViewComponent from "./DetailsViewComponent";
import WeekViewComponent from "./WeekViewComponent";
import { fetchHabits, toggleView } from "../actions";
import { connect } from "react-redux";
import { firestore } from "../firebase";

class App extends React.Component {
  //function to switch between detail view and week view
  toggleView = () => {
    this.props.dispatch(toggleView(!this.props.weekView));
  };
  componentDidMount() {
    //fetch the list of habits added by the user along with the status
    firestore
      .collection("habits")
      .get()
      .then((snapshot) => {
        const habitsList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        this.props.dispatch(fetchHabits(habitsList));
      });
  }
  render() {
    const { habitsList, weekView } = this.props;
    return (
      <div className="App flexcol">
        <div className="flexrow header">
          <h4 className="heading">{weekView ? "Week View" : "Detail View"}</h4>
          <button
            className="customButton"
            style={{ top: 25 + "px" }}
            onClick={this.toggleView}
          >
            Toggle View
          </button>
        </div>
        <div className="container">
          {weekView ? (
            <WeekViewComponent
              habitsList={habitsList}
              dispatch={this.props.dispatch}
            />
          ) : (
            <DetailsViewComponent
              habitsList={habitsList}
              dispatch={this.props.dispatch}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    habitsList: state.habitsList,
    weekView: state.weekView,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
