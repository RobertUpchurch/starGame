import { combineReducers } from 'redux';

var timing = true

const addPointReducer = (count = 0, action) => {
    if (action.type === "ADD_POINT" && timing) {
        return count + 1
    }
    return count;
}


const stopTimerReducer = (count=0, action) => {
    if (action.type === "STOP_TIMER") {
        timing = false
    }

    return timing
}

const stopWatchReducer = (time=60, action) => {
    if (action.type === "ADD_SECOND" && time > 0) {
        return time - 1
    }

    return time;
}

export default combineReducers({
    points: addPointReducer,
    scoring: stopTimerReducer,
    time: stopWatchReducer
})