import React from 'react'
import {AffairType} from "./HW2";
import css from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType  // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={css.content}>
            <button onClick={deleteCallback}>X</button>
            <div className={css.body}>
                <div>{props.affair._id}</div>
                <div>{props.affair.name}</div>
                <div>{props.affair.priority}</div>
            </div>
        </div>
    )
}

export default Affair
