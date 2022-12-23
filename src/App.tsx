import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, DialogsPageType, ProfilePageType, StateType, StoreType} from "./redux/store";
import {EmptyObject, Store} from "redux";

/*type PropsType = {
    state:StateType
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void
}*/
type PropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

function App(props: PropsType) {
    const state: StateType = props.store.getState()

    return (
        <div className="app_body">
            <div className={'app_wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'main-content'}>
                    <div className={'middle-sidebar-bottom'}>
                        <div className={'middle-sidebar'}>
                            <Route path='/dialogs' render={() => <Dialogs
                                state={state.dialogsPage}
                                dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path='/profile' render={() => <Profile
                                state={state.profilePage}
                                dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default App;
