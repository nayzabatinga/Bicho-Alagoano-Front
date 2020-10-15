import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import RegisterUser from './components/RegisterUser'
import RegisterPet from './components/RegisterPet'
import ListPet from './components/ListPet'
import Finish from './components/Finish'

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register/user/:role" component={RegisterUser}/>
                <Route path="/register/pet" component={RegisterPet}/>
                <Route path="/list/pet" component={ListPet}/>
                <Route path="/finish" component={Finish}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes