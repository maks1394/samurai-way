// @flow
import * as React from 'react';
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {ComponentType} from "react";

const mapStateToProps = (state:StateType) =>{
    return {
        isAuth:state.auth.isAuth
    }
}

export function RedirectHoc  <T>(Component: ComponentType<T>){
    debugger
    const ComponentWithAuth = (props:any)=>{
        debugger
        let {isAuth,...restProps} = props
        if (!isAuth){
            return <Redirect to={'/login'}/>
        } else {
            return <Component {...restProps}/>
        }
    }

    return connect(mapStateToProps)(ComponentWithAuth)
};