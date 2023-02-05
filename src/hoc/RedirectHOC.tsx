// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {ComponentType} from "react";

type MapStateToPropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:StateType):MapStateToPropsType =>{
    return {
        isAuth:state.auth.isAuth
    }
}

export function RedirectHoc  <T>(Component: ComponentType<T>){
    debugger
    const ComponentWithAuth = (props:MapStateToPropsType)=>{
        debugger
        let {isAuth,...restProps} = props
        if (!isAuth){
            return <Redirect to={'/login'}/>
        } else {
            return <Component {...restProps as T} />
        }
    }

    return connect(mapStateToProps)(ComponentWithAuth)
};