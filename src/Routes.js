import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/Home'
import Header from './common/header/index'

const Routes = () => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
        </>
    )
}

export default Routes;