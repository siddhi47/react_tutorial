import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteHandler = (id) => {
    console.log(`Deleted ${id}`);
    const movie_edit = this.state.movies.filter((m) => m._id !== id);
    this.setState({
      movies: movie_edit,
    });
  };

  render() {
    if (this.state.movies.length === 0) return <h1>No Movies</h1>;

    return (
      <main className="container">
        <p>There are {this.state.movies.length} movies available.</p>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              const {
                _id: id,
                title,
                genre,
                numberInStock: stock,
                dailyRentalRate: rate,
              } = movie;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{genre.name}</td>
                  <td>{stock}</td>
                  <td>{rate}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log(id);
                        this.deleteHandler(id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Movies;
