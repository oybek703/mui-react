import React from 'react'
import Grid from "@material-ui/core/Grid"
import {Container, makeStyles, Typography} from "@material-ui/core"
import backGround from '../../assets/background.jpg'
import mobileBackGround from '../../assets/mobileBackground.jpg'
import LearnButton from "./LearnButton"
import EstimateButton from "./EstimateButton"


const useStyles = makeStyles(theme => ({
    actionBlock: {
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '600px',
        color: 'white',
        marginTop: '3em',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${mobileBackGround})`,
            backgroundAttachment: 'inherit'
        }
    },
    actionEstimate: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '2em'
        }
    }
}))

const ActionCall = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.actionBlock} justify='space-around' alignItems='center'>
            <Container>
                <Grid container alignItems='center' justify='space-between'>
                    <Grid item>
                        <Typography gutterBottom variant='h3' color='primary'>
                            Simple Software. <br/>
                            Revolutionary Results.
                        </Typography>
                        <Typography gutterBottom variant='subtitle2'>
                            Take advantage of the 21st century.
                        </Typography>
                        <LearnButton link='/revolution'/>
                    </Grid>
                    <Grid item className={classes.actionEstimate}>
                        <EstimateButton/>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default ActionCall