import React from 'react'
import { insert } from '../firebase/firestore-methods';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

export const AddScreen = () => {

    const history = useHistory();

    const [formValues, inputChangeValues, reset] = useForm({
        firstName: '',
        secondName: '',
        email: '',
        phone: ''
    });
    const {
        firstName,
        secondName,
        email,
        phone,
    } = formValues;

    const handleSubmit = async (event) => {
        event.preventDefault();

        await insert("customers", formValues);

        reset();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your client has been saved',
            showConfirmButton: false,
            timer: 1500
        });

        history.replace("/records");
    }

    const handleExitScreen = () => {
        history.replace("/records");
    }

    return (
        <main className="dashboard__content-main p-5">

            <button
                onClick={handleExitScreen}
                type="button"
                className="btn-flat exit-screen"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <h2 className="p-5">Add New Client</h2>

            <hr />

            <form onSubmit={handleSubmit} className="form__content mt-5 p-5 shadow-box animate__animated animate__fadeIn">
                <div className="form__group mt-5">
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={inputChangeValues}
                        className="form__control"
                        type="text"
                        placeholder="First name"
                    />
                </div>

                <div className="form__group mt-5">
                    <input
                        name="secondName"
                        value={secondName}
                        onChange={inputChangeValues}
                        className="form__control"
                        type="text"
                        placeholder="Second name"
                    />
                </div>

                <div className="form__group mt-5">
                    <input
                        name="email"
                        value={email}
                        onChange={inputChangeValues}
                        className="form__control"
                        type="email"
                        placeholder="Your email example
                        gmail.com" />
                </div>

                <div className="form__group mt-5">
                    <input
                        name="phone"
                        value={phone}
                        onChange={inputChangeValues}
                        className="form__control"
                        type="phone"
                        placeholder="Your phone"
                    />
                </div>

                <div className="form__group mt-5">
                    <button className="form__btn w-100 p-1">
                        Create New Client
                    </button>
                </div>

            </form>
        </main>
    )
}
