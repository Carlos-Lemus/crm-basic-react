import React from 'react'
import PropTypes from "prop-types";

export const Form = ({textBtn, handleSubmit, inputChangeValues, firstName, secondName, email, phone}) => {
    return (
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
                    placeholder="Email example@gmail.com" />
            </div>

            <div className="form__group mt-5">
                <input
                    name="phone"
                    value={phone}
                    onChange={inputChangeValues}
                    className="form__control"
                    type="phone"
                    placeholder="Phone"
                />
            </div>

            <div className="form__group mt-5">
                <button className="form__btn w-100 p-1">
                    {textBtn}
            </button>
            </div>

        </form>
    )
}

Form.propTypes = {
    textBtn: PropTypes.string.isRequired, 
    handleSubmit: PropTypes.func.isRequired, 
    inputChangeValues: PropTypes.func.isRequired, 
    firstName: PropTypes.string.isRequired, 
    secondName: PropTypes.string.isRequired, 
    email: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired
}