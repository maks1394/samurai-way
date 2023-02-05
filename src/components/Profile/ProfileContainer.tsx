import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {connect, useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileInfoType, setProfile} from "../../redux/profile-reducer";
import {Loader} from "../Loader/Loader";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {RedirectHoc} from "../../hoc/RedirectHOC";
import {compose} from "redux";

type PathParams = {
    userId: string
}
type WithRouterPropsType = RouteComponentProps<PathParams>
type Props = WithRouterPropsType & {
    profileInfo: ProfileInfoType | null
    isProfileFetching: boolean
    setProfile: (userID: string) => void
};
type State = {};

class ProfileClass extends React.Component<Props, State> {
    componentDidMount() {
        if (this.props.match.params.userId) {
            this.props.setProfile(this.props.match.params.userId)
        } else {
            this.props.setProfile('2')
        }
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
}

const mapStateToProps = (state: StateType) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isProfileFetching: state.profilePage.isProfileFetching,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    RedirectHoc,
    connect(mapStateToProps, {setProfile}),
    withRouter,
)(ProfileClass)
