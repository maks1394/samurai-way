import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    onPostChange: (text: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    const addPost = () => {
        props.addPost()
    }
    const mappedPosts = props.posts.map((el, index) => {
        return (
            <Post key={index} message={el.message} likesCount={el.likesCount}/>
        );
    })
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.onPostChange(e.currentTarget.value)
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