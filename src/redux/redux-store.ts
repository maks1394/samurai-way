import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "../StoreContext";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store: StoreType = createStore(reducers)

export default store

//@ts-ignore TODO cleanup this debug output
globalThis.REDUX_STORE = {store: store}