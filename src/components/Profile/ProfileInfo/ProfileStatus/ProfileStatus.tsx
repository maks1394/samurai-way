import * as React from 'react';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {StateType, useTypedDispatch} from "../../../../redux/redux-store";
import {
    getProfileStatusTC,
    setEditModeProfileStatusAC,
    setProfileStatusTC,
    setTemporaryProfileStatusAC
} from "../../../../redux/profile-reducer";

type Props = {
    profileId: string
};


export const ProfileStatus = (props: Props) => {
    const clientId = useSelector<StateType, (string | null)>(state => String(state.auth.id))
    const status = useSelector<StateType,string>(state=>state.profilePage.profileStatus.status)
    const dispatch = useTypedDispatch()
    let clickSemaphore = false
    const editRights = clientId === props.profileId
    const temporaryStatus = useSelector<StateType,string>(state=>state.profilePage.profileStatus.temporaryStatus)
    useEffect(() => {
        dispatch(getProfileStatusTC(props.profileId))
    }, [])
    const editMode = useSelector<StateType,boolean>(state=>state.profilePage.profileStatus.editMode)
    debugger
    const onDoubleClickHandler = () => {
        dispatch(setEditModeProfileStatusAC(true))
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTemporaryProfileStatusAC(e.currentTarget.value))
    }
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        clickSemaphore = true
        dispatch(setProfileStatusTC(temporaryStatus))
    }
    const onBlurHandler = (e: React.FocusEvent<HTMLSpanElement>) => {
        if (!clickSemaphore) {
            dispatch(setTemporaryProfileStatusAC(status))
            dispatch(setEditModeProfileStatusAC(false))
        }
        clickSemaphore = false
    }
    return (
        <div>
            {editRights ? (editMode ? <span><input autoFocus={true} onBlur={onBlurHandler} value={temporaryStatus}
                                                   onChange={onChangeHandler}/><button
                        onMouseDown={onClickHandler}>save</button></span> :
                    <span onDoubleClick={onDoubleClickHandler}>{status ? status : 'Status is empty...'}</span>) :
                <span>{status ? status : 'Status is empty...'}</span>
            }
        </div>
    );
};