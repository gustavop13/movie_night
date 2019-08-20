import React from 'react';

function MovieList(props) {
  return props.movies.map((item, index) => (
    <button key={index} onClick={console.log(index)}>
      {item}
    </button>
  ));
}

export default MovieList;
