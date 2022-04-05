import React from 'react'
import css from './Message.module.css'

type TypeMessage = {
    avatar: string
    name: string
    message: string
    time: string
}
export const Message = (props: TypeMessage) => {
    return (
        <div className={css.message}>
            <div className={css.imgBlock}></div>
            <img src={props.avatar} alt="avatar"/>
            <div className={css.content}>
                <div className={css.text}>
                    <h3>{props.name}</h3>
                    <h2>{props.message}</h2>
                </div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}


