import React, { useContext } from 'react';
import { ContextClient } from '../../context/contextClient';
import { RowTable } from './RowTable';

export const TableRows = () => {

    const { state } = useContext(ContextClient);

    const  {customersFilter} = state;

    return (
        <table className="mt-5 records__table shadow-box animate__animated animate__fadeIn">
                <tbody>

                    <tr>
                        <th className="p-1">Id</th>
                        <th className="p-1">First name</th>
                        <th className="p-1">Second Name</th>
                        <th className="p-1">Email</th>
                        <th className="p-1">Phone</th>
                        <th className="p-1">Actions</th>
                    </tr>

                    {
                        customersFilter.map(client => (
                            <RowTable key={client.id} {...client} />
                        ))
                    }
                </tbody>
            </table>

    )
}
