
export type initialStateType = {
    loading: boolean
} | null
const initState: initialStateType = null

export const loadingReducer = (state: initialStateType = initState, action: LoadingAT): initialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({type: 'CHANGE_STATUS', loading}) as const// fix any
export type LoadingAT = ReturnType<typeof loadingAC>