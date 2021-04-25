import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'

const Body = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/menu"> <Menu></Menu> </Route>
                <Route exact path="/"> <Home></Home></Route>
                <Route exact path="/contact"> <Contact></Contact></Route>
                <Route exact path="/about"> <About></About></Route>
                <Redirect to="/" ><Home></Home></Redirect>

            </Switch>
        </div>
    )
}

export default Body
