import ReducerConstant from "./ReducerConstant"

const ReducerAction = (dispatch) => {
    return {
        languageReducer: (language) => dispatch({ type: ReducerConstant.ACTIVE_LANGUAGE, language: language }),
        resetNotificationsCounter: () => dispatch({ type: ReducerConstant.RESET_NOTIFICATIONS_COUNTER }),
    }
}

export default ReducerAction