import { combineReducers } from 'redux';

const addPointReducer = (count = 0, action) => {
    if (action.type === "ADD_POINT") {
        return count + 1
    }
    return count;
}

const stopTimerReducer = (count=0, action) => {
    if (action.type === "STOP_TIMER") {
        return "off"
    }

    return "on";
}

export default combineReducers({
    points: addPointReducer,
    timing: stopTimerReducer
})