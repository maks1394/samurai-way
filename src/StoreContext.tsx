import React from 'react';
import {ActionType, StateType} from "./redux/store";
import {EmptyObject, Store} from "redux";


export type StoreType = Store<EmptyObject & StateType, ActionType>


const StoreContext = React.createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext

