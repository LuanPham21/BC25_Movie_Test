import { combineReducers } from "redux";
import ListMovieReducer from "containers/HomeTemplate/ListMoviePage/reducer";
import DetailMovieReducer from "containers/HomeTemplate/DetailMovie/reducer";
import LoginAuthReducer from "containers/AdminTemplate/AuthPage/reducer";
import addUserReducer from "containers/AdminTemplate/AddUserPage/reducer";

const rootReducer = combineReducers({
  ListMovieReducer,
  DetailMovieReducer,
  LoginAuthReducer,
  addUserReducer,
});

export default rootReducer;
