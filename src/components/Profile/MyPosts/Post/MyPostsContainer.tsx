import React from 'react';
import {MyPosts} from "../MyPosts";
import {ActionType, DialogsPageType, ProfilePageType} from "../../../../redux/store";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import {EmptyObject, Store} from "redux";

type MyPostsContainerPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const addPostFunctionCreator = () => {
        return () => props.store.dispatch(addPostActionCreate())
    }
    const onPostChangeFunctionCreator = () => {
        return (text: string) => props.store.dispatch(updateNewPostTextActionCreate(text))
    }
    return (
        <>
            <MyPosts posts={props.store.getState().profilePage.posts}
                     newPostText={props.store.getState().profilePage.newPostText} addPost={addPostFunctionCreator()}
                     onPostChange={onPostChangeFunctionCreator()}/>
        </>
    );
}