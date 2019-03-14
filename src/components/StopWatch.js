import React from 'react'
import { connect } from 'react-redux'
import { addSecond } from '../actions'

class StopWatch extends React.Component{

    componentDidMount() {
        this.interval = setInterval(() => this.checkIfTiming(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    checkIfTiming() {
        if(this.props.timing) {
            this.props.addSecond()
        }
    }

    render() {
        return (
            <span>{this.props.time}</span>
        );
    }
}

const mapStateToProps = (state) => {
    return { timing : state.timing, time : state.time }
}

export default connect(mapStateToProps, { addSecond })(StopWatch)