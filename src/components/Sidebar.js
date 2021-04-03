import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ContextUI } from '../context/contextUI';
import { types } from '../types/types';

export const Sidebar = () => {

    const { stateUI: { deploy }, dispatchUI } = useContext(ContextUI);

    const classDeploySidebar = "sidebar__content animate__animated animate__fadeInLeft";
    const classCompactSidebar = "sidebar__compact-content animate__animated animate__slideInLeft";

    const handleClick = () => {

        if (deploy) {
            dispatchUI({
                type: types.compact
            });
        } else {
            dispatchUI({
                type: types.deploy
            });
        }

    }

    return (
        <aside className={deploy ? classDeploySidebar : classCompactSidebar}>

            <div className="sidebar__head p-1">
                {
                    deploy &&
                    <h4>Dashboard</h4>
                }

                <span onClick={handleClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </span>

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

                            {
                                deploy &&
                                <span>Records Customers</span>
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/form"
                            className="sidebar__btn p-5"
                            activeClassName="sidebar__active"
                        >
                            <div className="sidebar__pane-left"></div>

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>

                            {
                                deploy &&
                                <span>Add / Edit Client</span>
                            }
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}
