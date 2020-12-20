import React, {Fragment} from 'react'
import {makeStyles, Typography, useMediaQuery} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import LearnButton from "./LearnButton"

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.common.blue,
        fontWeight: '500'
    },
    text: {
        ...theme.typography.darkText
    },
    marginBottom: {
        marginBottom: '1.5em'
    },
    marginLeft: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '1.5em'
        }
    }
}))

const Service = ({title, text, img, subtext, link}) => {
    const classes = useStyles()
    const matchXS = useMediaQuery(theme => theme.breakpoints.down('xs'))
    return (
        <Fragment>
            <Grid item className={classes.marginBottom}>
                <Typography align={matchXS ? 'center' : 'left'} variant='h4' className={classes.title}>{title}</Typography>
                <Typography align={matchXS ? 'center' : 'left'} gutterBottom variant='subtitle1' className={classes.text}>{text}</Typography>
                <Typography align={matchXS ? 'center' : 'left'} gutterBottom variant='subtitle2' className={classes.text}>{subtext}</Typography>
                <Grid item container justify={matchXS ? 'center' : 'flex-start'}>
                    <LearnButton link={link}/>
                </Grid>
            </Grid>
            <Grid item  className={`${classes.marginLeft} ${classes.marginBottom}`}>
                <img src={img} alt={`${title} logo`}/>
            </Grid>
        </Fragment>
    )
}

export default Service