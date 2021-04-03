import React, { useEffect, useReducer } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { RecordsScreen } from "../components/records/RecordsScreen";
import { Sidebar } from "../components/Sidebar";
import { ContextClient } from "../context/contextClient";
import { getDocuments } from "../firebase/firestore-methods";
import { startGetCustomers } from "../helpers/startGetCustomers";
import { ContextUI } from "../context/contextUI";
import { clientReducer } from "../reducers/clientReducer";
import { uiReducer } from "../reducers/uiReducer";
import { FormScreen } from "../components/FormScreen";

export const AppRouter = () => {

    const [state, dispatch] = useReducer(clientReducer, {
        customers: [],
        customersFilter: [],
        activeClient: null,
        loading: true
    });

    const [stateUI, dispatchUI] = useReducer(uiReducer, {
        deploy: true
    })

    useEffect(() => {

        getDocuments("customers", customers => startGetCustomers(customers, dispatch));

    }, []);

    return (
        <Router>
            <div className="content-wrapper">
                <AppBar />

                <div className="dashboard__content">

                    <ContextUI.Provider value={{
                        stateUI, dispatchUI
                    }}>
                        <Sidebar />
                    </ContextUI.Provider>

                    <Switch>
                        <ContextClient.Provider value={{
                            state, dispatch
                        }}>

                            <Route exact path="/form" component={FormScreen} />

                            <Route exact path="/records" component={RecordsScreen} />

                            <Redirect to="/records" />

                        </ContextClient.Provider>
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
