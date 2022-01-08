/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../types/stories-type";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return { ...state, data: [], loading: true, error: null };
    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, data: payload, loading: false, error: null };
    case actionTypes.FETCH_COLLECTIONS_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
