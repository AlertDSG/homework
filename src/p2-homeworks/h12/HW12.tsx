import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeTextColorAC, changeThemeAC} from "./changeTheme";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, {color:string, text:string}>(store => store.themeColor); // useSelector
    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTextColorAC(e.currentTarget.value))
        console.log(e.currentTarget.value)
    }

    return (
        <div className={s[theme.color]}>
            <hr/>
            <span className={s[theme.color + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div className={s.center}>
                <h2 style={{color: theme.text}}>Change background-color:
                    <SuperSelect options={themes}
                                 onChangeOption={onChangeCallback}
                                 className={s.select}
                    />
                </h2>

                <h3 style={{color: theme.text}}>Change text color: <input onChange={onChangeHandler} type="color"/></h3>
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
