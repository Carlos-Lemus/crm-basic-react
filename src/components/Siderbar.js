import React from 'react';
import { NavLink } from "react-router-dom";

export const Siderbar = () => {
    return (
        <aside className="sidebar__content">

            <div className="sidebar__head p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                <h4>Dashboard</h4>

            </div>

            <nav className="sidebar__navbar">
                <ul>
                    <li>
                        <NavLink
                            to="/records"
                            className="sidebar__btn p-5"
                            activeClassName="sidebar__active"
                        >
                            <div className="sidebar__pane-left"></div>

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>

                            Records Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add"
                            className="sidebar__btn p-5"
                            activeClassName="sidebar__active"
                        >
                            <div className="sidebar__pane-left"></div>

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Add Client
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}
