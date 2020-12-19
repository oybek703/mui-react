import React from 'react'
import animationData from '../../animations/landinganimation/data'
import Lottie from 'react-lottie'
import {Button, Container, Grid, makeStyles, Typography} from "@material-ui/core"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import Service from "./Service"
import customSoftware from '../../assets/Custom Software Icon.svg'
import mobileIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => ( {
    estimate: {
        ...theme.typography.estimate,
        marginRight: 10,
        [theme.breakpoints.between('xs', 'md')]: {
            marginBottom: 10
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        [theme.breakpoints.between('xs', 'md')]: {
            marginBottom: 10
        }
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
        <Container>
            <Grid container direction='column' justify='center' spacing={5}>
                <Grid item container justify='center'>
                    <Grid item container direction='column' sm alignItems='center'>
                        <Grid item>
                            <Typography gutterBottom align='center' variant='h3' color='primary'>Bringing West Coast Technology <br/> to the MidWest</Typography>
                        </Grid>
                        <Grid item container justify='center'>
                            <Button variant='contained' className={classes.estimate}>Free Estimate</Button>
                            <Button variant='outlined' className={classes.learnButton}>Learn More<ArrowRightAltIcon fontSize='small'/></Button>
                        </Grid>
                    </Grid>
                    <Grid item sm>
                        <Lottie options={defaultOptions} width='80%' height='100%'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column' alignItems='center' spacing={3}>
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
    )
}

export default LandingPage