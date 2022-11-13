import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={'main-content'}>
            <div className={'middle-sidebar-bottom'}>
                <div className={'middle-sidebar'}>
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
                </div>
            </div>
        </div>
    );
}