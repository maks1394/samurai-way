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
import {StateType, updateNewPostText} from "./redux/state";

type PropsType = {
    state:StateType
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void
}

function App(props:PropsType) {

    return (
            <div className="app_body">
                <div className={'app_wrapper'}>
                    <Header/>
                    <Navbar/>
                    <div className={'main-content'}>
                        <div className={'middle-sidebar-bottom'}>
                            <div className={'middle-sidebar'}>
                                <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />}/>
                                <Route path='/profile' render={()=><Profile state={props.state.profilePage} addPost={props.addPost}
                                                                            updateNewPostText ={updateNewPostText}/>}/>
                                <Route path='/news' render={()=><News/>}/>
                                <Route path='/music' render={()=><Music/>}/>
                                <Route path='/settings' render={()=><Settings/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}


export default App;
