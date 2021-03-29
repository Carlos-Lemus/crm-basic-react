import React, { useContext } from 'react';
import contextValue from '../context/context';
import { RowTable } from './RowTable';

export const TableRows = () => {

    const { state } = useContext(contextValue);

    const  {customers} = state;

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
                        customers.map(client => (
                            <RowTable key={client.id} {...client} />
                        ))
                    }
                </tbody>
            </table>

    )
}
