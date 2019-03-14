import { combineReducers } from 'redux';

var timing = true

const addPointReducer = (count = 0, action) => {
    if (action.type === "ADD_POINT") {
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

const stopWatchReducer = (time=0, action) => {
    if (action.type === "ADD_SECOND") {
        return time + 1
    }

    return time;
}

export default combineReducers({
    points: addPointReducer,
    timing: stopTimerReducer,
    time: stopWatchReducer
})