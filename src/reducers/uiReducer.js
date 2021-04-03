import { types } from '../types/types';

export const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case types.deploy:
            return {
                ...state,
                deploy: true
            }

        case types.compact:
            return {
                ...state,
                deploy: false
            }

        default:
            return state
    }
}
