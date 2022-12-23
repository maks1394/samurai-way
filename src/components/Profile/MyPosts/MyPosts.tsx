import React, {ChangeEvent, createRef, useRef} from 'react';
import {Post} from "./Post/Post";
import {ActionType,  PostType} from "../../../redux/store";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const addPost = () => {
        props.dispatch(addPostActionCreate())
    }
    const mappedPosts = props.posts.map((el, index) => {
        return (
            <Post key={index} message={el.message} likesCount={el.likesCount}/>
        );
    })
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.dispatch(updateNewPostTextActionCreate(e.currentTarget.value))
        }
    }
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {mappedPosts}
            </div>
        </>
    );
}