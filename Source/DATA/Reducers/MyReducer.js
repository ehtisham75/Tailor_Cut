import { combineReducers, createStore } from "redux"
import ReducerConstant from "./ReducerConstant"

const initialLangState = {
    language: Defaultlanguage
}
const languageReducer = (state = initialLangState, action) => {
    switch (action.type) {
        case ReducerConstant.ACTIVE_LANGUAGE:
            return { language: action.language }
    }
    return state
}

const reducers = combineReducers({  languageReducer, notificationsReducer })
const store = createStore(reducers)
export default store