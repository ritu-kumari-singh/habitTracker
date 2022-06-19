import React from "react";
import { addHabit } from "../actions";

class DetailsViewComponent extends React.Component {
  //add new habit entered by user
  handleAddHabit = (e) => {
    const newHabit = document.getElementById("add_habit_input").value;
    document.getElementById("add_habit_input").value = "";
    const habit = {
      habit_name: newHabit,
      status: {},
    };
    this.props.dispatch(addHabit(habit));
  };
  render() {
    const { habitsList } = this.props;
    return (
      <>
        <div className="flexcol inputContainer">
          <input
            id="add_habit_input"
            type="text"
            placeholder="Enter new habit"
          />
          <button className="customButton" onClick={this.handleAddHabit}>
            Add Habit
          </button>
        </div>
        <div className="habitListContainer">
          <ul>
            {habitsList.map((habit, index) => {
              return <li key={`habit=${index}`}>{habit.habit_name}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default DetailsViewComponent;
