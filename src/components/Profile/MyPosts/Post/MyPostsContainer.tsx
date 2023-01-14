import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
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