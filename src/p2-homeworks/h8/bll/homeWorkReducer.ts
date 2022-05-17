import {UsersType} from "../HW8";

type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}


export const homeWorkReducer = (state: UsersType, action: SortType | CheckType): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(s => s.age >= action.payload)
        }
        default:
            return state
    }
}