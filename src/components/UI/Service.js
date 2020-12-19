import React, {Fragment} from 'react'
import {Button, makeStyles, Typography} from "@material-ui/core"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.common.blue,
        fontWeight: '500'
    },
    learnButton: {
        ...theme.typography.learnButton
    },
    text: {
        color: "darkgrey"
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
                <Button variant='outlined' className={classes.learnButton}>Learn More<ArrowRightAltIcon fontSize='small'/></Button>
            </Grid>
            <Grid item>
                <img src={img} alt={`${title} logo`}/>
            </Grid>
        </Fragment>
    )
}

export default Service