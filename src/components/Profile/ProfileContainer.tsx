import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileInfoType, setProfile} from "../../redux/profile-reducer";
import {Loader} from "../Loader/Loader";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParams = {
    userId:string
}
type WithRouterPropsType = RouteComponentProps<PathParams>
type Props =WithRouterPropsType & {
    profileInfo: ProfileInfoType | null
    isProfileFetching: boolean
    setProfile:(userID:string)=>void
    isAuth:boolean
};
type State = {};

class ProfileClass extends React.Component<Props, State> {
    componentDidMount() {
        if(this.props.match.params.userId){
            this.props.setProfile(this.props.match.params.userId)
        } else{
            this.props.setProfile('2')
        }
    }

    render() {
        if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
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
        isProfileFetching: state.profilePage.isProfileFetching,
        isAuth:state.auth.isAuth
    }
}

const ProfileClassWithRouter = withRouter(ProfileClass)

export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileClassWithRouter)


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
