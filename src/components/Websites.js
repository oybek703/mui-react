import React, {Fragment} from 'react'
import {Container, Hidden, IconButton, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import ActionCall from "./UI/ActionCall"
import BackArrow from "../assets/backArrow.svg"
import ForwardArrow from "../assets/forwardArrow.svg"
import analytics from '../assets/analytics.svg'
import ecommerce from '../assets/ecommerce.svg'
import outreach from '../assets/outreach.svg'
import seo from '../assets/seo.svg'

const useStyles = makeStyles(theme => ({
    marginTop: {
        marginTop: '2em'
    },
    darkText: {
        ...theme.typography.darkText
    },
    textWidth: {
        maxWidth: '20em'
    },
    marginLeft: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '2em'
        }
    }
}))

const Websites = () => {
    const classes = useStyles()
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        <Fragment>
            <Container>
                <Grid container className={classes.marginTop}>
                    <Grid item container xs={matchSM ? 1 : 2} justify='flex-start' alignItems='flex-start'>
                        <Hidden smDown>
                            <IconButton component={Link} to='/mobileapps'>
                                <img src={BackArrow} alt="previous tab"/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                    <Grid item xs={matchSM ? 10 : 6}>
                        <Typography variant={matchSM ? 'h4' : 'h3'} color='primary' gutterBottom>Website Development</Typography>
                        <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                            Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={matchSM ? 1 : 4} container justify='flex-end' alignItems='flex-start'>
                        <Hidden smDown>
                            <IconButton component={Link} to='/customsoftware'>
                                <img  src={ForwardArrow} alt="next tab"/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid container direction='column'>
                    <Grid item container justify={matchSM ? 'center' : 'flex-start'} alignItems='center'>
                        <Grid item>
                            <Typography gutterBottom align='center' color='primary' variant='h4'>Analytics</Typography>
                            <img src={analytics} alt="analytics"/>
                        </Grid>
                        <Grid item>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchSM ? 'center' : 'flex-end'} alignItems='center'>
                        <Grid item className={classes.marginTop}>
                            <Typography gutterBottom align='center' color='primary' variant='h4'>E-commerce</Typography>
                            <img src={ecommerce} alt="e-commerce"/>
                        </Grid>
                        <Grid item className={`${classes.marginTop} ${classes.marginLeft}`}>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                It’s no secret that people like to shop online.
                            </Typography>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchSM ? 'center' : 'flex-start'} alignItems='center'>
                        <Grid item className={classes.marginTop}>
                            <Typography gutterBottom align='center' color='primary' variant='h4'>Outreach</Typography>
                            <img src={outreach} alt="outreach"/>
                        </Grid>
                        <Grid item className={classes.marginTop}>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth} ${classes.marginLeft}`}>
                                Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchSM ? 'center' : 'flex-end'} alignItems='center'>
                        <Grid item className={classes.marginTop}>
                            <Typography gutterBottom align='center' color='primary' variant='h4'>
                                SEO
                            </Typography>
                            <img src={seo} alt="search engine optimization"/>
                        </Grid>
                        <Grid item className={`${classes.marginTop} ${classes.marginLeft}`}>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                How often have you ever been to the second page of Google results?
                            </Typography>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                If you’re like us, probably never.
                            </Typography>
                            <Typography align='center' className={`${classes.darkText} ${classes.textWidth}`}>
                                Customers don’t go there either, so we make sure your website is designed to end up on top.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <ActionCall/>
        </Fragment>
    )
}

export default Websites