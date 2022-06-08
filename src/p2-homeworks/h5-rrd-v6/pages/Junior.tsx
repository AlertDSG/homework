import React from 'react'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import s from "../../h8/HW8.module.css"
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {initialStateType} from "../../h10/bll/loadingReducer";
import preloader from "../../../Gear-0.2s-200px.svg";
import style from '../../h10/HW10.module.css'
import HW11 from "../../h11/HW11";

const Junior = () => {
    const status = useSelector<AppStoreType, initialStateType>(state => state.loading)
    const loading = status ? status.loading : false
    return (
        <div className={s.wrapper}>
            {loading

                ?

                <div className={style.preloaderBlock}>
                    <img src={preloader} alt="preloader"/>
                </div>

                :

                <div>
                    <HW7/>
                    <HW8/>
                    <HW9/>
                    <HW10/>
                    <HW11/>
                </div>


            }

        </div>
    )
}

export default Junior;