import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message:string;
    likesCount:number;
}
export const Post = (props:PostPropsType) => {
    return (
        <div className={s.card}>
            <div className={s.card_ava_name}>
                <img className={s.rounded_avatar}
                     src={'https://pbs.twimg.com/media/FckWa2RXoAAeDT1?format=jpg&name=large'}/>
                <h4>
                    Name <br/>
                    <span>22:00</span>
                </h4>
            </div>
            <div className={s.card_body}>
                <p>
                    {props.message}
                </p>
            </div>
            <div className={s.card_body}>
                <button>Like</button>
                {props.likesCount}
            </div>
        </div>
    );
}