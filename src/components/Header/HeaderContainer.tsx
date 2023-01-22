import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthStateType, setAvatarUrl, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type Props = {
    setUserData: (data: AuthStateType) => void
    setAvatarUrl: (smallAvatar: string) => void
    user: AuthStateType;
};
type State = {};

class HeaderContainer extends React.Component<Props, State> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data)
            }
        }).then(() => {
            return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.user.id}`)
        })
            .then((response) => {
                if (response.status === 200) {
                    this.props.setAvatarUrl(response.data.photos.small)
                }
            })
    }

    render() {
        return (
            <Header user={this.props.user}/>
        );
    };
};

const mapStateToProps = (state: StateType) => ({
    user: state.auth,
    smallAvatar: state.auth.smallAvatar
})

export default connect(mapStateToProps, {setUserData, setAvatarUrl})(HeaderContainer)