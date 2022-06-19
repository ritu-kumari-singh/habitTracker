import {
  FETCH_HABITS,
  ADD_HABIT,
  TOGGLE_VIEW,
  UPDATE_HABIT,
} from "../actions/index";
import { firestore } from "../firebase";

const initialHabitState = {
  habitsList: [],
  weekView: false,
};

export default function habits(state = initialHabitState, action) {
  switch (action.type) {
    case FETCH_HABITS:
      return {
        ...state,
        habitsList: action.habitsList,
      };
    case TOGGLE_VIEW:
      return {
        ...state,
        weekView: action.weekView,
      };
    case ADD_HABIT:
      firestore.collection("habits").add({
        habit_name: action.habit.habit_name,
        status: {},
      });
      return {
        ...state,
        habitsList: [action.habit, ...state.habitsList],
      };
    case UPDATE_HABIT:
      firestore
        .collection("habits")
        .doc(action.habit.id)
        .update({
          status: { ...action.habit.status },
        })
        .then(() => {
          console.log("Updated");
        })
        .catch((e) => {
          console.log(e);
        });
      return {
        ...state,
        habitsList: state.habitsList.map((listItem) =>
          listItem.id === action.habit.id
            ? { ...listItem, status: action.habit.status }
            : listItem
        ),
      };
    default:
      return state;
  }
}
