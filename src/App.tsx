import React, {useContext} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                            <Route path='/profile' render={() => <Profile/>}/>
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
