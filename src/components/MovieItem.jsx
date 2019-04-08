import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  toggleWillWatch = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
    if (this.state.willWatch) {
      this.props.removeMovieToWillWatch(this.props.item);
    } else {
      this.props.addMovieToWillWatch(this.props.item);
    }
  };

  render() {
    const { item } = this.props;
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className={`btn ${
                this.state.willWatch ? "btn-success" : "btn-secondary"
              }`}
              onClick={this.toggleWillWatch}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;