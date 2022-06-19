export const ADD_HABIT = "ADD_HABIT";
export const REMOVE_HABITS = "REMOVE_HABITS";
export const UPDATE_HABIT = "UPDATE_HABIT";
export const FETCH_HABITS = "FETCH_HABITS";
export const TOGGLE_VIEW = "TOGGLE_VIEW";

//action creators
export function fetchHabits(habitsList) {
  return {
    type: FETCH_HABITS,
    habitsList,
  };
}

export function addHabit(habit) {
  return {
    type: ADD_HABIT,
    habit,
  };
}

export function removeHabits(habits) {
  return {
    type: REMOVE_HABITS,
    habits,
  };
}

export function updateStatus(habit) {
  return {
    type: UPDATE_HABIT,
    habit,
  };
}
export function toggleView(weekView) {
  return {
    type: TOGGLE_VIEW,
    weekView,
  };
}
