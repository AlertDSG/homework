import React, {useState} from 'react'
import {PATH} from "./Pages";
import {NavLink} from "react-router-dom";
import s from './Hw5.module.css'


function Header() {

    let [click, setClick] = useState<boolean>(false);
    const linksPage = click ? s.menu : s.none
    const onClickHandler = () => {
        setClick(!click)
    }
    return (
        <div>
            <div onClick={onClickHandler} className={s.arrow} title={'Click me!'}>
                &#9759;
            </div>
            <ul className={linksPage}>
                <li>
                    <NavLink to={PATH.PRE_JUNIOR} className={navData => navData.isActive ? s.active : s.item}>
                        Pre-junior
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? s.active : s.item}>
                        Junior
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR_PLUS} className={navData => navData.isActive ? s.active : s.item}>
                        Junior+
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
