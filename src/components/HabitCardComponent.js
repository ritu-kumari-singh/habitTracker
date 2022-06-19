import React from "react";
import { updateStatus } from "../actions";

class HabitCardComponent extends React.Component {
  //update status for any habit
  handleStatusChange = (e) => {
    const updatedHabit = JSON.parse(JSON.stringify(this.props.habit));
    updatedHabit.status[e.target.dataset.id] = e.target.value;
    this.props.dispatch(updateStatus(updatedHabit));
  };
  render() {
    const { habit, weekDates } = this.props;
    return (
      <div className="flexcol habitCardParent">
        <div className="habitHeader">{habit.habit_name}</div>
        <div className="flexrow">
          {weekDates.map((date) => {
            let dateNum = date.split("-")[2];
            return (
              <div className="flexcol dayContainer">
                <div className="displayDate">{dateNum}</div>
                {habit.status[date] !== undefined ? habit.status[date] : "None"}
                <select
                  name="status"
                  data-id={date}
                  onChange={this.handleStatusChange}
                >
                  <option value="None">None</option>
                  <option value="Not Done">Not Done</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HabitCardComponent;
