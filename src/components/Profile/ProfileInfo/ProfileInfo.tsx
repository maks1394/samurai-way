import React, {CSSProperties} from "react";
import {ProfileInfoType} from "../../../redux/profile-reducer";
import altPhoto from '../../../assets/images/profile-user.png'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type PropsType = {
    profileInfo: ProfileInfoType
}

export const ProfileInfo = (props: PropsType) => {
    const style: CSSProperties = {
        width: '101px',
        height: '101px'
    }
    return (
        <>
            <div>
                <img className={'background-image'}
                     src={'https://consolidatedoffice.ca/wp-content/themes/options/images/skins/headers/full_width/header-purpleHaze.jpg'}/>
            </div>
            <div>
                {props.profileInfo.photos.small ? <img style={style} src={props.profileInfo.photos.small} alt=""/> :
                    <img style={style} src={altPhoto} alt=""/>}
                {/*{<span>{props.profileInfo.aboutMe} </span>}*/}
                {props.profileInfo.userId && <ProfileStatus profileId={String(props.profileInfo.userId)}/>}
            </div>
        </>
    );
}