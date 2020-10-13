import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Screens
import ContactView from './screens/ContactView'
import AboutUs from './screens/AboutUs'
import OurWork from './screens/OurWork'
import Manifesto from './screens/Manifesto'
import Home from './screens/Home'

function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/our-work" component={OurWork} />
            <Route path="/contact" component={ContactView} />
            <Route path="/manifesto" component={Manifesto} />
        </Switch>
    )
}

export default Routes