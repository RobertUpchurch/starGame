import React from 'react'
import { connect } from 'react-redux'
import { stopTimer } from '../actions'
import StopWatch from './StopWatch'

import './ScoreBoard.css'

const ScoreBoard = (props) => {

    if (props.time <= 0) {
        props.stopTimer()
    }

    return (
        <div className="scoreboard">
            <h1>Score: {props.points} | Time: <StopWatch /></h1>
            <p>How many stars can you collect in 1 minute?</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        points: state.points,
        time: state.time
    }
}

export default connect(mapStateToProps, { stopTimer })(ScoreBoard);