import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

function Counter(props) {
  if(props.movies.length > 0) {
    return (
      <div className='boxu'>
        <MovieList movies={props.movies}/>
        <button onClick={props.onExit}>Exit</button>
        <input placeholder='Other Movie'></input>
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
      const action = {type: 'server/CREATE', data: 'avengurs'};
      dispatch(action);
    },
    onJoin: () => {
      const action = {type: 'server/JOIN'};
      dispatch(action);
    },
    onExit: () => {
      const action = {type: 'server/EXIT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
