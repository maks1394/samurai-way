import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}