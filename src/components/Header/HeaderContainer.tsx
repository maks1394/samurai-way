import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMe, AuthStateType} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type Props = {
    user: AuthStateType
    authMe:()=>void
};
type State = {};

class HeaderContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {authMe})(HeaderContainer)