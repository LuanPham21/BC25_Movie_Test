import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "./reducer/action";

export default function DetailMovie() {
  const loading = useSelector((state) => state.DetailMovieReducer.loading);
  const data = useSelector((state) => state.DetailMovieReducer.data);
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    //Lay id tu url
    dispatch(actFetchData(params.id));
  }, []);
  if (loading) return <div>...Loading</div>;
  return (
    <div>
      <h1>DetailMovie</h1>
      <h3>{data && data.tenPhim}</h3>
    </div>
  );
}
