import React from 'react'
import { connect } from 'react-redux'
import { stopTimer } from '../actions'
import StopWatch from './StopWatch'

import './ScoreBoard.css'

const ScoreBoard = (props) => {

    if (props.points > 1000) {
        props.stopTimer()
    }

    return (
        <div className="scoreboard">
            <h1>Score: {props.points} | Time: <StopWatch /></h1>
            <p>See how fast you can collect 1000 stars</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        points: state.points,
        timing: state.timing
    }
}

export default connect(mapStateToProps, { stopTimer })(ScoreBoard);