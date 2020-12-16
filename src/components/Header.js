import React, {Fragment, useEffect, useState} from 'react'
import AppBar from "@material-ui/core/AppBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Toolbar from "@material-ui/core/Toolbar"
import {Button, makeStyles, Menu} from "@material-ui/core"
import logo from '../assets/logo.svg'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import {Link, withRouter} from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem"
function ElevationScroll(props) {
    const { children} = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    })
}

const useStyles = makeStyles(theme => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1em'
    },
    logo: {
        height: '5em'
    },
    logoContainer: {
        padding: 0,
        '&: hover': {
            backgroundColor: 'transparent'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10
    },
    estimate: {
        marginLeft: '40px',
        marginRight: '40px',
        fontFamily: 'Pacifico, Trebuchet MS, sans-serif',
        color: 'white',
        borderRadius: '50px',
        textTransform: 'none'
    }
}))

const Header = ({location: {pathname}}) => {
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const handleChange = (event, value) => setValue(value)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }
    useEffect(() => {
        switch (pathname) {
            case '/services':
            case '/customsoftware':
            case '/mobileapps':
            case '/websites':
                setValue(1); break
            case '/revolution': setValue(2); break
            case '/about': setValue(3); break
            case '/contact': setValue(4); break
            default: setValue(0)
        }
    }, [setValue, pathname])
    return (
        <Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' className={classes.logoContainer}>
                            <img src={logo} className={classes.logo} alt="company logo"/>
                        </Button>
                        <Tabs value={value} indicatorColor='secondary'  onChange={handleChange} className={classes.tabContainer}>
                            <Tab label='Home' component={Link} to='/' className={classes.tab}></Tab>
                            <Tab  onMouseOver={handleClick} label='Services' component={Link} to='/services' className={classes.tab}></Tab>
                            <Tab label='The Revolution' component={Link} to='/revolution' className={classes.tab}></Tab>
                            <Tab label='About Us' component={Link} to='/about' className={classes.tab}></Tab>
                            <Tab label='Contact Us' component={Link} to='/contact' className={classes.tab}></Tab>
                        </Tabs>
                        <Button variant='contained' color='secondary' className={classes.estimate}>Free Estimate</Button>
                    </Toolbar>
                    <Menu open={open} anchorEl={anchorEl} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}>
                        <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/services'>Services</MenuItem>
                        <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/customsoftware'>Custom Platform Development</MenuItem>
                        <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/mobileapps'>Mobile App Development</MenuItem>
                        <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to='/websites'>Website Development</MenuItem>
                    </Menu>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </Fragment>
    )
}

export default withRouter(Header)