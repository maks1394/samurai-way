import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";


const reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type StateType = ReturnType<typeof reducer>

const store = createStore(reducer)
export type StoreType = typeof store
export default store

//@ts-ignore TODO cleanup this debug output
globalThis.REDUX_STORE = {store: store}