import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        window.clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const addZero = (num: number) => num < 10 ? '0' + num : num

    const stringTime = date ? `${addZero(date?.getHours())} : ${addZero(date?.getMinutes())} : ${addZero(date?.getSeconds())}` : 'Click start' // fix with date
    const stringDate = date && `${addZero(date?.getDate())} - ${addZero(date?.getMonth() + 1)} - ${addZero(date?.getFullYear())}` // fix with date

    return (
        <div className={s.body}>
            <div
                onMouseEnter={date && onMouseEnter}
                onMouseLeave={date && onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton className={s.button} onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
