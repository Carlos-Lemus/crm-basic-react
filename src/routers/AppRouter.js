import React, { useEffect, useReducer } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AddScreen } from "../components/AddScreen";
import { AppBar } from "../components/AppBar";
import { EditScreen } from "../components/EditScreen";
import { RecordsScreen } from "../components/RecordsScreen";
import { Siderbar } from "../components/Siderbar";
import ContextCompontent from "../context/context";
import { getDocuments } from "../firebase/firestore-methods";
import { reducer } from "../reducer/reducer";
import { types } from "../types/types";

export const AppRouter = () => {

    const [state, dispatch] = useReducer(reducer, {
        customers: [],
        activeClient: null,
        loading: true
    });

    const startGetCustomers = (customers) => {

        dispatch({
            type: types.read,
            payload: customers.docs.map(client => {
                return {
                    id: client.id,
                    ...client.data()
                }
            })
        })

        dispatch({
            type: types.loaded
        });
    }

    useEffect(() => {

        getDocuments("customers", customers => startGetCustomers(customers));

        
    }, []);

    return (
        <Router>
            <div className="content-wrapper">
                <AppBar />

                <div className="dashboard__content">

                    <Siderbar />

                    <Switch>
                        <ContextCompontent.Provider value={{
                            state, dispatch
                        }}>

                            <Route exact path="/records/edit" component={EditScreen} />

                            <Route exact path="/records" component={RecordsScreen} />

                            <Route exact path="/add" component={AddScreen} />


                            <Redirect to="/records" />

                        </ContextCompontent.Provider>
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
