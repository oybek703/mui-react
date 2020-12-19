import React, {Fragment} from 'react'
import {makeStyles, Typography} from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import LearnButton from "./LearnButton"

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.common.blue,
        fontWeight: '500'
    },
    text: {
        ...theme.typography.darkText
    }
}))

const Service = ({title, text, img, subtext}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <Grid item>
                <Typography variant='h4' className={classes.title}>{title}</Typography>
                <Typography gutterBottom variant='subtitle1' className={classes.text}>{text}</Typography>
                <Typography gutterBottom variant='subtitle2' className={classes.text}>{subtext}</Typography>
                <LearnButton/>
            </Grid>
            <Grid item>
                <img src={img} alt={`${title} logo`}/>
            </Grid>
        </Fragment>
    )
}

export default Service