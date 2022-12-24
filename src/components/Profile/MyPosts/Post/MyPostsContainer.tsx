import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";

type MyPostsContainerPropsType = {}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    return (
        <>
            <StoreContext.Consumer>
                {(store) => {
                    const addPostFunctionCreator = () => {
                        return () => store.dispatch(addPostActionCreate())
                    }
                    const onPostChangeFunctionCreator = () => {
                        return (text: string) => store.dispatch(updateNewPostTextActionCreate(text))
                    }
                    return (
                        <MyPosts posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}
                                 addPost={addPostFunctionCreator()}
                                 onPostChange={onPostChangeFunctionCreator()}/>
                    )
                }}
            </StoreContext.Consumer>
        </>
    );
}