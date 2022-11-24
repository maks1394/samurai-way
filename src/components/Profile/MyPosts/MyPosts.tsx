import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi how are you', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </>
    );
}