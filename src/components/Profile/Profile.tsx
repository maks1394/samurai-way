import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, updateNewPostText} from "../../redux/state";


type ProfilePropsType = {
    state: {
        posts: PostType[],
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText}
                     updateNewPostText={updateNewPostText}/>
        </div>
    );
}