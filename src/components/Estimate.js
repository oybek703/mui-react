import React from 'react'
import {Container, makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Lottie from 'react-lottie'
import animationData from "../animations/estimateAnimation/data.json"

const useStyles = makeStyles(theme => ({
    marginBottom: {
        marginBottom: '2em'
    },
    estimateAnimation: {
        [theme.breakpoints.down('md')]: {
            maxWidth: '30em',
            maxHeight: '20em'
        }
    },
    marginTop: {
        marginTop: '1em'
    }
}))

const Estimate = () => {
    const classes = useStyles()
    const matchMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Container>
            <Grid className={classes.marginTop} container justify={matchMD ?  'center' : 'space-between'}>
                <Grid item lg={5}>
                    <Typography align={matchMD ? 'center' : 'left'} variant='h4' color='primary'>Estimate</Typography>
                    <Grid item container justify='center' className={classes.estimateAnimation}>
                        <Lottie options={defaultOptions} width='100%' height='100%'/>
                    </Grid>
                </Grid>
                <Grid item lg={7}>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Estimate