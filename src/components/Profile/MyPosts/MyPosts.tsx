import React from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts:PostType[]
}
export const MyPosts = (props:MyPostsPropsType) => {
    /*let posts = [
        {id: 1, message: 'Hi how are you', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ]*/
    const mappedPosts = props.posts.map(el => {
        return (
            <Post message={el.message} likesCount={el.likesCount}/>
        );
    })
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {mappedPosts}
            </div>
        </>
    );
}