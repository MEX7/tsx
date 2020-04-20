import * as constants from '../constants'

// interface 是类型，这里创建了两个类型


export interface IncermentEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncermentEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm():IncermentEnthusiasm{
    return{
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}