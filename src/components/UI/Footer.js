import React from 'react'
import {Hidden, makeStyles, Typography} from "@material-ui/core"
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        zIndex: 1302,
        position:'relative',
        [theme.breakpoints.down('md')]: {
            width: '20em'
        },
        [theme.breakpoints.down('sm')]: {
            width: '15em'
        }
    },
    footerGrid: {
        position:'absolute',
        zIndex: 10000
    },
    footerLink: {
        fontWeight: '700',
        fontFamily: 'Arial',
        fontSize: '.9rem',
        textDecoration: 'none',
        color: 'white',
        display: 'block',
        margin: '.8em 1em'
    },
    icon: {
        height: '2em',
        width: '2em'
    },
    socialIcons: {
        position:'relative',
        bottom: '2em',
        maxHeight: '.3em',
        right: '2em',
        zIndex: 10000
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Hidden smDown>
                <Grid className={classes.footerGrid} justify='center' container>
                    <Grid item>
                        <Typography component={Link} to='/' className={classes.footerLink}>Home</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.footerLink} component={Link} to='/services'>Services</Typography>
                        <Typography className={classes.footerLink} component={Link} to='/customsoftware'>Custom Software Development</Typography>
                        <Typography className={classes.footerLink} component={Link} to='/mobileapps'>Mobile App Development</Typography>
                        <Typography className={classes.footerLink} component={Link} to='/websites'>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        {
                            ['The Revolution', 'Vision', 'Technology', 'Process'].map((text, index) => (
                                <Typography key={index} className={classes.footerLink} component={Link} to='/revolution'>{text}</Typography>
                            ))
                        }
                    </Grid>
                    <Grid item>
                        {
                            ['About Us', 'History', 'Team'].map((text, index) => (
                                <Typography key={index} className={classes.footerLink} component={Link} to='/about'>{text}</Typography>
                            ))
                        }
                    </Grid>
                    <Grid item>
                        <Typography className={classes.footerLink} component={Link} to='/contact'>Contact Us</Typography>
                    </Grid>
                </Grid>
            </Hidden>
            <img src={footerAdornment} alt='black decorative logo' className={classes.adornment}/>
            <Grid container className={classes.socialIcons} justify='flex-end' spacing={1}>
                <Grid item className={classes.icon}
                      component='a' href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
                    <img src={facebook} alt="facebook icon" />
                </Grid>
                <Grid item className={classes.icon}
                      component='a' href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
                    <img src={twitter} alt="twitter icon" />
                </Grid>
                <Grid item className={classes.icon}
                      component='a' href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'>
                    <img src={instagram} alt="instagram icon" />
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer