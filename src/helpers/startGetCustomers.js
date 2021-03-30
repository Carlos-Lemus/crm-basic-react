import { types } from "../types/types";

export const startGetCustomers = (customers, dispatch) => {

    customers = customers.docs.map(client => {
        return {
            id: client.id,
            ...client.data()
        }
    });

    dispatch({
        type: types.read,
        payload: customers
    })
    
    dispatch({
        type: types.filter,
        payload: customers
    })

    dispatch({
        type: types.loaded
    });
};