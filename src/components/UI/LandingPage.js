import React from 'react'
import animationData from '../../animations/landinganimation/data'
import Lottie from 'react-lottie'
import {Button, Grid, Hidden, makeStyles, Typography} from "@material-ui/core"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles(theme => ( {
    estimate: {
        ...theme.typography.estimate,
        marginRight: 10,
        [theme.breakpoints.between('xs', 'md')]: {
            marginBottom: 10
        }
    },
    learnButton: {
        borderRadius: 50,
        borderWidth: 1,
        color: theme.palette.common.blue,
        borderColor: theme.palette.common.blue,
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
        <Grid container justify='center' spacing={4}>
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
                <Lottie options={defaultOptions} width={400} height={300}/>
            </Grid>
        </Grid>
    )
}

export default LandingPage