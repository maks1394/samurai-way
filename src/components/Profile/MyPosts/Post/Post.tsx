import React from 'react';
import s from './Post.module.css'

export const Post = () => {
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor,
                    ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.
                    Proin blandit ac massa sed rhoncus
                </p>
            </div>
            <div className={s.card_body}>
                <button>Like</button>
                10 Likes
            </div>
        </div>
    );
}