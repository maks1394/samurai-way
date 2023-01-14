import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileInfoType, setIsFetching, setProfileInfo} from "../../redux/profile-reducer";
import axios from "axios";
import {Loader} from "../Loader/Loader";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParams = {
    userId:string
}
type WithRouterPropsType = RouteComponentProps<PathParams>
type Props =WithRouterPropsType & {
    profileInfo: ProfileInfoType | null
    isProfileFetching: boolean
    setProfileInfo: (profileInfo: ProfileInfoType) => void
    setIsFetching: (isFetching: boolean) => void
};
type State = {};

class ProfileClass extends React.Component<Props, State> {
    componentDidMount() {
        this.props.setIsFetching(true)
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            this.props.setProfileInfo(response.data)
            this.props.setIsFetching(false)
        })
    }

    render() {
        return (
            <div className={'row'}>
                {this.props.isProfileFetching ? <Loader/> : this.props.profileInfo &&
                    <ProfileInfo profileInfo={this.props.profileInfo}/>}
                <MyPostsContainer/>
            </div>
        );
    };
};

const mapStateToProps = (state: StateType) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isProfileFetching: state.profilePage.isProfileFetching
    }
}

const ProfileClassWithRouter = withRouter(ProfileClass)

export const ProfileContainer = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileClassWithRouter)


/*const ProfileClassWithRouter = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileClass)

export const ProfileContainer = withRouter(ProfileClassWithRouter)*/

// type ProfilePropsType = {}

/*
export function Profile(props: ProfilePropsType) {
    return (
        <div className={'row'}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}*/
