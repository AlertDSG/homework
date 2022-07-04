export type initialStateType = {
    color: string
    text: string
}
const initState: initialStateType = {color: '', text: 'black'}

export const changeTheme = (state: initialStateType = initState, action: changeThemeAT | changeTextColorAT): initialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'CHANGE_TEXT_COLOR':
            return {
                ...state,
                text: action.color
            }
        default:
            return state
    }
}

export const changeThemeAC = (color: string) => ({type: 'CHANGE_COLOR', color}) as const// fix any
export type changeThemeAT = ReturnType<typeof changeThemeAC>
export const changeTextColorAC = (color: string) => ({type: 'CHANGE_TEXT_COLOR', color}) as const// fix any
export type changeTextColorAT = ReturnType<typeof changeTextColorAC>