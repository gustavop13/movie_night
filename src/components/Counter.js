import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

function Counter(props) {
  if(props.movies.length > 2) {
    return (
      <div className='boxu'>
        <MovieList movies={props.movies}/>
      </div>
    )
  } else {
    return (
      <div className='boxu'>
        <button onClick={props.onCreate}>Create</button>
        <button onClick={props.onJoin}>Join</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: () => {
      const action = {type: 'CREATE'};
      dispatch(action);
    },
    onJoin: () => {
      const action = {type: 'JOIN'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
