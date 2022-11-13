import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post/>
                <Post/>
            </div>
        </>
    );
}