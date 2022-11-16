import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {

    return (
        <BrowserRouter>
            <div className="app_body">
                <div className={'app_wrapper'}>
                    <Header/>
                    <Navbar/>
                    <div className={'main-content'}>
                        <div className={'middle-sidebar-bottom'}>
                            <div className={'middle-sidebar'}>
                                <Route path='/dialogs' render={()=><Dialogs/>}/>
                                <Route path='/profile' render={()=><Profile/>}/>
                                <Route path='/news' render={()=><News/>}/>
                                <Route path='/music' render={()=><Music/>}/>
                                <Route path='/settings' render={()=><Settings/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
