import { types } from '../types/types';

export const clientReducer = (state = {}, action) => {
    switch (action.type) {
        case types.add:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }

        case types.read:
            return {
                ...state,
                customers: action.payload
            }

        case types.update:
            return {
                ...state,
                customers: state.customers.map(client => (
                    client.id === action.payload.id ?
                        action.payload
                        :
                        client
                ))
            }

        case types.delete:
            return {
                ...state,
                customers: state.customers.filter(client => client.id !== action.payload)
            }

        case types.setActiveClient:
            return {
                ...state,
                activeClient: action.payload
            }

        case types.clearActiveClient:
            return {
                ...state,
                activeClient: null
            }

        case types.filter:
            return {
                ...state,
                customersFilter: action.payload
            }

        case types.loading:
            return {
                ...state,
                loading: true
            }

        case types.loaded:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}
