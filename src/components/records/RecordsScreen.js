import React, { useContext, useEffect, useRef } from 'react'
import { ContextClient } from '../../context/contextClient';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { Spinner } from '../Spinner';
import { TableRows } from './TableRows';


export const RecordsScreen = () => {

    const { state, dispatch } = useContext(ContextClient);

    const [inputValue, inputChangeValue] = useForm({
        filter: '',
    });

    const { loading, customers, activeClient } = state;
    const { filter } = inputValue;

    const isActiveClient = useRef(activeClient);

    useEffect(() => {

        if(isActiveClient.current) {
            dispatch({
                type: types.clearActiveClient
            });
        }
    }, [dispatch]);

    const handleSubmit = event => {
        event.preventDefault();

        if (filter.trim() !== "") {
            const filterCustomers = customers.filter(client => 
                (client.firstName.trim().toLowerCase().includes(filter.toLowerCase()) || client.secondName.trim().toLowerCase().includes(filter.toLowerCase()))
            );

            dispatch({
                type: types.filter,
                payload: filterCustomers
            });
        } else {

            dispatch({
                type: types.filter,
                payload: customers
            });
        }
    }

    return (
        <main className="dashboard__content-main p-5">


            <h2 className="p-5">Records Customers</h2>

            <hr />

            <form className="records__search mt-5" onClick={handleSubmit}>

                <input
                    onChange={inputChangeValue}
                    name="filter"
                    value={filter}
                    type="text"
                    className="form__control"
                    placeholder="Search cliente here"
                />

                <button type="submit" className="btn-flat form__control-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>

            {
                loading ?
                    <Spinner />
                    :
                    <TableRows />
            }

        </main>
    )
}
