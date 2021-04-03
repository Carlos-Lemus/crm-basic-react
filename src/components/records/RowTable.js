import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { ContextClient } from '../../context/contextClient';
import { getDocument, remove } from '../../firebase/firestore-methods';
import { types } from '../../types/types';


export const RowTable = ({ id, firstName, secondName, email, phone }) => {

    const { dispatch } = useContext(ContextClient);

    const history = useHistory();

    const handleEdit = async () => {

        dispatch({
            type: types.loading
        });

        const client = await getDocument("customers", id);

        dispatch({
            type: types.setActiveClient,
            payload: {
                id: client.id,
                ...client.data()
            }
        });

        dispatch({
            type: types.loaded
        });

        history.replace(`/form`);
    }

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await remove("customers", id);

                dispatch({
                    type: types.delete,
                    payload: id
                });

            }
        })

    }


    return (
        <tr>
            <td className="p-1">{id}</td>
            <td className="p-1">{firstName}</td>
            <td className="p-1">{secondName}</td>
            <td className="p-1">{email}</td>
            <td className="p-1">{phone}</td>
            <td className="p-1 records__actions">
                <button
                    onClick={handleEdit}
                    type="button"
                    href="#none"
                    className="btn-flat btn-edit"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </button>

                <button
                    onClick={handleDelete}
                    type="button"
                    href="#none"
                    className="btn-flat btn-delete"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </td>
        </tr>
    )
}
