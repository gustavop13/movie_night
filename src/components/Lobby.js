import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import RoomForm from './RoomForm';

function Lobby(props) {
  if(props.place === 'lobby') {
    return (
      <div className='boxu'>
        <button onClick={props.onCreate}>Create</button>
        <button onClick={props.join_room}>Join</button>
      </div>
    )
  } else if(props.place === 'hallway') {
    return (
      <div className='boxu'>
        <RoomForm onNumEnter={props.onJoin}/>
        <button onClick={props.onExit}>Exit</button>
      </div>
    )
  } else if(props.place === 'room') {
    return (
      <div className='boxu'>
        <div>Room Number: {props.room_number}</div>
        <MovieList movies={props.movies} onAddMovie={props.onAdd}/>
        <button onClick={props.onExit}>Exit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    place: state.place,
    room_number: state.room_number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: () => {
      const action = {type: 'server/CREATE'};
      dispatch(action);
    },
    onJoin: (room_number) => {
      const action = {type: 'server/JOIN', data: {rn: room_number}};
      dispatch(action);
    },
    join_room: () => {
      const action = {type: 'server/JOINING'};
      dispatch(action);
    },
    onExit: () => {
      const action = {type: 'server/EXIT'};
      dispatch(action);
    },
    onAdd: (room_number, name) => {
      const action = {type: 'server/ADD', data: {rn: room_number, movie_name: name}};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
