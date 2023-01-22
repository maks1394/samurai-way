import {combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
} // redux plugin

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type StateType = ReturnType<typeof reducer>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // redux plugin

const store = createStore(reducer,composeEnhancers())
export type StoreType = typeof store
export default store

//@ts-ignore TODO cleanup this debug output
globalThis.REDUX_STORE = {store: store}