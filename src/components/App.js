import React from 'react'
import Header from "./UI/Header"
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './UI/Theme'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Footer from "./UI/Footer"
import LandingPage from "./LandingPage"
import Services from "./Services"
import CustomSoftware from "./CustomSoftware"
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
             <Header/>
             <Switch>
                 <Route  exact path='/' component={LandingPage}/>
                 <Route  exact path='/services' component={Services}/>
                 <Route  exact path='/customsoftware' component={CustomSoftware}/>
                 <Route  exact path='/mobileapps' component={() => <h1>Mobile App Development</h1>}/>
                 <Route  exact path='/websites' component={() => <h1>Website Development</h1>}/>
                 <Route  exact path='/revolution' component={() => <h1>Revolution</h1>}/>
                 <Route  exact path='/about' component={() => <h1>About</h1>}/>
                 <Route  exact path='/contact' component={() => <h1>Contact</h1>}/>
                 <Route  exact path='/estimate' component={() => <h1>Free Estimate</h1>}/>
             </Switch>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App