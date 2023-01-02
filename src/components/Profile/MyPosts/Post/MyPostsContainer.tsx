import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import {ActionType} from "../../../../redux/store";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost() {
            dispatch(addPostActionCreate())
        },
        onPostChange(text: string) {
            dispatch(updateNewPostTextActionCreate(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)