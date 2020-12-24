import React from 'react'
import Header from "./UI/Header"
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './UI/Theme'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Footer from "./UI/Footer"
import LandingPage from "./LandingPage"
import Services from "./Services"
import CustomSoftware from "./CustomSoftware"
import MobileApps from "./MobileApps"
import Websites from "./Websites"
import Revolution from "./Revolution"
import About from "./About"
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
             <Header/>
             <Switch>
                 <Route  exact path='/' component={LandingPage}/>
                 <Route  exact path='/services' component={Services}/>
                 <Route  exact path='/customsoftware' component={CustomSoftware}/>
                 <Route  exact path='/mobileapps' component={MobileApps}/>
                 <Route  exact path='/websites' component={Websites}/>
                 <Route  exact path='/revolution' component={Revolution}/>
                 <Route  exact path='/about' component={About}/>
                 <Route  exact path='/contact' component={() => <h1>Contact</h1>}/>
                 <Route  exact path='/estimate' component={() => <h1>Free Estimate</h1>}/>
             </Switch>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App