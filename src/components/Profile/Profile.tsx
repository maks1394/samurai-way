import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, DialogsPageType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {EmptyObject, Store} from "redux";


type ProfilePropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}