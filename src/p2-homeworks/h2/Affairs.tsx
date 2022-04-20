import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import css from './Affairs.module.css'
import Button from "./Button";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value:FilterType)=>void
    deleteAffairCallback: (id: number)=>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={css.content}>

            {mappedAffairs}

            <div className={css.filter}>
                <Button className={props.filter === 'all' ? css.active : css.btnFilter}
                        onClick={setAll} children={'All'}/>
                <Button className={props.filter === 'high' ? css.active : css.btnFilter}
                        onClick={setHigh} children={'High'}/>
                <Button className={props.filter === 'middle' ? css.active : css.btnFilter}
                        onClick={setMiddle} children={'Middle'}/>
                <Button className={props.filter === 'low' ? css.active : css.btnFilter}
                        onClick={setLow} children={'Low'}/>
            </div>


            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
