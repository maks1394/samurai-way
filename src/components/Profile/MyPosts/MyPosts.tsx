import React, {ChangeEvent, createRef, useRef} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const addPost = () => {
        props.addPost()
    }
    const mappedPosts = props.posts.map(el => {
        return (
            <Post message={el.message} likesCount={el.likesCount}/>
        );
    })
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.updateNewPostText(e.currentTarget.value)
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