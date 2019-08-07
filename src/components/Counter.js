import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div className='boxu'>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button>Create</button>
      <button>Join</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
