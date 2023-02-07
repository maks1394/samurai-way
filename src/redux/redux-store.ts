import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"
import {useDispatch} from "react-redux";

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

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export type StoreType = typeof store
export type DispatchType = typeof store.dispatch
export type GetStateType = typeof store.getState
export default store


export type TypedDispatch = ThunkDispatch<StateType, any, AnyAction>;
// export type TypedThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     AnyAction
//     >;

export const useTypedDispatch  = () =>  useDispatch<TypedDispatch>()


//@ts-ignore TODO cleanup this debug output
globalThis.REDUX_STORE = {store: store}