import React from "react";
import HabitCardComponent from "./HabitCardComponent";

//return week days names for the past 7 days including today
function getWeekDays(locale, baseDate) {
  var weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "short" }));
    baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
}
//return dates for the past 7 days including today
const GetDays = (days) => {
  var DateArray = [];
  for (var i = days - 1; i >= 0; i--) {
    var date = new Date();
    var last = new Date(date.getTime() - i * 24 * 60 * 60 * 1000);
    var day = last.getDate();
    var month = last.getMonth() + 1;
    var year = last.getFullYear();
    const fulld = Number(year) + "-" + Number(month) + "-" + Number(day); // Format date as you like
    DateArray.push(fulld);
  }
  return DateArray;
};

class WeekViewComponent extends React.Component {
  render() {
    const { habitsList } = this.props;
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const weekDays = getWeekDays("en-US", date);
    const weekDates = GetDays(7);
    return (
      <div className="habitListContainer flexcol">
        <div className="flexcol">
          <div className="monthContainer">
            {month} &nbsp;
            {date.getFullYear()}
          </div>
          <div
            className="weekDaysContainer flexrow"
            style={{ justifyContent: "center" }}
          >
            {weekDays.map((weekDay) => {
              return (
                <div
                  className="dayContainer"
                  style={{ backgroundColor: "#ffc6c2", height: 40 + "px" }}
                >
                  {weekDay}
                </div>
              );
            })}
          </div>
        </div>
        {habitsList.map((habit, index) => {
          return (
            <HabitCardComponent
              weekDates={weekDates}
              habit={habit}
              dispatch={this.props.dispatch}
              key={`habit=${index}`}
            />
          );
        })}
      </div>
    );
  }
}

export default WeekViewComponent;
