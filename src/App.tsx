import React from 'react';
import {Routes, Route} from "react-router-dom";
import Registration from "./pages/Registration";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import PrivateRoute from "./components/Common/PrivateRoute";
import Contacts from "./pages/Contacts";
import {CONTACTS_PAGE, LOGIN_PAGE, MAIN_PAGE, REGISTRATION_PAGE} from "./constants";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path={MAIN_PAGE} element={<Main/>}/>
                    <Route path={REGISTRATION_PAGE} element={<Registration/>}/>
                    <Route path={LOGIN_PAGE} element={<Login/>}/>
                    <Route path={CONTACTS_PAGE} element={
                        <PrivateRoute>
                            <Contacts/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
