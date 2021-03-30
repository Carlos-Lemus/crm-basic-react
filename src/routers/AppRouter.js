import React, { useEffect, useReducer } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { CompactSiderbar } from "../components/sidebars/CompactSidebar";
import { AddScreen } from "../components/forms/AddScreen";
import { EditScreen } from "../components/forms/EditScreen";
import { RecordsScreen } from "../components/records/RecordsScreen";
import { Siderbar } from "../components/sidebars/Siderbar";
import { ContextClient } from "../context/contextClient";
import { getDocuments } from "../firebase/firestore-methods";
import { startGetCustomers } from "../helpers/startGetCustomers";
import { ContextSidebar } from "../context/contextSidebar";
import { clientReducer } from "../reducers/clientReducer";
import { sidebarReducer } from "../reducers/sidebarReducer";

export const AppRouter = () => {

    const [state, dispatch] = useReducer(clientReducer, {
        customers: [],
        customersFilter: [],
        activeClient: null,
        loading: true
    });

    const [stateSidebar, dispatchSidebar] = useReducer(sidebarReducer, {
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

                    <ContextSidebar.Provider value={{
                        stateSidebar, dispatchSidebar
                    }}>
                        {
                            stateSidebar.deploy ?
                                <Siderbar />
                                :
                                <CompactSiderbar />
                        }
                    </ContextSidebar.Provider>

                    <Switch>
                        <ContextClient.Provider value={{
                            state, dispatch
                        }}>

                            <Route exact path="/records/edit" component={EditScreen} />

                            <Route exact path="/records" component={RecordsScreen} />

                            <Route exact path="/add" component={AddScreen} />


                            <Redirect to="/records" />

                        </ContextClient.Provider>
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
