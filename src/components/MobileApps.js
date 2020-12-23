import React from 'react'
import {Container, Hidden, IconButton, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import Lottie from 'react-lottie'
import BackArrow from "../assets/backArrow.svg"
import ForwardArrow from "../assets/forwardArrow.svg"
import integrationAnimation from '../animations/integrationAnimation/data.json'

const useStyles = makeStyles(theme => ({
    darkText: {
        ...theme.typography.darkText
    },
    marginTop: {
        marginTop: '2em'
    },
    integrationIcon: {
        maxHeight: '60em',
        maxWidth: '10em'
    }
}))

const MobileApps = () => {
    const classes = useStyles()
    const integrationDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        <Container>
            <Grid container className={classes.marginTop}>
                <Grid item container xs={matchSM ? 1 : 2} justify='flex-start' alignItems='flex-start'>
                    <Hidden smDown>
                        <IconButton component={Link} to='/customsoftware'>
                            <img src={BackArrow} alt="previous tab"/>
                        </IconButton>
                    </Hidden>
                </Grid>
                <Grid item xs={matchSM ? 10 : 6}>
                    <Typography variant={matchSM ? 'h4' : 'h3'} color='primary' gutterBottom>iOS/Android App Development</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                        Mobile apps allow you to take your tools on the go.
                    </Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                        Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                    </Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} className={classes.darkText} paragraph>
                        Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                    </Typography>
                    <Typography className={classes.darkText} paragraph gutterBottom>
                        Convenience. Connection.
                    </Typography>
                </Grid>
                <Grid item xs={matchSM ? 1 : 4} container justify='flex-end' alignItems='flex-start'>
                    <Hidden smDown>
                        <IconButton component={Link} to='/websites'>
                            <img  src={ForwardArrow} alt="next tab"/>
                        </IconButton>
                    </Hidden>
                </Grid>
            </Grid>
            <Grid container alignItems='stretch'>
                <Grid item xs={12} sm={matchSM ? 3 : 4} className={classes.marginTop}>
                    <Typography align={matchSM ? 'center' : 'left'} variant={matchSM ? 'h5' : 'h4'} color='primary'>Integration</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} align={matchSM ? 'center' : 'left'} className={classes.darkText} paragraph>Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} align={matchSM ? 'center' : 'left'} className={classes.darkText} paragraph>This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.</Typography>
                </Grid>
                <Grid item xs={12} sm={matchSM ? 6 : 4}>
                    <Lottie options={integrationDefaultOptions} width='100%' height='100%'/>
                </Grid>
                <Grid item xs={12} sm={matchSM ? 3 : 4} className={classes.marginTop}>
                    <Typography align={matchSM ? 'center' : 'right'} variant={matchSM ? 'h5' : 'h4'} color='primary'>Simultaneous Platform Support</Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} align={matchSM ? 'center' : 'right'} className={classes.darkText} paragraph>
                        Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                    </Typography>
                    <Typography variant={matchSM ? 'subtitle2' : 'body1'} align={matchSM ? 'center' : 'right'} className={classes.darkText} paragraph>
                        This significantly reduces costs and creates a more unified brand experience across all devices.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MobileApps