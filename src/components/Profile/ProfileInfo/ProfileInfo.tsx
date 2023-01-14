import React from "react";
import {ProfileInfoType} from "../../../redux/profile-reducer";
import altPhoto from '../../../assets/images/profile-user.png'

type PropsType = {
    profileInfo: ProfileInfoType
}

export const ProfileInfo = (props: PropsType) => {
    return (
        <>
            <div>
                <img className={'background-image'}
                     src={'https://consolidatedoffice.ca/wp-content/themes/options/images/skins/headers/full_width/header-purpleHaze.jpg'}/>
            </div>
            <div>
                {props.profileInfo.photos.small ? <img src={props.profileInfo.photos.small} alt=""/> :
                    <img src={altPhoto} alt=""/>}
                ava+description
            </div>
        </>
    );
}