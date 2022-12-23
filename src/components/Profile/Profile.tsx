import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/store";


type ProfilePropsType = {
    state: {
        posts: PostType[],
        newPostText: string
    }
    dispatch:(action:ActionType)=>void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}