import React, {Fragment, useEffect, useRef, useState} from 'react'
import AppBar from "@material-ui/core/AppBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Toolbar from "@material-ui/core/Toolbar"
import {Button, IconButton, List, makeStyles, SwipeableDrawer, useMediaQuery, useTheme} from "@material-ui/core"
import logo from '../../assets/logo.svg'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import {Link, withRouter} from "react-router-dom"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from '@material-ui/icons/Menu'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import EstimateButton from "./EstimateButton"
import Popper from "@material-ui/core/Popper"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import MenuList from "@material-ui/core/MenuList"
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
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.2em'
        }
    },
    logo: {
        height: '5em',
        [theme.breakpoints.down('md')]: {
            height: '4.4em'
        }
    },
    logoContainer: {
        padding: 0,
        '&: hover': {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        width: '30px',
        height: '30px'
    },
    drawerContainer: {
        marginLeft: 'auto'
    },
    drawerMenu: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white'
    },
    drawerEstimate: {
        backgroundColor: theme.palette.common.orange
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
        marginRight: '40px'
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        borderRadius: 0,
        color: 'white'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

const Header = ({location: {pathname}}) => {
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const anchorRef =  useRef(null)
    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [drawer, setDrawer] = useState(false)
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const handleChange = (event, value) => setValue(value)
    const handleClick = () => {
        setAnchorEl(() => anchorRef.current && anchorRef.current)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const menuOptions = [
        {name: 'Custom Software Development', link: '/customsoftware'},
        {name: 'iOS/Android App Development', link: '/mobileapps'},
        {name: 'Website Development', link: '/websites'}
    ]
    const routes = [
        {label: 'Home', link: '/'},
        {label: 'Services', link: '/services'},
        {label: 'The Revolution', link: '/revolution'},
        {label: 'About Us', link: '/about'},
        {label: 'Contact Us', link: '/contact'},
    ]
    useEffect(() => {
        switch (pathname) {
            case '/services': setValue(1); setSelectedIndex(-1); break
            case '/customsoftware': setValue(1); setSelectedIndex(0); break
            case '/mobileapps': setValue(1); setSelectedIndex(1); break
            case '/websites': setValue(1); setSelectedIndex(2); break
            case '/revolution': setValue(2); break
            case '/about': setValue(3); break
            case '/contact': setValue(4); break
            case '/estimate': setValue(5); break
            default: setValue(0)
        }
    }, [setValue, pathname])
    return (
        <Fragment>
            <ElevationScroll>
                <AppBar className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' className={classes.logoContainer}>
                            <img src={logo} className={classes.logo} alt="company logo"/>
                        </Button>
                        {matches
                            ? (<Fragment>
                            <Tabs value={value}  onChange={handleChange} className={classes.tabContainer}>
                                {
                                    routes.map((option, index) =>
                                        index === 1
                                            ? <Tab onMouseLeave={handleClose} ref={anchorRef} key={index} onMouseOver={handleClick} label={option.label} component={Link} to={option.link} className={classes.tab}/>
                                            : <Tab key={index} label={option.label} component={Link} to={option.link} className={classes.tab}/>
                                        )
                                }
                            </Tabs>
                                <EstimateButton extraClasses={classes.estimate}/>
                                <Popper
                                    placement='bottom-start' open={open} anchorEl={anchorEl || <span>test</span>} role={undefined} transition disablePortal>
                                    {({ TransitionProps }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: 'center top' }}
                                        >
                                            <Paper classes={{root: classes.menu}} onMouseLeave={handleClose}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        onMouseEnter={handleClick}
                                                        autoFocusItem={open} id="menu-list-grow"
                                                        style={{zIndex: 1302}}
                                                        elevation={0}>
                                                        {
                                                            menuOptions.map((option, index) => (
                                                                <MenuItem
                                                                    classes={{root: classes.menuItem}}
                                                                    key={option.name}
                                                                    onClick={() => {handleClose(); setValue(1); setSelectedIndex(index)}}
                                                                    component={Link} to={option.link}
                                                                    selected={index === selectedIndex && value === 1}>
                                                                    {option.name}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                        </Fragment>)
                            : (<Fragment>
                                <SwipeableDrawer
                                    onClose={() => setDrawer(false)}
                                    onOpen={() => setDrawer(true)} open={drawer}
                                    classes={{paper: classes.drawerMenu}}>
                                    <div className={classes.toolBarMargin}/>
                                    <List disablePadding>
                                        {
                                            routes.map((option, index) => (
                                                <ListItem divider key={index} selected={value === index} button onClick={() => setDrawer(false)} component={Link} to={option.link}>
                                                    <ListItemText className={classes.drawerItem} disableTypography>{option.label}</ListItemText>
                                                </ListItem>
                                            ))
                                        }
                                        <ListItem className={classes.drawerEstimate} selected={value === 5} button onClick={() => setDrawer(false)} component={Link} to='/estimate'>
                                            <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                                        </ListItem>
                                    </List>
                                </SwipeableDrawer>
                                <IconButton className={classes.drawerContainer} disableRipple onClick={() => setDrawer(!drawer)}>
                                    <MenuIcon className={classes.drawer}/>
                                </IconButton>
                            </Fragment>)
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </Fragment>
    )
}

export default withRouter(Header)

// <Menu  style={{zIndex: 1302}} elevation={0} classes={{paper: classes.menu}} open={open} anchorEl={anchorEl} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}>
// {
//     menuOptions.map((option, index) =>
//         <MenuItem
//             component={Link} to={option.link}
//             key={`${option.name} + ${index}`}
//             classes={{root: classes.menuItem}}
//             selected={index === selectedIndex && value === 1}
//             onClick={() => {handleClose(); setValue(1); setSelectedIndex(index)} }>
//             {option.name}
//         </MenuItem>
//     )
// }
// </Menu>