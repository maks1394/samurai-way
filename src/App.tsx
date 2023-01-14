import React, {useContext} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type PropsType = {
    // store: string
}

function App(props: PropsType) {
    return (
        <div className="app_body">
            <div className={'app_wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'main-content'}>
                    <div className={'middle-sidebar-bottom'}>
                        <div className={'middle-sidebar'}>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default App;
