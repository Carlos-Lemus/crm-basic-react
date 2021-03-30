import React, { useContext } from 'react'
import { Redirect, useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { update } from '../../firebase/firestore-methods';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
import { ContextClient } from '../../context/contextClient';
import { Form } from './Form';


export const EditScreen = () => {

    const { dispatch, state: { activeClient } } = useContext(ContextClient);

    const history = useHistory();
    
    const [formValues, inputChangeValues] = useForm(activeClient);

    if(!activeClient) {
        return<Redirect to="/records" />
    }

    const id = activeClient.id;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const client = { ...formValues };
        delete client.id;

        await update("customers", formValues, id);

        dispatch({
            type: types.update,
            payload: {
                id,
                ...formValues
            }
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your client has been saved',
            showConfirmButton: false,
            timer: 1500
        })

        history.replace("/records");
    }

    const handleExitScreen = () => {
        history.replace("/records");
    }

    return (
        <main className="dashboard__content-main p-5">

            <button 
                onClick={ handleExitScreen }
                type="button"
                className="btn-flat exit-screen"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <h2 className="p-5">Edit Client</h2>

            <hr />

            <Form textBtn="Update Client" handleSubmit={handleSubmit} inputChangeValues={inputChangeValues} {...formValues}  />
        </main>
    )
}
