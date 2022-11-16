import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={'row'}>
            <div>
                <img className={'background-image'}
                     src={'https://consolidatedoffice.ca/wp-content/themes/options/images/skins/headers/full_width/header-purpleHaze.jpg'}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}