import React from 'react'
import {AffairType} from "./HW2";
import css from './Affairs.module.css'
import Button from './Button';

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

            <div className={css.body}>
                <div className={css.task}>{props.affair.name}</div>
                <div className={css.task}>{props.affair.priority}</div>
                <div><Button className={css.btnDeleted} children={'delete'} onClick={deleteCallback}/></div>
                {/*<button onClick={deleteCallback}>X</button>*/}
            </div>
        </div>
    )
}

export default Affair
