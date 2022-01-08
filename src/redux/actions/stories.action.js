import { actionTypes } from "../types/stories-type";
import { getStories } from "../../services/getStories";

export const fetchStart = () => (dispatch) =>
  dispatch({ type: actionTypes.FETCH_COLLECTIONS_START });
export const fetchSuccess = () => (dispatch) =>
  dispatch({ type: actionTypes.FETCH_COLLECTIONS_SUCCESS });
export const fetchFailed = (payload) => (dispatch) =>
  dispatch({ type: actionTypes.FETCH_COLLECTIONS_FAILED, payload });

export const fetchData = (payload) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COLLECTIONS_START });
    const { result, error, status } = await getStories(payload);
    if (status === 200) {
      dispatch({
        type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: result,
      });
    } else {
      dispatch({ type: actionTypes.FETCH_COLLECTIONS_FAILED, payload: error });
    }
  };
};
