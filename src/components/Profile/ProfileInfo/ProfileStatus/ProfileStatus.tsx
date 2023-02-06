import * as React from 'react';
import {useEffect, useState} from "react";
import {profileAPI} from "../../../../api/api";
import {useSelector} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

type Props = {
    profileId: string
};


export const ProfileStatus = (props: Props) => {
    const clientId = useSelector<StateType, (string | null)>(state => String(state.auth.id))
    let clickSemaphore = false
    const editRights = clientId === props.profileId
    const [status, setStatus] = useState('')
    const [temporaryStatus, setTemporaryStatus] = useState('')
    useEffect(() => {
        profileAPI.getProfileStatus(props.profileId).then(resp => {
            setStatus(resp.data)
            setTemporaryStatus(resp.data)
        })
    }, [])
    const [editMode, setEditMode] = useState<boolean>(false)
    debugger
    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemporaryStatus(e.currentTarget.value)
    }
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        clickSemaphore = true
        profileAPI.setProfileStatus(temporaryStatus).then((resp) => {
            setStatus(temporaryStatus)
            setEditMode(false)
        }).catch(error => {
            console.log(error)
        })
    }
    const onBlurHandler = (e: React.FocusEvent<HTMLSpanElement>) => {
        if (!clickSemaphore) {
            setTemporaryStatus(status)
            setEditMode(false)
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