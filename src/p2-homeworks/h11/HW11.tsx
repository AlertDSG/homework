import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c8-SuperDoubleRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeValueNumberOne = (value: number) => {
        setValue1(value)
    }
    const changeValueNumberTwo = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    const values: Array<number> = [value1, value2]

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={changeValueNumberOne}
                    value={value1}
                    className={s.container}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.superDoubleRange}>
                <span className={s.span}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={changeValueNumberTwo}
                    values={values}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
