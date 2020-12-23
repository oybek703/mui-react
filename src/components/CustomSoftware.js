import React, {Fragment} from 'react'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import {Hidden, IconButton, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import {Link} from "react-router-dom"
import Lottie  from 'react-lottie'
import BackArrow from "../assets/backArrow.svg"
import ForwardArrow from "../assets/forwardArrow.svg"
import bulb from "../assets/bulb.svg"
import cash from "../assets/cash.svg"
import stopwatch from "../assets/stopwatch.svg"
import root from "../assets/root.svg"
import documentsAnimation from "../animations/documentsAnimation/data"
import scaleAnimation from "../animations/scaleAnimation/data.json"
import automationAnimation from "../animations/automationAnimation/data.json"
import UXAnimation from "../animations/uxAnimation/data"
import ActionCall from "./UI/ActionCall"


const useStyles = makeStyles(theme => ({
    darkText: {
        ...theme.typography.darkText
    },
    marginTop: {
        marginTop: '1em'
    },
    icons: {
        width: '3em',
        height: '4em',
        display: 'block',
        margin: '2em auto 8em',
        [theme.breakpoints.down('xs')]: {
            width: '4em',
            height: '4em',
            margin: '0.5em auto 2em'
        }
    },
    rootTree: {
        minWidth: '20em',
        minHeight: '20em',
        marginTop: '5em'
    }
}))

const CustomSoftware = () => {
    const documentsDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const scaleDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const automationDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const UXDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: UXAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const classes = useStyles()
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const matchXS = useMediaQuery(theme => theme.breakpoints.down('xs'))
    const matchMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    return (
        <Fragment>
            <Container>
                <Grid container className={classes.marginTop}>
                    <Grid item container xs={matchSM ? 1 : 2} justify='flex-start' alignItems='flex-start'>
                        <Hidden smDown>
                            <IconButton component={Link} to='/websites' disableRipple>
                                <img src={BackArrow} alt="previous tab"/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                    <Grid item xs={matchSM ? 10 : 6}>
                    <Typography variant={matchSM ? 'h4' : 'h3'} color='primary' gutterBottom>Custom Software Development</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
                        Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                    </Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                        Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                    </Typography>
                    <Typography className={classes.darkText} paragraph gutterBottom>
                        We create exactly what you what, exactly how you want it.
                    </Typography>
                </Grid>
                    <Grid item xs={matchSM ? 1 : 4} container justify='flex-end' alignItems='flex-start'>
                            <Hidden smDown>
                                <IconButton component={Link} to='/mobileapps'>
                                    <img  src={ForwardArrow} alt="next tab"/>
                                </IconButton>
                            </Hidden>
                        </Grid>
                </Grid>
                <Grid container direction={matchXS ? 'column': 'row'} justify='center' spacing={matchSM ? 2 : 6} className={classes.marginTop}>
                    <Grid item>
                        <Typography align='center' gutterBottom paragraph variant={matchXS ? 'h6' : 'h5'}  color='primary'>Save Energy</Typography>
                        <img src={bulb} className={classes.icons} alt="bulb icon"/>
                    </Grid>
                    <Grid item>
                        <Typography align='center' gutterBottom paragraph variant={matchXS ? 'h6' : 'h5'}  color='primary'>Save Time</Typography>
                        <img src={stopwatch} className={classes.icons} alt="stopwatch icon"/>
                    </Grid>
                    <Grid item>
                        <Typography align='center' gutterBottom paragraph variant={matchXS ? 'h6' : 'h5'}  color='primary'>Save Money</Typography>
                        <img src={cash} className={classes.icons} alt="cash icon"/>
                    </Grid>
                </Grid>
                <Container>
                    <Grid container className={classes.marginTop} direction={matchSM ? 'column' : 'row'}>
                    <Grid item lg={7} md={12} container>
                        <Grid item xs={12} lg={5} md={6}>
                            <Typography gutterBottom variant='h4' color='primary'>Digital Documents & Data</Typography>
                            <Typography className={classes.darkText} paragraph>Reduce Errors. Reduce Waste. Reduce Costs.</Typography>
                            <Typography className={classes.darkText} paragraph>Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.</Typography>
                            <Typography className={classes.darkText} paragraph>By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.</Typography>
                        </Grid>
                        <Grid item xs={12} lg={7} md={6}>
                            <Lottie options={documentsDefaultOptions} width='75%' height={matchMD ? '100%' : '70%'} />
                        </Grid>
                    </Grid>
                    <Grid item lg={5} md={12} container>
                        <Hidden mdDown>
                            <Grid item xs={12} lg={7} md={6}>
                                <Lottie options={scaleDefaultOptions} width='75%' height='75%' />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} lg={5} md={6}>
                            <Typography align={matchMD ? 'left' : 'right'} gutterBottom variant='h4' color='primary'>Scale</Typography>
                            <Typography paragraph align={matchMD ? 'left' : 'right'} className={classes.darkText}>
                                Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                        <Hidden lgUp>
                            <Grid item xs={12} lg={7} md={6}>
                                <Lottie options={scaleDefaultOptions} width='100%' height='100%' />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                </Container>
                <Grid container justify='center' direction='column' alignItems='center'>
                    <Grid item lg={8} xs={12} className={classes.rootTree}>
                        <img src={root} height='100%' width='100%' alt="tree with roots"/>
                    </Grid>
                    <Grid item className={classes.marginTop} lg={4} xs={12}>
                        <Typography align='center' variant='h5' gutterBottom paragraph color='primary'>Root-Cause Analysis</Typography>
                        <Typography align='center' className={classes.darkText} paragraph gutterBottom>Many problems are merely symptoms of larger, underlying issues.</Typography>
                        <Typography align='center' className={classes.darkText} gutterBottom paragraph>We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.</Typography>
                    </Grid>
                </Grid>
                <Container>
                    <Grid container className={classes.marginTop} direction={matchSM ? 'column' : 'row'}>
                        <Grid item lg={7} md={12} container>
                            <Grid item xs={12} lg={5} md={6}>
                                <Typography gutterBottom variant='h4' color='primary'>Automation</Typography>
                                <Typography className={classes.darkText} paragraph>Why waste time when you don’t have to?</Typography>
                                <Typography className={classes.darkText} paragraph>We can help you identify processes with time or event based actions which can now easily be automated.</Typography>
                                <Typography className={classes.darkText} paragraph> Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.</Typography>
                            </Grid>
                            <Grid item xs={12} lg={7} md={6}>
                                <Lottie options={automationDefaultOptions} width='100%' height={matchMD ? '100%' : '70%'} />
                            </Grid>
                        </Grid>
                        <Grid item lg={5} md={12} container>
                            <Hidden mdDown>
                                <Grid item xs={12} lg={7} md={6}>
                                    <Lottie options={UXDefaultOptions} width='100%' height='100%' />
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} lg={5} md={6}>
                                <Typography align={matchMD ? 'left' : 'right'} gutterBottom variant='h4' color='primary'>User Experience Design</Typography>
                                <Typography paragraph align={matchMD ? 'left' : 'right'} className={classes.darkText}>
                                    A good design that isn’t usable isn’t a good design.
                                </Typography>
                                <Typography paragraph align={matchMD ? 'left' : 'right'} className={classes.darkText}>
                                    So why are so many pieces of software complicated, confusing, and frustrating?
                                </Typography>
                                <Typography paragraph align={matchMD ? 'left' : 'right'} className={classes.darkText}>
                                    By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                            </Grid>
                            <Hidden lgUp>
                                <Grid item xs={12} lg={7} md={6}>
                                    <Lottie options={UXDefaultOptions} width='70%' height='100%' />
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <ActionCall/>
        </Fragment>
    )
}

export default CustomSoftware