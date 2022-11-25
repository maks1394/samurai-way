import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


type ProfilePropsType = {
    state:{
        posts:PostType[]
    }
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}