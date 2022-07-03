import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { actFetchData } from "./reducer/action";
import Loader from "components/Loader";
class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { loading, data } = this.props;
    if (loading) return <Loader/>;
    console.log(data);
    return data?.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <h1>ListMoviePage</h1>
        <div className="row">{this.renderListMovie()};</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.ListMovieReducer.loading,
    data: state.ListMovieReducer.data,
    error: state.ListMovieReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(actFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
