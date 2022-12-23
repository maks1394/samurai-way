import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

const store = createStore(reducers)

export default store

//@ts-ignore TODO cleanup this debug output
globalThis.REDUX_STORE = {store: store}