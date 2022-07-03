import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actFetchData = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest);
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => {
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCEESS,
    payload: data,
  };
};
const actListMovieFailed = (data) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: data,
  };
};
