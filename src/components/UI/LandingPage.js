import React, {Fragment} from 'react'
import animationData from '../../animations/landinganimation/data'
import Lottie from 'react-lottie'
import {Button, CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core"
import Service from "./Service"
import customSoftware from '../../assets/Custom Software Icon.svg'
import mobileIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import revolutionBackground from '../../assets/repeatingBackground.svg'
import Card from "@material-ui/core/Card"
import LearnButton from "./LearnButton"

const useStyles = makeStyles(theme => ( {
    estimate: {
        ...theme.typography.estimate,
        marginRight: 10,
        [theme.breakpoints.between('xs', 'md')]: {
            marginBottom: 10
        }
    },
    learnButton: {
        [theme.breakpoints.between('xs', 'md')]: {
            marginBottom: 10
        }
    },
    margin: {
        marginBottom: 20
    },
    revolution: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '500px'
    },
    text: {
        ...theme.typography.darkText
    },
    padding: {
        padding: '4em'
    }
}))

const LandingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const classes = useStyles()
    return (
        <Fragment>
            <Container>
                <Grid container direction='column' justify='center'>
                    <Grid item container justify='center' className={classes.margin}>
                        <Grid item container direction='column' sm alignItems='center'>
                            <Grid item>
                                <Typography gutterBottom align='center' variant='h3' color='primary'>Bringing West Coast Technology <br/> to the MidWest</Typography>
                            </Grid>
                            <Grid item container justify='center'>
                                <Button variant='contained' className={classes.estimate}>Free Estimate</Button>
                                <LearnButton extraClasses={classes.learnButton}/>
                            </Grid>
                        </Grid>
                        <Grid item sm>
                            <Lottie options={defaultOptions} width='80%' height='100%'/>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' className={classes.margin}>
                        <Grid item container spacing={2} justify='flex-start'>
                            <Service img={customSoftware}  title='Custom Software Development'
                                text='Save Time. Save Money. Save Energy.'
                                subtext=' Complete digital solutions, from investigation to celebration.'/>
                        </Grid>
                        <Grid item container spacing={2} justify='flex-end'>
                            <Service img={mobileIcon} title='Mobile Apps Development'
                            text='Extend Functionality. Extend Access. Increase Engagement.'
                            subtext='Integrate your web experience or create a standalone web app with either mobile platform.'/>
                        </Grid>
                        <Grid item container spacing={2} justify='flex-start'>
                            <Service img={websiteIcon} title='Websites Development'
                            text='Reach More. Discover More. Sell More'
                            subtext='Optimized for Search Engines, build for speed.'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid item container className={`${classes.margin} ${classes.revolution}`} justify='center' alignItems='center'>
                    <Card>
                        <CardContent className={classes.padding}>
                            <Typography variant='h4' gutterBottom align='center' color='primary'>The Revolution</Typography>
                            <Typography align='center' gutterBottom className={classes.text}>Visionary insights coupled with cutting-edge technology is a
                                recipe for revolution.</Typography>
                            <Grid container justify='center'>
                                <LearnButton/>
                            </Grid>
                        </CardContent>
                    </Card>
            </Grid>
        </Fragment>
    )
}

export default LandingPage