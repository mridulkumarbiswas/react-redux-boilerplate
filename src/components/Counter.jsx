import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {increment, decrement} from "../store/actions/index"

const Counter = ({counter, increment, decrement}) => {

  console.log(counter);
  return (
    <div>
      <p className="counter_title">Counter: {counter.counter}</p>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button"onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment,
            decrement
        },
        dispatch
      )
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);