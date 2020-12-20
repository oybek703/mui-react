import React, {Fragment} from 'react'
import animationData from '../animations/landinganimation/data'
import Lottie from 'react-lottie'
import {CardContent, Container, Grid, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Service from "./UI/Service"
import customSoftware from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import Card from "@material-ui/core/Card"
import LearnButton from "./UI/LearnButton"
import ActionCall from "./UI/ActionCall"
import EstimateButton from "./UI/EstimateButton"

const useStyles = makeStyles(theme => ( {
    estimate: {
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
    marginBottom: {
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
    },
    infoBlock: {
        backgroundImage: `url(${infoBackground})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '500px',
        color: 'white'
    },
    infoLearnButton: {
        color: 'white',
        borderColor: 'white'
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
    const matchSM = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        <Fragment>
            <Container>
                <Grid container direction='column' justify='center'>
                    <Grid item container justify='center' className={classes.marginBottom}>
                        <Grid item container direction='column' sm alignItems='center'>
                            <Grid item>
                                <Typography gutterBottom align='center' variant='h3' color='primary'>Bringing West Coast Technology <br/> to the MidWest</Typography>
                            </Grid>
                            <Grid item container justify='center'>
                                <EstimateButton extraClasses={classes.estimate}/>
                                <LearnButton extraClasses={classes.learnButton} link='/services'/>
                            </Grid>
                        </Grid>
                        <Grid item sm>
                            <Lottie options={defaultOptions} width='80%' height='100%'/>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' alignItems='center' className={classes.marginBottom}>
                        <Grid item container spacing={4} className={classes.marginBottom} justify={matchSM ? 'center' : 'flex-start'}>
                            <Service img={customSoftware} link='/customsoftware'  title='Custom Software Development'
                                text='Save Time. Save Money. Save Energy.'
                                subtext=' Complete digital solutions, from investigation to celebration.'/>
                        </Grid>
                        <Grid item container spacing={4} className={classes.marginBottom} justify={matchSM ? 'center' : 'flex-end'}>
                            <Service img={mobileIcon} link='/mobileapps' title='iOS/Android App Development'
                            text='Extend Functionality. Extend Access. Increase Engagement.'
                            subtext='Integrate your web experience or create a standalone web app with either mobile platform.'/>
                        </Grid>
                        <Grid item container spacing={4} className={classes.marginBottom} justify={matchSM ? 'center' : 'flex-start'}>
                            <Service img={websiteIcon} link='/websites' title='Websites Development'
                            text='Reach More. Discover More. Sell More'
                            subtext='Optimized for Search Engines, build for speed.'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Grid item container className={`${classes.revolution}`} justify='center' alignItems='center'>
                    <Card>
                        <CardContent className={classes.padding}>
                            <Typography variant='h4' gutterBottom align='center' color='primary'>The Revolution</Typography>
                            <Typography align='center' gutterBottom className={classes.text}>Visionary insights coupled with cutting-edge technology is a
                                recipe for revolution. </Typography>
                            <Grid container justify='center'>
                                <LearnButton link='/revolution'/>
                            </Grid>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid container className={classes.infoBlock} alignItems='center'>
                <Container>
                    <Grid container justify='space-around' alignItems='center'>
                        <Grid item className={classes.marginBottom}>
                            <Typography gutterBottom variant={matchSM ? 'h5': 'h4'}>About Us</Typography>
                            <Typography gutterBottom variant='subtitle1'>Let's get personal.</Typography>
                            <LearnButton extraClasses={classes.infoLearnButton} link='/about'/>
                        </Grid>
                        <Grid item className={classes.marginBottom}>
                            <Typography gutterBottom variant={matchSM ? 'h5': 'h4'}>Contact Us</Typography>
                            <Typography gutterBottom variant='subtitle1'>Say hello. &#128075;</Typography>
                            <LearnButton extraClasses={classes.infoLearnButton} link='/contact'/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <ActionCall/>
        </Fragment>
    )
}

export default LandingPage